# OSCE 刷題機 (OSCE Machine) Spec

_Created: 2026-04-19_
_Updated: 2026-04-19_

## Goal

給臺灣醫學生的 OSCE 考前複習刷題機 web app（純前端 / GitHub Pages / 免登入）。
133 個 SP vignette × 3 mode（重點問診 / 理學檢查 / 病情解釋）= 399 張刷題卡，含自評 + 弱點專練 + localStorage 進度追蹤。

## Constraints

- **Stack**：vanilla HTML/CSS/JS，**無 build step**；Tailwind via CDN
- **部署**：GitHub Pages，repo = `https://github.com/fireman333/OSCE-machine`，已 live
- **資料層**：`cases.js` 全域變數 `window.OSCE_CASES`（避免 file:// CORS）
- **進度層**：`localStorage["osce-progress-v1"]`，**內部 mode key 保留 `ddx`**（向後相容；UI label 已改「病情解釋」）
- **內容層**：依 `~/.claude/skills/osce-answer/SKILL.md` 框架（LQQOPERA + 內外敏藥住個家 / IPPA / pathophys + 處置衛教）
- **語言**：UI 繁體中文；醫學名詞依 CLAUDE.md format（`English（中文）`，後續純英文）
- **相容性**：手機 + 桌機（mobile-first RWD）

## Acceptance criteria

- [x] 133 cases × 3 mode 卡片可瀏覽 + 翻面 + 自評
- [x] 重點問診模式翻面顯示 history checklist + DDx
- [x] 理學檢查模式翻面顯示 PE checklist
- [x] 病情解釋模式翻面顯示 explanation + treatment（無 DDx）
- [x] Mode tab 在同一 case 內可切換三模式
- [x] 進度 / 弱點專練 / 未刷過 / 科別 / 隨機 全部 functional
- [x] **133 cases 內容全部依 osce-answer 框架重寫完成**
- [ ] 線上 deployment rebuild 成功 + hard refresh 可看到新內容

## Current status

_Updated: 2026-04-19_

- **Done**:
  - 程式碼層：`app.js` mode tab、`renderBack` 三模式分流、`index.html` dropdown label「病情解釋」
  - 工具層：`tools/chunk_cases.py` 切 14 chunks + `tools/merge_rewrite.py` 讀 14 chunks
  - **內容重寫**：133 cases 全部依 osce-answer 框架重寫完成（14 chunks × 8-10 cases，分 4 批 launch subagent，全數成功回傳）
  - Merge 完成：cases.js 291,807 bytes，所有 case 保留 ddx + redFlags，history/pe/explanation/treatment 全更新
  - UI 驗證：Claude Preview screenshot 確認三 mode 在 114-01 都正常 render
- **In progress**: 無
- **Blocked**: 無
- **Next**:
  1. git commit + push `app.js cases.js index.html tools/ spec.md`
  2. `gh api repos/fireman333/OSCE-machine/pages/builds/latest` 確認 Pages rebuild

## Decision log

- 2026-04-19: 把 ddx mode 的 UI label 改「病情解釋」，但 internal localStorage key 保留 `ddx` — 維持向後相容已存進度
- 2026-04-19: 加 `explanation` + `treatment` 兩個 case 欄位（先前只有 `ddx`）— 讓「病情解釋」mode 能展開三段式內容
- 2026-04-19: 重排 mode 內容歸屬：DDx 移到 history mode 翻面、explanation+treatment 留在 ddx mode、PE 不變 — 符合 OSCE 答題流程（問完病史就該想 DDx；解釋與治療歸同一 station）
- 2026-04-19: 內容大改：依 `~/.claude/skills/osce-answer/SKILL.md` 框架重寫所有 133 case — 統一答題結構（LQQOPERA / IPPA / pathophys + workup → Tx → 衛教），去 SPIKES 同理心 fluff，bullets 限 30-60 字
- 2026-04-19: 用 4 個 parallel general-purpose subagent 處理重寫（每 chunk ~33 cases），用 build-time Python script chunk + merge — 避免 main agent context 爆炸
- 2026-04-19: 中國醫藥大學 OSCE 共筆 致謝寫入 README + index.html footer
- 2026-04-19: 建立此 spec.md 接手跨 session 狀態 — context 即將吃緊，需要 handoff 入口
- 2026-04-19: 4 個 parallel subagent (33 cases each) 失敗 — 都卡在探索階段沒寫 output，TaskStop 顯示 "no task found" 表示已自然 terminate；下次改 14 chunks × 8-10 cases，分批 launch
- 2026-04-19: SendMessage 工具在此 session 不可用，無法 mid-flight 戳 agent 問狀態；只能事前把任務切小
- 2026-04-19: 14 chunks × 8-10 cases 策略成功 — 所有 14 個 subagent 都在 ~200s 內完成 Read→Write，每個平均 60k tokens / 2 tool uses。關鍵：把 prompt 做到完全 self-contained + 明確禁止探索 + 提供 gold example
- 2026-04-19: 凡鳥手札 OSCE 準備心得 致謝補寫入 README + index.html footer（與中國醫藥大學 OSCE 共筆並列）— osce-answer 框架的答題流程主要參考該部落格
