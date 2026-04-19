# 🩺 OSCE 刷題機 · OSCE Machine

> 給臺灣醫學生的 OSCE 考前複習刷題機。純前端、免登入、手機可用。

**Demo**: https://fireman333.github.io/OSCE-machine/

---

## 題庫

- **133 個 SP vignette** × 3 模式（重點問診 / 理學檢查 / 鑑別診斷）= **399 張刷題卡**
- 來源：
  - 114 年 OSCE SP 劇情範例（63 例，國考官方公布題型）
  - 2025 OSCE 考古題（30 例，學長姐回憶版）
  - 個人 OSCE 筆記整理（40 例，補強 PDF 未涵蓋主題）
- 涵蓋科別：內科、外科、婦產、小兒、急診

## 功能

- ✅ **三模式刷題**：每個 vignette 拆成「重點問診」「理學檢查」「鑑別診斷」三張卡，個別練習
- ✅ **自評 + 進度追蹤**：全對 / 部分對 / 不會 → 寫入 localStorage
- ✅ **弱點專練**：自動列出標過「部分對 / 不會」的卡，按錯誤次數排序
- ✅ **未刷過篩選**：只顯示沒練過的題目
- ✅ **科別 / 模式篩選**
- ✅ **隨機抽題**（Fisher-Yates）
- ✅ **鍵盤快捷鍵**：← → 翻頁，Space / Enter 翻面
- ✅ **手機優先 RWD**

## 使用方式

### 線上版（推薦）
直接打開 https://fireman333.github.io/OSCE-machine/

### 本機跑
```bash
git clone https://github.com/fireman333/OSCE-machine.git
cd OSCE-machine
# 隨便一個 static server，例如：
python3 -m http.server 8000
# 開 http://localhost:8000
```

或直接 double-click `index.html`（部分瀏覽器 file:// 也可以）。

## 如何新增題目

編輯 `cases.js`，在 `window.OSCE_CASES = [...]` 內新增物件：

```js
{
  id: "2026-01",                  // 唯一 ID
  source: "2026",                 // 來源標籤
  age: 25, sex: "F",
  department: "婦",                // 內 / 外 / 婦 / 小 / 急
  system: "GU",
  chiefComplaint: "下腹疼痛",
  vignette: "今天因整個下腹疼痛加劇...",
  history: [                      // 5-8 條重點問診
    "LMP / 月經週期",
    "性行為 / 避孕 / GPA",
    // ...
  ],
  pe: [                           // 3-5 條重點 PE
    "Vital signs",
    "腹部視聽叩觸",
    // ...
  ],
  ddx: [                          // 3-5 個鑑別診斷
    "Ectopic pregnancy",
    // ...
  ],
  redFlags: [                     // 2 個 red flag warning
    "BP 不穩 → ruptured ectopic"
  ]
}
```

## 部署到 GitHub Pages

1. Fork / clone 此 repo
2. Settings → Pages → Source 選 `main` branch / `/ (root)`
3. 等 1-2 分鐘 → 開 `https://<username>.github.io/<repo-name>/`

## 技術細節

- 純 vanilla HTML/CSS/JS，無 build step
- Tailwind CSS via CDN
- localStorage 儲存進度（無後端）
- GitHub Pages 直接託管

## 免責聲明

⚠️ 本工具僅供醫學生考前複習參考。臨床決策請依官方指引、最新文獻與主治醫師判斷。題目內容若有錯誤歡迎開 issue 或 PR。

## License

MIT — 免費使用、修改、散播。

---

Made with ❤️ for Taiwan med students
