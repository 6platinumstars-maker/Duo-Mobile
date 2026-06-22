window.SECTIONS = window.SECTIONS || {};

window.SECTIONS["sec01"] = {
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
    { vid:"v0001", word:"respect", ipa:"/rɪspˈɛkt/", meaning:"尊重する／尊敬する", extraInfo:"【動】\n①（…に）注意を払う\npay no attention to… …を無視する\n\n②（…を）尊敬する\nlook up to…\nadmire…\nthink highly of…\nhold … in high regard [esteem]\nesteem…\nhonor…\n\n（↔ look down on…）\ndespise…\nscorn…\ndisdain… …を軽蔑する\n\n【語源】\nre（2度）＋spect（見る）→軽視しない\n\n【名】\n①（U）（for…）（…に対する）尊敬（の念）\nadmiration\nesteem\nregard\nhonor\n\n（↔ contempt / scorn 軽蔑）\n\n②（U）…を尊重する気持ち\nesteem\nregard\n\n③（C）（in…）（…の）点\npoint\nway\n\n④（P）（～s）（敬意を示す）挨拶（の言葉）\nregards\n\nrespectful 【形】\n態度などが敬意を示す\n（↔ rude 無礼な）\n\nrespectable 【形】\n①（世間的に）まともな\ndecent\n\n②（量などが）かなりの\ndecent\nconsiderable\n\nrespective 【形】\nそれぞれの…\nめいめいの…", usedIn:["s001"], tags:["verb"] },
    { vid:"v0002", word:"will", ipa:"/ˈwɪl/", meaning:"意志、遺言", extraInfo:"【名】\n①（U）意志\ndetermination\n\n②（C）遺言\n\nwillpower 【名】\n①（U）意志力", usedIn:["s001"], tags:["noun"] },
    { vid:"v0003", word:"individual", ipa:"/ˌɪndəvˈɪdʒəwəl/", meaning:"個人", extraInfo:"【名】\n①（C）個人\nperson\nhuman (being)\n\n【それ以上分割（divid）できないもの】\n\n【形】\n①個人の…\npersonal\n\n②個々の…\nseparate\n\n③個性的な、独特な\nunique\ndistinctive\n\nindividuality 【名】\n①（U）個性", usedIn:["s001"], tags:["noun"] },

    { vid:"v0004", word:"Take it easy", ipa:"/ˈteɪk ˈɪt ˈizi/", meaning:"気楽にいこう／落ち着け", extraInfo:"【定】\n①気楽にやれ\n\n②（よくよくするな）\n\n③（別れの挨拶で）じゃあね", usedIn:["s002"],
      tags:["verb","verb_take","pattern_take_it_easy"] },
    { vid:"v0005", word:"assure A that ...", ipa:"/əʃˈʊr A ˈðæt .../", meaning:"Aに〜だと保証する", extraInfo:"【動】\nA（人）に…を確約する［保証する］\npromise A (that) ～\nguarantee (that) ～\n\n【普通、目的語の人（A）は「疑念や不安を持っているかもしれない人」】\n\nassure 【動】\n①（…物事）を確実にする\nmake ... sure\n\nassurance 【名】\n①（U）確約\nguarantee\npromise", usedIn:["s002"],
      tags:["verb","pattern_A_that_clause"] },
    { vid:"v0006", word:"turn out", ipa:"/ˈtɝn ˈaʊt/", meaning:"結果として〜になる", extraInfo:"【動】\n（結果的に）…という結果になる\n\nturn out 【動】\n（人々が）来場する［集まる］\ngather\n\nturn ... out 【動】\n①（明かりなどを）消す\nturn [switch] ... off\n\n（↔ put ... on / turn [switch] ... on …をつける）\n\n②（工場などが）…（製品）を作り出す\nproduce\nmake", usedIn:["s002"],
      tags:["verb"] },

    { vid:"v0007", word:"let go of / let ... go", ipa:"/ˈlɛt ˈɡoʊ ˈʌv / ˈlɛt ... ˈɡoʊ/", meaning:"手放す／解放する", extraInfo:"【動】\n…を離す、…を捨てる\nrelease\nset ... free\n\n（↔ hold... / grab... / grasp... / catch... / take [get] hold of... …をつかむ）", usedIn:["s003"],
      tags:["verb","verb_let","pattern_let_X_go"] },
    { vid:"v0008", word:"negative", ipa:"/ˈnɛɡətɪv/", meaning:"否定的な／消極的な", extraInfo:"【形】\n①悲観的な、消極的な\npessimistic\n\n（↔ positive 前向きな）\n\n②（文法上の）否定の\n（↔ affirmative 肯定の）\n\n③（医療）陰性の\n（↔ positive）\n\n④（マイナスの）性質の\n\n【名】\n①（C）（写真の）ネガ\n\n②否定\n（↔ affirmative 肯定）", usedIn:["s003"], tags:["adj"] },
    { vid:"v0009", word:"outlook", ipa:"/ˈaʊtlˌʊk/", meaning:"見方／考え方", extraInfo:"【名】\n①（for…）（…に対する）見方【態度】、観\nattitude\nperspective\n\n②（for…）（…に対する）見通し、展望\nprospect\nexpectation", usedIn:["s003"], tags:["noun"] },
    { vid:"v0010", word:"maintain", ipa:"/meɪntˈeɪn/", meaning:"維持する／保つ", extraInfo:"【動】\n①（…［関係］を）維持する\nkeep ... up\ncarry on...\npreserve...\nsustain...\n\n②（…［機械など］を）手入れ［整備］する\nlook after...\ntake care of...\n\n③…と強く主張する\ninsist...\n\nmaintenance 【名】\n①（U）維持、保存", usedIn:["s003"], tags:["verb"] },
    { vid:"v0011", word:"positive", ipa:"/ˈpɑzətɪv/", meaning:"前向きな／積極的な", usedIn:["s003"], tags:["adj"] },
    { vid:"v0012", word:"attitude", ipa:"/ˈætətˌud/", meaning:"態度／姿勢", usedIn:["s003"], tags:["noun"] },

    { vid:"v0013", word:"fair", ipa:"/ˈfɛr/", meaning:"公平な／公正な", usedIn:["s004"], tags:["adj"] },
    { vid:"v0014", word:"regardless of", ipa:"/rəɡˈɑrdləs ˈʌv/", meaning:"～に関係なく", usedIn:["s004"],
      tags:["prep","pattern_prep_phrase"] },
    { vid:"v0015", word:"national", ipa:"/ˈnæʃənəl/", meaning:"国の／国家の", usedIn:["s004"], tags:["adj"] },
    { vid:"v0016", word:"origin", ipa:"/ˈɔrədʒən/", meaning:"起源／出身", usedIn:["s004"], tags:["noun"] },
    { vid:"v0017", word:"gender", ipa:"/ˈdʒɛndɚ/", meaning:"性別", usedIn:["s004"], tags:["noun"] },
    { vid:"v0018", word:"creed", ipa:"/ˈkrid/", meaning:"信条／主義", usedIn:["s004"], tags:["noun"] },

    { vid:"v0019", word:"equality", ipa:"/ɪkwˈɑləti/", meaning:"平等", usedIn:["s005"], tags:["noun"] },
    { vid:"v0020", word:"guarantee", ipa:"/ˌɡɛrəntˈi/", meaning:"保証する", usedIn:["s005"], tags:["verb"] },
    { vid:"v0021", word:"Constitution", ipa:"/ˌkɑnstətˈuʃən/", meaning:"憲法", usedIn:["s005"], tags:["noun"] },

    { vid:"v0022", word:"lean", ipa:"/ˈlin/", meaning:"寄りかかる／もたれる", usedIn:["s006"], tags:["verb"] },
    { vid:"v0023", word:"pillar", ipa:"/ˈpɪlɚ/", meaning:"柱", usedIn:["s006"], tags:["noun"] },
    { vid:"v0024", word:"gaze at", ipa:"/ˈɡeɪz ˈæt/", meaning:"じっと見つめる", usedIn:["s006"], tags:["verb"] },
    { vid:"v0025", word:"statue", ipa:"/ˈstætʃˌu/", meaning:"彫像", usedIn:["s006"], tags:["noun"] },
    { vid:"v0026", word:"liberty", ipa:"/ˈlɪbɚtˌi/", meaning:"自由", usedIn:["s006"], tags:["noun"] },

    { vid:"v0027", word:"pass by", ipa:"/ˈpæs ˈbaɪ/", meaning:"通り過ぎる", usedIn:["s007"], tags:["verb"] },
    { vid:"v0028", word:"give off", ipa:"/ˈɡɪv ˈɔf/", meaning:"放つ／発する", usedIn:["s007"],
      tags:["verb","verb_give"] },
    { vid:"v0029", word:"subtle", ipa:"/ˈsʌtəl/", meaning:"かすかな／微妙な", usedIn:["s007"], tags:["adj"] },
    { vid:"v0030", word:"scent", ipa:"/ˈsɛnt/", meaning:"香り", usedIn:["s007"], tags:["noun"] },
    { vid:"v0031", word:"perfume", ipa:"/pɚfjˈum/", meaning:"香水", usedIn:["s007"], tags:["noun"] },
    { vid:"v0032", word:"remind A of B", ipa:"/rimˈaɪnd A ˈʌv B/", meaning:"AにBを思い出させる", usedIn:["s007"],
      tags:["verb","pattern_A_of_B"] },
    { vid:"v0033", word:"ex-", ipa:"/ˈɛks-/", meaning:"元〜（ex-girlfriend＝元彼女）", usedIn:["s007"],
      tags:["fixed_phrase"] },

    { vid:"v0034", word:"smell", ipa:"/ˈsmɛl/", meaning:"においがする", usedIn:["s008"], tags:["verb"] },
    { vid:"v0035", word:"awful", ipa:"/ˈɑfəl/", meaning:"ひどい／いやな", usedIn:["s008"], tags:["adj"] },
    { vid:"v0036", word:"taste", ipa:"/ˈteɪst/", meaning:"味がする", usedIn:["s008"], tags:["verb"] },
    { vid:"v0037", word:"terrific", ipa:"/tɚˈɪfɪk/", meaning:"素晴らしい", usedIn:["s008"], tags:["adj"] },

    { vid:"v0038", word:"soaked", ipa:"/ˈsoʊkt/", meaning:"びしょぬれの", usedIn:["s009"], tags:["adj"] },
    { vid:"v0039", word:"sweat", ipa:"/ˈswɛt/", meaning:"汗", usedIn:["s009"], tags:["noun"] },
    { vid:"v0040", word:"stand back", ipa:"/ˈstænd ˈbæk/", meaning:"下がる／距離を取る", usedIn:["s009"], tags:["verb"] },
    { vid:"v0041", word:"stink", ipa:"/ˈstɪŋk/", meaning:"くさい／悪臭を放つ", usedIn:["s009"], tags:["verb"] },
    { vid:"v0042", word:"take a shower", ipa:"/ˈteɪk ə ˈʃaʊɚ/", meaning:"シャワーを浴びる", usedIn:["s009"],
      tags:["verb","verb_take"] }
  ]
};
