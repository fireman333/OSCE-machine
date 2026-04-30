# Spec Delta: case-tier-classification

## ADDED Requirements

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
