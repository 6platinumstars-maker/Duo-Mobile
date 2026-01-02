// js/app.js
(function () {
  const $ = (id) => document.getElementById(id);

  // ---- top controls ----
  const sectionSelect = $("sectionSelect");
  const tabSentences = $("tabSentences");
  const tabVocab = $("tabVocab");
  const viewSentences = $("viewSentences");
  const viewVocab = $("viewVocab");

  // ---- sentences UI ----
  const sidEl = $("sid");
  const progressEl = $("progress");
  const englishEl = $("english");
  const japaneseEl = $("japanese");
  const vocabChipsEl = $("vocabChips");
  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");
  const toggleJPBtn = $("toggleJPBtn");

  // ---- vocab UI ----
  const vocabIdEl = $("vocabId");
  const vocabProgressEl = $("vocabProgress");
  const vocabMeaningEl = $("vocabMeaning");
  const vocabInputEl = $("vocabInput");
  const vocabFeedbackEl = $("vocabFeedback");
  const vocabPrevBtn = $("vocabPrevBtn");
  const vocabNextBtn = $("vocabNextBtn");
  const vocabRevealBtn = $("vocabRevealBtn");
  const vocabAnswerBox = $("vocabAnswerBox");
  const vocabAnswerEl = $("vocabAnswer");
  const vocabExtraEl = $("vocabExtra");

  // --- state ---
  let currentSectionId = "sec01";
  let sentenceIndex = 0;
  let showJP = true;

  let vocabIndex = 0;
  let revealed = false;

  // --- helpers ---
  function getSectionIds() {
    return Object.keys(window.SECTIONS || {}).sort();
  }

  function getCurrentSection() {
    return window.SECTIONS?.[currentSectionId];
  }

  function normalizeAnswer(s) {
    return (s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " "); // collapse spaces
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

  // ---- Sentences ----
  function renderSentence() {
    const sec = getCurrentSection();
    if (!sec?.sentences?.length) {
      sidEl.textContent = "—";
      progressEl.textContent = "0 / 0";
      englishEl.textContent = "No sentences.";
      japaneseEl.textContent = "";
      vocabChipsEl.innerHTML = "";
      return;
    }

    sentenceIndex = Math.max(0, Math.min(sentenceIndex, sec.sentences.length - 1));
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

    prevBtn.disabled = sentenceIndex === 0;
    nextBtn.disabled = sentenceIndex === sec.sentences.length - 1;
  }

  // ---- Vocab Test (meaning -> English) ----
  function hideAnswerBox() {
    vocabAnswerBox.style.display = "none";
  }

  function showAnswerBox() {
    vocabAnswerBox.style.display = "block";
  }

  function renderVocabQuestion() {
    const sec = getCurrentSection();
    const list = sec?.vocab || [];
    if (!list.length) {
      vocabIdEl.textContent = "—";
      vocabProgressEl.textContent = "0 / 0";
      vocabMeaningEl.textContent = "No vocab.";
      vocabInputEl.value = "";
      vocabFeedbackEl.textContent = "";
      vocabAnswerEl.textContent = "";
      vocabExtraEl.textContent = "";
      vocabPrevBtn.disabled = true;
      vocabNextBtn.disabled = true;
      vocabRevealBtn.disabled = true;
      showAnswerBox();
      return;
    }

    vocabIndex = Math.max(0, Math.min(vocabIndex, list.length - 1));
    const v = list[vocabIndex];

    revealed = false;
    hideAnswerBox();

    vocabIdEl.textContent = v.vid;
    vocabProgressEl.textContent = `${vocabIndex + 1} / ${list.length}`;
    vocabMeaningEl.textContent = v.meaning;

    vocabInputEl.value = "";
    vocabInputEl.focus();

    vocabFeedbackEl.textContent = "英語を入力して Enter（または答えボタン）";
    vocabAnswerEl.textContent = v.word;
    vocabExtraEl.textContent = "";

    vocabPrevBtn.disabled = vocabIndex === 0;
    vocabNextBtn.disabled = vocabIndex === list.length - 1;
    vocabRevealBtn.disabled = false;
  }

  function checkVocabAnswer() {
    const sec = getCurrentSection();
    const list = sec?.vocab || [];
    if (!list.length) return;

    const v = list[vocabIndex];

    const user = normalizeAnswer(vocabInputEl.value);
    const correct = normalizeAnswer(v.word);

    if (!user) {
      vocabFeedbackEl.textContent = "入力してください（例：respect）";
      return;
    }

    if (user === correct) {
      vocabFeedbackEl.textContent = "✅ 正解！";
      // 次へ進みやすいように少し待ってから次へ…は入れず、ユーザー操作に任せる
      // ただし、答えを見たい人向けに表示も出す
      revealed = true;
      showAnswerBox();
      vocabExtraEl.textContent = `usedIn: ${(v.usedIn || []).join(", ")}`;
    } else {
      vocabFeedbackEl.textContent = `❌ ちがいます（入力: "${vocabInputEl.value}"）`;
      // 不正解でも答えは出さない（学習負荷を保つ）
      // 見たい場合は「答え」ボタンを押す
    }
  }

  function revealVocabAnswer() {
    const sec = getCurrentSection();
    const list = sec?.vocab || [];
    if (!list.length) return;

    const v = list[vocabIndex];
    revealed = true;
    showAnswerBox();
    vocabFeedbackEl.textContent = "答えを表示しました。もう一度入力してもOK。";
    vocabExtraEl.textContent = `usedIn: ${(v.usedIn || []).join(", ")}`;
    vocabInputEl.focus();
  }

  // ---- View switching ----
  function setView(mode) {
    const isSent = mode === "sentences";
    tabSentences.classList.toggle("is-active", isSent);
    tabVocab.classList.toggle("is-active", !isSent);
    viewSentences.classList.toggle("is-hidden", !isSent);
    viewVocab.classList.toggle("is-hidden", isSent);

    // タブ切替時のUX
    if (!isSent) {
      // vocab view
      const sec = getCurrentSection();
      if (sec?.vocab?.length) {
        vocabInputEl?.focus();
      }
    }
  }

  // ---- events ----
  sectionSelect.addEventListener("change", (e) => {
    const id = e.target.value;
    if (!id) return;
    currentSectionId = id;

    // reset indices for new section
    sentenceIndex = 0;
    vocabIndex = 0;

    renderSentence();
    renderVocabQuestion();
  });

  // sentence controls
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

  // tabs
  tabSentences.addEventListener("click", () => setView("sentences"));
  tabVocab.addEventListener("click", () => setView("vocab"));

  // vocab controls
  vocabPrevBtn.addEventListener("click", () => {
    vocabIndex -= 1;
    renderVocabQuestion();
  });

  vocabNextBtn.addEventListener("click", () => {
    vocabIndex += 1;
    renderVocabQuestion();
  });

  vocabRevealBtn.addEventListener("click", () => {
    revealVocabAnswer();
  });

  vocabInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkVocabAnswer();
    }
  });

  // --- init ---
  if (!window.SECTIONS || Object.keys(window.SECTIONS).length === 0) {
    console.error("No sections loaded. Include data scripts before js/app.js");
  }

  renderSectionOptions();
  renderSentence();
  renderVocabQuestion();
  setView("sentences");
})();
