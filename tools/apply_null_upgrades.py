#!/usr/bin/env python3
"""
apply_null_upgrades.py — Upgrade null-tier cases to P1/P2/P3 based on
null_tier_upgrade_mapping.json. Each case's `tier: null,` line is replaced with
the appropriate `tier: "PX",`.

Usage:
    python3 tools/apply_null_upgrades.py --dry-run
    python3 tools/apply_null_upgrades.py --apply
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CASES_JS = ROOT / "cases.js"
MAPPING = ROOT / "tools" / "null_tier_upgrade_mapping.json"


def load_upgrades():
    """id → tier dict from upgrade mapping."""
    m = json.loads(MAPPING.read_text())
    out = {}
    for tier_key in ["P1", "P2", "P3"]:
        for entry in m["upgrades"][tier_key]:
            out[entry["id"]] = tier_key
    return out


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    if not args.apply and not args.dry_run:
        args.dry_run = True

    upgrades = load_upgrades()
    content = CASES_JS.read_text()
    lines = content.split("\n")

    case_id_re = re.compile(r'^\s+id:\s*"([^"]+)",?\s*$')
    tier_null_re = re.compile(r'^(\s+)tier:\s*null,\s*$')

    changes = []
    out_lines = []
    current_id = None

    for line in lines:
        m_id = case_id_re.match(line)
        if m_id:
            current_id = m_id.group(1)
            out_lines.append(line)
            continue
        m_tn = tier_null_re.match(line)
        if m_tn and current_id and current_id in upgrades:
            indent = m_tn.group(1)
            new_tier = upgrades[current_id]
            new_line = f'{indent}tier: "{new_tier}",'
            out_lines.append(new_line)
            changes.append((current_id, new_tier))
            continue
        out_lines.append(line)

    print(f"=== apply_null_upgrades.py stats ===")
    print(f"Mapping entries:   {len(upgrades)}")
    print(f"Cases upgraded:    {len(changes)}")
    by_tier = {}
    for _, t in changes:
        by_tier[t] = by_tier.get(t, 0) + 1
    for t in ("P1", "P2", "P3"):
        print(f"  {t}: {by_tier.get(t, 0)}")

    missed = [cid for cid in upgrades if cid not in [c for c, _ in changes]]
    if missed:
        print(f"\n[WARN] {len(missed)} mapping ids not found in cases.js or already non-null:")
        for cid in missed:
            print(f"  - {cid}")

    if args.dry_run:
        print("\n[dry-run] No changes written. Run with --apply.")
    else:
        new_content = "\n".join(out_lines)
        CASES_JS.write_text(new_content)
        print(f"\n[apply] Wrote {CASES_JS}")


if __name__ == "__main__":
    main()
