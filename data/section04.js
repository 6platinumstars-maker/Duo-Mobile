// section04.js
const section04 = {
  id: "sec04",
  title: "Section 04",
  sentences: [
    {
      sid: "s036",
      english: "The power plant supplies the remote county with electricity.",
      japanese: "その発電所は遠隔地の郡に電力を供給している。",
      vocabRefs: ["v0178", "v0179", "v0180", "v0181", "v0182", "v0177"]
    },
    {
      sid: "s037",
      english: "You are not allowed to operate this device without permission.",
      japanese: "許可なしにこの装置を操作することは許されていない。",
      vocabRefs: ["v0183", "v0184", "v0185", "v0186"]
    },
    {
      sid: "s038",
      english: "In fact, the inhabitants have been exposed to radiation.",
      japanese: "実際、その住民たちは放射線にさらされてきた。",
      vocabRefs: ["v0187", "v0188", "v0189", "v0190"]
    },
    {
      sid: "s039",
      english: "One cannot emphasize too much the potential danger of nuclear energy.",
      japanese: "原子力の潜在的危険性はいくら強調してもしすぎることはない。",
      vocabRefs: ["v0191", "v0192", "v0193", "v0194", "v0195", "v0196"]
    },
    {
      sid: "s040",
      english:
        "For years the press overlooked the problem. But now, if anything, they are making too much of it.",
      japanese:
        "長年、報道はその問題を見落としていた。しかし今では、むしろ大げさに扱っている。",
      vocabRefs: ["v0197", "v0198", "v0199", "v0200"]
    },
    {
      sid: "s041",
      english: "As well as cultivating grain, the farmer runs a grocery store.",
      japanese: "穀物を栽培するだけでなく、その農夫は食料品店も経営している。",
      vocabRefs: ["v0201", "v0202", "v0203", "v0204", "v0205", "v0206"]
    },
    {
      sid: "s042",
      english: "The research institute was established in the late 1960s.",
      japanese: "その研究所は1960年代後半に設立された。",
      vocabRefs: ["v0207", "v0208", "v0209", "v0210", "v0211"]
    },
    {
      sid: "s043",
      english:
        "Why don’t you consult Starr in person? He’s by far the most prominent attorney around here.",
      japanese:
        "スターに直接相談してみたらどう？ 彼はこの辺りで断然有名な弁護士だよ。",
      vocabRefs: ["v0212", "v0213", "v0214", "v0215", "v0216", "v0217"]
    },
    {
      sid: "s044",
      english:
        "I’ll write it down just in case, because I have a bad memory.",
      japanese: "念のためにそれを書き留めておくよ。記憶力が悪いからね。",
      vocabRefs: ["v0218", "v0219", "v0220"]
    },
    {
      sid: "s045",
      english:
        "The lawyer recommended that his client take legal action against the insurance company.",
      japanese:
        "その弁護士は、依頼人に保険会社を相手取って法的手段に訴えるよう勧めた。",
      vocabRefs: ["v0221", "v0222", "v0223", "v0224", "v0225"]
    }
  ],
  vocab: [
    { vid: "v0177", word: "power", meaning: "電力、力", usedIn: ["s036"] },
    { vid: "v0178", word: "power plant", meaning: "発電所", usedIn: ["s036"] },
    { vid: "v0179", word: "supply A with B", meaning: "AにBを供給する", usedIn: ["s036"] },
    { vid: "v0180", word: "remote", meaning: "遠く離れた", usedIn: ["s036"] },
    { vid: "v0181", word: "county", meaning: "郡", usedIn: ["s036"] },
    { vid: "v0182", word: "electricity", meaning: "電気", usedIn: ["s036"] },

    { vid: "v0183", word: "allow A to do B", meaning: "AにBすることを許す", usedIn: ["s037"] },
    { vid: "v0184", word: "operate", meaning: "操作する、運転する", usedIn: ["s037"] },
    { vid: "v0185", word: "device", meaning: "装置", usedIn: ["s037"] },
    { vid: "v0186", word: "permission", meaning: "許可", usedIn: ["s037"] },

    { vid: "v0187", word: "In fact", meaning: "実際は", usedIn: ["s038"] },
    { vid: "v0188", word: "inhabitant", meaning: "住民", usedIn: ["s038"] },
    { vid: "v0189", word: "expose A to B", meaning: "AをBにさらす", usedIn: ["s038"] },
    { vid: "v0190", word: "radiation", meaning: "放射線", usedIn: ["s038"] },

    { vid: "v0191", word: "cannot do too much", meaning: "いくら～してもしすぎることはない", usedIn: ["s039"] },
    { vid: "v0192", word: "emphasize", meaning: "強調する", usedIn: ["s039"] },
    { vid: "v0193", word: "potential", meaning: "潜在的な", usedIn: ["s039"] },
    { vid: "v0194", word: "danger", meaning: "危険", usedIn: ["s039"] },
    { vid: "v0195", word: "nuclear", meaning: "原子力の", usedIn: ["s039"] },
    { vid: "v0196", word: "energy", meaning: "エネルギー", usedIn: ["s039"] },

    { vid: "v0197", word: "press", meaning: "報道機関、新聞", usedIn: ["s040"] },
    { vid: "v0198", word: "overlook", meaning: "見落とす", usedIn: ["s040"] },
    { vid: "v0199", word: "if anything", meaning: "どちらかといえば、むしろ", usedIn: ["s040"] },
    { vid: "v0200", word: "make … of A", meaning: "Aを…のように扱う／評価する", usedIn: ["s040"] },

    { vid: "v0201", word: "as well as", meaning: "～だけでなく…も", usedIn: ["s041"] },
    { vid: "v0202", word: "cultivate", meaning: "栽培する", usedIn: ["s041"] },
    { vid: "v0203", word: "grain", meaning: "穀物", usedIn: ["s041"] },
    { vid: "v0204", word: "farmer", meaning: "農夫", usedIn: ["s041"] },
    { vid: "v0205", word: "run", meaning: "経営する", usedIn: ["s041"] },
    { vid: "v0206", word: "grocery store", meaning: "食料品店", usedIn: ["s041"] },

    { vid: "v0207", word: "research", meaning: "研究", usedIn: ["s042"] },
    { vid: "v0208", word: "institute", meaning: "研究所", usedIn: ["s042"] },
    { vid: "v0209", word: "establish", meaning: "設立する", usedIn: ["s042"] },
    { vid: "v0210", word: "late", meaning: "後半の", usedIn: ["s042"] },
    { vid: "v0211", word: "1960s", meaning: "1960年代", usedIn: ["s042"] },

    { vid: "v0212", word: "Why don't you do", meaning: "～してみたらどう？", usedIn: ["s043"] },
    { vid: "v0213", word: "consult", meaning: "相談する", usedIn: ["s043"] },
    { vid: "v0214", word: "in person", meaning: "直接", usedIn: ["s043"] },
    { vid: "v0215", word: "by far", meaning: "断然、はるかに", usedIn: ["s043"] },
    { vid: "v0216", word: "prominent", meaning: "著名な", usedIn: ["s043"] },
    { vid: "v0217", word: "attorney", meaning: "弁護士", usedIn: ["s043"] },

    { vid: "v0218", word: "write … down", meaning: "書き留める", usedIn: ["s044"] },
    { vid: "v0219", word: "just in case", meaning: "念のため", usedIn: ["s044"] },
    { vid: "v0220", word: "have a bad memory", meaning: "記憶力が悪い", usedIn: ["s044"] },

    { vid: "v0221", word: "recommend that", meaning: "～するよう勧める", usedIn: ["s045"] },
    { vid: "v0222", word: "client", meaning: "依頼人", usedIn: ["s045"] },
    { vid: "v0223", word: "legal", meaning: "法的な", usedIn: ["s045"] },
    { vid: "v0224", word: "take … action", meaning: "行動を起こす", usedIn: ["s045"] },
    { vid: "v0225", word: "insurance", meaning: "保険", usedIn: ["s045"] }
  ]
};

