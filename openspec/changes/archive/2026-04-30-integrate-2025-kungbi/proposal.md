# Change: integrate-2025-kungbi

## Why

`2026-0501 考前猜題-詳盡複習教材.md` v2.0 (2026-04-30) 整合了 `2025-OSCE共筆完稿0826/` 41 篇深度疾病/症狀 writeup 後，新增 9 張 P2/P3 卡（6.13 頭痛 / 6.14 黃疸 / 6.15 產檢 / 7.34 腎病腎炎 / 7.35 RA / 7.36 DM foot / 7.37 不孕 PCOS / 7.38 兒 URI 腸病毒 / 7.39 視力模糊）。

OSCE Machine web app 過去：
1. 缺乏這 9 個主題的對應 case
2. 既有 67 個 tier-classified case 內容未從共筆深化
3. 101 個 case 仍 `tier: null` — tier filter 看不到、整體覆蓋率不完整

本 change 一次處理三件事：把 9 張新卡 backfill 進 cases.js、把 101 null cases 全部分類到 P1/P2/P3、把 14 張高優先 P1+P2 case 用共筆內容深化。

## What Changes

### 1. 新增 9 個 case (`source: "kungbi"`, `kungbi-01` ~ `kungbi-09`)

對應 markdown 6.13-6.15 (P2 ×3) + 7.34-7.39 (P3 ×6)。

### 2. 升級 101 個 null tier cases

依 chiefComplaint + system 對應到 framework 中既有的 P1/P2/P3 主題或新 kungbi 卡。

| Before | After |
|---|---|
| P1 19 | **P1 26** (+7) |
| P2 15 | **P2 43** (+28：含 +3 新 kungbi P2 + 25 null upgrade) |
| P3 33 | **P3 108** (+75：含 +6 新 kungbi P3 + 69 null upgrade) |
| null 101 | **null 0** |

### 3. 內容深化 14 張高優先 case (77 bullets)

每個 case 的 history / pe / treatment / redFlags 陣列追加 5-6 個 `[共筆]` 前綴的 high-yield bullets。

涵蓋 P1：甲狀腺亢進、IDA、DKA、氣胸、HIVD、熱痙攣、VSD、SDH/TBI
涵蓋 P2：痛風、SLE、肝硬化、膽囊炎、羊膜穿刺、兒急性腹瀉

## Impact

### Affected specs
- `case-tier-classification` (擴充：tier 必填、source 命名空間擴充、enrichment 標籤)

### Affected code
- `cases.js` (177 cases - 增 9 + 全 168 升 tier + 14 enrich)
- `tools/new_kungbi_cases.json` (新)
- `tools/inject_kungbi_cases.py` (新)
- `tools/null_tier_upgrade_mapping.json` (新)
- `tools/apply_null_upgrades.py` (新)
- `tools/enrichment_patches.json` (新)
- `tools/apply_enrichment.py` (新)

### Backward compatibility
完全相容。Tier filter chips、case card badge、localStorage schema 全沿用既有設計，未動 UI / app.js / index.html。

### User-visible changes
- Header「177 例 / 531 卡」（從 168 / 504）
- 全部 case 都有 tier badge（之前 60% 沒 badge）
- P1/P2/P3 filter 涵蓋全題庫，不再有「全部」與三級總和不一致
- 14 張高優先 case 翻面後可看到 `[共筆]` 標籤的細節（藥物劑量、score 名稱、診斷 criteria）
