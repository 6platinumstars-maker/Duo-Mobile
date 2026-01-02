// js/app.js
(function () {
  const $ = (id) => document.getElementById(id);

  const sectionSelect = $("sectionSelect");
  const tabSentences = $("tabSentences");
  const tabVocab = $("tabVocab");
  const viewSentences = $("viewSentences");
  const viewVocab = $("viewVocab");

  const sidEl = $("sid");
  const progressEl = $("progress");
  const englishEl = $("english");
  const japaneseEl = $("japanese");
  const vocabChipsEl = $("vocabChips");

  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");
  const toggleJPBtn = $("toggleJPBtn");

  // --- state ---
  let currentSectionId = "sec01";
  let sentenceIndex = 0;
  let showJP = true;

  // --- helpers ---
  function getSectionIds() {
    return Object.keys(window.SECTIONS || {}).sort();
  }

  function getCurrentSection() {
    return window.SECTIONS?.[currentSectionId];
  }

  function renderSectionOptions() {
    const ids = getSectionIds();
    if (ids.length === 0) {
      sectionSelect.innerHTML = `<option value="">(no sections loaded)</option>`;
      return;
    }
    sectionSelect.innerHTML = ids
      .map((id) => {
        const title = window.SECTIONS[id]?.title || id;
        const selected = id === currentSectionId ? "selected" : "";
        return `<option value="${id}" ${selected}>${title}</option>`;
      })
      .join("");
  }

  function renderSentence() {
    const sec = getCurrentSection();
    if (!sec || !sec.sentences || sec.sentences.length === 0) {
      sidEl.textContent = "—";
      progressEl.textContent = "0 / 0";
      englishEl.textContent = "No sentences.";
      japaneseEl.textContent = "";
      vocabChipsEl.innerHTML = "";
      return;
    }

    // clamp
    if (sentenceIndex < 0) sentenceIndex = 0;
    if (sentenceIndex >= sec.sentences.length) sentenceIndex = sec.sentences.length - 1;

    const s = sec.sentences[sentenceIndex];
    sidEl.textContent = s.sid;
    progressEl.textContent = `${sentenceIndex + 1} / ${sec.sentences.length}`;
    englishEl.textContent = s.english;
    japaneseEl.textContent = s.japanese;

    japaneseEl.classList.toggle("is-hidden", !showJP);

    // vocab chips
    const vocabMap = new Map((sec.vocab || []).map((v) => [v.vid, v]));
    const refs = s.vocabRefs || [];
    vocabChipsEl.innerHTML = refs
      .map((vid) => {
        const v = vocabMap.get(vid);
        if (!v) return `<div class="chip">${vid}<span>(not found)</span></div>`;
        return `<div class="chip">${v.word}<span>${v.meaning}</span></div>`;
      })
      .join("");

    // buttons disable
    prevBtn.disabled = sentenceIndex === 0;
    nextBtn.disabled = sentenceIndex === sec.sentences.length - 1;
  }

  function setView(mode) {
    const isSent = mode === "sentences";
    tabSentences.classList.toggle("is-active", isSent);
    tabVocab.classList.toggle("is-active", !isSent);
    viewSentences.classList.toggle("is-hidden", !isSent);
    viewVocab.classList.toggle("is-hidden", isSent);
  }

  // --- events ---
  sectionSelect.addEventListener("change", (e) => {
    const id = e.target.value;
    if (!id) return;
    currentSectionId = id;
    sentenceIndex = 0;
    renderSentence();
  });

  prevBtn.addEventListener("click", () => {
    sentenceIndex -= 1;
    renderSentence();
  });

  nextBtn.addEventListener("click", () => {
    sentenceIndex += 1;
    renderSentence();
  });

  toggleJPBtn.addEventListener("click", () => {
    showJP = !showJP;
    renderSentence();
  });

  tabSentences.addEventListener("click", () => setView("sentences"));
  tabVocab.addEventListener("click", () => setView("vocab"));

  // --- init ---
  if (!window.SECTIONS || Object.keys(window.SECTIONS).length === 0) {
    // データが読み込めていない場合のヒント
    console.error("No sections loaded. Did you include <script src='data/section01.js'></script> before app.js ?");
  }

  renderSectionOptions();
  renderSentence();
  setView("sentences");
})();
