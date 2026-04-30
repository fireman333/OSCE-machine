# Case Tier Classification

## Purpose

OSCE Machine 提供出題機率分層（P1 = 夯 / P2 = 頂級 / P3 = 人上人）讓使用者考前複習可以依「機率優先」篩選 case，與既有的 source / department / mode / pool filter 並存（orthogonal）。Tier 分類依 `2026-0501 考前猜題-詳盡複習教材.md` 的人工策劃 mapping，不自動推導；無對應主題的 case `tier: null`、不顯示 badge、不被 tier filter 抓到。

P1/P2/P3 命名遵循使用者 priority 體系（`~/.claude/imports/priority_levels.md`）。

## Requirements

### Requirement: Case data schema includes tier field

每個 case 物件 MUST 包含 `tier` 欄位，值為 `"P1"`、`"P2"`、`"P3"` 或 `null`。Tier 表示該 case 在 0501 OSCE 出題機率分層（P1 = 夯 / P2 = 頂級 / P3 = 人上人，依使用者 priority_levels.md 命名體系）。未分類 case 的 tier MUST 為 `null`，不 omit 欄位。

#### Scenario: 既有 case 加上 tier

- **WHEN** 既有 case 中對應到「2026-0501 考前猜題-詳盡複習教材.md」P1/P2/P3 主題的 case
- **THEN** 該 case 物件加上 `tier: "P1"`、`"P2"` 或 `"P3"`，依詳盡複習教材中該主題對應的 P 層

#### Scenario: 既有 case 未對應到 tier 主題

- **WHEN** case 沒有對應到詳盡複習教材的主題之一
- **THEN** 該 case 物件加上 `tier: null`，不 omit 欄位

#### Scenario: tier 值非合法

- **WHEN** case 的 tier 不是 `"P1"` / `"P2"` / `"P3"` / `null` 之一
- **THEN** filter 與 render 邏輯 MUST 把它視同 `null`（不顯示 badge、不被 tier filter 抓到）

---

### Requirement: 新增 missing topic case

對於詳盡複習教材中提到但 cases.js 沒有對應 case 的主題，MUST 新增 case 物件，使用 `id: "tier-NN"` 命名空間（NN 從 01 開始 zero-padded）、`source: "tier"`，內容依詳盡複習教材該主題的 8 欄資料（情境、必問病史、必做 PE、DDx、病情解釋核心句、衛教、紅旗、case_id+2025 對應）填入 cases.js 既有 schema 對應欄位。

#### Scenario: missing topic 的 case 內容完整

- **WHEN** 新增 `tier-NN` case
- **THEN** 該 case 包含完整的 history[]（≥ 4 項）、pe[]（≥ 4 項）、ddx[]（≥ 3 項）、explanation[]（≥ 3 項）、treatment[]（≥ 3 項）、redFlags[]（≥ 1 項）、age、sex、department、system、chiefComplaint、vignette

#### Scenario: missing topic 不汙染既有 source 編號

- **WHEN** 新增 `tier-NN` case
- **THEN** id 用 `tier-NN` 命名空間（不續用 `2025-XX` 或 `RM-XX` 編號）、source 設為 `"tier"`

---

### Requirement: UI 提供 tier filter chip group

`index.html` 的 filter bar MUST 新增一組 tier filter chip，與既有 mode / dept / pool filter 並存（orthogonal dimension）。Chip group 包含「全部」、「夯」、「頂級」、「人上人」四個選項，預設選「全部」。

#### Scenario: 點擊 tier chip 過濾 case 列表

- **WHEN** 使用者點擊「夯」chip
- **THEN** case 列表只顯示 `tier === "P1"` 的 case；其他既有 filter（mode / dept / pool）同時 active 時用 AND 邏輯

#### Scenario: 點擊「全部」清除 tier filter

- **WHEN** 使用者點擊「全部」chip
- **THEN** tier filter 不再過濾、所有既有 filter 通過的 case 都顯示

#### Scenario: tier filter 與其他 filter 並存

- **WHEN** tier filter = "夯" 且 department filter = "內" 同時 active
- **THEN** 列表只顯示 `tier === "P1" && department === "內"` 的 case

---

### Requirement: Case card 顯示 tier badge

每張 case card MUST 在右上角顯示 tier badge（顏色 chip + 文字），P1 紅、P2 橘、P3 黃。`tier === null` 的 case 不顯示 badge。

#### Scenario: P1 case 顯示紅色 badge

- **WHEN** 渲染 `tier === "P1"` 的 case card
- **THEN** card 右上角顯示紅色 chip 含文字「夯」

#### Scenario: P2 case 顯示橘色 badge

- **WHEN** 渲染 `tier === "P2"` 的 case card
- **THEN** card 右上角顯示橘色 chip 含文字「頂級」

#### Scenario: P3 case 顯示黃色 badge

- **WHEN** 渲染 `tier === "P3"` 的 case card
- **THEN** card 右上角顯示黃色 chip 含文字「人上人」

#### Scenario: tier null 不顯示 badge

- **WHEN** 渲染 `tier === null` 或無 tier 欄位的 case card
- **THEN** card 不顯示 tier badge

---

### Requirement: localStorage backward compatibility

新增 tier filter state MUST 儲存在獨立 localStorage key（`osce_tier_filter`），不 mutate 既有 `osce-progress-v1` schema。舊使用者打開更新版 OSCE Machine 時自評紀錄 MUST 完全保留。

#### Scenario: 舊使用者開啟新版

- **WHEN** localStorage 已有舊版 `osce-progress-v1` 但無 `osce_tier_filter`
- **THEN** `osce-progress-v1` 完整載入、tier filter 預設「全部」

#### Scenario: tier filter state 持久化

- **WHEN** 使用者切到「夯」並重新整理頁面
- **THEN** 載入後 tier filter 仍為「夯」

### Requirement: kungbi source 命名空間

對於從 `2025-OSCE共筆完稿0826/` directory 衍生的新增 case，MUST 使用 `id: "kungbi-NN"` 命名空間（NN 從 01 開始 zero-padded）+ `source: "kungbi"`，與既有 `114-*` / `2025-*` / `RM-*` / `tier-*` 區隔。

#### Scenario: 共筆衍生 case 命名

- **WHEN** 從 2025 共筆某篇 markdown 衍生新增 case
- **THEN** `id` MUST 為 `kungbi-NN` 格式，`source` MUST 為 `"kungbi"`

#### Scenario: 內容映射到詳盡複習教材

- **WHEN** 新增 kungbi case
- **THEN** 該 case 必須對應到 `2026-0501 考前猜題-詳盡複習教材.md` 中明確編號的 P2 / P3 卡（例如 6.13 / 7.34 等），mapping 顯式記錄於 `tools/new_kungbi_cases.json` 的 `_meta.card_mapping` 欄位

---

### Requirement: 共筆 enrichment tag

從 2025 共筆 backfill 進既有 case 的 array bullets MUST 以 `[共筆]` prefix 開頭，與原本人工策劃的 bullets 區分。Enrichment 操作 MUST 為 append-only — 不修改、不重排、不刪除既有 bullets。

#### Scenario: 共筆來源 bullet 加標籤

- **WHEN** 從共筆 markdown 抽取 high-yield 內容追加進 case 的 history / pe / treatment / redFlags array
- **THEN** 該 bullet 字串開頭 MUST 為 `[共筆]`（含中括號與空白）

#### Scenario: Append-only 不破壞原有 bullet

- **WHEN** 對既有 case 進行 enrichment
- **THEN** 既有 bullets 順序與內容 MUST 完全不變；新 bullets 一律附加在 array 末尾

#### Scenario: Rollback 路徑

- **WHEN** 需要回退某次 enrichment
- **THEN** 可用 `grep '"[共筆]'` 找到所有 enrichment bullets 移除而不影響原始 case 內容

---

### Requirement: Tier 分布完整覆蓋

cases.js 中所有 case MUST 有非 null 的 tier 值（`P1` / `P2` / `P3`）。Null tier 在 stage 「integrate-2025-kungbi」change 後不再保留。

#### Scenario: 全題庫覆蓋

- **WHEN** 執行 `python3 tools/verify_tier_schema.py`
- **THEN** 報告中 null 計數 MUST 為 0

#### Scenario: 新增 case 不可遺漏 tier

- **WHEN** 未來透過 `inject_*_cases.py` 注入新 case
- **THEN** 每個新 case 物件 MUST 在 JSON 階段就指定 `tier` 為 `P1` / `P2` / `P3` 之一，不允許 `null`

---

### Requirement: 三階段 pipeline 工具

cases.js 變更 MUST 透過 `tools/` 中的腳本進行，不允許直接手動編輯 cases.js（單純 typo / 註解修正例外）。三類變更各有獨立工具：

| 變更類型 | 工具 | Config |
|---|---|---|
| 注入新 case | `tools/inject_<source>_cases.py` | `tools/new_<source>_cases.json` |
| 升級 / 修改 tier | `tools/apply_*_upgrades.py` | `tools/*_mapping.json` |
| Append bullets | `tools/apply_enrichment.py` | `tools/enrichment_patches.json` |

每個 script MUST 支援 `--dry-run`（顯示 stats、不寫檔）與 `--apply`（寫檔）兩個 mode。

#### Scenario: 新批次 case 的注入

- **WHEN** 未來新增來自其他來源（例如 2026 年新考古題）的 case
- **THEN** 應用 `tools/inject_<source>_cases.py` 同 pattern 寫新 script + JSON config，不直接編輯 cases.js

