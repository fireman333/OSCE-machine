#!/usr/bin/env python3
"""
inject_new_cases.py — Inject 35 missing-topic cases from new_tier_cases.json
into cases.js (before the closing `];`).

Usage:
    python3 tools/inject_new_cases.py --dry-run
    python3 tools/inject_new_cases.py --apply
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CASES_JS = ROOT / "cases.js"
NEW_CASES = ROOT / "tools" / "new_tier_cases.json"


def js_escape(s):
    """Escape string for JS double-quoted literal."""
    return (s.replace("\\", "\\\\")
             .replace('"', '\\"')
             .replace("\n", "\\n"))


def array_to_js(items, indent=6):
    """Convert Python list of strings to JS array literal."""
    if not items:
        return "[]"
    pad = " " * indent
    inner = ",\n".join(f'{pad}"{js_escape(x)}"' for x in items)
    return "[\n" + inner + "\n" + " " * (indent - 2) + "]"


def case_to_js(case):
    """Convert one case dict to formatted JS object literal."""
    fields = [
        ("id", case["id"]),
        ("source", case["source"]),
        ("tier", case["tier"]),
        ("age", case["age"]),
        ("sex", case["sex"]),
        ("department", case["department"]),
        ("system", case["system"]),
        ("chiefComplaint", case["chiefComplaint"]),
        ("vignette", case["vignette"]),
    ]
    lines = ["  {"]
    for k, v in fields:
        if isinstance(v, int):
            lines.append(f"    {k}: {v},")
        elif v is None:
            lines.append(f"    {k}: null,")
        else:
            lines.append(f'    {k}: "{js_escape(str(v))}",')
    for arr_key in ["history", "pe", "ddx", "explanation", "treatment", "redFlags"]:
        arr = case.get(arr_key, [])
        lines.append(f"    {arr_key}: {array_to_js(arr, indent=6)},")
    # remove trailing comma on last field for cleanliness (optional, JS allows trailing)
    lines.append("  }")
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    if not args.apply and not args.dry_run:
        args.dry_run = True

    cases_content = CASES_JS.read_text()
    new_data = json.loads(NEW_CASES.read_text())
    new_cases = new_data["cases"]

    # Check for duplicate IDs
    existing_ids = set(re.findall(r'id:\s*"([^"]+)"', cases_content))
    new_ids = [c["id"] for c in new_cases]
    dupes = [nid for nid in new_ids if nid in existing_ids]
    if dupes:
        print(f"[FAIL] Duplicate IDs found: {dupes}", file=sys.stderr)
        sys.exit(1)

    # Find the closing `];` of the array
    # Pattern: last `}\n];` or `} \n ];`
    close_match = re.search(r'(\n\s*}\s*\n)(\];?\s*)$', cases_content)
    if not close_match:
        print("[FAIL] Couldn't find closing `];` of OSCE_CASES array", file=sys.stderr)
        sys.exit(1)

    insert_pos = close_match.start(2)  # position right before `];`
    last_brace_end = close_match.start(2)

    # Build the new cases JS block
    blocks = [case_to_js(c) for c in new_cases]
    # Each block ends with `}`, need comma before to chain to existing array
    # The last existing case ends with `}` then we need `,\n`+new+`,\n`+`...,\n`+`];`
    new_block = ",\n" + ",\n".join(blocks) + "\n"

    # Insert before `];`
    new_content = cases_content[:close_match.start(1)] + close_match.group(1).rstrip() + new_block + cases_content[insert_pos:]

    print(f"=== inject_new_cases.py stats ===")
    print(f"Existing cases (before):  {len(existing_ids)}")
    print(f"New cases to inject:      {len(new_cases)}")
    print(f"By tier:")
    tier_count = {}
    for c in new_cases:
        tier_count[c["tier"]] = tier_count.get(c["tier"], 0) + 1
    for t, n in sorted(tier_count.items()):
        print(f"  {t}: {n}")
    print(f"Expected total after:     {len(existing_ids) + len(new_cases)}")
    print(f"Duplicate IDs:            {len(dupes)}")
    print()

    if args.dry_run:
        print("[dry-run] No changes written. Run with --apply to inject.")
        # Show preview of first new case JS
        print("\n--- Preview (first new case JS) ---")
        print(blocks[0])
    else:
        CASES_JS.write_text(new_content)
        print(f"[apply] Wrote {CASES_JS}")


if __name__ == "__main__":
    main()
