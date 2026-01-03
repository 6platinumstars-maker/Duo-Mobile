// section02.js
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS["sec02"] = {
  id: "sec02",
  title: "Section 02",
  
  sentences: [
    {
      sid: "s010",
      english: "Bob was so beside himself that he could scarcely tell fact from fiction.",
      japanese: "ボブは我を忘れるほど取り乱していて、現実と虚構の区別がほとんどつかなかった。",
      vocabRefs: ["v0043", "v0044", "v0045", "v0046", "v0047"]
    },
    {
      sid: "s011",
      english: "His new novel, which combines prose with his gift for poetry, is going to be published.",
      japanese: "彼の新しい小説は、散文と詩の才能を組み合わせたもので、出版される予定だ。",
      vocabRefs: ["v0048", "v0049", "v0050", "v0051", "v0052", "v0053"]
    },
    {
      sid: "s012",
      english: "An up-to-date edition of the encyclopedia will come out next month.",
      japanese: "最新の百科事典の新版が来月発売される。",
      vocabRefs: ["v0054", "v0055", "v0056", "v0057"]
    },
    {
      sid: "s013",
      english: "Ms. Yamada translated the fascinating fairy tale into plain Japanese.",
      japanese: "山田さんはその魅力的なおとぎ話をやさしい日本語に翻訳した。",
      vocabRefs: ["v0058", "v0059", "v0060", "v0061", "v0062"]
    },
    {
      sid: "s014",
      english: "The following passage is quoted from a well-known fable.",
      japanese: "次の一節は有名な寓話からの引用である。",
      vocabRefs: ["v0063", "v0064", "v0065", "v0066", "v0067"]
    },
    {
      sid: "s015",
      english: "Are you familiar with contemporary literature? I know next to nothing about it.",
      japanese: "現代文学に詳しいですか？ それについてはほとんど何も知りません。",
      vocabRefs: ["v0068", "v0069", "v0070", "v0071"]
    },
    {
      sid: "s016",
      english: "At times I confuse “curve” with “carve.”",
      japanese: "ときどき「curve（曲線）」と「carve（彫る）」を混同する。",
      vocabRefs: ["v0072", "v0073", "v0074", "v0075"]
    },
    {
      sid: "s017",
      english: "Don’t be shy. Your pronunciation is more or less correct.",
      japanese: "恥ずかしがらないで。あなたの発音はだいたい正しいですよ。",
      vocabRefs: ["v0076", "v0077", "v0078", "v0079"]
    },
    {
      sid: "s018",
      english: "This article contains tips for those who are eager to increase their vocabulary.",
      japanese: "この記事には、語彙を増やしたい人のためのヒントが含まれている。",
      vocabRefs: ["v0080", "v0081", "v0082", "v0083", "v0084", "v0085", "v0086"]
    },
    {
      sid: "s019",
      english: "His latest works are on display at the city hall. They are fabulous beyond description.",
      japanese: "彼の最新作は市庁舎で展示されている。それらは言葉では言い表せないほど素晴らしい。",
      vocabRefs: ["v0087", "v0088", "v0089", "v0090", "v0091", "v0092"]
    },
    {
      sid: "s020",
      english: "Could you move over a little? Oh, sorry. I didn’t realize I was taking up so much space.",
      japanese: "少し詰めてくれませんか？ あ、ごめんなさい。そんなに場所を取っていたとは気づきませんでした。",
      vocabRefs: ["v0093", "v0094", "v0095"]
    },
    {
      sid: "s021",
      english: "What’s this ugly object? This is a piece of abstract art.",
      japanese: "この醜い物体は何ですか？ これは抽象芸術の一つです。",
      vocabRefs: ["v0096", "v0097", "v0098", "v0099"]
    }
  ],
  vocab: [
    { vid: "v0043", word: "beside oneself", meaning: "我を忘れて、取り乱して", usedIn: ["s010"] },
    { vid: "v0044", word: "scarcely", meaning: "ほとんど～ない", usedIn: ["s010"] },
    { vid: "v0045", word: "tell A from B", meaning: "AとBを区別する", usedIn: ["s010"] },
    { vid: "v0046", word: "fact", meaning: "事実", usedIn: ["s010"] },
    { vid: "v0047", word: "fiction", meaning: "作り話、フィクション", usedIn: ["s010"] },

    { vid: "v0048", word: "novel", meaning: "小説", usedIn: ["s011"] },
    { vid: "v0049", word: "combine A with B", meaning: "AをBと組み合わせる", usedIn: ["s011"] },
    { vid: "v0050", word: "prose", meaning: "散文", usedIn: ["s011"] },
    { vid: "v0051", word: "gift", meaning: "才能、贈り物", usedIn: ["s011"] },
    { vid: "v0052", word: "poetry", meaning: "詩", usedIn: ["s011"] },
    { vid: "v0053", word: "publish", meaning: "出版する", usedIn: ["s011"] },

    { vid: "v0054", word: "up-to-date", meaning: "最新の", usedIn: ["s012"] },
    { vid: "v0055", word: "edition", meaning: "版、改訂版", usedIn: ["s012"] },
    { vid: "v0056", word: "encyclopedia", meaning: "百科事典", usedIn: ["s012"] },
    { vid: "v0057", word: "come out", meaning: "出版される、現れる", usedIn: ["s012"] },

    { vid: "v0058", word: "translate", meaning: "翻訳する", usedIn: ["s013"] },
    { vid: "v0059", word: "fascinating", meaning: "魅力的な", usedIn: ["s013"] },
    { vid: "v0060", word: "fairy tale", meaning: "おとぎ話", usedIn: ["s013"] },
    { vid: "v0061", word: "tale", meaning: "話、物語", usedIn: ["s013"] },
    { vid: "v0062", word: "plain", meaning: "わかりやすい、平易な", usedIn: ["s013"] },

    { vid: "v0063", word: "following", meaning: "次の", usedIn: ["s014"] },
    { vid: "v0064", word: "passage", meaning: "一節、文章", usedIn: ["s014"] },
    { vid: "v0065", word: "quote", meaning: "引用する", usedIn: ["s014"] },
    { vid: "v0066", word: "well-known", meaning: "有名な", usedIn: ["s014"] },
    { vid: "v0067", word: "fable", meaning: "寓話", usedIn: ["s014"] },

    { vid: "v0068", word: "familiar", meaning: "詳しい、精通している", usedIn: ["s015"] },
    { vid: "v0069", word: "contemporary", meaning: "現代の", usedIn: ["s015"] },
    { vid: "v0070", word: "literature", meaning: "文学", usedIn: ["s015"] },
    { vid: "v0071", word: "next to", meaning: "ほとんど～ない（否定語とともに）", usedIn: ["s015"] },

    { vid: "v0072", word: "at times", meaning: "ときどき", usedIn: ["s016"] },
    { vid: "v0073", word: "confuse A with B", meaning: "AとBを混同する", usedIn: ["s016"] },
    { vid: "v0074", word: "curve", meaning: "曲線", usedIn: ["s016"] },
    { vid: "v0075", word: "carve", meaning: "彫る、刻む", usedIn: ["s016"] },

    { vid: "v0076", word: "shy", meaning: "恥ずかしがりの", usedIn: ["s017"] },
    { vid: "v0077", word: "pronunciation", meaning: "発音", usedIn: ["s017"] },
    { vid: "v0078", word: "more or less", meaning: "ほとんど、だいたい", usedIn: ["s017"] },
    { vid: "v0079", word: "correct", meaning: "正しい", usedIn: ["s017"] },

    { vid: "v0080", word: "article", meaning: "記事", usedIn: ["s018"] },
    { vid: "v0081", word: "contain", meaning: "含む", usedIn: ["s018"] },
    { vid: "v0082", word: "tip", meaning: "助言、ヒント", usedIn: ["s018"] },
    { vid: "v0083", word: "those who", meaning: "～する人々", usedIn: ["s018"] },
    { vid: "v0084", word: "be eager to do", meaning: "～したがる", usedIn: ["s018"] },
    { vid: "v0085", word: "increase", meaning: "増やす", usedIn: ["s018"] },
    { vid: "v0086", word: "vocabulary", meaning: "語彙", usedIn: ["s018"] },

    { vid: "v0087", word: "latest", meaning: "最新の", usedIn: ["s019"] },
    { vid: "v0088", word: "work", meaning: "作品", usedIn: ["s019"] },
    { vid: "v0089", word: "be on display", meaning: "展示されている", usedIn: ["s019"] },
    { vid: "v0090", word: "city hall", meaning: "市庁舎", usedIn: ["s019"] },
    { vid: "v0091", word: "fabulous", meaning: "すばらしい", usedIn: ["s019"] },
    { vid: "v0092", word: "beyond description", meaning: "言葉では言い表せないほど", usedIn: ["s019"] },

    { vid: "v0093", word: "move over", meaning: "席を詰める、脇に寄る", usedIn: ["s020"] },
    { vid: "v0094", word: "realize", meaning: "気づく", usedIn: ["s020"] },
    { vid: "v0095", word: "take up", meaning: "（場所・時間を）取る、占める", usedIn: ["s020"] },

    { vid: "v0096", word: "ugly", meaning: "醜い", usedIn: ["s021"] },
    { vid: "v0097", word: "object", meaning: "物体、対象", usedIn: ["s021"] },
    { vid: "v0098", word: "a piece of", meaning: "～の一つ、1個の", usedIn: ["s021"] },
    { vid: "v0099", word: "abstract", meaning: "抽象的な", usedIn: ["s021"] }
  ]
};