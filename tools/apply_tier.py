#!/usr/bin/env python3
"""
apply_tier.py — Add `tier` field to existing cases in cases.js based on tier_mapping.json.

Usage:
    python3 tools/apply_tier.py --dry-run   # show stats only
    python3 tools/apply_tier.py --apply     # write changes back to cases.js
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CASES_JS = ROOT / "cases.js"
MAPPING = ROOT / "tools" / "tier_mapping.json"


def load_mapping():
    with open(MAPPING) as f:
        m = json.load(f)
    # Build dict: case_id → tier (P1 / P2 / P3)
    # Only `primary` (and `secondary` for completeness) gets tagged
    id_to_tier = {}
    for tier_key in ["P1", "P2", "P3"]:
        for entry in m[tier_key]:
            if entry["status"] == "match":
                id_to_tier[entry["primary"]] = tier_key
                # Tag secondary too (they're related cases for the same topic)
                for sid in entry.get("secondary", []):
                    if sid not in id_to_tier:
                        id_to_tier[sid] = tier_key
    return id_to_tier


def patch_cases_js(dry_run=True):
    content = CASES_JS.read_text()
    id_to_tier = load_mapping()

    # Find all case id lines and check whether they already have tier
    # Pattern: case object opens with `{`, has `id: "XXX"` line, ends with `}`.
    # We insert `tier: "PX",` after the `id:` line if not already present.

    case_id_re = re.compile(r'^(\s+)id:\s*"([^"]+)",?\s*$', re.MULTILINE)

    # Track stats
    stats = {
        "total_cases": 0,
        "already_has_tier": 0,
        "added_p1": 0,
        "added_p2": 0,
        "added_p3": 0,
        "added_null": 0,
    }

    output_lines = []
    lines = content.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i]
        m = case_id_re.match(line)
        if m:
            indent = m.group(1)
            cid = m.group(2)
            stats["total_cases"] += 1

            # Look ahead a few lines to check if `tier:` already exists in this case
            # Heuristic: until we hit the next `id:` or the end of array, check for `tier:`
            already_has = False
            lookahead_end = i + 1
            depth = 0
            while lookahead_end < len(lines):
                la = lines[lookahead_end]
                if re.match(r'^\s+id:\s*"', la) and lookahead_end != i:
                    break
                if re.match(r'^\s*tier:\s*', la):
                    already_has = True
                    break
                lookahead_end += 1

            output_lines.append(line)

            if already_has:
                stats["already_has_tier"] += 1
            else:
                tier = id_to_tier.get(cid)
                if tier == "P1":
                    output_lines.append(f'{indent}tier: "P1",')
                    stats["added_p1"] += 1
                elif tier == "P2":
                    output_lines.append(f'{indent}tier: "P2",')
                    stats["added_p2"] += 1
                elif tier == "P3":
                    output_lines.append(f'{indent}tier: "P3",')
                    stats["added_p3"] += 1
                else:
                    output_lines.append(f'{indent}tier: null,')
                    stats["added_null"] += 1
        else:
            output_lines.append(line)
        i += 1

    new_content = "\n".join(output_lines)

    print("=== apply_tier.py stats ===")
    print(f"Total cases scanned:    {stats['total_cases']}")
    print(f"Already has tier field: {stats['already_has_tier']}")
    print(f"Added tier=P1:          {stats['added_p1']}")
    print(f"Added tier=P2:          {stats['added_p2']}")
    print(f"Added tier=P3:          {stats['added_p3']}")
    print(f"Added tier=null:        {stats['added_null']}")
    print()

    if dry_run:
        print("[dry-run] No changes written. Run with --apply to write.")
    else:
        CASES_JS.write_text(new_content)
        print(f"[apply] Wrote {CASES_JS}")

    return stats


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="write changes")
    parser.add_argument("--dry-run", action="store_true", help="preview only")
    args = parser.parse_args()
    if not args.apply and not args.dry_run:
        args.dry_run = True
    patch_cases_js(dry_run=not args.apply)
