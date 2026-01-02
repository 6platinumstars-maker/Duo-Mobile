// section01.js
const section01 = {
  id: "sec01",
  title: "Section 01",

  sentences: [
    {
      sid: "s001",
      english: "We must respect the will of the individual.",
      japanese: "私たちは個人の意志を尊重しなければならない。",
      vocabRefs: ["v0001", "v0002", "v0003"]
    },
    {
      sid: "s002",
      english: "Take it easy. I can assure you that everything will turn out fine.",
      japanese: "気楽にいこう。すべてうまくいくと保証するよ。",
      vocabRefs: ["v0004", "v0005", "v0006"]
    },
    {
      sid: "s003",
      english: "Let go of your negative outlook on life. Always maintain a positive attitude.",
      japanese: "人生に対する否定的な見方を捨てよう。常に前向きな姿勢を保ちなさい。",
      vocabRefs: ["v0007", "v0008", "v0009", "v0010", "v0011", "v0012"]
    },
    {
      sid: "s004",
      english: "You should be fair to everyone regardless of national origin, gender, or creed.",
      japanese: "国籍、性別、または信条に関係なく、すべての人に公平であるべきです。",
      vocabRefs: ["v0013", "v0014", "v0015", "v0016", "v0017", "v0018"]
    },
    {
      sid: "s005",
      english: "Equality is guaranteed by the Constitution.",
      japanese: "平等は憲法によって保証されている。",
      vocabRefs: ["v0019", "v0020", "v0021"]
    },
    {
      sid: "s006",
      english: "He leaned against the pillar and gazed at the Statue of Liberty.",
      japanese: "彼は柱に寄りかかり、自由の女神像をじっと見つめた。",
      vocabRefs: ["v0022", "v0023", "v0024", "v0025", "v0026"]
    },
    {
      sid: "s007",
      english: "A woman passed by me giving off a subtle scent of perfume. It reminded me of my ex-girlfriend.",
      japanese: "女性が通り過ぎ、ほのかな香水の香りを漂わせた。それで元カノを思い出した。",
      vocabRefs: ["v0027", "v0028", "v0029", "v0030", "v0031", "v0032", "v0033"]
    },
    {
      sid: "s008",
      english: "Natto smells awful but tastes terrific.",
      japanese: "納豆はひどい匂いがするが、味は最高だ。",
      vocabRefs: ["v0034", "v0035", "v0036", "v0037"]
    },
    {
      sid: "s009",
      english: "I’m soaked with sweat. Stand back! You stink. Take a shower.",
      japanese: "汗でびっしょりだ。下がってくれ！くさいよ。シャワーを浴びて。",
      vocabRefs: ["v0038", "v0039", "v0040", "v0041", "v0042"]
    }
  ],

  vocab: [
    { vid: "v0001", word: "respect", meaning: "尊重する／尊敬する", usedIn: ["s001"] },
    { vid: "v0002", word: "will", meaning: "意志、遺言", usedIn: ["s001"] },
    { vid: "v0003", word: "individual", meaning: "個人", usedIn: ["s001"] },

    { vid: "v0004", word: "Take it easy", meaning: "気楽にいこう／落ち着け", usedIn: ["s002"] },
    { vid: "v0005", word: "assure A that ...", meaning: "Aに〜だと保証する", usedIn: ["s002"] },
    { vid: "v0006", word: "turn out", meaning: "結果として〜になる", usedIn: ["s002"] },

    { vid: "v0007", word: "let go of / let ... go", meaning: "手放す／解放する", usedIn: ["s003"] },
    { vid: "v0008", word: "negative", meaning: "否定的な／消極的な", usedIn: ["s003"] },
    { vid: "v0009", word: "outlook", meaning: "見方／考え方", usedIn: ["s003"] },
    { vid: "v0010", word: "maintain", meaning: "維持する／保つ", usedIn: ["s003"] },
    { vid: "v0011", word: "positive", meaning: "前向きな／積極的な", usedIn: ["s003"] },
    { vid: "v0012", word: "attitude", meaning: "態度／姿勢", usedIn: ["s003"] },

    { vid: "v0013", word: "fair", meaning: "公平な／公正な", usedIn: ["s004"] },
    { vid: "v0014", word: "regardless of", meaning: "～に関係なく", usedIn: ["s004"] },
    { vid: "v0015", word: "national", meaning: "国の／国家の", usedIn: ["s004"] },
    { vid: "v0016", word: "origin", meaning: "起源／出身", usedIn: ["s004"] },
    { vid: "v0017", word: "gender", meaning: "性別", usedIn: ["s004"] },
    { vid: "v0018", word: "creed", meaning: "信条／主義", usedIn: ["s004"] },

    { vid: "v0019", word: "equality", meaning: "平等", usedIn: ["s005"] },
    { vid: "v0020", word: "guarantee", meaning: "保証する", usedIn: ["s005"] },
    { vid: "v0021", word: "Constitution", meaning: "憲法", usedIn: ["s005"] },

    { vid: "v0022", word: "lean", meaning: "寄りかかる／もたれる", usedIn: ["s006"] },
    { vid: "v0023", word: "pillar", meaning: "柱", usedIn: ["s006"] },
    { vid: "v0024", word: "gaze at", meaning: "じっと見つめる", usedIn: ["s006"] },
    { vid: "v0025", word: "statue", meaning: "彫像", usedIn: ["s006"] },
    { vid: "v0026", word: "liberty", meaning: "自由", usedIn: ["s006"] },

    { vid: "v0027", word: "pass by", meaning: "通り過ぎる", usedIn: ["s007"] },
    { vid: "v0028", word: "give off", meaning: "放つ／発する", usedIn: ["s007"] },
    { vid: "v0029", word: "subtle", meaning: "かすかな／微妙な", usedIn: ["s007"] },
    { vid: "v0030", word: "scent", meaning: "香り", usedIn: ["s007"] },
    { vid: "v0031", word: "perfume", meaning: "香水", usedIn: ["s007"] },
    { vid: "v0032", word: "remind A of B", meaning: "AにBを思い出させる", usedIn: ["s007"] },
    { vid: "v0033", word: "ex-", meaning: "元〜（ex-girlfriend＝元彼女）", usedIn: ["s007"] },

    { vid: "v0034", word: "smell", meaning: "においがする", usedIn: ["s008"] },
    { vid: "v0035", word: "awful", meaning: "ひどい／いやな", usedIn: ["s008"] },
    { vid: "v0036", word: "taste", meaning: "味がする", usedIn: ["s008"] },
    { vid: "v0037", word: "terrific", meaning: "素晴らしい", usedIn: ["s008"] },

    { vid: "v0038", word: "soaked", meaning: "びしょぬれの", usedIn: ["s009"] },
    { vid: "v0039", word: "sweat", meaning: "汗", usedIn: ["s009"] },
    { vid: "v0040", word: "stand back", meaning: "下がる／距離を取る", usedIn: ["s009"] },
    { vid: "v0041", word: "stink", meaning: "くさい／悪臭を放つ", usedIn: ["s009"] },
    { vid: "v0042", word: "take a shower", meaning: "シャワーを浴びる", usedIn: ["s009"] }
  ]
};

