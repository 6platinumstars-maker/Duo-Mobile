// section06.js（tags 付与版）
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS["sec06"] = {
  id: "sec06",
  title: "Section 06",
  
  sentences: [
    {
      sid: "s063",
      english: "Anything else? That's it. For here or to go? To go.",
      japanese: "「他にご注文は？」「以上です。」「店内で召し上がりますか？お持ち帰りですか？」「持ち帰りで。」",
      vocabRefs: ["v0307", "v0308", "v0309"]
    },
    {
      sid: "s064",
      english: "How much is this rug? $100 including tax. OK, I'll take it.",
      japanese: "「このじゅうたんはいくらですか？」「税金込みで100ドルです。」「わかりました、買います。」",
      vocabRefs: ["v0310", "v0311", "v0312", "v0313"]
    },
    {
      sid: "s065",
      english: "I don't think those pants look good on you. Try those on. They're really in now!",
      japanese: "あのズボン、あなたには似合わないと思うよ。試着してみなよ。今とても流行ってるんだ！",
      vocabRefs: ["v0314", "v0315", "v0316", "v0317"]
    },
    {
      sid: "s066",
      english: "He got out of the cab in haste, saying, \"Keep the change.\"",
      japanese: "彼は「お釣りはいらない」と言って、慌ててタクシーを降りた。",
      vocabRefs: ["v0318", "v0319", "v0320", "v0321"]
    },
    {
      sid: "s067",
      english: "Delivery service is available to our customers for a slight extra charge.",
      japanese: "配達サービスは、わずかな追加料金でお客様にご利用いただけます。",
      vocabRefs: ["v0322", "v0323", "v0324", "v0325", "v0326", "v0327", "v0328"]
    },
    {
      sid: "s068",
      english: "It's on me. No. You treat me every time we eat out. Well, okay. Let's split the check then.",
      japanese: "「今日は私のおごりよ。」「だめだよ、いつも君が払ってくれてるじゃないか。」「じゃあ、割り勘にしよう。」",
      vocabRefs: ["v0329", "v0330", "v0331", "v0332", "v0333", "v0334"]
    },
    {
      sid: "s069",
      english: "While I was hanging out at the mall, I ran into Ken.",
      japanese: "ショッピングモールでぶらぶらしていたら、ケンにばったり会った。",
      vocabRefs: ["v0335", "v0336", "v0337"]
    },
    {
      sid: "s070",
      english: "I was short of cash, so I withdrew the $100 that I had deposited in my bank account last week.",
      japanese: "現金が足りなかったので、先週自分の銀行口座に預けた100ドルを引き出した。",
      vocabRefs: ["v0338", "v0339", "v0340", "v0341"]
    },
    {
      sid: "s071",
      english: "On her way home she was robbed of her purse.",
      japanese: "彼女は帰宅途中にハンドバッグを奪われた。",
      vocabRefs: ["v0342", "v0343", "v0344"]
    },
    {
      sid: "s072",
      english: "That's odd! Tell me how it happened. I'll explain it to you later.",
      japanese: "「それは変だね！どうしてそうなったのか教えて。」「後で説明するよ。」",
      vocabRefs: ["v0345", "v0346", "v0347"]
    },
    {
      sid: "s073",
      english: "My parents gave me a 6 p.m. curfew as a punishment because I broke my promise.",
      japanese: "約束を破った罰として、両親は私に午後6時の門限を与えた。",
      vocabRefs: ["v0348", "v0349", "v0350"]
    },
    {
      sid: "s074",
      english: "As the proverb goes, The end justifies the means.",
      japanese: "ことわざにあるように、「目的が手段を正当化する」。",
      vocabRefs: ["v0351", "v0352", "v0353", "v0354"]
    },
    {
      sid: "s075",
      english: "Now that I've found that there's no one to turn to, I'll have to stand on my own two feet.",
      japanese: "頼れる人が誰もいないと分かった今、自分の力で立つしかない。",
      vocabRefs: ["v0355", "v0356", "v0357"]
    }
  ],

  vocab: [
    { vid: "v0307", word:"Anything else?", ipa:"/ˈɛniθˌɪŋ ˈɛls/", meaning: "他に何か？", usedIn: ["s063"], tags: ["pron"] },
    { vid: "v0308", word:"That's it", ipa:"/ˈðæts ˈɪt/", meaning: "それで全部です／以上です", usedIn: ["s063"], tags: ["interj"] },
    { vid: "v0309", word:"For here or to go?", ipa:"/ˈfɔr ˈhir ˈɔr ˈtu ˈɡoʊ/", meaning: "店内で食べますか？それともお持ち帰りですか？", usedIn: ["s063"], tags: ["prep"] },

    { vid: "v0310", word:"rug", ipa:"/ˈrʌɡ/", meaning: "じゅうたん", usedIn: ["s064"], tags: ["noun"] },
    { vid: "v0311", word:"including", ipa:"/ˌɪnklˈudɪŋ/", meaning: "～を含めて", usedIn: ["s064"], tags: ["prep"] },
    { vid: "v0312", word:"tax", ipa:"/ˈtæks/", meaning: "税金", usedIn: ["s064"], tags: ["noun"] },
    { vid: "v0313", word:"I'll take it.", ipa:"/ˈaɪl ˈteɪk ˈɪt/", meaning: "それをもらいます／買います", usedIn: ["s064"], tags: ["verb", "verb_take"] },

    { vid: "v0314", word:"pants", ipa:"/ˈpænts/", meaning: "ズボン", usedIn: ["s065"], tags: ["noun"] },
    { vid: "v0315", word:"look good on", ipa:"/ˈlʊk ˈɡʊd ˈɑn/", meaning: "（人に）似合う", usedIn: ["s065"], tags: ["verb"] },
    { vid: "v0316", word:"try … on", ipa:"/ˈtraɪ ... ˈɑn/", meaning: "～を試着する", usedIn: ["s065"], tags: ["verb"] },
    { vid: "v0317", word:"be in", ipa:"/ˈbi ɪn/", meaning: "流行している", usedIn: ["s065"], tags: ["adj"] },

    { vid: "v0318", word:"get out of", ipa:"/ˈɡɛt ˈaʊt ˈʌv/", meaning: "（乗り物などから）降りる", usedIn: ["s066"], tags: ["verb", "verb_get"] },
    { vid: "v0319", word:"cab", ipa:"/ˈkæb/", meaning: "タクシー", usedIn: ["s066"], tags: ["noun"] },
    { vid: "v0320", word:"in haste", ipa:"/ɪn ˈheɪst/", meaning: "慌てて、急いで", usedIn: ["s066"], tags: ["adv"] },
    { vid: "v0321", word:"Keep the change.", ipa:"/ˈkip ðə ˈtʃeɪndʒ/", meaning: "お釣りはいりません。", usedIn: ["s066"], tags: ["verb"] },

    { vid: "v0322", word:"delivery", ipa:"/dɪlˈɪvɚi/", meaning: "配達", usedIn: ["s067"], tags: ["noun"] },
    { vid: "v0323", word:"service", ipa:"/ˈsɝvəs/", meaning: "サービス", usedIn: ["s067"], tags: ["noun"] },
    { vid: "v0324", word:"available", ipa:"/əvˈeɪləbəl/", meaning: "利用できる／利用可能な", usedIn: ["s067"], tags: ["adj"] },
    { vid: "v0325", word:"customer", ipa:"/ˈkʌstəmɚ/", meaning: "顧客／お客様", usedIn: ["s067"], tags: ["noun"] },
    { vid: "v0326", word:"slight", ipa:"/ˈslaɪt/", meaning: "わずかな", usedIn: ["s067"], tags: ["adj"] },
    { vid: "v0327", word:"extra", ipa:"/ˈɛkstrə/", meaning: "追加の", usedIn: ["s067"], tags: ["adj"] },
    { vid: "v0328", word:"charge", ipa:"/ˈtʃɑrdʒ/", meaning: "料金", usedIn: ["s067"], tags: ["noun"] },

    { vid: "v0329", word:"It's on me.", ipa:"/ˈɪts ˈɑn ˈmi/", meaning: "私のおごりです。", usedIn: ["s068"], tags: ["interj"] },
    { vid: "v0330", word:"treat", ipa:"/ˈtrit/", meaning: "おごる／扱う", usedIn: ["s068"], tags: ["verb"] },
    { vid: "v0331", word:"every time", ipa:"/ˈɛvɚi ˈtaɪm/", meaning: "～するたびに", usedIn: ["s068"], tags: ["conj"] },
    { vid: "v0332", word:"eat out", ipa:"/ˈit ˈaʊt/", meaning: "外食する", usedIn: ["s068"], tags: ["verb"] },
    { vid: "v0333", word:"split the check", ipa:"/ˈsplɪt ðə ˈtʃɛk/", meaning: "割り勘にする", usedIn: ["s068"], tags: ["verb"] },
    { vid: "v0334", word:"check", ipa:"/ˈtʃɛk/", meaning: "勘定書／請求書", usedIn: ["s068"], tags: ["noun"] },

    { vid: "v0335", word:"hang out", ipa:"/ˈhæŋ ˈaʊt/", meaning: "ぶらぶらする、時間を過ごす", usedIn: ["s069"], tags: ["verb"] },
    { vid: "v0336", word:"mall", ipa:"/ˈmɔl/", meaning: "ショッピングモール", usedIn: ["s069"], tags: ["noun"] },
    { vid: "v0337", word:"run into", ipa:"/ˈrʌn ˈɪntu/", meaning: "～に偶然出会う", usedIn: ["s069"], tags: ["verb"] },

    { vid: "v0338", word:"be short of", ipa:"/ˈbi ˈʃɔrt ˈʌv/", meaning: "～が不足している", usedIn: ["s070"], tags: ["adj"] },
    { vid: "v0339", word:"withdraw", ipa:"/wɪðdrˈɔ/", meaning: "（お金を）引き出す", usedIn: ["s070"], tags: ["verb"] },
    { vid: "v0340", word:"deposit", ipa:"/dəpˈɑzɪt/", meaning: "預ける、預金する", usedIn: ["s070"], tags: ["verb"] },
    { vid: "v0341", word:"account", ipa:"/əkˈaʊnt/", meaning: "口座", usedIn: ["s070"], tags: ["noun"] },

    { vid: "v0342", word:"on one's way", ipa:"/ˈɑn ˈwʌnz ˈweɪ/", meaning: "～の途中で", usedIn: ["s071"], tags: ["prep"] },
    { vid: "v0343", word:"rob A of B", ipa:"/ˈrɑb A ˈʌv B/", meaning: "A（人）からB（物）を奪う", usedIn: ["s071"], tags: ["verb", "pattern_A_of_B"] },
    { vid: "v0344", word:"purse", ipa:"/ˈpɝs/", meaning: "ハンドバッグ／財布", usedIn: ["s071"], tags: ["noun"] },

    { vid: "v0345", word:"odd", ipa:"/ˈɑd/", meaning: "変な、妙な", usedIn: ["s072"], tags: ["adj"] },
    { vid: "v0346", word:"happen", ipa:"/ˈhæpən/", meaning: "起こる", usedIn: ["s072"], tags: ["verb"] },
    { vid: "v0347", word:"explain A to B", ipa:"/ɪksplˈeɪn A ˈtu B/", meaning: "AをBに説明する", usedIn: ["s072"], tags: ["verb"] },

    { vid: "v0348", word:"curfew", ipa:"/ˈkɝfju/", meaning: "門限", usedIn: ["s073"], tags: ["noun"] },
    { vid: "v0349", word:"punishment", ipa:"/ˈpʌnɪʃmənt/", meaning: "罰", usedIn: ["s073"], tags: ["noun"] },
    { vid: "v0350", word:"break one's promise", ipa:"/ˈbreɪk ˈwʌnz ˈprɑməs/", meaning: "約束を破る", usedIn: ["s073"], tags: ["verb"] },

    { vid: "v0351", word:"as the proverb goes", ipa:"/ˈæz ðə ˈprɑvɚb ˈɡoʊz/", meaning: "ことわざにあるように", usedIn: ["s074"], tags: ["conj"] },
    { vid: "v0352", word:"end", ipa:"/ˈɛnd/", meaning: "目的、結果", usedIn: ["s074"], tags: ["noun"] },
    { vid: "v0353", word:"justify", ipa:"/ˈdʒʌstəfˌaɪ/", meaning: "正当化する", usedIn: ["s074"], tags: ["verb"] },
    { vid: "v0354", word:"means", ipa:"/ˈminz/", meaning: "手段", usedIn: ["s074"], tags: ["noun"] },

    { vid: "v0355", word:"now that", ipa:"/ˈnaʊ ˈðæt/", meaning: "～なのだから、～である今", usedIn: ["s075"], tags: ["conj"] },
    { vid: "v0356", word:"turn to", ipa:"/ˈtɝn ˈtu/", meaning: "～に頼る", usedIn: ["s075"], tags: ["verb"] },
    { vid: "v0357", word:"stand on one's own two feet", ipa:"/ˈstænd ˈɑn ˈwʌnz ˈoʊn ˈtu ˈfit/", meaning: "自立する、自分の力で生きる", usedIn: ["s075"], tags: ["verb"] }
  ]
};
