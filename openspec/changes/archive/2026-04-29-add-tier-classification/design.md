## Context

OSCE Machine 是個人 OSCE 複習工具（vanilla HTML/CSS/JS、無 build step、Tailwind via CDN、GitHub Pages 託管）。資料 model：133 個 case 全部存在 `cases.js` 一個 JS 檔內 `window.OSCE_CASES` 陣列，每個 case 物件 12-13 個欄位（id / source / age / sex / department / system / chiefComplaint / vignette / history[] / pe[] / ddx[] / explanation[] / treatment[] / redFlags[]）。`app.js` 負責 filter / render / localStorage 自評。

前 4 輪會話建立的 0501 考前猜題詳盡複習教材已產出 33 個主題的 tier 分類（P1 8 / P2 12 / P3 13）。使用者要把這個 tier 結構回饋到 OSCE Machine，讓考前複習可以「按 tier 篩選」而不是只能依 source / department。

## Goals / Non-Goals

**Goals:**
- 為現有 case + 新增 missing case 加 `tier` 欄位（"P1" / "P2" / "P3" / null）
- UI 加 tier filter chip group（夯 / 頂級 / 人上人 / 全部），與現有 filter 並存
- Case card 顯示 tier badge（顏色區分）
- 沒對應到 33 主題的舊 case `tier: null`（不強制每個都標）
- 不破壞既有 localStorage 自評紀錄、不破壞既有 source/department filter

**Non-Goals:**
- 不改 case 內容（history / pe / ddx 等不動）
- 不改 mode tab（history / pe / ddx 翻面卡邏輯不動）
- 不加新前端框架（保持 vanilla JS）
- 不做後端 / API（純前端純資料）
- 不做 tier mapping 自動推導（每個 case 的 tier 是 manual 標的，依詳盡複習教材的 33 主題對齊）
- 不重做既有 source `2025` / `114` / `remnote` 的命名（新 case id 用 `tier-NN` 命名空間避撞）

## Decisions

### D1: tier 值用字串 "P1" / "P2" / "P3" / null（不用數字）

**選了**：字串 `"P1"` / `"P2"` / `"P3"` / `null`
**沒選**：數字 1/2/3、enum integer
**理由**：(1) 與使用者 priority_levels.md 命名一致（P1/P2/P3 是該體系的 canonical key）(2) 字串 search/filter 邏輯比 number 直觀 (3) null 明確表「未分類」、不混淆 0/false (4) JSON serialize friendly。
**Trade-off**：字串比較稍慢但 133 cases 規模不重要。

### D2: tier 是 orthogonal filter，不是 source 替代

**選了**：tier 與 source 並存，使用者可同時用兩維度（e.g., source="2025" + tier="P1"）
**沒選**：把 tier 當 source 第四選項
**理由**：(1) source 表「題目來源」，tier 表「出題機率」，語意不同 (2) 33 個 P1/P2/P3 主題分散在 114 / 2025 / remnote 三個 source，硬塞進 source 會破壞既有分類。
**Trade-off**：UI 多一行 filter chip。

### D3: missing topic 新 case 用 `tier-01`、`tier-02` ... 命名空間

**選了**：新 case `id: "tier-01"` ... `id: "tier-15"`
**沒選**：歸到 `remnote-XX` 接續編號 / `2025-XX` 接續
**理由**：(1) 明確標示「這些 case 是為了補 tier 分類的高頻主題而加的」便於日後 audit (2) 不汙染既有 source 的編號連續性 (3) source 欄位填 `"tier"`，filter 時可選。
**Trade-off**：source 多一個 value `"tier"`，UI 要決定要不要在 source filter 顯示這個 source。預設顯示。

### D4: tier badge UI = 圓形 chip + 顏色 + 文字

**選了**：在 case card 右上角放圓形 chip，P1 紅 / P2 橘 / P3 黃 / null 不顯示
**沒選**：只用文字、只用顏色、用 emoji
**理由**：(1) 顏色一眼可掃 (2) 文字 fallback 給色盲與列印 (3) null 不顯示避免 noise。Tailwind 既有 `bg-red-500 / bg-orange-500 / bg-yellow-400` 直接用、不引新 class。
**Trade-off**：色盲使用者依賴文字（已包含）。

### D5: tier filter 預設「全部」

**選了**：載入時 tier filter 預設 `"all"`，不過濾
**沒選**：預設 P1（強迫先看夯題）
**理由**：保留使用者既有 workflow，filter 是 opt-in 不是 opt-out。
**Trade-off**：考前夯複習要使用者主動點 P1，但這是好事（明確意圖）。

### D6: tier mapping 用詳盡複習教材的 33 主題作為 source of truth

**選了**：把 `2026-0501 考前猜題-詳盡複習教材.md` 中每個 P1/P2/P3 主題對應的 OSCE Machine case_id（已在每張卡的「OSCE Machine」欄位列出）作為 mapping 依據；沒有對應 case 的主題新建 `tier-XX` case
**沒選**：自動演算法（依 chief complaint 字串 match 分類）
**理由**：(1) 詳盡複習教材的 mapping 已經人工 review 過 (2) 33 主題對應的 case_id 多數已存在於 cases.js（前 4 輪建檔時抓過）(3) 自動 match 容易誤判（例：「心悸」可能是 hyperthyroidism / perimenopause / panic attack 三種 tier）。
**Trade-off**：未來新增主題要 manual 標 tier，但反正使用者本來就會持續 update。

## Risks / Trade-offs

- **Risk**：cases.js 是大檔（430 KB），手動編輯多個 case 易出 syntax error → **Mitigation**：用 Python script `tools/apply_tier.py` 一次性 patch（read JSON-like AST → modify → write back）+ 跑 `node -e "require('./cases.js')"` syntax check
- **Risk**：使用者前 4 輪詳盡複習教材的 case_id 引用如果有錯（前面 Explore agent 抓的 mapping 不一定 100% 正確）→ **Mitigation**：實作前先 grep cases.js 對 33 主題逐一 verify chiefComplaint match，不對的就 reassign / 改新建 case
- **Risk**：localStorage 自評紀錄 schema 變化破壞舊使用者資料 → **Mitigation**：tier filter state 是新 key（e.g., `osce_tier_filter`），不動既有 `osce_progress` schema
- **Risk**：UI 上 tier filter chip + source chip + department chip 共三組，行動裝置擠 → **Mitigation**：filter bar `flex-wrap` 自動換行；窄螢幕 collapse 進「篩選」menu（後續 nice-to-have，本次不做）
- **Trade-off**：Curator 標 tier 是 manual labor（33 主題＋新建 ~10-15 case 等於約 50 個 case 要動），但這是一次性成本，後續維護輕

## Migration Plan

1. **Snapshot**：本次變更前 `git status` confirm clean、必要時 git stash
2. **Backward compat**：tier 是 additive field、舊 case 沒 tier 直接繼續 work（render code 用 `case.tier ?? null` 處理）
3. **Rollback**：若 UI 出問題、`git revert` 即可；資料變更 commit 與 UI 變更 commit 分開、可 partial revert

## Open Questions

- **Q1**：「夯/頂級/人上人」的 UI label 要不要包英文 "P1 (夯)" 形式？或純中文 "夯"？
  - **預設**：純中文 "夯/頂級/人上人"（與使用者體系一致），tooltip 顯示 P1/P2/P3 對照
  - 留給 specs 階段確認
- **Q2**：missing topic 新 case 要不要在第一輪做完整 case content（history/pe/ddx/treatment 全寫），還是先放 stub 只標 tier、後續 user 自己補？
  - **預設**：寫完整 case content（依詳盡複習教材的 8 欄資訊抽取）—— 本來就有資料、不要浪費
  - 留給 specs 階段確認
- **Q3**：tier source `"tier"` 要不要在 source filter dropdown 顯示？
  - **預設**：顯示，與 114 / 2025 / remnote 並列
