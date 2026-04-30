#!/usr/bin/env python3
"""
apply_enrichment.py — Append 共筆-derived bullets to existing case arrays
(history / pe / treatment / redFlags) per enrichment_patches.json.

Strategy: locate each case block by `id: "XXX",`, then for each `<field>: [`
opening, find the matching `]` and insert new bullets just before the closing
bracket. Pure APPEND — does not modify or reorder existing bullets.

Usage:
    python3 tools/apply_enrichment.py --dry-run
    python3 tools/apply_enrichment.py --apply
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CASES_JS = ROOT / "cases.js"
PATCHES = ROOT / "tools" / "enrichment_patches.json"

ARRAY_FIELDS = ("history", "pe", "ddx", "explanation", "treatment", "redFlags")
ADD_KEYS = {f"{f}_add": f for f in ARRAY_FIELDS}


def js_escape(s):
    return (s.replace("\\", "\\\\")
             .replace('"', '\\"')
             .replace("\n", "\\n"))


def find_case_block(content, case_id):
    """Find (start, end) char indices of the case object containing `id: "case_id"`.

    Walks balanced braces from the opening `{` of the case object.
    """
    pattern = rf'id:\s*"{re.escape(case_id)}",?'
    m = re.search(pattern, content)
    if not m:
        return None
    # Walk back to find opening `{`
    i = m.start()
    depth = 0
    open_idx = None
    while i >= 0:
        ch = content[i]
        if ch == "}":
            depth += 1
        elif ch == "{":
            if depth == 0:
                open_idx = i
                break
            depth -= 1
        i -= 1
    if open_idx is None:
        return None
    # Walk forward from open_idx to balanced close
    depth = 0
    j = open_idx
    while j < len(content):
        ch = content[j]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return (open_idx, j + 1)
        j += 1
    return None


def find_array_close(case_text, field):
    """Find the closing `]` of `<field>: [...]` within case_text.

    Returns (close_idx, indent) or None.
    """
    open_pat = re.compile(rf'^(\s+){re.escape(field)}:\s*\[\s*$', re.MULTILINE)
    m = open_pat.search(case_text)
    if not m:
        # Maybe inline empty array `field: [],`
        empty_pat = re.compile(rf'^(\s+){re.escape(field)}:\s*\[\s*\],?\s*$', re.MULTILINE)
        em = empty_pat.search(case_text)
        if em:
            # Replace `[]` with `[\n` + items + `\n  ]`
            return ("empty", em.start(), em.end(), em.group(1))
        return None
    indent = m.group(1)
    # Walk from end of open to find matching `]`
    i = m.end()
    depth = 1
    while i < len(case_text):
        ch = case_text[i]
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return ("filled", i, indent)
        i += 1
    return None


def patch_case(case_text, patch):
    """Apply field_add bullets to case_text. Returns new case_text + change count."""
    change_count = 0
    for add_key, field in ADD_KEYS.items():
        bullets = patch.get(add_key)
        if not bullets:
            continue
        info = find_array_close(case_text, field)
        if info is None:
            print(f"  [WARN] field {field} not found, skipping", file=sys.stderr)
            continue
        if info[0] == "empty":
            _, start, end, indent = info
            inner = ",\n".join(f'{indent}  "{js_escape(b)}"' for b in bullets)
            new_block = f"{indent}{field}: [\n{inner}\n{indent}],"
            case_text = case_text[:start] + new_block + case_text[end:]
            change_count += len(bullets)
        else:
            _, close_idx, indent = info
            # Find last non-whitespace char before `]` to determine if comma needed
            j = close_idx - 1
            while j > 0 and case_text[j] in " \n\t":
                j -= 1
            needs_leading_comma = case_text[j] != ","
            inner = ",\n".join(f'{indent}  "{js_escape(b)}"' for b in bullets)
            insert = ("," if needs_leading_comma else "") + "\n" + inner + "\n" + indent
            case_text = case_text[:close_idx] + insert + case_text[close_idx:]
            change_count += len(bullets)
    return case_text, change_count


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    if not args.apply and not args.dry_run:
        args.dry_run = True

    content = CASES_JS.read_text()
    patches = json.loads(PATCHES.read_text())["patches"]

    total_changes = 0
    cases_touched = 0
    misses = []

    # Process patches in REVERSE order of file position so indices stay valid as we edit
    # Easier: re-search after each patch. Simpler implementation: just apply iteratively.
    for patch in patches:
        cid = patch["id"]
        block = find_case_block(content, cid)
        if block is None:
            misses.append(cid)
            continue
        start, end = block
        case_text = content[start:end]
        new_case_text, n = patch_case(case_text, patch)
        if n > 0:
            content = content[:start] + new_case_text + content[end:]
            total_changes += n
            cases_touched += 1
            print(f"  [{cid}] +{n} bullets ({patch['topic']})")

    print()
    print(f"=== apply_enrichment.py stats ===")
    print(f"Patches in JSON:    {len(patches)}")
    print(f"Cases touched:      {cases_touched}")
    print(f"Bullets appended:   {total_changes}")
    if misses:
        print(f"[WARN] {len(misses)} case ids not found:", misses)

    if args.dry_run:
        print("\n[dry-run] No file written. Run with --apply.")
    else:
        CASES_JS.write_text(content)
        print(f"\n[apply] Wrote {CASES_JS}")


if __name__ == "__main__":
    main()
