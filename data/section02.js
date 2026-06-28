// section02.js
// section02.js
// Section 02：タグ付き（Level0〜1）

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
      japanese: "現代文学に詳しいですか？それについてはほとんど何も知りません。",
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
      japanese: "少し詰めてくれませんか？あ、ごめんなさい。そんなに場所を取っていたとは気づきませんでした。",
      vocabRefs: ["v0093", "v0094", "v0095"]
    },
    {
      sid: "s021",
      english: "What’s this ugly object? This is a piece of abstract art.",
      japanese: "この醜い物体は何ですか？これは抽象芸術の一つです。",
      vocabRefs: ["v0096", "v0097", "v0098", "v0099"]
    }
  ],

  vocab: [
    { vid: "v0043", word:"beside oneself", ipa:"/bɪsˈaɪd ˌwʌnsˈɛlf/", meaning: "我を忘れて、取り乱して", extraInfo:"【動】\n①ひどく興奮する、取り乱す\nbe upset /bi ʌpˈsɛt/\nbe extremely excited /bi ɪkstrˈimli ɪksˈaɪtəd/\nbe in a frenzy /bi ɪn ə frˈɛnzi/\nbe frantic /bi frˈæntɪk/\nbe unable to control oneself /bi ʌnˈeɪbəl ˈtu kəntrˈoʊl ˌwʌnsˈɛlf/", usedIn: ["s010"], tags: ["adj"] },
    { vid: "v0044", word:"scarcely", ipa:"/ˈskɛrsli/", meaning: "ほとんど～ない", extraInfo:"【副】\nほとんど…ない\nhardly /ˈhɑrdli/\nalmost not /ˈɔlmoʊst ˈnɑt/\n\n【実質的には否定語なので他の否定と一緒には用いない】\n\nscarce /ˈskɛrs/ 【形】\n①一時的に不足した\n\n（↔ plentiful /ˈplɛntəfəl/ 豊富な）\n\nscarcity /ˈskɛrsəti/ 【名】\n①不足、欠乏", usedIn: ["s010"], tags: ["adv"] },
    { vid: "v0045", word:"tell A from B", ipa:"/ˈtɛl A ˈfrʌm B/", meaning: "AとBを区別する", extraInfo:"【動】\nA を B と区別する\nknow A from B /ˈnoʊ A ˈfrʌm B/\ndistinguish A from B /dɪstˈɪŋɡwɪʃ A ˈfrʌm B/\ntell the difference between A and B /ˈtɛl ðə ˈdɪfərəns bɪtwˈin A ænd B/", usedIn: ["s010"], tags: ["verb"] },
    { vid: "v0046", word:"fact", ipa:"/ˈfækt/", meaning: "事実", extraInfo:"【名】\n①事実\ntruth /ˈtruθ/\n\n②現実\nreality /riˈæləti/\n\n（↔ fiction /ˈfɪkʃən/ 作り話）", usedIn: ["s010"], tags: ["noun"] },
    { vid: "v0047", word:"fiction", ipa:"/ˈfɪkʃən/", meaning: "作り話、フィクション", extraInfo:"【名】\n①作り話、虚構\nlie /ˈlaɪ/\n\n（↔ fact /ˈfækt/\ntruth /ˈtruθ/\nreality /riˈæləti/ 事実、現実）\n\n②小説\n【文学の一分野としての小説。小説の作品は novel】\n\nHave you read that novel?\n「あの小説を読みましたか？」\n\nHave you read that fiction?\n「誤」", usedIn: ["s010"], tags: ["noun"] },

    { vid: "v0048", word:"novel", ipa:"/ˈnɑvəl/", meaning: "小説", extraInfo:"【名】\n①小説\n\nnovel /ˈnɑvəl/ 【形】\n①斬新な\nnew /ˈnu/\nunusual /ʌnˈjuʒuəl/\ninnovative /ˈɪnəˌveɪtɪv/\n\nnovelist /ˈnɑvəlɪst/ 【名】\n①小説家\nwriter /ˈraɪtɚ/", usedIn: ["s011"], tags: ["noun"] },
    { vid: "v0049", word:"combine A with B", ipa:"/ˈkɑmbaɪn A ˈwɪð B/", meaning: "AをBと組み合わせる", extraInfo:"【動】\n①組み合わせる\nunite /juˈnaɪt/\nintegrate /ˈɪntəˌɡreɪt/\nmerge /ˈmɝdʒ/\n\ncombine A with [and] B /kɑmbaɪn A wɪð B/\n①A と B を組み合わせる\n\n②A と B を両立させる、A と B を同時にかなえる\n\ncombination /ˌkɑmbəˈneɪʃən/ 【名】\n①結合、組み合わせ", usedIn: ["s011"], tags: ["verb"] },
    { vid: "v0050", word:"prose", ipa:"/ˈproʊz/", meaning: "散文", extraInfo:"【名】\n①散文\n\n（↔ verse /ˈvɝs/ 韻文）", usedIn: ["s011"], tags: ["noun"] },
    { vid: "v0051", word:"gift", ipa:"/ˈɡɪft/", meaning: "才能、贈り物", extraInfo:"【名】\n①贈り物\npresent /ˈprɛzənt/\n\n②天賦の才能\ntalent /ˈtælənt/\n\n③神様や友人からのすてきな贈り物\n\ngifted /ˈɡɪftɪd/ 【形】\n①才能がある\ntalented /ˈtæləntɪd/", usedIn: ["s011"], tags: ["noun"] },
    { vid: "v0052", word:"poetry", ipa:"/ˈpoʊətri/", meaning: "詩", extraInfo:"【名】\n①詩\n【文学の一分野】\n\npoet /ˈpoʊət/ 【名】\n①詩人\n\npoem /ˈpoʊəm/ 【名】\n①一編の詩\n\npoetic /poʊˈɛtɪk/ 【形】\n①詩的な、詩の", usedIn: ["s011"], tags: ["noun"] },
    { vid: "v0053", word:"publish", ipa:"/ˈpʌblɪʃ/", meaning: "出版する", extraInfo:"【動】\n①…を出版する\nbring ... out /ˈbrɪŋ ... ˈaʊt/\n\n②…を印刷物で公表する\nannounce... /ənˈaʊns/\npublicize... /pˈʌbləsˌaɪz/\nmake ... public /ˈmeɪk ... ˈpʌblɪk/\nmake ... known to the public /ˈmeɪk ... ˈnoʊn ˈtu ðə ˈpʌblɪk/\n\npublisher /ˈpʌblɪʃɚ/ 【名】\n①出版社、発行者\n\npublication /ˌpʌblɪkˈeɪʃən/ 【名】\n①出版物\n②出版\n③公表、発表\n\npublicity /pʌblˈɪsəti/ 【名】\n①宣伝、広告\n②マス媒体にさらすこと", usedIn: ["s011"], tags: ["verb"] },

    { vid: "v0054", word:"up-to-date", ipa:"/ˈʌp- ˈtu- ˈdeɪt/", meaning: "最新の", extraInfo:"【形】\n①最新の\nlatest /ˈleɪtəst/\ncurrent /ˈkɝənt/\nmodern /ˈmɑdɚn/\n\n（↔ out of date /ˈaʊt əv ˈdeɪt/\noutdated /ˈaʊtˌdeɪtəd/\nold-fashioned /ˌoʊldˈfæʃənd/\nobsolete /ˌɑbsəlˈit/ 時代遅れの、古い）", usedIn: ["s012"], tags: ["adj"] },
    { vid: "v0055", word:"edition", ipa:"/ədˈɪʃən/", meaning: "版、改訂版", extraInfo:"【名】\n①版\nversion /vˈɝʒən/\n\nedit... /ˈɛdət/ 【動】\n①…を編集する\n\neditorial /ˌɛdətˈɔriəl/ 【名】\n①社説\n\neditorial /ˌɛdətˈɔriəl/ 【形】\n①編集の、社説[論説]の…\n\neditor /ˈɛdətɚ/ 【名】\n①編集者", usedIn: ["s012"], tags: ["noun"] },
    { vid: "v0056", word:"encyclopedia", ipa:"/ɪnsˌaɪkləpˈidiə/", meaning: "百科事典", extraInfo:"【名】\n①百科事典", usedIn: ["s012"], tags: ["noun"] },
    { vid: "v0057", word:"come out", ipa:"/ˈkʌm ˈaʊt/", meaning: "出版される、現れる", extraInfo:"【動】\n①出る、現れる\nappear /əpˈɪr/\n\n②発売される、出版される\nbe released /bi rɪlˈist/\nbe brought out /bi brˈɔt ˈaʊt/\nbe published /bi pˈʌblɪʃt/\n\n③明るみに出る\nemerge /ɪmˈɝdʒ/\ncome to light /ˈkʌm ˈtu ˈlaɪt/\nbe revealed /bi rɪvˈild/\nbe brought to light /bi brˈɔt ˈtu ˈlaɪt/\n\n④（人が）態度を明らかにする、同性愛者であることを公表する", usedIn: ["s012"], tags: ["verb"] },

    { vid: "v0058", word:"translate", ipa:"/trænzlˈeɪt/", meaning: "翻訳する", extraInfo:"【動】\n①（…を）（A から B に）翻訳する\ntranslate ... from A into B /trænzlˈeɪt ... frʌm A ˈɪntu B/\n\ntranslation /trænzlˈeɪʃən/ 【名】\n①翻訳\n\ntranslator /trænzlˈeɪtɚ/ 【名】\n①翻訳家", usedIn: ["s013"], tags: ["verb"] },
    { vid: "v0059", word:"fascinating", ipa:"/ˈfæsənˌeɪtɪŋ/", meaning: "魅力的な", extraInfo:"【形】\n①人を魅了する、引き込まれるぐらいおもしろい\nattractive /ətrˈæktɪv/\ncharming /ˈtʃɑrmɪŋ/\nalluring /əlˈʊrɪŋ/\npicturesque /ˌpɪktʃɚˈɛsk/\n\nfascinate... /ˈfæsəˌneɪt/ 【動】\n①…を魅了する\nattract... /ətrˈækt/\ncharm... /ˈtʃɑrm/\ncaptivate... /ˈkæptəˌveɪt/\nenchant... /ɛntʃˈænt/\nallure... /əlˈʊr/\nbewitch... /bɪwˈɪtʃ/\n\nfascination /ˌfæsəˈneɪʃən/ 【名】\n①魅了\ncharm /ˈtʃɑrm/\nattraction /ətrˈækʃən/", usedIn: ["s013"], tags: ["adj"] },
    { vid: "v0060", word:"fairy tale", ipa:"/ˈfɛri ˈteɪl/", meaning: "おとぎ話", extraInfo:"【名】\n①おとぎ話、童話\n\nfairy /ˈfɛri/ 【名】\n①妖精\n\nGrimm's fairy tales\nグリム童話", usedIn: ["s013"], tags: ["noun"] },
    { vid: "v0061", word:"tale", ipa:"/ˈteɪl/", meaning: "話、物語", extraInfo:"【名】\n①話、物語\nstory /ˈstɔri/\n\n【tail（尾、しっぽ）と同音語】\n【tell（伝える）と同語源】", usedIn: ["s013"], tags: ["noun"] },
    { vid: "v0062", word:"plain", ipa:"/ˈpleɪn/", meaning: "わかりやすい、平易な", extraInfo:"【形】\n①平易な\neasy to understand /ˈizi ˈtu ˌʌndɚstˈænd/\n\n②明白な\nclear /ˈklɪr/\nobvious /ˈɑbviəs/\n\n③普通の、地味な\nordinary /ˈɔrdnˌɛri/\nsimple /ˈsɪmpəl/\n\n④率直な\nfrank /ˈfræŋk/\n\n⑤美人でない\nhomely /ˈhoʊmli/\nunattractive /ˌʌnətrˈæktɪv/\n\n（↔ beautiful /ˈbjutəfəl/\nattractive /ətrˈæktɪv/\ngood-looking /ˈɡʊdˈlʊkɪŋ/ 美人の）\n\n【plane（飛行機）と同音語】\n【装飾するものがない】\n\n【名】\n①平野、平原\nprairie /prˈɛri/\n\nplainly /ˈpleɪnli/ 【副】\n①明白に\nclearly /ˈklɪrli/\nobviously /ˈɑbviəsli/", usedIn: ["s013"], tags: ["adj"] },

    { vid: "v0063", word:"following", ipa:"/ˈfɑloʊɪŋ/", meaning: "次の", extraInfo:"【形】\n①次の、以下の…\n\n（日時が）次の…\nnext /ˈnɛkst/\nsubsequent /səbsˈikwənt/\n\n（↔ preceding /prɪsˈidɪŋ/ 前の）\n\nfollow... /ˈfɑloʊ/ 【動】\n①…に続く\n\n（↔ precede... /prɪsˈid/ …の先に起こる）\n\n②…の後を追いかける\nchase... /ˈtʃeɪs/\ntrail... /ˈtreɪl/\ntail... /ˈteɪl/\ntrack... /ˈtræk/\n\n（↔ lead... /ˈlid/ …を先導する）\n\n③…（規則など）に従う\nobey... /oʊbˈeɪ/\n\n④…（話などに）理解してついていく\ncatch on (to...) /ˈkætʃ ˈɑn/\n\n⑤…（道など）に沿って進む\n\nit follows that ...\n…という結論が当然導ける", usedIn: ["s014"], tags: ["adj"] },
    { vid: "v0064", word:"passage", ipa:"/ˈpæsədʒ/", meaning: "一節、文章", extraInfo:"【名】\n①一節\n\n②通路、廊下\nhall /ˈhɔl/\nhallway /ˈhɔlˌweɪ/\npassageway /ˈpæsədʒˌweɪ/\ncorridor /ˈkɔrədɚ/\n\n③（時の）経過\n流れ\npassing /ˈpæsɪŋ/\n\n④（広義での）通過", usedIn: ["s014"], tags: ["noun"] },
    { vid: "v0065", word:"quote", ipa:"/ˈkwoʊt/", meaning: "引用する", extraInfo:"【動】\n①引用する\ncite... /ˈsaɪt/\n\nquotation /kwoʊtˈeɪʃən/ 【名】\n①引用文\n②引用", usedIn: ["s014"], tags: ["verb"] },
    { vid: "v0066", word:"well-known", ipa:"/ˈwɛl- ˈnoʊn/", meaning: "有名な", extraInfo:"【形】\n①有名な\nnoted /ˈnoʊtəd/\nfamous /ˈfeɪməs/\ncelebrated /sˈɛləˌbreɪtəd/\noutstanding /aʊtstˈændɪŋ/\nprominent /prˈɑmənənt/\nfamed /ˈfeɪmd/\neminent /ˈɛmənənt/\nrenowned /rɪnˈaʊnd/\n\n（↔ unknown /ʌnˈnoʊn/\nobscure /əbskjˈʊr/ 無名の）\n\nbe well-known for... /bi ˈwɛlˈnoʊn fɔr/\n…で有名である\nbe famous for... /bi ˈfeɪməs fɔr/\nbe noted for... /bi ˈnoʊtəd fɔr/", usedIn: ["s014"], tags: ["adj"] },
    { vid: "v0067", word:"fable", ipa:"/ˈfeɪbəl/", meaning: "寓話", extraInfo:"【名】\n①寓話\n擬人化された動物などを通して教訓を伝える物語\n\nAesop Fables\nイソップ物語", usedIn: ["s014"], tags: ["noun"] },

    { vid: "v0068", word:"familiar", ipa:"/fəmˈɪljɚ/", meaning: "詳しい、精通している", extraInfo:"【形】\n①よく知っている\n\n（↔ unfamiliar /ˌʌnfəmˈɪljɚ/ よく知らない）\n\n②なじみの\nwell-known /ˈwɛlˈnoʊn/\n\n（↔ unfamiliar /ˌʌnfəmˈɪljɚ/ なじみのない）\n\nbe familiar with... /bi fəmˈɪljɚ wɪð/\n…をよく知っている\nknow ... well /ˈnoʊ ... ˈwɛl/\nbe acquainted with... /bi əkwˈeɪntəd wɪð/\n\nbe familiar to... /bi fəmˈɪljɚ ˈtu/\n…によく知られている\nbe well-known to... /bi ˈwɛlˈnoʊn ˈtu/\n\nfamiliarity /fəmˌɪliˈɛrəti/ 【名】\n①よく知っていること", usedIn: ["s015"], tags: ["adj"] },
    { vid: "v0069", word:"contemporary", ipa:"/kəntˈɛmpɚˌɛri/", meaning: "現代の", extraInfo:"【形】\n①現代の\nmodern /ˈmɑdɚn/\ntoday's /təˈdeɪz/\n\n②同時代の\n【自分が生きている時代と同時代 → 現代】\n\n【名】\n①同時代の人", usedIn: ["s015"], tags: ["adj"] },
    { vid: "v0070", word:"literature", ipa:"/ˈlɪtɚətʃɚ/", meaning: "文学", extraInfo:"【名】\n①文学\n\nliterary /ˈlɪtəˌrɛri/ 【形】\n①文学の\n②文語の\n\n（↔ colloquial /kəloʊkwiəl/ 口語の）", usedIn: ["s015"], tags: ["noun"] },
    { vid: "v0071", word:"next to", ipa:"/ˈnɛkst ˈtu/", meaning: "ほとんど～ない（否定語とともに）", extraInfo:"【定】\n①…の隣に\nbeside... /bɪsˈaɪd/\n\n②ほとんど…\nalmost... /ˈɔlmoʊst/", usedIn: ["s015"], tags: ["adv"] },

    { vid: "v0072", word:"at times", ipa:"/ˈæt ˈtaɪmz/", meaning: "ときどき", extraInfo:"【副】\nたまに、時々\nsometimes /ˈsʌmˌtaɪmz/\nonce in a while /ˈwʌns ɪn ə ˈwaɪl/\n(every) now and then [again] /(ˈɛvri) ˈnaʊ ænd ˈðɛn/\nfrom time to time /frʌm ˈtaɪm ˈtu ˈtaɪm/\noccasionally /əkeɪʒənəli/\non occasion /ˈɑn əkeɪʒən/", usedIn: ["s016"], tags: ["adv"] },
    { vid: "v0073", word:"confuse A with B", ipa:"/kənfjˈuz A ˈwɪð B/", meaning: "AとBを混同する", extraInfo:"【動】\n①…を混同する\nmix ... up /ˈmɪks ... ˈʌp/\n\n②…を困惑させる\nbewilder... /bɪwˈɪldɚ/\nperplex... /pɚplˈɛks/\npuzzle... /pˈʌzəl/\nbaffle... /bˈæfəl/\n\nconfuse A with [and] B /kənfjˈuz A wɪð B/\n①A と B を混同する\nmix A up with B /ˈmɪks A ˈʌp wɪð B/\n\nconfusion /kənfjˈuʒən/ 【名】\n①混乱\n disorder /dɪsˈɔrdɚ/\nchaos /ˈkeɪɑs/\nturmoil /tɝmˈɔɪl/\nhavoc /ˈhævək/\n\n②困惑\nbewilderment /bɪwˈɪldɚmənt/\nperplexity /pɚplˈɛksəti/\n\n③混同", usedIn: ["s016"], tags: ["verb"] },
    { vid: "v0074", word:"curve", ipa:"/ˈkɝv/", meaning: "曲線", extraInfo:"【名】\n①曲線、カーブ\n\nSlow down before the curve.\nカーブの前では減速しましょう\n\n【動】\n①（道路・線などが）曲線を描く【曲がる】", usedIn: ["s016"], tags: ["noun"] },
    { vid: "v0075", word:"carve", ipa:"/ˈkɑrv/", meaning: "彫る、刻む", extraInfo:"【動】\n①…を彫る\n\n②（…の）肉[料理]を切り分ける\n\nHe is carving an elaborate statue out of wood.\n彼は精巧な木彫りの像を作っている", usedIn: ["s016"], tags: ["verb"] },

    { vid: "v0076", word:"shy", ipa:"/ˈʃaɪ/", meaning: "恥ずかしがりの", extraInfo:"【形】\n①恥ずかしがりの、内気な\nbashful /bˈæʃfəl/\ntimid /ˈtɪməd/\nwithdrawn /wɪðdrˈɔn/\n\nshyness /ˈʃaɪnəs/ 【名】\n①内気", usedIn: ["s017"], tags: ["adj"] },
    { vid: "v0077", word:"pronunciation", ipa:"/proʊnˌʌnsiˈeɪʃən/", meaning: "発音", extraInfo:"【名】\n①発音\n【動詞との綴りの違いに注意】\n\npronounce... /prənˈaʊns/ 【動】\n①…を発音する\nsay... /ˈseɪ/\n\n②…を公式に宣言[断言]する\ndeclare... /dɪklˈɛr/", usedIn: ["s017"], tags: ["noun"] },
    { vid: "v0078", word:"more or less", ipa:"/ˈmɔr ˈɔr ˈlɛs/", meaning: "ほとんど、だいたい", extraInfo:"【副】\nだいたい\nalmost /ˈɔlmoʊst/\nnearly /ˈnɪrli/\napproximately /əprˈɑksəmətli/\nroughly /ˈrʌfli/", usedIn: ["s017"], tags: ["adv"] },
    { vid: "v0079", word:"correct", ipa:"/kɚˈɛkt/", meaning: "正しい", extraInfo:"【形】\n①正しい、誤りがない\nright /ˈraɪt/\naccurate /ˈækjɚət/\n\n（↔ wrong /ˈrɔŋ/\nincorrect /ˌɪnkɚˈɛkt/\nerroneous /ɚˈroʊniəs/\ninaccurate /ɪnˈækjɚət/\noff [wide of] the mark /ˈɔf ... ðə ˈmɑrk/ 間違った）\n\n②（行為などが）ふさわしい\nproper /ˈprɑpɚ/\nright /ˈraɪt/\nappropriate /əprˈoʊpriət/\nsuitable /sˈutəbəl/\n\ncorrect... /kɚˈɛkt/ 【動】\n①…を訂正する【直す】\n\ncorrectly /kɚˈɛktli/ 【副】\n①正確に、正しく\n\ncorrection /kɚˈɛkʃən/ 【名】\n①訂正、訂正箇所", usedIn: ["s017"], tags: ["adj"] },

    { vid: "v0080", word:"article", ipa:"/ˈɑrtəkəl/", meaning: "記事", extraInfo:"【名】\n①記事\nitem /ˈaɪtəm/\ncolumn /ˈkɑləm/\n\n②品物\n（同種の物の）1 点\nthing /ˈθɪŋ/\nobject /ˈɑbdʒɛkt/\npiece /ˈpis/\n\n③契約などの条項\n【独立した、個々のもの】", usedIn: ["s018"], tags: ["noun"] },
    { vid: "v0081", word:"contain", ipa:"/kəntˈeɪn/", meaning: "含む", extraInfo:"【動】\n①…を含んでいる、…が入っている\nhave ... in it /ˈhæv ... ɪn ˈɪt/\n\n②…（災害・気持ちなど）を食い止める【静める】\ncontrol... /kəntrˈoʊl/", usedIn: ["s018"], tags: ["verb"] },
    { vid: "v0082", word:"tip", ipa:"/ˈtɪp/", meaning: "助言、ヒント", extraInfo:"【名】\n①先端\n\n②チップ\ngratuity /ɡrətˈuəti/\n\n③役立つ情報、耳寄りな情報", usedIn: ["s018"], tags: ["noun"] },
    { vid: "v0083", word:"those who", ipa:"/ˈðoʊz ˈhu/", meaning: "～する人々", extraInfo:"【代】\n〜という人たち\nthe people who... /ðə ˈpipəl ˈhu/", usedIn: ["s018"], tags: ["pron"] },
    { vid: "v0084", word:"be eager to do", ipa:"/ˈbi ˈiɡɚ ˈtu ˈdu/", meaning: "～したがる", extraInfo:"【形】\n①熱心な\nanxious /ˈæŋkʃəs/\nenthusiastic /ɛnθˌuziˈæstɪk/\nkeen /ˈkin/\nardent /ˈɑrdənt/\nzealous /ˈzɛləs/\n\nbe eager to do... /bi ˈiɡɚ ˈtu ˈdu/\n①しきりに…したがっている\nbe anxious to do... /bi ˈæŋkʃəs ˈtu ˈdu/\nbe keen to do... /bi ˈkin ˈtu ˈdu/\n\neagerness /ˈiɡɚnəs/ 【名】\n①熱望、熱意\nenthusiasm /ɛnθˈuziˌæzəm/", usedIn: ["s018"], tags: ["adj"] },
    { vid: "v0085", word:"increase", ipa:"/ˌɪnkrˈis/", meaning: "増やす", extraInfo:"【動】\n①…を増やす\nadd to... /ˈæd ˈtu/\nraise... /ˈreɪz/\nboost... /ˈbust/\n\n（↔ decrease... /dɪkrˈis/\nreduce... /ridˈus/\nlower... /lˈoʊɚ/\ncut... /ˈkʌt/\ndiminish... /dəmˈɪnɪʃ/ …を減らす）\n\n②増える、上昇する\ngo up /ˈɡoʊ ˈʌp/\nrise /ˈraɪz/\ngrow /ˈɡroʊ/\n\n（↔ decrease /\nfall (off) /ˈfɔl/\ngo down /ˈɡoʊ ˈdaʊn/\ndecline /dɪklˈaɪn/\ndrop /ˈdrɑp/ 減少する、下降する）\n\nincrease /ˌɪnkrˈis/ 【名】\n①増加、上昇\nrise /ˈraɪz/\nhike /ˈhaɪk/\ngrowth /ˈɡroʊθ/\n\n（↔ drop /ˈdrɑp/\ndecrease /dɪkrˈis/\nfall /ˈfɔl/\ndecline /dɪklˈaɪn/ 減少、下降）", usedIn: ["s018"], tags: ["verb"] },
    { vid: "v0086", word:"vocabulary", ipa:"/voʊkˈæbjəlˌɛri/", meaning: "語彙", extraInfo:"【名】\n①語彙\n\nHe has a large vocabulary.\n正\n\nHe has many vocabularies.\n誤\n\n彼は語彙が豊富だ", usedIn: ["s018"], tags: ["noun"] },

    { vid: "v0087", word:"latest", ipa:"/ˈleɪtəst/", meaning: "最新の", extraInfo:"【形】\n①最新の\nnewest /ˈnuəst/\nmost recent /ˈmoʊst ˈrisənt/\nup-to-date /ˈʌp tə deɪt/\nbrand new /ˈbrænd ˈnu/\n\nlately /ˈleɪtli/ 【副】\n①最近\nrecently /ˈrisəntli/", usedIn: ["s019"], tags: ["adj"] },
    { vid: "v0088", word:"work", ipa:"/ˈwɝk/", meaning: "作品", extraInfo:"【名】\n①作業、仕事\ntask /ˈtæsk/\nduty /ˈduti/\nlabor /ˈleɪbɚ/\n\n②作品\npiece /ˈpis/\n\n③職、職業\njob /ˈdʒɑb/\noccupation /ˌɑkjəpˈeɪʃən/\nbusiness /ˈbɪznəs/\nvocation /voʊkˈeɪʃən/\n\n【エネルギーを費やして生み出すもの】\n\npublic works /ˈpʌblɪk ˈwɝks/ 【名】\n①公共事業\n\nwork (...) /ˈwɝk/ 【動】\n①仕事する、作業する\n\n②（職業として）働く\n\n③（機械などが）きちんと動く\ngo /ˈɡoʊ/\nrun /ˈrʌn/\nfunction /fˈʌŋkʃən/\n\n④（計画などが）うまくいく\ngo well /ˈɡoʊ ˈwɛl/\nsucceed /səksˈid/\n\n（↔ fail /ˈfeɪl/ 失敗する）\n\n⑤…（機械など）を動かす\noperate... /ˈɑpəˌreɪt/\n\nworkforce /ˈwɝkfɔrs/ 【名】\n①会社の全従業員、国の労働総人口", usedIn: ["s019"], tags: ["noun"] },
    { vid: "v0089", word:"be on display", ipa:"/ˈbi ˈɑn dɪsplˈeɪ/", meaning: "展示されている", extraInfo:"【名】\n①展示、陳列\nexhibition /ˌɛksəbˈɪʃən/\nshow /ˈʃoʊ/\n\n②感情などをはっきり表すこと\n\nbe on display /bi ˈɑn dɪsplˈeɪ/ 【動】\n①展示されている\nbe on exhibit /bi ˈɑn ɪɡzˈɪbət/\n\ndisplay ... /dɪsplˈeɪ/ 【動】\n①…を展示[陳列]する\nshow... /ˈʃoʊ/\nexhibit... /ɪɡzˈɪbət/\nput ... on display /ˈpʊt ... ˈɑn dɪsplˈeɪ/\n\n②…（感情など）はっきり表す\nshow... /ˈʃoʊ/\nexhibit... /ɪɡzˈɪbət/", usedIn: ["s019"], tags: ["verb"] },
    { vid: "v0090", word:"city hall", ipa:"/ˈsɪti ˈhɔl/", meaning: "市庁舎", extraInfo:"【名】\n①廊下、通路\nhallway /ˈhɔlˌweɪ/\npassage /ˈpæsədʒ/\ncorridor /ˈkɔrədɚ/\n\n②玄関ホール\nhall /ˈhɔl/\nentrance hall /ˈɛntrəns ˈhɔl/\nlobby /ˈlɑbi/\nfoyer /ˈfɔɪɚ/\n\n③公共のホール、会館\nauditorium /ˌɔdətˈɔriəm/\n\n【hole /ˈhoʊl/（穴）】\n【誰もが入れる歩ける建物内の一部】\n\ncity hall /ˈsɪti ˈhɔl/ 【名】\n①市庁舎、市役所", usedIn: ["s019"], tags: ["noun"] },
    { vid: "v0091", word:"fabulous", ipa:"/ˈfæbjələs/", meaning: "すばらしい", extraInfo:"【形】\n①すてきな\nterrific /tɚˈɪfɪk/\nwonderful /ˈwʌndɚfəl/\nmarvelous /ˈmɑrvələs/\nincredible /ɪnkrˈɛdəbəl/\namazing /əmˈeɪzɪŋ/\nastonishing /əstˈɑnɪʃɪŋ/\nexcellent /ˈɛksələnt/", usedIn: ["s019"], tags: ["adj"] },
    { vid: "v0092", word:"beyond description", ipa:"/bɪˈɑnd dɪskrˈɪpʃən/", meaning: "言葉では言い表せないほど", extraInfo:"【名】\n①描写、叙述\n\neyond description /bɪˈɑnd dɪskrˈɪpʃən/ 【形】【副】\n①言葉では表せないほど\n\ndescribe... /dɪskrˈaɪb/ 【動】\n①…を詳しく説明する、…を描写する\nexplain... /ɪksplˈeɪn/\ndepict... /dɪpˈɪkt/\nillustrate... /ˈɪləstrˌeɪt/\nportray... /pɔrtrˈeɪ/", usedIn: ["s019"], tags: ["adv"] },

    { vid: "v0093", word:"move over", ipa:"/ˈmuv ˈoʊvɚ/", meaning: "席を詰める、脇に寄る", extraInfo:"【動】\n①（人が座れるように）席を詰める\n【向こうに（over）ずれる（move）】", usedIn: ["s020"], tags: ["verb"] },
    { vid: "v0094", word:"realize", ipa:"/ˈriəlˌaɪz/", meaning: "気づく", extraInfo:"【動】\n①…ということに気付く\nbecome aware of... /bɪkˈʌm əwˈɛr ˈʌv/\nthat〜\n\n②…を実現する\nmake ... real /ˈmeɪk ... ˈriəl/\nmake ... come true /ˈmeɪk ... ˈkʌm ˈtru/\n\nrealization /ˌriələˈzeɪʃən/ 【名】\n①実現\n\n②悟ること、認識すること", usedIn: ["s020"], tags: ["verb"] },
    { vid: "v0095", word:"take up", ipa:"/ˈteɪk ˈʌp/", meaning: "（場所・時間を）取る、占める", extraInfo:"【動】\n①（学校以外の）場所・時間などを取る\noccupy... /ˈɑkjəˌpaɪ/\n\n②（旧来よくすることとして）…（趣味・活動など）を始める\nstart doing ... regularly /ˈstɑrt ˈduɪŋ ... rˈɛgjəlɚli/", usedIn: ["s020"], tags: ["verb","verb_take"] },

    { vid: "v0096", word:"ugly", ipa:"/ˈʌɡli/", meaning: "醜い", extraInfo:"【形】\n①醜い、不格好な\n\n（↔ beautiful /ˈbjutəfəl/ 美しい）\n\n②とても不快な\nvery unpleasant /ˈvɛri ʌnplˈɛzənt/\n\n（↔ pleasant /ˈplɛzənt/ 快い）", usedIn: ["s021"], tags: ["adj"] },
    { vid: "v0097", word:"object", ipa:"/ˈɑbdʒɛkt/", meaning: "物体、対象", extraInfo:"【名】\n①物体、物\nthing /ˈθɪŋ/\nitem /ˈaɪtəm/\nstuff /ˈstʌf/\narticle /ˈɑrtəkəl/\n\n②…の対象[的]\n\n③目的、目標\ngoal /ˈɡoʊl/\naim /ˈeɪm/\npurpose /ˈpɝpəs/\nobjective /əbdʒˈɛktɪv/\nend /ˈɛnd/\n\n④意識を向ける対象\n\nobject (to...) /əbˈdʒɛkt/ 【動】\n①…に異議を唱える\ndisapprove of... /dˌɪsəprˈuv ˈʌv/\nbe against... /bi əɡˈɛnst/\noppose... /əpˈoʊz/\n\n（↔ agree to... /əɡrˈi/\napprove of... /əprˈuv/\naccept... /æksˈɛpt/ …に賛成する）\n\nobject (that) ... /əbˈdʒɛkt/ 【動】\n…だと言って反対する\n\nobjection /əbdʒˈɛkʃən/ 【名】\n①反対意見、異議\ndisagreement /dˌɪsəɡrˈimənt/\nopposition /ˌɑpəzˈɪʃən/\ndisapproval /dˌɪsəprˈuvəl/", usedIn: ["s021"], tags: ["noun"] },
    { vid: "v0098", word:"a piece of", ipa:"/ə ˈpis ˈʌv/", meaning: "～の一つ、1個の", extraInfo:"【形】\n①1 つ[1 個]の…\n\ninformation（情報）\nadvice（助言）\npaper（紙）\nnews（ニュース）\nfurniture（家具）などの不可算名詞を数える時は、a piece of... / two [three, etc.] pieces of... と表す", usedIn: ["s021"], tags: ["noun"] },
    { vid: "v0099", word:"abstract", ipa:"/æbstrˈækt/", meaning: "抽象的な", extraInfo:"【形】\n①抽象的な\nconceptual /kənsˈɛptʃuəl/\nmetaphysical /ˌmɛtəfˈɪzɪkəl/\n\n（↔ concrete /kɑŋkrˈit/ 具体的な）\n\nabstraction /æbstrˈækʃən/ 【名】\n①抽象概念", usedIn: ["s021"], tags: ["adj"] }
  ]
};
