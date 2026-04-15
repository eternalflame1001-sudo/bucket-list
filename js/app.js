// ==========================================
// app.js — UI・メイン処理
// ==========================================

// — 状態 —
let state = {
bucket: {},
trash:  {},
visit:  {},
tab: “list”,
editKey: null
};

// — DOM —
const $ = id => document.getElementById(id);
const bucketUL  = $(“bucket-list”);
const visitUL   = $(“visit-list”);
const trashUL   = $(“trash-list”);
const searchEl  = $(“search-input”);
const catFilter = $(“category-filter”);
const stsFilter = $(“status-filter”);

// — 初期化 —
async function init() {
showLoading(true);
try {
const [b, t, v] = await Promise.all([
FB.get(FB.endpoints.bucket),
FB.get(FB.endpoints.trash),
FB.get(FB.endpoints.visit)
]);
state.bucket = b || {};
state.trash  = t || {};
state.visit  = v || {};
buildCategoryFilter();
renderAll();
} catch(e) {
toast(“データ読み込みエラー”, “error”);
}
showLoading(false);
}

// — カテゴリフィルター構築 —
function buildCategoryFilter() {
const cats = […new Set(Object.values(state.bucket).map(i => i.cat).filter(Boolean))].sort();
catFilter.innerHTML = `<option value="">すべて</option>` +
cats.map(c => `<option value="${c}">${c}</option>`).join(””);
}

// — 全描画 —
function renderAll() {
renderBucket();
renderVisit();
renderTrash();
updateStats();
}

// — バケットリスト描画 —
function renderBucket() {
const q   = searchEl.value.toLowerCase();
const cat = catFilter.value;
const sts = stsFilter.value;

const items = Object.entries(state.bucket).filter(([, v]) => {
if (q   && !v.text?.toLowerCase().includes(q)) return false;
if (cat && v.cat !== cat) return false;
if (sts === “done” && !v.done) return false;
if (sts === “todo” && v.done)  return false;
return true;
});

bucketUL.innerHTML = items.length ? “” : `<li class="empty">アイテムがありません</li>`;
items.forEach(([key, item]) => {
const li = document.createElement(“li”);
li.className = `item${item.done ? " done" : ""}`;
li.innerHTML = `<span class="item-check" data-key="${key}">${item.done ? "✅" : "⬜"}</span> <div class="item-body"> <div class="item-title">${esc(item.text)}</div> <div class="item-meta"> ${item.cat  ?`<span class="item-cat">${esc(item.cat)}</span>`: ""} ${item.prio ?`<span class="item-badge prio-${item.prio}">優先:${esc(item.prio)}</span>`: ""} ${item.urg  ?`<span class="item-badge urg-${item.urg}">緊急:${esc(item.urg)}</span>` : ""} </div> </div> <div class="item-actions"> <button class="act-edit"  data-key="${key}">✏️</button> <button class="act-trash" data-key="${key}">🗑️</button> </div>`;
bucketUL.appendChild(li);
});
}

// — 訪問記録描画 —
function renderVisit() {
const items = Object.entries(state.visit);
visitUL.innerHTML = items.length ? “” : `<li class="empty">訪問記録がありません</li>`;
items.forEach(([key, item]) => {
const li = document.createElement(“li”);
li.className = “item”;
li.innerHTML = `<div class="item-body"> <div class="item-title">${esc(item.text || item.title || item.place || "")}</div> ${item.date ?`<div class="item-cat">${esc(item.date)}</div>`: ""} ${item.memo ?`<div class="item-memo">${esc(item.memo)}</div>` : ""} </div>`;
visitUL.appendChild(li);
});
}

// — ゴミ箱描画 —
function renderTrash() {
const items = Object.entries(state.trash);
trashUL.innerHTML = items.length ? “” : `<li class="empty">ゴミ箱は空です</li>`;
items.forEach(([key, item]) => {
const li = document.createElement(“li”);
li.className = “item”;
li.innerHTML = `<div class="item-body"> <div class="item-title">${esc(item.text)}</div> ${item.cat ?`<div class="item-cat">${esc(item.cat)}</div>` : ""} </div> <div class="item-actions"> <button class="act-restore" data-key="${key}">♻️</button> <button class="act-delete"  data-key="${key}">❌</button> </div>`;
trashUL.appendChild(li);
});
}

// — 統計更新 —
function updateStats() {
const total = Object.keys(state.bucket).length;
const done  = Object.values(state.bucket).filter(i => i.done).length;
$(“stat-done”).textContent  = done;
$(“stat-total”).textContent = total;
}

// — 完了トグル —
async function toggleDone(key) {
const item = state.bucket[key];
if (!item) return;
const newDone = !item.done;
state.bucket[key].done = newDone;
renderBucket(); updateStats();
try {
await FB.patch(`${FB.endpoints.bucket}/${key}`, { done: newDone });
toast(newDone ? “達成！🎉” : “未達成に戻しました”);
} catch(e) {
state.bucket[key].done = !newDone;
renderBucket(); updateStats();
toast(“更新エラー”, “error”);
}
}

// — ゴミ箱へ —
async function moveToTrash(key) {
const item = state.bucket[key];
if (!item || !confirm(`「${item.text}」をゴミ箱へ移しますか？`)) return;
showLoading(true);
try {
await FB.patch(`${FB.endpoints.trash}/${key}`, { …item, deletedAt: Date.now() });
await FB.delete(`${FB.endpoints.bucket}/${key}`);
delete state.bucket[key];
state.trash[key] = { …item, deletedAt: Date.now() };
renderAll();
toast(“ゴミ箱へ移動しました”);
} catch(e) { toast(“エラーが発生しました”, “error”); }
showLoading(false);
}

// — ゴミ箱から復元 —
async function restoreFromTrash(key) {
const item = state.trash[key];
if (!item) return;
showLoading(true);
try {
const { deletedAt, …restored } = item;
await FB.patch(`${FB.endpoints.bucket}/${key}`, restored);
await FB.delete(`${FB.endpoints.trash}/${key}`);
delete state.trash[key];
state.bucket[key] = restored;
buildCategoryFilter();
renderAll();
toast(“復元しました”);
} catch(e) { toast(“エラーが発生しました”, “error”); }
showLoading(false);
}

// — 完全削除 —
async function deleteFromTrash(key) {
if (!confirm(“完全に削除しますか？元に戻せません。”)) return;
showLoading(true);
try {
await FB.delete(`${FB.endpoints.trash}/${key}`);
delete state.trash[key];
renderTrash();
toast(“完全削除しました”);
} catch(e) { toast(“エラーが発生しました”, “error”); }
showLoading(false);
}

// — モーダル —
function openModal(key = null) {
state.editKey = key;
const item = key ? state.bucket[key] : {};
$(“modal-title”).textContent = key ? “編集” : “アイテム追加”;
$(“modal-input-text”).value = item.text || “”;
$(“modal-input-prio”).value = item.prio || “中”;
$(“modal-input-urg”).value  = item.urg  || “中”;

const cats = […new Set(Object.values(state.bucket).map(i => i.cat).filter(Boolean))].sort();
$(“modal-input-cat”).innerHTML =
`<option value="">カテゴリなし</option>` +
cats.map(c => `<option value="${c}"${item.cat===c?" selected":""}>${c}</option>`).join(””) +
`<option value="__new__">＋ 新しいカテゴリ</option>`;

$(“modal-overlay”).classList.remove(“hidden”);
$(“modal-input-text”).focus();
}

function closeModal() {
$(“modal-overlay”).classList.add(“hidden”);
state.editKey = null;
}

async function saveModal() {
let text = $(“modal-input-text”).value.trim();
let cat  = $(“modal-input-cat”).value;
let prio = $(“modal-input-prio”).value;
let urg  = $(“modal-input-urg”).value;

if (!text) { toast(“タイトルを入力してください”, “error”); return; }
if (cat === “**new**”) { cat = prompt(“新しいカテゴリ名を入力”) || “”; }

const data = { text, cat, prio, urg, done: false };
showLoading(true);
try {
if (state.editKey) {
data.done = state.bucket[state.editKey].done;
await FB.patch(`${FB.endpoints.bucket}/${state.editKey}`, data);
state.bucket[state.editKey] = { …state.bucket[state.editKey], …data };
toast(“更新しました”);
} else {
const maxId = Math.max(0, …Object.keys(state.bucket).map(Number)) + 1;
await FB.patch(`${FB.endpoints.bucket}/${maxId}`, { …data, createdAt: Date.now() });
state.bucket[maxId] = { …data, createdAt: Date.now() };
toast(“追加しました🎉”);
}
buildCategoryFilter();
renderAll();
closeModal();
} catch(e) { toast(“保存エラー”, “error”); }
showLoading(false);
}

// — イベント委任 —
bucketUL.addEventListener(“click”, e => {
const key = e.target.dataset.key;
if (!key) return;
if (e.target.classList.contains(“item-check”))  toggleDone(key);
if (e.target.classList.contains(“act-edit”))    openModal(key);
if (e.target.classList.contains(“act-trash”))   moveToTrash(key);
});
trashUL.addEventListener(“click”, e => {
const key = e.target.dataset.key;
if (!key) return;
if (e.target.classList.contains(“act-restore”)) restoreFromTrash(key);
if (e.target.classList.contains(“act-delete”))  deleteFromTrash(key);
});

// — タブ切替 —
document.querySelectorAll(”.tab”).forEach(btn => {
btn.addEventListener(“click”, () => {
document.querySelectorAll(”.tab”).forEach(b => b.classList.remove(“active”));
document.querySelectorAll(”.tab-content”).forEach(s => s.classList.remove(“active”));
btn.classList.add(“active”);
state.tab = btn.dataset.tab;
$(`tab-${state.tab}`).classList.add(“active”);
});
});

// — フィルター —
searchEl.addEventListener(“input”,   renderBucket);
catFilter.addEventListener(“change”, renderBucket);
stsFilter.addEventListener(“change”, renderBucket);

// — モーダルボタン —
$(“btn-add”).addEventListener(“click”, () => openModal());
$(“modal-cancel”).addEventListener(“click”, closeModal);
$(“modal-save”).addEventListener(“click”, saveModal);
$(“modal-overlay”).addEventListener(“click”, e => {
if (e.target === $(“modal-overlay”)) closeModal();
});

// — ユーティリティ —
function esc(str) {
return String(str || “”).replace(/&/g,”&”).replace(/</g,”<”).replace(/>/g,”>”);
}
function showLoading(show) { $(“loading”).classList.toggle(“hidden”, !show); }
function toast(msg, type = “ok”) {
const el = $(“toast”);
el.textContent = msg;
el.className = `toast-${type}`;
el.classList.remove(“hidden”);
setTimeout(() => el.classList.add(“hidden”), 2500);
}

// — 起動 —
init();
