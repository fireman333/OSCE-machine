// OSCE 刷題機 — UI 邏輯
// 依賴：window.OSCE_CASES（cases.js 載入）

const STORAGE_KEY = "osce-progress-v1";
const MODES = ["history", "pe", "ddx"];
// 注意：內部 key 保留 "ddx" 以維持 localStorage 進度相容；UI label 已更新為「病情解釋」
const MODE_LABEL = { history: "重點問診", pe: "理學檢查", ddx: "病情解釋" };
const MODE_QUESTION = {
  history: "👉 請列出此 case 的【重點問診】事項，並提出【鑑別診斷】",
  pe: "👉 請列出此 case 的【重點理學檢查】事項",
  ddx: "👉 請進行【病情解釋】（pathophys / 自然病程）+【處置 / 治療 / 衛教】"
};
const MODE_BADGE_CLASS = {
  history: "badge-mode-history",
  pe: "badge-mode-pe",
  ddx: "badge-mode-ddx"
};

// ---- Build card list (case × mode) ----
function buildAllCards() {
  const cards = [];
  for (const c of (window.OSCE_CASES || [])) {
    for (const mode of MODES) {
      cards.push({
        id: `${c.id}-${mode}`,
        caseId: c.id,
        mode,
        case: c
      });
    }
  }
  return cards;
}

// ---- Storage ----
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}
function recordResult(cardId, result) {
  const p = loadProgress();
  const prev = p[cardId] || { attempts: 0, wrongCount: 0 };
  prev.attempts += 1;
  if (result === "wrong") prev.wrongCount += 1;
  prev.result = result;
  prev.lastSeen = new Date().toISOString().slice(0, 10);
  p[cardId] = prev;
  saveProgress(p);
}

// ---- State ----
let allCards = [];
let pool = [];
let idx = 0;
let flipped = false;
let checkedItems = new Set();
let viewMode = null; // 若使用者用 tab 切換到不同模式，覆蓋 pool[idx].mode

// 取得當前顯示的卡（套用 viewMode 切換後的模式）
function currentCard() {
  if (!pool.length) return null;
  const base = pool[idx];
  if (viewMode && viewMode !== base.mode) {
    const overridden = allCards.find(c => c.caseId === base.caseId && c.mode === viewMode);
    if (overridden) return overridden;
  }
  return base;
}

// ---- Filters ----
function applyFilters() {
  const mode = document.getElementById("filter-mode").value;
  const dept = document.getElementById("filter-dept").value;
  const poolKind = document.getElementById("filter-pool").value;
  const progress = loadProgress();

  pool = allCards.filter(card => {
    if (mode !== "all" && card.mode !== mode) return false;
    if (dept !== "all" && card.case.department !== dept) return false;
    if (poolKind === "weak") {
      const r = progress[card.id];
      if (!r || (r.result !== "wrong" && r.result !== "partial")) return false;
    }
    if (poolKind === "unseen") {
      if (progress[card.id]) return false;
    }
    return true;
  });

  if (poolKind === "weak") {
    pool.sort((a, b) => (progress[b.id]?.wrongCount || 0) - (progress[a.id]?.wrongCount || 0));
  }

  idx = 0;
  flipped = false;
  viewMode = null;
  render();
}

function shufflePool() {
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  idx = 0;
  flipped = false;
  viewMode = null;
  render();
}

// ---- Render ----
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function renderProgress() {
  const progress = loadProgress();
  const done = Object.values(progress).filter(r => r.result).length;
  const total = allCards.length;
  const correct = Object.values(progress).filter(r => r.result === "correct").length;
  document.getElementById("progress-fill").style.width = total ? `${(done / total) * 100}%` : "0%";
  document.getElementById("progress-text").textContent =
    `已刷 ${done} / ${total}（全對 ${correct}）`;
  document.getElementById("subtitle").textContent =
    `${(window.OSCE_CASES || []).length} 例 SP 劇情 · ${total} 張刷題卡`;
}

function renderNavCounter() {
  document.getElementById("nav-counter").textContent =
    pool.length ? `${idx + 1} / ${pool.length}` : "0 / 0";
}

function render() {
  renderProgress();
  renderNavCounter();
  const container = document.getElementById("card-container");
  const empty = document.getElementById("empty-state");

  if (!pool.length) {
    container.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  const card = currentCard();
  const c = card.case;
  const progress = loadProgress();
  const myProgress = progress[card.id];
  const items = c[card.mode] || [];
  // history mode 帶 DDx；ddx mode 帶 explanation + treatment + redFlags
  const ddxList = (card.mode === "history" && c.ddx) ? c.ddx : [];
  const redFlags = (card.mode === "ddx" && c.redFlags) ? c.redFlags : [];
  const explanation = (card.mode === "ddx" && c.explanation) ? c.explanation : [];
  const treatment = (card.mode === "ddx" && c.treatment) ? c.treatment : [];

  const lastResultBadge = myProgress?.result
    ? `<span class="text-xs px-2 py-0.5 rounded ${
        myProgress.result === "correct" ? "bg-green-100 text-green-800" :
        myProgress.result === "partial" ? "bg-amber-100 text-amber-800" :
        "bg-red-100 text-red-800"
      }">上次：${
        myProgress.result === "correct" ? "全對" :
        myProgress.result === "partial" ? "部分對" : "不會"
      }（已刷 ${myProgress.attempts} 次）</span>`
    : "";

  // Mode tabs（同一 case 內切換問診/PE/DDx）
  const modeTabs = MODES.map(m => {
    const cardId = `${c.id}-${m}`;
    const p = progress[cardId];
    const dot = p?.result === "correct" ? "🟢"
              : p?.result === "partial" ? "🟡"
              : p?.result === "wrong"   ? "🔴" : "⚪️";
    const isActive = m === card.mode;
    return `<button class="mode-tab ${isActive ? "mode-tab-active" : ""}" data-mode="${m}">
      <span class="text-xs mr-1">${dot}</span>${MODE_LABEL[m]}
    </button>`;
  }).join("");

  container.innerHTML = `
    <div class="fade-in">
      <div class="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-100 flex flex-wrap gap-2 items-center text-xs">
          <span class="badge badge-dept">${escapeHtml(c.id)}</span>
          <span class="badge badge-dept">${escapeHtml(c.department)}科</span>
          ${c.system ? `<span class="badge badge-dept">${escapeHtml(c.system)}</span>` : ""}
          <span class="ml-auto">${lastResultBadge}</span>
        </div>

        <div class="px-5 pt-4 pb-2 flex gap-1.5 border-b border-slate-100">
          ${modeTabs}
        </div>

        <div class="px-5 py-5">
          <p class="text-sm font-semibold text-slate-700 mb-2">主訴：${escapeHtml(c.age)} 歲${c.sex === "F" ? "女" : c.sex === "M" ? "男" : ""}，${escapeHtml(c.chiefComplaint)}</p>
          <p class="text-sm leading-relaxed text-slate-800 whitespace-pre-wrap">${escapeHtml(c.vignette)}</p>
        </div>

        ${flipped ? renderBack(items, redFlags, card, explanation, treatment, ddxList) : renderFrontPrompt(card)}
      </div>
    </div>
  `;

  // mode tab handlers（同一 case 切換模式）
  document.querySelectorAll(".mode-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      viewMode = btn.dataset.mode;
      flipped = false;
      checkedItems.clear();
      render();
    });
  });

  // attach handlers
  if (!flipped) {
    document.getElementById("btn-flip").addEventListener("click", () => {
      flipped = true; checkedItems.clear(); render();
    });
  } else {
    document.querySelectorAll(".checklist-item").forEach((el, i) => {
      el.addEventListener("click", () => {
        if (checkedItems.has(i)) checkedItems.delete(i); else checkedItems.add(i);
        el.classList.toggle("checked");
        updateSuggestedGrade();
      });
    });
    document.querySelectorAll(".btn-grade").forEach(btn => {
      btn.addEventListener("click", () => {
        recordResult(card.id, btn.dataset.result);
        next();
      });
    });
    document.getElementById("btn-unflip").addEventListener("click", () => {
      flipped = false; render();
    });
    updateSuggestedGrade();
  }
}

function suggestGrade() {
  const total = document.querySelectorAll(".checklist-item").length;
  if (total === 0) return null;
  const ratio = checkedItems.size / total;
  if (ratio >= 1.0) return "correct";
  if (ratio === 0) return "wrong";
  return "partial";
}

function updateSuggestedGrade() {
  const suggested = suggestGrade();
  document.querySelectorAll(".btn-grade").forEach(btn => {
    const on = btn.dataset.result === suggested;
    btn.classList.toggle("ring-2", on);
    btn.classList.toggle("ring-offset-2", on);
    btn.classList.toggle("ring-slate-900", on);
  });
}

function renderFrontPrompt(card) {
  return `
    <div class="px-5 py-6 bg-slate-50 border-t border-slate-100 text-center">
      <p class="text-base font-medium text-slate-700 mb-4">${MODE_QUESTION[card.mode]}</p>
      <p class="text-xs text-slate-500 mb-4">先在心裡列出你的答案，再翻面對照</p>
      <button id="btn-flip" class="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium">
        翻面看 checklist →
      </button>
    </div>
  `;
}

function renderSection(title, items, color) {
  if (!items || !items.length) return "";
  const palette = {
    teal:   { dot: "text-teal-600",   header: "text-teal-700"   },
    indigo: { dot: "text-indigo-600", header: "text-indigo-700" },
    amber:  { dot: "text-amber-600",  header: "text-amber-700"  }
  }[color] || { dot: "text-slate-600", header: "text-slate-700" };
  const list = items.map(it => `<li class="checklist-item flex gap-2 py-1.5 px-2 rounded hover:bg-white">
      <span class="${palette.dot} font-bold">☐</span>
      <span class="flex-1 text-sm leading-relaxed">${escapeHtml(it)}</span>
    </li>`).join("");
  return `
    <p class="text-xs font-semibold ${palette.header} mt-3 mb-1">${title}</p>
    <ul class="space-y-0.5">${list}</ul>
  `;
}

function renderBack(items, redFlags, card, explanation, treatment, ddxList) {
  let body;
  if (card.mode === "history") {
    // 重點問診 mode：問診 checklist + DDx
    body = `
      ${renderSection("重點問診 checklist", items, "teal")}
      ${renderSection("鑑別診斷 (DDx)", ddxList, "indigo")}
    `;
    if (!items.length && !ddxList.length) {
      body = '<p class="text-sm text-slate-400 italic">（此題尚無 checklist）</p>';
    }
  } else if (card.mode === "ddx") {
    // 病情解釋 mode：病情解釋 + 處置/治療/衛教
    body = `
      ${renderSection("病情解釋（pathophys / 自然病程 / 為何治療）", explanation, "indigo")}
      ${renderSection("處置 / 治療 / 衛教", treatment, "amber")}
    `;
    if (!explanation.length && !treatment.length) {
      body = '<p class="text-sm text-slate-400 italic">（此題尚無 checklist）</p>';
    }
  } else {
    // pe mode：單一 checklist
    const list = items.length
      ? items.map(it => `<li class="checklist-item flex gap-2 py-1.5 px-2 rounded hover:bg-white">
          <span class="text-teal-600 font-bold">☐</span>
          <span class="flex-1 text-sm leading-relaxed">${escapeHtml(it)}</span>
        </li>`).join("")
      : '<li class="text-sm text-slate-400 italic">（此題尚無 checklist）</li>';
    body = `<ul class="space-y-0.5">${list}</ul>`;
  }

  const flagBlock = redFlags.length ? `
    <div class="mt-4 p-3 bg-red-50 border border-red-200 rounded">
      <p class="text-xs font-semibold text-red-800 mb-1">⚠️ Red Flags</p>
      <ul class="text-xs text-red-700 space-y-0.5">
        ${redFlags.map(f => `<li>• ${escapeHtml(f)}</li>`).join("")}
      </ul>
    </div>` : "";

  return `
    <div class="px-5 py-5 bg-slate-50 border-t border-slate-100">
      <p class="text-xs text-slate-500 mb-2">${MODE_LABEL[card.mode]} · 點擊勾選</p>
      ${body}
      ${flagBlock}
      <p class="mt-4 text-xs text-slate-400">依勾選比例自動建議評分（框線標示），仍可手動按任一顆覆寫</p>
      <div class="mt-2 flex flex-wrap gap-2">
        <button class="btn-grade px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm" data-result="correct">✓ 全對</button>
        <button class="btn-grade px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded text-sm" data-result="partial">△ 部分對</button>
        <button class="btn-grade px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm" data-result="wrong">✗ 不會</button>
        <button id="btn-unflip" class="ml-auto px-3 py-2 text-slate-500 hover:text-slate-700 text-sm underline">回到題目</button>
      </div>
    </div>
  `;
}

function next() {
  if (!pool.length) return;
  idx = (idx + 1) % pool.length;
  flipped = false;
  viewMode = null;
  render();
}
function prev() {
  if (!pool.length) return;
  idx = (idx - 1 + pool.length) % pool.length;
  flipped = false;
  viewMode = null;
  render();
}

// ---- Init ----
function init() {
  if (!window.OSCE_CASES) {
    document.getElementById("card-container").innerHTML =
      '<p class="text-red-600">cases.js 載入失敗</p>';
    return;
  }
  allCards = buildAllCards();
  document.getElementById("filter-mode").addEventListener("change", applyFilters);
  document.getElementById("filter-dept").addEventListener("change", applyFilters);
  document.getElementById("filter-pool").addEventListener("change", applyFilters);
  document.getElementById("btn-shuffle").addEventListener("click", shufflePool);
  document.getElementById("btn-next").addEventListener("click", next);
  document.getElementById("btn-prev").addEventListener("click", prev);
  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm("確定要清除所有刷題進度嗎？")) {
      localStorage.removeItem(STORAGE_KEY);
      applyFilters();
    }
  });
  document.addEventListener("keydown", e => {
    if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!flipped) { flipped = true; checkedItems.clear(); render(); }
    }
  });
  applyFilters();
}

document.addEventListener("DOMContentLoaded", init);
