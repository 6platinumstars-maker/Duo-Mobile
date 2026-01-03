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

  // vocab state
  let vocabIndex = 0; // list内のindex（実際に出している単語）
  let revealed = false;

  let autoNextTimer = null;
  const AUTO_NEXT_DELAY_MS = 650;

  // ループ学習用（キュー方式）
  let queue = [];            // 出題順（indexの配列）
  let queuePos = 0;          // queue内の位置
  let wrongSet = new Set();  // 間違えた問題の集合（次ラウンドへ）
  let roundNo = 1;

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
      .replace(/\s+/g, " ");
  }

  function clearAutoTimer() {
    if (autoNextTimer) {
      clearTimeout(autoNextTimer);
      autoNextTimer = null;
    }
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

  // ---- Vocab UI helpers ----
  function hideAnswerBox() {
    vocabAnswerBox.style.display = "none";
  }

  function showAnswerBox() {
    vocabAnswerBox.style.display = "block";
  }

  // ---- Vocab loop controls ----
  function initVocabCycle(list) {
    queue = list.map((_, i) => i); // 0..n-1
    queuePos = 0;
    wrongSet = new Set();
    roundNo = 1;
  }

  function startNextRound(list) {
    if (wrongSet.size > 0) {
      queue = Array.from(wrongSet);
      wrongSet = new Set();
      queuePos = 0;
      roundNo += 1;
      vocabFeedbackEl.textContent = `復習ラウンド ${roundNo}：${queue.length}問`;
    } else {
      initVocabCycle(list);
      vocabFeedbackEl.textContent = "全問正解！最初からもう一周";
    }
  }

  function scheduleAdvance(list) {
    clearAutoTimer();
    autoNextTimer = setTimeout(() => {
      queuePos += 1;

      if (queuePos >= queue.length) {
        startNextRound(list);
      }

      vocabInputEl.disabled = false;
      renderVocabQuestion();
    }, AUTO_NEXT_DELAY_MS);
  }

  // ---- Vocab rendering ----
  function renderVocabQuestion() {
    const sec = getCurrentSection();
    const list = sec?.vocab || [];

    clearAutoTimer();

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

    // 初回だけキュー初期化
    if (queue.length === 0) initVocabCycle(list);

    queuePos = Math.max(0, Math.min(queuePos, queue.length - 1));
    vocabIndex = queue[queuePos];
    const v = list[vocabIndex];

    revealed = false;
    hideAnswerBox();

    vocabIdEl.textContent = v.vid;
    vocabProgressEl.textContent = `${queuePos + 1} / ${queue.length}`;
    vocabMeaningEl.textContent = v.meaning;

    vocabInputEl.value = "";
    vocabInputEl.disabled = false;
    vocabInputEl.focus();

    vocabFeedbackEl.textContent = "英語を入力して Enter（または答えボタン）";
    vocabAnswerEl.textContent = v.word;
    vocabExtraEl.textContent = "";

    // ボタンは「活性のままでOK」方針
    // （必要ならここでinReview制御を復活できます）
    vocabPrevBtn.disabled = queuePos === 0;
    vocabNextBtn.disabled = queuePos === queue.length - 1;
    vocabRevealBtn.disabled = false;
  }

  function checkVocabAnswer() {
    const sec = getCurrentSection();
    const list = sec?.vocab || [];
    if (!list.length) return;

    const v = list[vocabIndex];

    const userRaw = vocabInputEl.value;
    const user = normalizeAnswer(userRaw);
    const correct = normalizeAnswer(v.word);

    function showAnswerWith(msg) {
      revealed = true;
      showAnswerBox();
      vocabAnswerEl.textContent = v.word;
      vocabExtraEl.textContent = `usedIn: ${(v.usedIn || []).join(", ")}`;
      vocabFeedbackEl.textContent = msg;

      vocabInputEl.disabled = true;
      scheduleAdvance(list);
    }

    // ① 未入力：スキップ（復習へ）
    if (!user) {
      wrongSet.add(vocabIndex);
      showAnswerWith("⏭ スキップ（答えを表示）");
      return;
    }

    // 正解：復習に残さない
    if (user === correct) {
      showAnswerWith("✅ 正解！ 次へ…");
      return;
    }

    // ② 不正解：復習へ
    wrongSet.add(vocabIndex);
    showAnswerWith(`❌ 不正解（入力: "${userRaw}"）`);
  }

  function revealVocabAnswer() {
    const sec = getCurrentSection();
    const list = sec?.vocab || [];
    if (!list.length) return;

    const v = list[vocabIndex];
    revealed = true;
    showAnswerBox();
    vocabAnswerEl.textContent = v.word;
    vocabExtraEl.textContent = `usedIn: ${(v.usedIn || []).join(", ")}`;
    vocabFeedbackEl.textContent = "答えを表示しました。もう一度入力してもOK。";
    vocabInputEl.focus();
  }

  // ---- View switching ----
  function setView(mode) {
    const isSent = mode === "sentences";
    tabSentences.classList.toggle("is-active", isSent);
    tabVocab.classList.toggle("is-active", !isSent);
    viewSentences.classList.toggle("is-hidden", !isSent);
    viewVocab.classList.toggle("is-hidden", isSent);

    if (!isSent) {
      const sec = getCurrentSection();
      if (sec?.vocab?.length) vocabInputEl?.focus();
    }
  }

  // ---- events ----
  sectionSelect.addEventListener("change", (e) => {
    const id = e.target.value;
    if (!id) return;

    currentSectionId = id;

    // reset indices & queues
    sentenceIndex = 0;
    vocabIndex = 0;
    queue = [];
    queuePos = 0;
    wrongSet = new Set();
    roundNo = 1;

    renderSentence();
    renderVocabQuestion();
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

  vocabPrevBtn.addEventListener("click", () => {
    queuePos -= 1;
    renderVocabQuestion();
  });

  vocabNextBtn.addEventListener("click", () => {
    queuePos += 1;
    renderVocabQuestion();
  });

  vocabRevealBtn.addEventListener("click", () => {
    revealVocabAnswer();
  });

  vocabInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkVocabAnswer();
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
