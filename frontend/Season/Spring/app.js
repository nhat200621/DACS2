const API = "http://localhost:5000/api";
const problemsEl = document.getElementById("problems");
const loadBtn = document.getElementById("load");
const difficultySelect = document.getElementById("difficulty");

loadBtn.addEventListener("click", loadProblems);

async function loadProblems() {
  const diff = difficultySelect.value;
  const q = diff ? `?difficulty=${encodeURIComponent(diff)}` : "";
  const res = await fetch(`${API}/problems${q}`);
  const data = await res.json();
  renderProblems(data);
}
function renderProblems(list) {
  problemsEl.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
<h3>${escapeHtml(p.title)} <small>(${p.difficulty})</small></h3>
<pre>${escapeHtml(p.description)}</pre>
<button class="btn" data-id="${p._id}">Open</button>
`;
    problemsEl.appendChild(card);
    card
      .querySelector("button")
      .addEventListener("click", () => openProblem(p));
  });
}
function openProblem(p) {
  const modal = document.createElement("div");
  modal.className = "card";
  modal.style.position = "fixed";
  modal.style.left = "50%";
  modal.style.top = "50%";
  modal.style.transform = "translate(-50%,-50%)";
  modal.style.zIndex = 9999;
  modal.style.maxWidth = "600px";
  modal.style.width = "90%";
  modal.style.padding = "1rem";
  modal.style.background = "#fff";
  modal.style.border = "1px solid #ccc";
  modal.style.borderRadius = "10px";
  modal.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

  modal.innerHTML = `
    <h3>${escapeHtml(p.title)}</h3>
    <pre>${escapeHtml(p.description)}</pre>
    <form id="answerArea">
      ${["A", "B", "C", "D"]
        .map(
          (key) => `
        <label style="display:block;margin:4px 0;">
          <input type="radio" name="answer" value="${key}">
          ${key}. ${escapeHtml(p.options?.[key] || "")}
        </label>
      `
        )
        .join("")}
    </form>
    <div id="resultContainer" style="margin-top:10px; font-weight:bold; min-height:1.5em;"></div>
    <div style="margin-top:1rem; display:flex; gap:.5rem; justify-content:flex-end;">
      <button id="submitBtn" class="btn">Kiểm tra</button>
      <button id="closeBtn" class="btn">Đóng</button>
    </div>
  `;

  document.body.appendChild(modal);
  const closeBtn = modal.querySelector("#closeBtn");
  const submitBtn = modal.querySelector("#submitBtn");
  const resultContainer = modal.querySelector("#resultContainer");

  closeBtn.addEventListener("click", () => modal.remove());
  submitBtn.addEventListener("click", () => {
    const selected = modal.querySelector('input[name="answer"]:checked');

    if (!selected) {
      resultContainer.textContent = "⚠️ Please select one answer!";
      resultContainer.style.color = "orange";
      return;
    }
    if (!p.answer) {
      resultContainer.textContent =
        "⚙️ The answer has not been updated in the database yet.";
      resultContainer.style.color = "gray";
      return;
    }
    if (selected.value === p.answer) {
      resultContainer.textContent = `✅ Correct! The correct answer is ${p.answer}.`;
      resultContainer.style.color = "green";
    } else {
      resultContainer.textContent = `❌ Wrong. The correct answer is ${p.answer}.`;
      resultContainer.style.color = "red";
    }
  });
}
function escapeHtml(str = "") {
  return String(str).replace(
    /[&<>"']/g,
    (s) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        s
      ])
  );
}
loadProblems();
