// section09.js
const section09 = {
  id: "sec09",
  title: "Section 09",
  sentences: [
    {
      sid: "s101",
      english: "I was amazed to see that our utility bills came to so much!",
      japanese: "私は公共料金の請求額がそんなに高額だったので驚いた。",
      vocabRefs: ["v0482", "v0483", "v0484", "v0485"]
    },
    {
      sid: "s102",
      english: "Turn the faucet off! Mom yelled in a rage.",
      japanese: "「蛇口を閉めなさい！」と母が怒って叫んだ。",
      vocabRefs: ["v0486", "v0487", "v0488", "v0489"]
    },
    {
      sid: "s103",
      english: "Tighten the lid so the food doesn’t go bad.",
      japanese: "食べ物が腐らないように蓋をしっかり閉めなさい。",
      vocabRefs: ["v0490", "v0491", "v0492", "v0493"]
    },
    {
      sid: "s104",
      english: "Can I borrow your scissors? Sure, here you are.",
      japanese: "「はさみを借りてもいい？」「いいわよ、どうぞ。」",
      vocabRefs: ["v0494", "v0495", "v0496", "v0497"]
    },
    {
      sid: "s105",
      english: "You can substitute some transparent glue for a needle and thread.",
      japanese: "針と糸の代わりに透明の接着剤を使ってもいいよ。",
      vocabRefs: ["v0498", "v0499", "v0500", "v0501", "v0502"]
    },
    {
      sid: "s106",
      english: "I dyed this fabric and it shrank.",
      japanese: "この布を染めたら縮んでしまった。",
      vocabRefs: ["v0503", "v0504", "v0505"]
    },
    {
      sid: "s107",
      english: "I’m getting rid of this leather jacket because it’s worn out at the elbows.",
      japanese: "この革のジャケットは肘の部分がすり切れているので処分するつもりだ。",
      // ※IDの重複を避けるため、肘(elbow)には v0506 を割り当てています
      vocabRefs: ["v0507", "v0508", "v0509", "v0506"]
    },
    {
      sid: "s108",
      english: "Add some flour to the mixture and stir it until it becomes thick.",
      japanese: "混ぜ物に小麦粉を加えて、ドロッとするまでかき混ぜなさい。",
      vocabRefs: ["v0510", "v0511", "v0512", "v0513", "v0514"]
    },
    {
      sid: "s109",
      english:
        "What should we do with the leftovers? Keep them in the fridge for now. I’ll heat them in the microwave later.",
      japanese:
        "「残り物はどうしよう？」「とりあえず冷蔵庫に入れておいて。あとで電子レンジで温めるわ。」",
      vocabRefs: ["v0515", "v0516", "v0517", "v0518", "v0519"]
    },
    {
      sid: "s110",
      english:
        "I could have laid out all that money on a new PC, but on second thought I decided to put some aside for a rainy day.",
      japanese:
        "あの金を全部新しいパソコンに使うこともできたが、考え直して、いざという時のために少し取っておくことにした。",
      vocabRefs: ["v0520", "v0521", "v0522", "v0523", "v0524"]
    },
    {
      sid: "s111",
      english: "A cell phone has become something of a necessity, and I can’t do without one.",
      japanese: "携帯電話は一種の必需品になっていて、それなしでは生活できない。",
      vocabRefs: ["v0525", "v0526", "v0527", "v0528"]
    },
    {
      sid: "s112",
      english:
        "No sooner had I sat back and relaxed than my wife asked me to do the chores.",
      japanese: "くつろいだ途端に、妻に家事を頼まれた。",
      vocabRefs: ["v0529", "v0530", "v0531", "v0532"]
    },
    {
      sid: "s113",
      english: "She laid the baby down and lay down beside him.",
      japanese: "彼女は赤ん坊を寝かせ、自分もその隣に横になった。",
      vocabRefs: ["v0533", "v0534"]
    }
  ],
  vocab: [
    { vid: "v0482", word: "be amazed to see", meaning: "～を見て驚く", usedIn: ["s101"] },
    { vid: "v0483", word: "utility", meaning: "公共料金", usedIn: ["s101"] },
    { vid: "v0484", word: "bill", meaning: "請求書", usedIn: ["s101"] },
    { vid: "v0485", word: "come to", meaning: "（金額が）～に達する", usedIn: ["s101"] },

    { vid: "v0486", word: "turn … off", meaning: "～を止める・消す", usedIn: ["s102"] },
    { vid: "v0487", word: "faucet", meaning: "蛇口", usedIn: ["s102"] },
    { vid: "v0488", word: "yell", meaning: "叫ぶ", usedIn: ["s102"] },
    { vid: "v0489", word: "in a rage", meaning: "怒って、激怒して", usedIn: ["s102"] },

    { vid: "v0490", word: "tighten", meaning: "～を締める", usedIn: ["s103"] },
    { vid: "v0491", word: "lid", meaning: "蓋", usedIn: ["s103"] },
    { vid: "v0492", word: "so A will do", meaning: "Aが～するように", usedIn: ["s103"] },
    { vid: "v0493", word: "go bad", meaning: "腐る", usedIn: ["s103"] },

    { vid: "v0494", word: "borrow", meaning: "借りる", usedIn: ["s104"] },
    { vid: "v0495", word: "scissors", meaning: "はさみ", usedIn: ["s104"] },
    { vid: "v0496", word: "sure", meaning: "もちろん", usedIn: ["s104"] },
    { vid: "v0497", word: "here you are", meaning: "はいどうぞ", usedIn: ["s104"] },

    { vid: "v0498", word: "substitute … for A", meaning: "Aの代わりに…を使う", usedIn: ["s105"] },
    { vid: "v0499", word: "transparent", meaning: "透明な", usedIn: ["s105"] },
    { vid: "v0500", word: "glue", meaning: "のり、接着剤", usedIn: ["s105"] },
    { vid: "v0501", word: "needle", meaning: "針", usedIn: ["s105"] },
    { vid: "v0502", word: "thread", meaning: "糸", usedIn: ["s105"] },

    { vid: "v0503", word: "dye", meaning: "～を染める", usedIn: ["s106"] },
    { vid: "v0504", word: "fabric", meaning: "布、生地", usedIn: ["s106"] },
    { vid: "v0505", word: "shrink", meaning: "縮む", usedIn: ["s106"] },

    { vid: "v0507", word: "be rid of", meaning: "～を取り除く／処分する", usedIn: ["s107"] },
    { vid: "v0508", word: "leather", meaning: "革", usedIn: ["s107"] },
    { vid: "v0509", word: "wear out", meaning: "すり切れる、使い古される", usedIn: ["s107"] },
    { vid: "v0506", word: "elbow", meaning: "肘", usedIn: ["s107"] },

    { vid: "v0510", word: "add A to B", meaning: "AをBに加える", usedIn: ["s108"] },
    { vid: "v0511", word: "flour", meaning: "小麦粉", usedIn: ["s108"] },
    { vid: "v0512", word: "mixture", meaning: "混合物", usedIn: ["s108"] },
    { vid: "v0513", word: "stir", meaning: "かき混ぜる", usedIn: ["s108"] },
    { vid: "v0514", word: "thick", meaning: "濃い、ドロッとした", usedIn: ["s108"] },

    { vid: "v0515", word: "do with", meaning: "～を処理する、扱う", usedIn: ["s109"] },
    { vid: "v0516", word: "leftovers", meaning: "残り物", usedIn: ["s109"] },
    { vid: "v0517", word: "fridge", meaning: "冷蔵庫", usedIn: ["s109"] },
    { vid: "v0518", word: "for now", meaning: "今のところは、とりあえず", usedIn: ["s109"] },
    { vid: "v0519", word: "microwave", meaning: "電子レンジ", usedIn: ["s109"] },

    { vid: "v0520", word: "lay … out", meaning: "（金を）つぎ込む", usedIn: ["s110"] },
    { vid: "v0521", word: "on second thought", meaning: "考え直してみると", usedIn: ["s110"] },
    { vid: "v0522", word: "decide to do", meaning: "～することを決める", usedIn: ["s110"] },
    { vid: "v0523", word: "put … aside", meaning: "～を取っておく", usedIn: ["s110"] },
    { vid: "v0524", word: "for a rainy day", meaning: "まさかの時に備えて", usedIn: ["s110"] },

    { vid: "v0525", word: "cell phone", meaning: "携帯電話", usedIn: ["s111"] },
    { vid: "v0526", word: "something of a", meaning: "一種の～、ちょっとした～", usedIn: ["s111"] },
    { vid: "v0527", word: "necessity", meaning: "必需品", usedIn: ["s111"] },
    { vid: "v0528", word: "do without", meaning: "～なしで済ます", usedIn: ["s111"] },

    { vid: "v0529", word: "No sooner A than B", meaning: "AするやいなやBする", usedIn: ["s112"] },
    { vid: "v0530", word: "sit back", meaning: "ゆったり座る、くつろぐ", usedIn: ["s112"] },
    { vid: "v0531", word: "relax", meaning: "くつろぐ、緊張を解く", usedIn: ["s112"] },
    { vid: "v0532", word: "chore", meaning: "雑用、家事", usedIn: ["s112"] },

    { vid: "v0533", word: "lay", meaning: "～を横たえる（他動詞）", usedIn: ["s113"] },
    { vid: "v0534", word: "lie down", meaning: "横になる（自動詞）", usedIn: ["s113"] }
  ]
};
