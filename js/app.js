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

  // ---- MCQ (4 choices) UI ----
  const mcqBox = $("mcqBox");
  const mcqToggleBtn = $("mcqToggleBtn");
  const mcqSkipBtn = $("mcqSkipBtn");
  const mcqChoicesEl = $("mcqChoices");
  const mcqHintEl = $("mcqHint");

  // --- state ---
  let currentSectionId = "sec01";
  let sentenceIndex = 0;
  let showJP = true;

  // vocab state
  let vocabIndex = 0; // list内のindex（実際に出している単語）
  let revealed = false;

  // auto-next
  let autoNextTimer = null;
  const AUTO_NEXT_DELAY_MS = 950; // 速すぎるとスマホで読みづらいので少し短め

  // loop learning (queue)
  let queue = [];            // 出題順（list indexの配列）
  let queuePos = 0;          // queue内の位置
  let wrongSet = new Set();  // 間違えた問題（次ラウンドへ）
  let roundNo = 1;

  // input lock (disabledは使わない)
  let vocabLocked = false;

  // MCQ mode
  let mcqMode = true;        // ★デフォON（スマホ想定）
  let mcqAnswered = false;   // 連打防止

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

  function focusVocabInput() {
    // iOS Safari: 描画直後にfocusが外れることがあるので2段rAF
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        vocabInputEl.focus({ preventScroll: true });
        try {
          const len = vocabInputEl.value.length;
          vocabInputEl.setSelectionRange(len, len);
        } catch (_) {}
      });
    });
  }

  function lockVocabInput() {
    vocabLocked = true;
    vocabInputEl.readOnly = true;
  }

  function unlockVocabInput() {
    vocabLocked = false;
    vocabInputEl.readOnly = false;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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
    queue = list.map((_, i) => i);
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
      // 表示はrenderVocabQuestionの「通常案内」で上書きされることがあるので、mcqHint側にも出す
      mcqHintEl && (mcqHintEl.textContent = `復習ラウンド ${roundNo}：${queue.length}問`);
      vocabFeedbackEl.textContent = `復習ラウンド ${roundNo}：${queue.length}問`;
    } else {
      initVocabCycle(list);
      mcqHintEl && (mcqHintEl.textContent = "全問正解！最初からもう一周");
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
      renderVocabQuestion();
      if (!mcqMode) focusVocabInput();
    }, AUTO_NEXT_DELAY_MS);
  }

  // ---- MCQ (4 choices) ----
  function renderMcq(list, correctWord) {
    if (!mcqBox) return;

    mcqAnswered = false;

    const correctN = normalizeAnswer(correctWord);
    const pool = list
      .map((v) => v.word)
      .filter((w) => normalizeAnswer(w) !== correctN);

    shuffle(pool);

    const choices = shuffle([correctWord, ...pool.slice(0, 3)]);
    mcqChoicesEl.innerHTML = "";

    choices.forEach((w) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn"; // style.cssで .mcqChoices .btn を当てる想定
      btn.textContent = w;

      btn.addEventListener("click", () => {
        if (mcqAnswered) return;
        mcqAnswered = true;

        const ok = normalizeAnswer(w) === correctN;

        // 答え表示
        showAnswerBox();
        vocabAnswerEl.textContent = correctWord;

        if (ok) {
          mcqHintEl.textContent = "✅ 正解！";
          vocabFeedbackEl.textContent = "✅ 正解！";
        } else {
          mcqHintEl.textContent = `❌ 不正解（正解: ${correctWord}）`;
          vocabFeedbackEl.textContent = `❌ 不正解（正解: ${correctWord}）`;
          wrongSet.add(vocabIndex);
        }

        lockVocabInput(); // 連打防止（readOnly）
        scheduleAdvance(list);
      });

      mcqChoicesEl.appendChild(btn);
    });
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

      if (mcqBox) {
        mcqChoicesEl.innerHTML = "";
        mcqHintEl.textContent = "";
      }
      return;
    }

    if (queue.length === 0) initVocabCycle(list);

    queuePos = Math.max(0, Math.min(queuePos, queue.length - 1));
    vocabIndex = queue[queuePos];
    const v = list[vocabIndex];

    revealed = false;
    hideAnswerBox();

    vocabIdEl.textContent = v.vid;
    vocabProgressEl.textContent = `${queuePos + 1} / ${queue.length}`;
    vocabMeaningEl.textContent = v.meaning;

    // 入力欄は常に存在するが、MCQならreadOnly
    unlockVocabInput();
    vocabInputEl.value = "";

    // ラウンド案内（MCQ/入力共通）
    const roundText = roundNo > 1 ? `復習ラウンド ${roundNo}：${queue.length}問` : "";
    vocabFeedbackEl.textContent = mcqMode
      ? (roundText || "4択で回答してください")
      : (roundText || "英語を入力して Enter（または答えボタン）");

    vocabAnswerEl.textContent = v.word;
    vocabExtraEl.textContent = "";

    // buttons
    vocabPrevBtn.disabled = queuePos === 0;
    vocabNextBtn.disabled = queuePos === queue.length - 1;
    vocabRevealBtn.disabled = false;

    // MCQ UI
    if (mcqBox) {
      mcqBox.style.display = "block";
      mcqToggleBtn.textContent = `4択: ${mcqMode ? "ON" : "OFF"}`;
      mcqHintEl.textContent = mcqMode ? "選んでください" : "";

      if (mcqMode) {
        // 入力は使わない
        lockVocabInput();
        renderMcq(list, v.word);
      } else {
        // 入力式
        mcqChoicesEl.innerHTML = "";
        mcqHintEl.textContent = "";
        unlockVocabInput();
        focusVocabInput();
      }
    } else {
      // MCQ UIが無い場合は入力式にフォールバック
      unlockVocabInput();
      focusVocabInput();
    }
  }

  // ---- Input mode answer check (meaning -> English) ----
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

      lockVocabInput();
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
    vocabFeedbackEl.textContent = "答えを表示しました。";
    if (!mcqMode) focusVocabInput();
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
      if (sec?.vocab?.length && !mcqMode) focusVocabInput();
    }
  }

  // ---- events ----
  sectionSelect.addEventListener("change", (e) => {
    const id = e.target.value;
    if (!id) return;

    currentSectionId = id;

    sentenceIndex = 0;
    vocabIndex = 0;
    queue = [];
    queuePos = 0;
    wrongSet = new Set();
    roundNo = 1;

    unlockVocabInput();
    clearAutoTimer();

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

  // vocab controls (queuePosで移動)
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

  // MCQ controls (存在する場合のみ)
  if (mcqToggleBtn) {
    mcqToggleBtn.addEventListener("click", () => {
      mcqMode = !mcqMode;
      renderVocabQuestion();
    });
  }

  if (mcqSkipBtn) {
    mcqSkipBtn.addEventListener("click", () => {
      const sec = getCurrentSection();
      const list = sec?.vocab || [];
      if (!list.length) return;

      wrongSet.add(vocabIndex);
      mcqHintEl && (mcqHintEl.textContent = "⏭ スキップ（復習へ）");
      lockVocabInput();
      scheduleAdvance(list);
    });
  }

  // input enter (only when MCQ OFF)
  vocabInputEl.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    if (mcqMode) return; // ★4択ONなら入力判定しない

    if (vocabLocked) {
      e.preventDefault();
      return;
    }

    checkVocabAnswer();
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
