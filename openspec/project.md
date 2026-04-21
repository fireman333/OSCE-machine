# OSCE 刷題機 (OSCE Machine) — Project Context

> 由 `/spec init` 產生。OpenSpec 不強制這個檔案，但 `openspec/config.yaml` 會 reference 進去作為所有 artifact 生成時的 AI context。**手動維護**，不要讓 OpenSpec 自動覆寫。

## Purpose

給臺灣醫學生的 OSCE（Objective Structured Clinical Examination）考前複習刷題機 web app。133 個 SP（Standardized Patient）vignette × 3 mode（重點問診 / 理學檢查 / 病情解釋）= 399 張刷題卡，含 checklist 自評 + 弱點專練 + localStorage 進度追蹤。純前端、免登入、mobile-first。

## Stack & Constraints

- **Stack**：vanilla HTML / CSS / JS，**無 build step**；Tailwind 透過 CDN 載入
- **部署**：GitHub Pages（repo `https://github.com/fireman333/OSCE-machine`），已 live
- **資料層**：`cases.js` 全域變數 `window.OSCE_CASES`（避免 `file://` CORS 問題）
- **進度層**：`localStorage["osce-progress-v1"]`；**內部 mode key 保留 `ddx`**（向後相容舊進度），UI label 已改「病情解釋」
- **內容層**：依 `~/.claude/skills/osce-answer/SKILL.md` 框架（LQQOPERA + 內外敏藥住個家 / IPPA / pathophys + 處置衛教）
- **語言**：UI 繁體中文；醫學名詞依 CLAUDE.md format（`English（中文）` 首次 → 後續純英文）
- **相容性**：手機 + 桌機（mobile-first RWD）

## Out of Scope

- 不做 user auth / multi-user 帳號（localStorage 單機進度即可）
- 不做後端 / 資料庫（純靜態檔案部署）
- 不做 build step / bundler（vanilla JS + CDN Tailwind，保持 double-click 即可跑）
- 不做題目編輯器 UI（新增題目請直接編輯 `cases.js`，README 有 schema 範本）
- 不做 SP 真人角色扮演模組（純 self-study checklist）

## Key People & Sources

- **Owner**：WLK（台大大六醫學生，即將畢業進 RA → 住院醫師訓練）
- **Target users**：台灣醫學生準備 OSCE / 國考第二階段臨床試
- **Data sources**：
  - 114 年 OSCE SP 劇情範例（63 例；國考官方題型）
  - 2025 OSCE 考古題（30 例，學長姐回憶版）
  - 個人 OSCE 筆記整理（40 例，補 PDF 未涵蓋主題）
- **內容致謝**：
  - 中國醫藥大學 OSCE 共筆（部分 checklist 內容參考）
  - 凡鳥手札 OSCE 準備心得（答題框架與考場策略參考）

## Conventions

- **Case ID**：`<year>-<NN>` e.g. `114-01`、`2025-12`、`2026-03`；unique across all cases
- **Department code**：內 / 外 / 婦 / 小 / 急 / 精（單字 tag）
- **Mode internal key**：`history` / `pe` / `ddx`（`ddx` 內部名稱保留，UI 標籤為「病情解釋」）
- **Case schema**（見 README）：`id / source / age / sex / department / system / chiefComplaint / vignette / history[] / pe[] / ddx[] / explanation / treatment / redFlags[]`
- **Capability slug**：kebab-case（e.g. `card-flow`、`progress-tracking`、`content-authoring`）
- **Commit prefix**：無嚴格規範，但偏好 `feat:` / `fix:` / `docs:` / `chore:`；spec-related commit 走 `spec:`
- **Localization**：UI 一律繁體中文；程式碼註解 + commit message 英文

## Related Projects / References

- **osce-answer skill**：`~/.claude/skills/osce-answer/SKILL.md` — 133 cases 內容生成框架的來源
- **exam-weakness-loop skill**：`~/.claude/skills/exam-weakness-loop/` — 阿摩錯題迴圈（與此專案為獨立工具，但目標使用者重疊）
- **spec.md (legacy)**：舊版單檔 spec.md 仍在 repo，2026-04-21 migrate 到 OpenSpec 後保留作為 transition marker；未來 archive 或 remove
