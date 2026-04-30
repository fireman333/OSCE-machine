# Tasks: integrate-2025-kungbi

## 1. Stage 1 — Inject 9 new kungbi cases

- [x] 1.1 Build `tools/new_kungbi_cases.json` with 9 cases (kungbi-01 ~ kungbi-09)
- [x] 1.2 Each case has full schema: id / source / tier / age / sex / department / system / chiefComplaint / vignette / history[] / pe[] / ddx[] / explanation[] / treatment[] / redFlags[]
- [x] 1.3 Write `tools/inject_kungbi_cases.py` (reuse `inject_new_cases.py` pattern)
- [x] 1.4 Dry-run + verify schema (no duplicate IDs, valid tier values)
- [x] 1.5 Apply (cases.js: 168 → 177)
- [x] 1.6 Run `verify_tier_schema.py` — pass

## 2. Stage 2 — Upgrade 101 null-tier cases

- [x] 2.1 Dump all null-tier cases via `node` script (id + dept + system + cc)
- [x] 2.2 Build `tools/null_tier_upgrade_mapping.json` — map each id to P1/P2/P3 with topic + matches reference
- [x] 2.3 Write `tools/apply_null_upgrades.py` — patches `tier: null,` → `tier: "PX",`
- [x] 2.4 Dry-run + apply (101 cases upgraded: P1 +7 / P2 +25 / P3 +69)
- [x] 2.5 Run `verify_tier_schema.py` — null = 0

## 3. Stage 3 — Enrich 14 high-priority cases

- [x] 3.1 Pick 8 P1 + 6 P2 cases with direct kungbi mapping
- [x] 3.2 Build `tools/enrichment_patches.json` — 5-6 bullets per case, distributed across history/pe/treatment/redFlags
- [x] 3.3 Each bullet prefixed `[共筆]` for traceability
- [x] 3.4 Write `tools/apply_enrichment.py` — APPEND only, never modify existing bullets
- [x] 3.5 Dry-run + apply (14 cases / 77 bullets appended)
- [x] 3.6 Run `verify_tier_schema.py` — pass; `node` parse cases.js — load successfully

## 4. Verification

- [x] 4.1 `python3 tools/verify_tier_schema.py` — All 177 cases valid; P1 26 / P2 43 / P3 108 / null 0
- [x] 4.2 `node` JS load — 177 cases load, no syntax error
- [x] 4.3 Browser preview reload — 177 例 / 531 卡 header correct, tier filter works, kungbi cases visible with badge, console 0 errors
- [x] 4.4 Sample case `114-45` 共筆 enrichment visible (history +2, treatment +3, redFlags +1)

## 5. Documentation

- [x] 5.1 Update `cases.js` header comment (133 → 177; 399 → 531)
- [x] 5.2 Write spec delta `specs/case-tier-classification/spec.md` — extend with kungbi source + 共筆 enrichment tag requirements
- [x] 5.3 OpenSpec proposal.md / design.md / tasks.md (this file)

## 6. Archive

- [x] 6.1 Run `openspec validate` — pass (strict mode also pass)
- [x] 6.2 Sync delta into main spec (`specs/case-tier-classification/spec.md` 107 → 178 lines)
- [x] 6.3 Move `changes/integrate-2025-kungbi/` → `changes/archive/integrate-2025-kungbi/`
