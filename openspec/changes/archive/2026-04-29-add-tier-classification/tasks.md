## 1. Tier mapping audit

- [x] 1.1 從 `2026-0501 考前猜題-詳盡複習教材.md` 抽出 33 個主題每個主題對應的 case_id（OSCE Machine 欄位）
- [x] 1.2 在 `cases.js` 中 grep verify 每個 case_id 的 `chiefComplaint` 是否與詳盡複習教材該主題情境一致；不一致的標 mismatch 待重 assign
- [x] 1.3 列出沒有對應 case 的 missing topic（預期 ~10-15 個），對齊 design.md 的估算
- [x] 1.4 產出 mapping table：`{ tier: "P1"|"P2"|"P3", topic: <name>, case_id: <existing>|<new tier-NN>, status: "match"|"new"|"mismatch" }`
- [x] 1.5 把 mapping table 存到 `tools/tier_mapping.json` 作為 build artifact + audit trail

## 2. Schema migration script

- [x] 2.1 在 `tools/` 建立 `apply_tier.py` 腳本：讀 `cases.js` → parse 為 JSON 陣列 → 依 `tier_mapping.json` 對既有 case 加 `tier` 欄位（沒對到的填 `null`）→ 寫回 `cases.js` 保留原 JS module wrapping
- [x] 2.2 對腳本做 dry-run：輸出「待修改 case 數量 / 既有 source 分布 / tier 分布」總表，使用者確認再實跑
- [x] 2.3 跑 `node -e "var window={}; require('./cases.js'); console.log(window.OSCE_CASES.length)"` syntax check（預期 133 + new tier-NN）
- [x] 2.4 寫 unit-style assertion script `tools/verify_tier_schema.py`：驗證每個 case 都有 tier 欄位（值 "P1" / "P2" / "P3" / null 之一）

## 3. Missing topic case 新增

- [x] 3.1 對 mapping table 中 status="new" 的每個 missing topic，依詳盡複習教材的 8 欄資料 draft 一個 cases.js 格式的 case 物件（id `tier-NN`、source `"tier"`、age/sex 依情境、history/pe/ddx/explanation/treatment/redFlags 全填）
- [x] 3.2 把 draft 集中到 `tools/new_tier_cases.json`，使用者 review 內容後合併進 cases.js
- [x] 3.3 確認 id 編號連續無撞號（grep 既有 `tier-` prefix 預期為 0）
- [x] 3.4 重跑 verify_tier_schema 確認 schema OK

## 4. App.js filter logic

- [x] 4.1 在 `app.js` 的 filter state 結構新增 `tierFilter: "all" | "P1" | "P2" | "P3"`，預設 `"all"`
- [x] 4.2 在 `filterCases()` 中加入 tier dimension 邏輯：tierFilter === "all" → pass；其他 → `case.tier === tierFilter`
- [x] 4.3 確保 tier filter 與既有 source / department / 未刷過 filter 用 AND 邏輯組合
- [x] 4.4 tier filter state 持久化到 localStorage key `osce_tier_filter`，載入時 read back
- [x] 4.5 既有 source filter dropdown options 加入 `"tier"` 選項 — **DROPPED**（index.html 無 source filter UI，新增屬 scope creep；spec 已同步移除）

## 5. Index.html UI

- [x] 5.1 在 filter bar 新增一組 tier filter chip group：「全部」、「夯」、「頂級」、「人上人」四個 button，class 用既有 chip styling 一致
- [x] 5.2 chip group 用 `flex-wrap` 確保行動裝置不擠破版
- [x] 5.3 Active chip 視覺強調（依既有 active state CSS）
- [x] 5.4 點擊 chip 觸發 app.js 的 setTierFilter()，同步 state + 重 render

## 6. Case card UI badge

- [x] 6.1 在 `app.js` 的 case card render template 加 tier badge 元素：right-top absolute positioning、Tailwind class（P1 `bg-red-500 text-white`、P2 `bg-orange-500 text-white`、P3 `bg-yellow-400 text-gray-900`）+ 文字「夯」/「頂級」/「人上人」
- [x] 6.2 `tier === null` 不 render badge 元素（不留空白）
- [x] 6.3 確保 badge 不擋到既有 mode tab / 翻面卡 control
- [x] 6.4 在 dark mode（如有）badge 顏色仍可辨識

## 7. Verify

- [x] 7.1 在本地用 `python3 -m http.server 8000` 開啟、瀏覽器測試：tier filter 切換、source / department 並存 filter、card badge 顯示、localStorage 持久化
- [x] 7.2 對 33 個主題逐一抽檢：點主題對應 case → 看到正確 tier badge + chiefComplaint 與詳盡複習教材一致
- [x] 7.3 跑 `/verify` 全套（OSCE Machine 是 web app → Chrome MCP 自動化）
- [x] 7.4 跑 `/simplify` 確認沒過度設計
- [x] 7.5 跑 `/opsx:verify` 確認 OpenSpec 三維度（completeness / correctness / coherence）

## 8. Archive prep

- [x] 8.1 確認 `2026-0501 考前猜題-詳盡複習教材.md` 中的 OSCE Machine case_id 引用與 cases.js 實際 tier mapping 一致；不一致則修詳盡複習教材
- [x] 8.2 準備 git commit message（中英對照）描述 schema migration + UI add，分兩個 commit（資料 commit / UI commit）便於 partial revert
- [x] 8.3 等待使用者明確指示再 commit + push（依 Curator rule：never auto commit）
