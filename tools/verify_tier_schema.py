#!/usr/bin/env python3
"""
verify_tier_schema.py — Assert every case in cases.js has a `tier` field with
allowed values ("P1" / "P2" / "P3" / null).

Exits 0 on success, 1 on first violation.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CASES_JS = ROOT / "cases.js"

ALLOWED = {'"P1"', '"P2"', '"P3"', "null"}


def main():
    content = CASES_JS.read_text()
    lines = content.split("\n")

    case_id_re = re.compile(r'^\s+id:\s*"([^"]+)",?\s*$')
    tier_re = re.compile(r'^\s+tier:\s*([^,\s]+),?\s*$')

    cases_with_tier = []
    cases_missing_tier = []

    current_id = None
    found_tier_for_current = False

    for line in lines:
        m_id = case_id_re.match(line)
        if m_id:
            # Closing previous case scan
            if current_id and not found_tier_for_current:
                cases_missing_tier.append(current_id)
            current_id = m_id.group(1)
            found_tier_for_current = False
            continue
        m_t = tier_re.match(line)
        if m_t and current_id and not found_tier_for_current:
            value = m_t.group(1)
            if value not in ALLOWED:
                print(f"[FAIL] case {current_id}: tier value {value} not in {ALLOWED}", file=sys.stderr)
                sys.exit(1)
            cases_with_tier.append((current_id, value))
            found_tier_for_current = True

    # Final case
    if current_id and not found_tier_for_current:
        cases_missing_tier.append(current_id)

    if cases_missing_tier:
        print(f"[FAIL] {len(cases_missing_tier)} cases missing tier field:", file=sys.stderr)
        for cid in cases_missing_tier[:10]:
            print(f"  - {cid}", file=sys.stderr)
        sys.exit(1)

    # Tally by tier
    tally = {"P1": 0, "P2": 0, "P3": 0, "null": 0}
    for _, v in cases_with_tier:
        tally[v.strip('"') if v != "null" else "null"] += 1

    print(f"[OK] All {len(cases_with_tier)} cases have valid tier field.")
    print(f"  P1: {tally['P1']}")
    print(f"  P2: {tally['P2']}")
    print(f"  P3: {tally['P3']}")
    print(f"  null: {tally['null']}")
    sys.exit(0)


if __name__ == "__main__":
    main()
