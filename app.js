// OSCE 刷題機 — UI 邏輯
// 依賴：window.OSCE_CASES（cases.js 載入）

const STORAGE_KEY = "osce-progress-v1";
const MODES = ["history", "pe", "ddx"];
const MODE_LABEL = { history: "重點問診", pe: "理學檢查", ddx: "鑑別診斷" };
const MODE_QUESTION = {
  history: "👉 請列出此 case 的【重點問診】事項",
  pe: "👉 請列出此 case 的【重點理學檢查】事項",
  ddx: "👉 請列出此 case 的【鑑別診斷】（≥3 個）"
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
  render();
}

function shufflePool() {
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  idx = 0;
  flipped = false;
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

  const card = pool[idx];
  const c = card.case;
  const progress = loadProgress();
  const myProgress = progress[card.id];
  const items = c[card.mode] || [];
  const redFlags = (card.mode === "ddx" && c.redFlags) ? c.redFlags : [];

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

  container.innerHTML = `
    <div class="fade-in">
      <div class="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
        <div class="px-5 py-3 border-b border-slate-100 flex flex-wrap gap-2 items-center text-xs">
          <span class="badge badge-dept">${escapeHtml(c.id)}</span>
          <span class="badge badge-dept">${escapeHtml(c.department)}科</span>
          <span class="badge ${MODE_BADGE_CLASS[card.mode]}">${MODE_LABEL[card.mode]}</span>
          ${c.system ? `<span class="badge badge-dept">${escapeHtml(c.system)}</span>` : ""}
          <span class="ml-auto">${lastResultBadge}</span>
        </div>

        <div class="px-5 py-5">
          <p class="text-sm font-semibold text-slate-700 mb-2">主訴：${escapeHtml(c.age)} 歲${c.sex === "F" ? "女" : c.sex === "M" ? "男" : ""}，${escapeHtml(c.chiefComplaint)}</p>
          <p class="text-sm leading-relaxed text-slate-800 whitespace-pre-wrap">${escapeHtml(c.vignette)}</p>
        </div>

        ${flipped ? renderBack(items, redFlags, card) : renderFrontPrompt(card)}
      </div>
    </div>
  `;

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
  }
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

function renderBack(items, redFlags, card) {
  const list = items.length
    ? items.map(it => `<li class="checklist-item flex gap-2 py-1.5 px-2 rounded hover:bg-slate-50">
        <span class="text-teal-600 font-bold">☐</span>
        <span class="flex-1 text-sm leading-relaxed">${escapeHtml(it)}</span>
      </li>`).join("")
    : '<li class="text-sm text-slate-400 italic">（此題尚無 checklist）</li>';

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
      <ul class="space-y-0.5">${list}</ul>
      ${flagBlock}
      <div class="mt-5 flex flex-wrap gap-2">
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
  render();
}
function prev() {
  if (!pool.length) return;
  idx = (idx - 1 + pool.length) % pool.length;
  flipped = false;
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
