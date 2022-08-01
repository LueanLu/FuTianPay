export default {
  // Button
  Btn: {
    Submit: '送信',
  },
  // Nav
  Nav: {
    Index: 'ホームページ',
    Catalogue: '過去の作品',
    News: '発表',
    Member: '会員センター',
    Information: '会員情報',
    Order: '注文追跡',
    Cart: 'ショッピングカート',
    About: '得藝について',
    Contact: 'ご連絡',
    'zh-tw': '繁體中文',
    'zh-cn': '简体中文',
    en: 'English',
    jp: '日本語',
  },
  // IndexBanner
  IndexBanner: {
    Title01: "My Best Friend's Breakfast",
    MainTitleOne01: "My Best Friend's Breakfast",
    MainTitleTwo01: '最も注目されているキャンパスの愛',
    SubheadingOne01: '周兴哲、李沐、宋柏纬、何思静、娄峻硕、林鹤轩',

    Title02: 'The Bridge Curse',
    MainTitleOne02: 'The Bridge Curse',
    MainTitleTwo02: '台湾サスペンススリラー',
    SubheadingOne02: '詹宛儒、张寗、林哲熹、严正岚、葛丞、谢毅宏、孟耿如',

    Title03: "ママは日本へ嫁に行っちゃダメと言うけれど",
    MainTitleOne03: "Mom Thinks I'm Crazy To Marry A Japanese Guy",
    MainTitleTwo03: 'ラブコメ',
    SubheadingOne03: '简嫚书、中野裕太',

    Title04: 'The Lobster',
    MainTitleOne04: 'The Lobster',
    MainTitleTwo04: 'ブラックユーモアロマンス',
    SubheadingOne04: 'Colin Farrell、Léa Seydoux、Rachel Weisz、Ben Whishaw',
  },
  // Advantage
  Advantage: {
    Title: 'ADVANTAGE',
    MainTitle: 'System advantages',
    AdvantageMainOne: 'Information security protection',
    AdvantageInfoOne: 'SSL encrypted transmission, confidential information is not leaked',
    AdvantageInfoOne_Two: 'CDN application can effectively prevent malicious attacks',
    AdvantageMainTwo: 'Despoit and payment',
    AdvantageInfoTwo: 'Apply scripts to automate tasks',
    AdvantageInfoTwo_Two: 'Automatically perform payment tasks, details and balance query tasks',
    AdvantageInfoTwo_Three: 'Achieve the fastest callback',
    AdvantageMainThree: 'Customer service',
    AdvantageInfoThree: 'Diversified integrated system',
    AdvantageInfoThree_Two: 'Efficient ITsupport',
    AdvantageInfoThree_Three: '7 * 24 hours online customer service',
  },
  // Catalogue
  Catalogue: {
    Title: 'CATALOGUE',
    MainTitle: '過去の作品',
    Production: '作る',
    Distribution: '発行',
    Sales: '販売',
  },
  // CatalogueData 製作: make 發行: publication 銷售: sales
  CatalogueData: [
    // 47　My Best Friend's Breakfast　我吃了那男孩一整年的早餐　我吃了那男孩一整年的早餐　製作
    { Title: "My Best Friend's Breakfast", Business: 'Production', BusinessType: 'make', Youtube: 'https://youtu.be/6wCc5QcBkZc', Img: 'assets/img/portfolio/47.jpg', ImgAlt: "My Best Friend's Breakfast" },
    // 46　The Bridge Curse　女鬼橋　女鬼桥　製作　銷售
    { Title: 'The Bridge Curse', Business: 'Production Sales', BusinessType: 'make sales', Youtube: 'https://youtu.be/NA4Wa9E5Kpo', Img: 'assets/img/portfolio/46.jpg', ImgAlt: 'The Bridge Curse' },
    // 45　Mom Thinks I'm Crazy To Marry A Japanese Guy　雖然媽媽說我不可以嫁去日本　虽然妈妈说我不可以嫁去日本　發行
    { Title: "ママは日本へ嫁に行っちゃダメと言うけれど", Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/lZDcdCngqFY', Img: 'assets/img/portfolio/45.jpg', ImgAlt: "ママは日本へ嫁に行っちゃダメと言うけれど" },
    // 44　KISEKI -SOBITO OF THAT DAY-　唱吧!奇蹟!　唱吧!奇迹!　發行
    { Title: 'グッキー', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/1bBBRJ8D5xA', Img: 'assets/img/portfolio/44.jpg', ImgAlt: 'グッキー' },
    // 43　THE KING　金權性內幕　金权性内幕　發行
    { Title: 'ザ・キング', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/1e8rvpv5zuA', Img: 'assets/img/portfolio/43.jpg', ImgAlt: 'THE KING' },
    // 42　We Are Family　我們全家不太熟　我们全家不太熟　製作　發行　銷售
    { Title: 'We Are Family', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/hVH_9Hpzn9k', Img: 'assets/img/portfolio/42.jpg', ImgAlt: 'We Are Family' },
    // 41　Tangerine　夜晚還年輕　夜晚还年轻　發行
    { Title: 'Tangerine', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/3u3fFFoUnyg', Img: 'assets/img/portfolio/41.jpg', ImgAlt: 'Tangerine' },
    // 40　Absolutely Anything　超能玩很大　超能玩很大　發行
    { Title: 'Absolutely Anything', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/bDWLNPNG5PM', Img: 'assets/img/portfolio/40.jpg', ImgAlt: 'Absolutely Anything' },
    // 39　Marvel Stories　漫威：超級英雄王國　漫威：超级英雄王国　發行
    { Title: 'Marvel Stories', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/7UWiUgprCjw', Img: 'assets/img/portfolio/39.jpg', ImgAlt: 'Marvel Stories' },
    // 38　Secret Sharer　海上情迷　海上情迷　發行
    { Title: 'Secret Sharer', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/55CX2n-Za5M', Img: 'assets/img/portfolio/38.jpg', ImgAlt: 'Secret Sharer' },
    // 37　Partner In Crime　共犯　共犯　製作　發行　銷售
    { Title: 'Partner In Crime', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/9hvzzKZZbNg', Img: 'assets/img/portfolio/37.jpg', ImgAlt: 'Partner In Crime' },
    // 36　A Girl Got Her Cue　逆轉勝　逆转胜　製作　發行　銷售
    { Title: 'A Girl Got Her Cue', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/C56bsd7hxfY', Img: 'assets/img/portfolio/36.jpg', ImgAlt: 'A Girl Got Her Cue' },
    // 35　MIDA　夢見　梦见　銷售
    { Title: 'MIDA', Business: 'Sales', BusinessType: 'sales', Youtube: 'https://youtu.be/n_43IBpjoAU', Img: 'assets/img/portfolio/35.jpg', ImgAlt: 'MIDA' },
    // 34　Forever Love　阿嬤的夢中情人　阿嬷的梦中情人　銷售
    { Title: 'Forever Love', Business: 'Sales', BusinessType: 'sales', Youtube: 'https://youtu.be/vNf6mNpfA_s', Img: 'assets/img/portfolio/34.jpg', ImgAlt: 'Forever Love' },
    // 33　Killing them softly　殺戮行動　杀戮行动　發行
    { Title: 'Killing them softly', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/tDyaNnrgdp4', Img: 'assets/img/portfolio/33.jpg', ImgAlt: 'Killing them softly' },
    // 32　Love Is Sin　白天的星星　白天的星星　銷售
    { Title: 'Love Is Sin', Business: 'Sales', BusinessType: 'sales', Youtube: 'https://youtu.be/3Dj47fGfp1k', Img: 'assets/img/portfolio/32.jpg', ImgAlt: 'Love Is Sin' },
    // 31　The Grey　即刻獵殺　即刻猎杀　發行
    { Title: 'The Grey', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/Hfb0-U0ydj8', Img: 'assets/img/portfolio/31.jpg', ImgAlt: 'The Grey' },
    // 30　The Soul of Bread　愛的麵包魂　爱的面包魂　製作　發行　銷售
    { Title: 'The Soul of Bread', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/HVFP6cNkLGc', Img: 'assets/img/portfolio/30.jpg', ImgAlt: 'The Soul of Bread' },
    // 29　MAYDAY 3DNA　五月天追夢3DNA　五月天追梦3DNA　製作　發行　銷售
    { Title: 'MAYDAY 3DNA', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/M1mzZ_8sijI', Img: 'assets/img/portfolio/29.jpg', ImgAlt: 'MAYDAY 3DNA' },
    // 28　Tomorrow, When the War Began　破曉開戰　破晓开战　發行
    { Title: 'Tomorrow, When the War Began', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/qAHqv4qXpmo', Img: 'assets/img/portfolio/28.jpg', ImgAlt: 'Tomorrow, When the War Began' },
    // 27　Killer Elite　特種菁英　特种菁英　發行
    { Title: 'Killer Elite', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/8XYV81QFI_E', Img: 'assets/img/portfolio/27.jpg', ImgAlt: 'Killer Elite' },
    // 26 The Kids Are All Right　性福拉警報　性福拉警报　發行
    { Title: 'The Kids Are All Right', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/cl93nSDNnbA', Img: 'assets/img/portfolio/26.jpg', ImgAlt: 'The Kids Are All Right' },
    // 25　Spin Kid　電哪吒　电哪吒　銷售
    { Title: 'Spin Kid', Business: 'Sales', BusinessType: 'sales', Youtube: 'https://youtu.be/AoIo0nIFvGs', Img: 'assets/img/portfolio/25.jpg', ImgAlt: 'Spin Kid' },
    // 24　Happy Tears　陌路姐妹淘　陌路姐妹淘　發行
    { Title: 'Happy Tears', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/G3lwyfjNKqg', Img: 'assets/img/portfolio/24.jpg', ImgAlt: 'Happy Tears' },
    // 23　The Experiment　叛獄風雲　叛狱风云　發行
    { Title: 'The Experiment', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/STo6qN4_Eq0', Img: 'assets/img/portfolio/23.jpg', ImgAlt: 'The Experiment' },
    // 22　Hachiko　忠犬小八　忠犬小八　發行
    { Title: '忠犬ハチ公', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/SAv1yXIVm_k', Img: 'assets/img/portfolio/22.jpg', ImgAlt: '忠犬ハチ公' },
    // 21　The King of Fighters　格鬥天王　格斗天王　製作　發行　銷售
    { Title: 'The King of Fighters', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/EiaWx1V7rts', Img: 'assets/img/portfolio/21.jpg', ImgAlt: 'The King of Fighters' },
    // 20　Gangster Rock　混混天團　混混天团　銷售
    { Title: 'Gangster Ro', Business: 'Sales', BusinessType: 'sales', Youtube: 'https://youtu.be/5widREOs0g4', Img: 'assets/img/portfolio/20.jpg', ImgAlt: 'Gangster Ro' },
    // 19　Step by Step　練戀舞　练恋舞　製作　發行　銷售
    { Title: 'Step by Step', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/6SGUdJaijRE', Img: 'assets/img/portfolio/19.jpg', ImgAlt: 'Step by Step' },
    // 18　Treasure Hunter　刺陵　刺陵　銷售
    { Title: 'Treasure Hunter', Business: 'Sales', BusinessType: 'sales', Youtube: 'https://youtu.be/zyfp-1wRTAs', Img: 'assets/img/portfolio/18.jpg', ImgAlt: 'Treasure Hunter' },
    // 17　Summer Time　夏天協奏曲　夏天协奏曲　銷售
    { Title: 'Summer Time', Business: 'Sales', BusinessType: 'sales', Youtube: 'https://youtu.be/R2apTeQUjFM', Img: 'assets/img/portfolio/17.jpg', ImgAlt: 'Summer Time' },
    // 16　Spiral　鬼影螺旋　鬼影螺旋　發行
    { Title: 'Spiral', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/eC4NoVFa_NY', Img: 'assets/img/portfolio/16.jpg', ImgAlt: 'Spiral' },
    // 15　Painted Skin　畫皮　画皮　發行
    { Title: 'Painted Skin', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/zd7NGlCgyyE', Img: 'assets/img/portfolio/15.jpg', ImgAlt: 'Painted Skin' },
    // 14　The Air I Breathe　交錯效應　交错效应　發行
    { Title: 'The Air I Breathe', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/49vpQH3Jess', Img: 'assets/img/portfolio/14.jpg', ImgAlt: 'The Air I Breathe' },
    // 13　10 Questions for the Dalai Lama　達賴喇嘛十問　达赖喇嘛十问　發行
    { Title: '10 Questions for the Dalai Lama', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/d9c9ugoSzcc', Img: 'assets/img/portfolio/13.jpg', ImgAlt: '10 Questions for the Dalai Lama' },
    // 12　The Eye　變眼　变眼　發行
    { Title: 'The Eye', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/MyrEQSpRiHo', Img: 'assets/img/portfolio/12.jpg', ImgAlt: 'The Eye' },
    // 11　The TV Set　電影夢工廠　电影梦工厂　發行
    { Title: 'The TV Set', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/D5n-i4RmPiU', Img: 'assets/img/portfolio/11.jpg', ImgAlt: 'The TV Set' },
    // 10　Bella　美好的瞬間　美好的瞬间　發行
    { Title: 'Bella', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/mJ9AkTrbxgk', Img: 'assets/img/portfolio/10.jpg', ImgAlt: 'Bella' },
    // 09　Just Friends　謝謝再聯絡　谢谢再联络　發行
    { Title: 'Just Friends', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/vIBBVzy5UoQ', Img: 'assets/img/portfolio/09.jpg', ImgAlt: 'Just Friends' },
    // 08　The Women　女人至上　女人至上　製作　發行　銷售
    { Title: 'The Women', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/gtuE87DQDFM', Img: 'assets/img/portfolio/08.jpg', ImgAlt: 'The Women' },
    // 07　The Lazarus Project　撕裂記憶體　撕裂记忆体　製作　發行　銷售
    { Title: 'The Lazarus Project', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/4NU3p_LU6yI', Img: 'assets/img/portfolio/07.jpg', ImgAlt: 'The Lazarus Project' },
    // 06　Peaceful Warrior　深夜加油站遇見蘇格拉底　深夜加油站遇见苏格拉底　發行
    { Title: 'Peaceful Warrior', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/tzsGOE57HGo', Img: 'assets/img/portfolio/06.jpg', ImgAlt: 'Peaceful Warrior' },
    // 05　Mushishi　蟲師　虫师　發行
    { Title: 'Mushishi', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/oF8Do0wMhB4', Img: 'assets/img/portfolio/05.jpg', ImgAlt: 'Mushishi' },
    // 04　Smother　老媽愛死你　老妈爱死你　製作　發行　銷售
    { Title: 'Smother', Business: 'Production Distribution Sales', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/eSXYkZ2HIYc', Img: 'assets/img/portfolio/04.jpg', ImgAlt: 'Smother' },
    // 03　Minotaur　牛頭人　牛头人　製作
    { Title: 'Minotaur', Business: 'Production', BusinessType: 'make', Youtube: 'https://youtu.be/jpP7wSw9nww', Img: 'assets/img/portfolio/03.jpg', ImgAlt: 'Minotaur' },
    // 02　Confessions of an Action Star　打星自白　打星自白　製作
    { Title: 'Confessions of an Action Star', Business: 'Production', BusinessType: 'make', Youtube: 'https://youtu.be/hEib6yZmYes', Img: 'assets/img/portfolio/02.jpg', ImgAlt: 'Confessions of an Action Star' },
    // 01　Mail Order Wife　伊媚兒新娘　伊媚儿新娘　製作　發行
    { Title: 'Mail Order Wife', Business: 'Production Distribution', BusinessType: 'make publication', Youtube: 'https://youtu.be/St4TzfeE-1o', Img: 'assets/img/portfolio/01.jpg', ImgAlt: 'Mail Order Wife' },
  ],
  // News
  News: {
    Title: 'NEWS',
    MainTitle: '発表',
    FilmLength: '上映時間',
    ReleaseDate: '公開日',
    Minute: '分',
  },
  // NewsBanner
  NewsBanner: {
    Title: '発表',
    MainTitle: '映画作る、発行、販売',
  },
  // NewsContent
  NewsContent: [
    {
      img: 'assets/img/newsImg/05/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/05/img01.jpg' }, { url: 'assets/img/newsImg/05/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/05/img01.jpg')",
      youtube: 'https://youtu.be/6wCc5QcBkZc',
      title: '私の親友の朝ごはん',
      update: '2022/08/01',
      subLabel: '2022年春節期興行収入でトップを飾った。',
      info: '台湾の学園ロマンス映画、同名小説を改編し映画化した作品である。杜政哲が監督を務め，周興哲、李沐、婁峻碩、宋柏緯、林鶴軒、何思靜らが出演する。',
      filmLength: '125',
      releaseDate: '2022/01/28',
      content: "<p>ストーリー概要<br>17才高校2年生の項微心（李沐）は食べることこそが人生で最も重要且つ最大の癒やしだと考えている。<p>世界中の17才の少女がそうであるように、項微心も将来の自分の姿を夢見ていた。<p>彼女の周りの陶宥全、方琦然、張元碩らも同じだ。物語が始まったばかりの頃の彼らはこの1年がこれほど波乱万丈で、人生には様々な疑問が待ち受けているとは思ってもいなかった。。。"
    },
    {
      img: 'assets/img/newsImg/04/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/04/img01.jpg' }, { url: 'assets/img/newsImg/04/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/04/img01.jpg')",
      youtube: 'https://youtu.be/NA4Wa9E5Kpo',
      title: '女鬼橋',
      update: '2020/02/27',
      subLabel: '事実が元となった怖い噂話を改編した物語、夜中の配信中に幽霊が映り込み台湾全土を震撼させた。',
      info: '昔この学校で起こったある噂が時を経て学校の七不思議となっていた。ある女子生徒が薄情な男に振られ夜中に川に飛び込み自殺したという噂がある。それ以来この橋は多くの心霊現象が起こる場所となった。林哲熹.孟耿如.嚴正嵐.張甯.詹宛儒.謝毅宏.葛承らが共演する。',
      filmLength: '87',
      releaseDate: '2020/02/27',
      content: "<p>ストーリー概要<br>触れてはいけない学校のタブー<p>2016年のある閏月、東湖大学の合宿幹部6人は校内にある伝説の「幽霊女橋」で大規模な肝試しを行うことになった。この橋は校内で立ち入ってはいけない禁じられた噂の場所であった。噂ではある女子生徒が意中の男の子のためにこの橋から飛び降り心中した。その後数々の恐ろしい噂が流れた。<p>肝試しの宣伝のために命知らずな6人は真夜中に橋の上で配信した。配信中にまさかの出来事が起こった、女の幽霊の姿を捉えてしまったのだ。配信をみていた多くの人も画面越しに目撃し大騒ぎになった。しかしこの6人は行方不明となり誰も何が起こったか分からないという。。。女鬼橋の噂はまだ続いていたのだ。。。<p>4年後の同日、ニュースキャスターの連舒宇とカメラマンが真相解明のために現場の橋に降り立った。この先に女鬼橋の恐怖の無間輪廻地獄が待ち受けているとも知らず。。。"
    },
    {
      img: 'assets/img/newsImg/03/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/03/img01.jpg' }, { url: 'assets/img/newsImg/03/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/03/img01.jpg')",
      youtube: 'https://youtu.be/lZDcdCngqFY',
      title: "ママは日本へ嫁に行っちゃダメと言うけれど",
      update: '2017/06/05',
      subLabel: '甘くロマンチックな異国のラブソングが台湾と日本を魅了し',
      info: '台湾人女子と、中国語が一言も話せない日本人男子(？！)が33万人のネットユーザーに感動を与えた茂木夫妻のエキゾチックなラブストーリーがスクリーンに登場。簡嫚書X中野裕太のコンビでお送りする甘くロマンチックな異国のラブストーリーは台湾と日本を席巻し、あなたに愛を求める勇気を与えてくれることでしょう。',
      filmLength: '92',
      releaseDate: '2017/06/16',
      content: "<p>ストーリー概要<br>日本のTV・CMディレクター谷內田彰久が監督を務め、簡嫚書、中野裕太、王彩樺、林美秀、蛭子能収が出演した長編映画。<p>日本のドラマとアニメが大好きで大学でも日本語を専攻する100％親日家な青春真っ只中の台湾人女子、薏涵（簡嫚書）。311の地震で世界が揺れる中、薏涵のFacebookに日本の少年「茂木」からメッセージが届く。それは3.11震災後の台湾からの温かい支援に触れた日本人の少年・茂木（中野裕太）が、勇気を出して台湾の人たちに感謝の気持ちを伝えるメッセージだった。薏涵がそれに返信をして二人の縁が繋がった。<p>茂木は休暇で同僚と台湾を訪れ、そして台湾でついに2人は対面を果たした。短い時間ではあったが2人の関係は静かに深まっていった。それ以来Facebookでのメッセージのやり取りが薏涵と茂木の甘いデートの時間になった。たわいもない話をしているだけなのに、とても幸せな気分だった。インターネットが海を越えて2人を結び、重ねた時間の中で薏涵の想いは日本に届き、茂木の想いも台湾にも伝わっていった。<p>薏涵は大学卒業後ワーキングホリデーで日本に行こうと思っていた。夢を叶えるため、そして茂木との距離を縮めるため、薏涵は不安な気持ちを抱えながら日本へと旅立つ。出発直前、薏涵の母は「日本で結婚は許さない」と言うが、彼女は「何があっても茂木と一生を共にする」と心に決めていた。<p>運命の人と出会い、勇気を出して愛を貫いた<p>茂木夫人の国境を超えた愛の物語は、Facebookファングループ「ママは日本へ嫁に行っちゃダメと言うけれど」上で33万人のユーザーを感動させた。異国での結婚生活の話題以外にも多くの面白い動画も共有された。ある日、ある日本人がこの夫妻の話をインターネットに投稿したところ、一夜にして視聴数が爆発的に伸び、日本の出版社十数社が2人にアプローチしてきた。まず、同タイトルの本が出版され、今度は簡嫚書と中野裕太の主演で映画化となった。<p>茂木夫妻の物語が映画化されるというニュースが流れるとすぐに100万のインターネットユーザーが検索を始め、上映前から大盛り上がりとなった。母親の猛反対を押し切って結婚した夫人は果たしてどのような計画を以て茂木氏と結婚したか、甘くロマンチックな異国のラブソングが台湾と日本を魅了し、あなたに愛を追い求める勇気を与えてくれることだろう。"
    },
    {
      img: 'assets/img/newsImg/02/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/02/img01.jpg' }, { url: 'assets/img/newsImg/02/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/02/img01.jpg')",
      youtube: 'https://youtu.be/1bBBRJ8D5xA',
      title: "キセキ －あの日のソビト－",
      update: '2017/04/25',
      subLabel: 'GReeeeNの楽曲は東洋の音楽シーンを席巻しまさに奇跡を起こしたわけだが',
      info: '人気俳優の菅田将暉と松坂桃李ダブル主演による、謎に包まれた日本のバンドGReeeeNの誕生の歴史に迫る！歯学部の学生4人が歌手になる夢を実現するために、家族や友情に揺れ葛藤しながらも、自分の進むべき道を探していく物語である。',
      filmLength: '112',
      releaseDate: '2017/05/05',
      content: "<p>ストーリー概要<br>プロデューサーJIN役に松坂桃李、他の3人のバンドメンバーを率いてデビュー公演を行うバンドリーダーHIDE役に菅田将暉を迎え、困難を乗り越え夢を追いかけるGReeeeNの舞台裏を初公開。<p>JIN（松坂桃李）はバンドをビジネスとして捉え、頑固な父（小林薫）と別れてもデビューするために家を飛び出す。翌年、歯科医になった弟のヒデ（菅田将暉）は、偶然にも兄のJINが家に置いていったギターを手にする。音楽にどっぷりと浸かったHIDEは同級生のNab（横浜流星）、Kuni（成田凌）、Sou（杉野陽）を誘ってバンドGReeeeNを結成し自分達の音楽制作を開始する。<p>一方、JINのバンドはレコード会社と方向性の違いで解散の危機を迎える。バンドが低迷していた頃、弟のHIDEがGReeeeNで録音したデモを兄に編曲の依頼をする。曲を聴いて心から楽しいという感情が湧いてくる前向きな楽曲に、JINは弟の才能を感じ全力でサポートすることを決意する。兄弟で協力し音楽の道を歩むことを決意した2人は、家族や友人関係の混乱や葛藤の中で、次第に進むべき道を見いだしていった。<p>やがてGReeeeNは初めてのライブを行い、客席にはHIDEの恋人・理香（忽那汐里）も観客席から応援していた。JINはプロデューサーとして4人を支えていくことを決意し、同時に自分の音楽の夢を託した。HIDEの音楽家としての道を父に止められないよう、JINはGReeeeNを顔を隠してデビューさせ、楽曲のみで音楽シーンを勝ち抜くという奇策を思いつく。<p>HIDEが作詞し、JINのアパートのクローゼットで録音された新曲「道」はGReeeeNのデビュー曲となり、そしてファーストアルバムも発表した。それを知った母と姉は大喜びしたが、HIDEは音楽にのめり込みすぎて勉強がおろそかになっているとふと感じ、バンドをやめようとする。その時恋人の梨花の「HIDE、あなた結局何がしたいの？」という言葉に心を打たれる。医師として多くの命を救ってきた父を尊敬し、同時に母親の期待にも応えたい、だけど音楽への想いは捨てきれない、ずっと悩みながら走り続けてきたHIDEは何をしたいのか？と自問自答を続ける。そんな葛藤しているHIDEの前にJINが現れる。<p>この瞬間、奇跡の歯車が動き出す。。。！<p>台湾で言うところの五月天(MAYDAY)のような人気を誇る史上最も謎に包まれた日本のバンドGReeeeNは、常に若者の青春と成長を明るく前向きに歌い続けている。野球ドラマ「ROOKIES」の主題歌になった「キセキ」は100万回ダウンロードの最短記録を塗り替え、初日ダウンロード18万回を記録した。同年には590万ダウンロードを超え世界記録を塗り替えた。<p>GReeeeNの楽曲は東洋の音楽シーンを席巻しまさに奇跡を起こしたわけだが、その影響力は計り知れない。GReeeeNはデビュー10周年を迎えたが未だに顔を出したことがない、それでも人気は衰えることを知らず、この4人の歯学科生のバンド結成物語が銀幕に登場する。"
    },
    {
      img: 'assets/img/newsImg/01/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/01/img01.jpg' }, { url: 'assets/img/newsImg/01/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/01/img01.jpg')",
      youtube: 'https://youtu.be/1e8rvpv5zuA',
      title: "ザ・キング",
      update: '2017/04/10',
      subLabel: '朴泰秀は自分がずっとただの駒でしかなかったことをようやく悟り衝撃の復讐を企てるが。。。',
      info: '韓国映画史上最高の実力を誇るイケメン俳優趙寅成と鄭雨盛が演じるのは法政界版「ウルフ・オブ・ウォールストリート」!果てしない欲望を持つ若き検事は金と権力を掴みキングになるためならできないことはない！世界は俺の手の中だ！',
      filmLength: '135',
      releaseDate: '2017/04/21',
      content: "<p>ストーリー概要<br>韓国映画史上最高の実力派揃い、趙寅成、鄭雨盛、柳俊烈、裴晟佑、金義聖、金亞中など粒ぞろいの俳優達が金、権力、性の混沌とした裏側を曝し、「結局誰がキングなのか？」という命題を世間に問いかける。<p>本作は、「観相師-かんそうし-」で大鐘賞監督賞を受賞した韓在林が監督を務め、2017年の新作『ザ・キング』では、趙寅成演じる若い検事が、権力の座に登りつめ表世界で網羅世界でも活躍していくが突然制裁の刃が襲いかかる。韓国での観客動員数は533万人を突破、公開後8日間連続で1位を獲得し、1月の歴代最高興行収入を記録した。<p>世界人口のわずか1％だけがキングとなり、金と権力と欲望を享受できる。<p>主役の朴泰秀（趙寅成）は元々いつも騒ぎを起こしているチンピラで、崔斗日（柳俊烈）と一緒に悪いヤツラのたまり場によく出没する。ある日父親が検事に辱めを受ける現場を目撃し、権力の重要性を認識した彼は、その生まれつきの知性を駆使して司法試験に合格、権力を追い求めていく。<p>もともと正義感の強かった朴泰秀はある握りつぶされた性的暴行事件を捜査し、偶然にも先輩の楊東哲（裴晟佑）の目に留まった、楊東哲はそれを見なかったことにするよう説得し、「内部告発するときは一番のタイミングを見計らえ」と教えた。更に、韓江植（鄭雨盛）率いる勢力に朴泰秀を引き入れ、様々な手段で利益を貪っていく。幾度もの政権交代を経て、検事総長候補の韓江植が力をつけ、彼の右腕である朴泰秀と楊東哲も台頭していく。<p>運命の歯車が回る中で、旧友の崔斗日（柳俊烈）も朴泰秀と再び出会うことになる。暴力団の跡継ぎとなった崔斗日は違法な手段で朴泰秀の反対勢力を排除する役割を担うことになる。その後、朴泰秀は財閥の娘・尚熙（金亞中）と結婚し、表舞台と裏舞台の両方で采配を振るい、権力の中枢に近づいていく。<p>しかし思いもよらない事に朴泰秀は一夜にして天国から地獄に落とされてしまう。韓江植は崔斗日のトラブルに怒り朴泰秀を切り捨て、妻の尚熙は彼の浮気の証拠を掴み激怒し去っていく。朴泰秀は自分がずっとただの駒でしかなかったことをようやく悟り衝撃の復讐を企てるが。。。"
    },
  ],
  // NewsDetail
  NewsDetail: {
    Title: 'NEWS DETAIL',
    MainTitle: '発表',
  },
  // IndexAbout
  IndexAbout: {
    Title: 'ABOUT',
    MainTitle: '得藝について',
    Content: [
      { info: '得藝文創（Double Edge Entertainment）は2001年に映画制作会社もしてアメリカで設立され、映画の制作プロデュース以外にも映画の特殊効果や３D動画製作も行なっている。作品は《Cast Away》、《Batman Begins》、《Driven》など。' },
      { info: "得藝文創は2002年よりハリウッド映画への投資やプロデュースに携わり、さらに中華圏の映画にも範囲を広げ、今までに十数本の映画制作や投資を行なってきた。作品は《Mail Order wife》、《Sledge : The Untold Story》、《Minotaur》、《Smother》、《The Lazarus Project》、《The Women》、《 Step by Step》、《The King of Fighters》、《 MAYDAY 3DNA》、《The Soul of Bread》、《Partners In Crime》、《Second Chance》、《We Are Family 》、《The Bridge Curse》、《My Best Friend's Breakfast》、《哈勇他們家》など。" },
      { info: '得藝文創は2007年より台湾での映画配給と国際ライセンスの販売業務を始めた。今まで20本以上の映画が台湾で配給された。例えば、《Mushishi》、《Peaceful Warrior》、《The Eye》、《THE WOMEN》、《Painted Skin》、《しょうねんメリケンサック》、《ママは日本へ嫁に行っちゃダメと言うけれど》、《グッキー》…など。また、中華圏映画に対してのサポートとして、国際ライセンスの販売も行う。例えば、《The Treasure Hunter》、《Spin Kid》、《Love is sin》、 《Forever Love》など。' },
      { info: "２０２１年からドラマ制作の投資を始めます。作品は《愛的混混》、《中元大餐》、《妮波自由式》など。視聴者に全方面なドラマ作品を提供します。" },
      { info: "得藝文創は常に制作者及び投資家として、投資者-制作者-創作者間の架け橋の役割を担う。" },
    ],
  },
  // IndexContact
  IndexContact: {
    Title: 'CONTACT INFORMATION',
    MainTitle: 'ご連絡',
    InputName: '君の名は',
    InputEmail: 'あなたの郵便受け',
    InputTitle: 'Skype、Telegram',
    InputMsg: 'あなたのメッセージ',
    Notes: '最高のサービスと製品体験を提供するために、あなたの情報を残してください。できるだけ早くご連絡いたします。',
  },
  // Footer
  Footer: {
    Info: 'The content of this website belongs to "Double Edge Entertainment Corp., LTD."',
    Address: '19F.-3, No. 77, Sec. 2, Dunhua S. Rd., Da’an Dist., Taipei City 106, Taiwan (R.O.C.)',
    Telephone: 'Tel：+886(2)-2325-3126',
    Fax: 'Fax：+886(2)-2325-3128',
  },
};
