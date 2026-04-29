## Why

OSCE 0501 考前複習已經把 33 個高頻主題依出題機率排成 P1（夯）/ P2（頂級）/ P3（人上人）三層（依使用者個人 priority 體系，見 `~/.claude/imports/priority_levels.md`）。但 OSCE Machine 目前的 case library 只能依 source（114 / 2025 / remnote）和 department（內 / 外 / 婦 / 兒 / 急）篩選，沒辦法直接「只刷夯題」或「按出題機率優先複習」。把 tier 分類加進 cases.js + UI filter，可以讓考前最後一週的複習力氣集中在 P1 主題、餘力翻 P2/P3，與第 4 輪寫好的詳盡複習教材完全對齊。

## What Changes

- **資料 schema**：每個 case 加 `tier` 欄位，值為 `"P1"` / `"P2"` / `"P3"` / `null`（未分類保留 null，不強制每個都標）
- **新增 missing cases**：詳盡複習教材中提到、但 cases.js 沒有對應的主題（HTN emergency / thyroid storm / DKA Sick day rules / 自發性氣胸完整版 / 異常子宮出血 fibroid / Kawasaki / 過敏性休克 / CO 中毒 / 蛇咬 / panic attack 等估計 10-15 個）建立新 case，依 cases.js 既有 schema（id 用 `tier-NN` 命名空間，e.g. `tier-01`、`tier-02`）
- **UI filter**：在 index.html filter bar 加一組 tier chip（夯 / 頂級 / 人上人 / 全部），與既有 source/department filter orthogonal 並存
- **UI display**：每張 case card 顯示 tier badge（顏色區分：P1 紅 / P2 橘 / P3 黃 / null 灰）
- **app.js filter logic**：`filterCases()` 加入 tier dimension
- **localStorage 不破壞**：tier filter state 加到既有 filter state 結構，不影響舊的自評紀錄

## Capabilities

### New Capabilities
- `case-tier-classification`: 為 OSCE case library 加上 P1/P2/P3 三層出題機率分類，支援用 tier 篩選 case、在 UI 顯示 tier badge

### Modified Capabilities
（無，本專案 `openspec/specs/` 目前為空，首次建立 spec）

## Impact

- **資料檔**：`cases.js`（既有 case 加 tier 欄位 + 新增 ~10-15 個 missing topic case）
- **前端**：`index.html`（filter bar 新增 tier chip group）+ `app.js`（filter logic + badge render）
- **無 API / 後端**：純前端純資料變更
- **無依賴變更**：不引入新 library
- **localStorage 相容**：舊的自評紀錄繼續可用，新 tier filter state 是 additive
- **OSCE 0501 對齊**：33 個 tier 標籤對應 `2026-0501 考前猜題-詳盡複習教材.md` 的 P1/P2/P3 結構，tier 改動會同步反映該文件
