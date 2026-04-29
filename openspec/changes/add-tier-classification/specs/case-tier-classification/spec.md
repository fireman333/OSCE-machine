## ADDED Requirements

### Requirement: Case data schema includes tier field

每個 case 物件 MUST 包含 `tier` 欄位，值為 `"P1"`、`"P2"`、`"P3"` 或 `null`。Tier 表示該 case 在 0501 OSCE 出題機率分層（P1 = 夯 / P2 = 頂級 / P3 = 人上人，依使用者 priority_levels.md 命名體系）。未分類 case 的 tier MUST 為 `null`，不 omit 欄位。

#### Scenario: 既有 case 加上 tier

- **WHEN** 既有 133 個 case 中對應到「2026-0501 考前猜題-詳盡複習教材.md」P1/P2/P3 主題的 case
- **THEN** 該 case 物件加上 `tier: "P1"`、`"P2"` 或 `"P3"`，依詳盡複習教材中該主題對應的 P 層

#### Scenario: 既有 case 未對應到 tier 主題

- **WHEN** case 沒有對應到詳盡複習教材的 33 個主題之一
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
- **THEN** id 用 `tier-NN` 命名空間（不續用 `2025-XX` 或 `remnote-XX` 編號）、source 設為 `"tier"`

---

### Requirement: UI 提供 tier filter chip group

`index.html` 的 filter bar MUST 新增一組 tier filter chip，與既有 source / department filter 並存（orthogonal dimension）。Chip group 包含「全部」、「夯」、「頂級」、「人上人」四個選項，預設選「全部」。

#### Scenario: 點擊 tier chip 過濾 case 列表

- **WHEN** 使用者點擊「夯」chip
- **THEN** case 列表只顯示 `tier === "P1"` 的 case；其他既有 filter（source / department / 未刷過）同時 active 時用 AND 邏輯

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

新增 tier filter state MUST 儲存在獨立 localStorage key（`osce_tier_filter`），不 mutate 既有 `osce_progress` schema。舊使用者打開更新版 OSCE Machine 時自評紀錄 MUST 完全保留。

#### Scenario: 舊使用者開啟新版

- **WHEN** localStorage 已有舊版 `osce_progress` 但無 `osce_tier_filter`
- **THEN** `osce_progress` 完整載入、tier filter 預設「全部」

#### Scenario: tier filter state 持久化

- **WHEN** 使用者切到「夯」並重新整理頁面
- **THEN** 載入後 tier filter 仍為「夯」

---

<!-- REMOVED Requirement: Source filter 顯示 "tier" source

Reason: index.html 既有 filter bar 沒有 source filter dropdown（只有 mode / dept / pool）。新增 source
filter UI 屬於 scope creep（與 tier classification 無直接關聯）。tier-NN case 的辨識性已透過：
(1) case card header 既有的 id badge 顯示 "tier-NN" prefix
(2) tier badge 顯示 P2/P3 顏色
這兩個機制已足夠識別「為 tier 分類補的 case」，不需新增 filter。

如未來確實需要按 source filter，再以獨立 change propose。
-->
