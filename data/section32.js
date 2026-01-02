// section32.js
const section32 = {
  id: "sec32",
  title: "Section 32",
  sentences: [
    {
      sid: "s383",
      english: "I want to spend the rest of my life pursuing my ideals.",
      japanese: "私は人生の残りを理想を追い求めることに費やしたい。",
      vocabRefs: ["v1764", "v1765", "v1766", "v1767"],
    },
    {
      sid: "s384",
      english: "After retirement, I devoted myself to caring for orphans.",
      japanese: "引退後、私は孤児の世話をすることに専念した。",
      vocabRefs: ["v1768", "v1769", "v1770", "v1771"],
    },
    {
      sid: "s385",
      english:
        "For the sake of children in need, we cooperated to collect donations.",
      japanese: "困っている子どもたちのために、私たちは協力して寄付を集めた。",
      vocabRefs: ["v1772", "v1773", "v1774", "v1775", "v1776"],
    },
    {
      sid: "s386",
      english:
        "The charity is named after a man who gave away some two billion yen.",
      japanese: "その慈善団体は、約20億円を寄付した男性にちなんで名付けられている。",
      vocabRefs: ["v1777", "v1778", "v1779", "v1780", "v1781"],
    },
    {
      sid: "s387",
      english: "His autobiography was released today and was sold out by noon.",
      japanese: "彼の自叙伝は今日発売され、正午までに完売した。",
      vocabRefs: ["v1782", "v1783", "v1784"],
    },
    {
      sid: "s388",
      english:
        "Ishimaru, who is often referred to as a man of integrity, is going to run for mayor.",
      japanese: "高潔な人物とよく呼ばれる石丸は、市長選に立候補する予定だ。",
      vocabRefs: ["v1785", "v1786", "v1787", "v1788"],
    },
    {
      sid: "s389",
      english: "The candidate was disappointed by the outcome of the election.",
      japanese: "その候補者は選挙結果に失望した。",
      vocabRefs: ["v1789", "v1790", "v1791", "v1792"],
    },
    {
      sid: "s390",
      english: "The municipal council should concentrate more on specific issues.",
      japanese: "市議会はもっと具体的な問題に集中すべきだ。",
      vocabRefs: ["v1793", "v1794", "v1795", "v1796", "v1797"],
    },
    {
      sid: "s391",
      english:
        "It is the case that those who live on a pension are forced to lead a hard life.",
      japanese: "年金で生活している人々が厳しい生活を強いられているのは事実だ。",
      vocabRefs: ["v1798", "v1799", "v1800", "v1801", "v1802"],
    },
    {
      sid: "s392",
      english: "We should leave out this data. It's far from accurate.",
      japanese: "このデータは除外すべきだ。正確とは程遠い。",
      vocabRefs: ["v1803", "v1804", "v1805", "v1806"],
    },
  ],
  vocab: [
    // 383
    { vid: "v1764", word: "spend A doing", meaning: "Aを〜することに費やす", usedIn: ["s383"] },
    { vid: "v1765", word: "rest", meaning: "残り", usedIn: ["s383"] },
    { vid: "v1766", word: "pursuing", meaning: "追求していること", usedIn: ["s383"] },
    { vid: "v1767", word: "ideals", meaning: "理想（複数）", usedIn: ["s383"] },

    // 384
    { vid: "v1768", word: "retirement", meaning: "引退、退職", usedIn: ["s384"] },
    { vid: "v1769", word: "devote A to B", meaning: "AをBに捧げる", usedIn: ["s384"] },
    { vid: "v1770", word: "care for", meaning: "〜の世話をする", usedIn: ["s384"] },
    { vid: "v1771", word: "orphan", meaning: "孤児", usedIn: ["s384"] },

    // 385
    { vid: "v1772", word: "for the sake of", meaning: "〜のために", usedIn: ["s385"] },
    { vid: "v1773", word: "in need", meaning: "困っている", usedIn: ["s385"] },
    { vid: "v1774", word: "cooperate", meaning: "協力する", usedIn: ["s385"] },
    { vid: "v1775", word: "collect", meaning: "集める", usedIn: ["s385"] },
    { vid: "v1776", word: "donation", meaning: "寄付", usedIn: ["s385"] },

    // 386
    { vid: "v1777", word: "charity", meaning: "慈善団体", usedIn: ["s386"] },
    { vid: "v1778", word: "name A after B", meaning: "AをBにちなんで名付ける", usedIn: ["s386"] },
    { vid: "v1779", word: "give away", meaning: "与える、寄付する", usedIn: ["s386"] },
    { vid: "v1780", word: "some", meaning: "約〜", usedIn: ["s386"] },
    { vid: "v1781", word: "billion", meaning: "10億", usedIn: ["s386"] },

    // 387
    { vid: "v1782", word: "autobiography", meaning: "自叙伝", usedIn: ["s387"] },
    { vid: "v1783", word: "release", meaning: "発売する", usedIn: ["s387"] },
    { vid: "v1784", word: "be sold out", meaning: "売り切れる", usedIn: ["s387"] },

    // 388
    { vid: "v1785", word: "refer to", meaning: "〜と呼ぶ／言及する", usedIn: ["s388"] },
    { vid: "v1786", word: "integrity", meaning: "高潔さ、誠実さ", usedIn: ["s388"] },
    { vid: "v1787", word: "run for", meaning: "〜に立候補する", usedIn: ["s388"] },
    { vid: "v1788", word: "mayor", meaning: "市長", usedIn: ["s388"] },

    // 389
    { vid: "v1789", word: "candidate", meaning: "候補者", usedIn: ["s389"] },
    { vid: "v1790", word: "be disappointed", meaning: "失望する", usedIn: ["s389"] },
    { vid: "v1791", word: "outcome", meaning: "結果", usedIn: ["s389"] },
    { vid: "v1792", word: "election", meaning: "選挙", usedIn: ["s389"] },

    // 390
    { vid: "v1793", word: "municipal", meaning: "市の", usedIn: ["s390"] },
    { vid: "v1794", word: "council", meaning: "議会", usedIn: ["s390"] },
    { vid: "v1795", word: "concentrate on", meaning: "〜に集中する", usedIn: ["s390"] },
    { vid: "v1796", word: "specific", meaning: "具体的な", usedIn: ["s390"] },
    { vid: "v1797", word: "issues", meaning: "問題（複数）", usedIn: ["s390"] },

    // 391
    { vid: "v1798", word: "It is the case that", meaning: "〜というのは事実だ", usedIn: ["s391"] },
    { vid: "v1799", word: "live on", meaning: "〜で生活する", usedIn: ["s391"] },
    { vid: "v1800", word: "pension", meaning: "年金", usedIn: ["s391"] },
    { vid: "v1801", word: "force A to do", meaning: "Aに〜することを強いる", usedIn: ["s391"] },
    { vid: "v1802", word: "lead a ... life", meaning: "〜な生活を送る", usedIn: ["s391"] },

    // 392
    { vid: "v1803", word: "leave out", meaning: "除外する", usedIn: ["s392"] },
    { vid: "v1804", word: "data", meaning: "データ", usedIn: ["s392"] },
    { vid: "v1805", word: "far from", meaning: "〜とは程遠い", usedIn: ["s392"] },
    { vid: "v1806", word: "accurate", meaning: "正確な", usedIn: ["s392"] },
  ],
};

