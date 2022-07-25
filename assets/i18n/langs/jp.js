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
    Title: 'The Lobster',
    MainTitleOne: 'The Lobster',
    MainTitleTwo: 'Black Humor Romance',
    SubheadingOne: 'Colin Farrell、Léa Seydoux、Rachel Weisz、Ben Whishaw',
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
    { Title: 'THE KING', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/1e8rvpv5zuA', Img: 'assets/img/portfolio/43.jpg', ImgAlt: 'THE KING' },
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
  },
  // NewsBanner
  NewsBanner: {
    Title: '発表',
    MainTitle: '映画作る、発行、販売',
  },
  // NewsDetail
  NewsDetail: {
    Title: 'NEWS DETAIL',
    MainTitle: '発表内容',
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
