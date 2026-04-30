# Design: integrate-2025-kungbi

## Architecture decisions

### D1. Three-stage pipeline，每階段獨立 dry-run

不混在一個 mega-script。三個獨立 script + JSON config，每個都支援 `--dry-run` / `--apply`。

| Stage | Script | Config |
|---|---|---|
| 1. 注入新 case | `tools/inject_kungbi_cases.py` | `tools/new_kungbi_cases.json` |
| 2. 升級 null tier | `tools/apply_null_upgrades.py` | `tools/null_tier_upgrade_mapping.json` |
| 3. 內容 enrichment | `tools/apply_enrichment.py` | `tools/enrichment_patches.json` |

理由：
- 三件事 risk profile 不同：注入新 case = additive；升 tier = 修現有欄位；enrichment = 改 array 內容
- 出錯時可分段 rollback（git stash 個別檔案 / 重跑特定 stage）
- 後續同樣模式還能擴充（例如未來新批次 case 用 `inject_<source>_cases.py` 同 pattern）

### D2. Source 命名空間：`source: "kungbi"`

新 9 個 case `id` 用 `kungbi-NN` 前綴 + `source: "kungbi"`，與既有 `114-*` (114 年範例) / `2025-*` (2025 考古) / `RM-*` (個人筆記) / `tier-*` (上一輪 missing topics) 區隔。

理由：UI 已有 source filter (114 / 2025 / RM)，但 source 並非必須在 filter 顯示出來；保留命名空間方便未來追溯來源 + 也可以在分析時 group by。

### D3. Null upgrade mapping：人工策劃、不自動推導

`null_tier_upgrade_mapping.json` 每個 entry 記錄：
- `id`: case id
- `topic`: 一句話描述
- `matches`: 對應 framework 中的卡編號（4.1、6.13、kungbi-09 等）

理由：tier 是「考前複習優先序」的人工判斷，沒有可自動推導的 ground truth。把判斷顯式記在 JSON 比埋進 script 邏輯易維護、易 review、也是 audit trail。

### D4. Enrichment：APPEND only + `[共筆]` prefix tag

`apply_enrichment.py` 只在 array 末尾追加新項目，**從不修改 / 重排現有 bullets**。每個追加的 bullet 強制以 `[共筆]` 前綴開頭。

理由：
- Append-only 避免破壞現有 case 內容的人工策劃品質
- `[共筆]` tag 讓使用者複習時一眼分辨「這是後來補的深化資料」vs「這是原本的 checklist」
- 將來若要 rollback enrichment，只需 grep 移除 `[共筆]` 開頭的 bullet

### D5. 不全部 enrich，只挑 14 張高優先

77 bullets across 14 cases 是 sweet spot：覆蓋 P1 8 大主題 + P2 6 個常考主題，但不至於把整個題庫每張卡都灌資料變成噪音。

剩 67 個 P1+P2 case（沒被 enrichment 的）若要補強，可獨立成 `enrich-tier-classified-batch-2` change 後續做。

## Implementation notes

### Script 內 array 處理

`apply_enrichment.py` 用 `find_array_close()` 函數搜每個 case 的 `<field>: [` 開頭，walk forward 找對應的 `]`，在 `]` 前插入新 bullets。處理 edge cases：
- empty array `field: [],` — 完全替換為新 array
- filled array — 在 `]` 前插入 `,\n` + 新 bullets

### Schema 擴充：spec 是 superset

主 spec 中既有的「Case data schema includes tier field」requirement 已涵蓋本 change 的所有變更（tier 必填、null 可接受）。本 change 只新增兩個 requirement：
1. **kungbi source 命名空間** — 詳述 `source: "kungbi"` + `id: "kungbi-NN"` 命名規則
2. **共筆 enrichment tag** — 詳述 `[共筆]` prefix 的語意

## Trade-offs

### 為什麼不一次 enrich 全部 168 case？

- 工作量：每個 case 平均 3-5 個 array、每個 array 加 2-3 bullets = 1000+ bullets，難以保證品質
- ROI：P3 case 本來就「餘力翻」，深度資料價值低
- 風險：大量 edit 增加 regression 機率

### 為什麼 null upgrade 用「topic match」而非更嚴格 algorithm？

每個 case 的 `chiefComplaint` + `system` 已經夠精確判斷 tier；用人工標一遍比設計 NLP-based algorithm 快、且可 audit。
