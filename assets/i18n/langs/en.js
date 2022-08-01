export default {
  // Button
  Btn: {
    Submit: 'Submit',
  },
  // Nav
  Nav: {
    Index: 'Home',
    Catalogue: 'Catalogue',
    News: 'News',
    Member: 'Member Centre',
    Information: 'Member Information',
    Order: 'Order Tracking',
    Cart: 'Cart',
    About: 'About Dee',
    Contact: 'Contact Us',
    'zh-tw': '繁體中文',
    'zh-cn': '简体中文',
    en: 'English',
    jp: '日本語',
  },
  // IndexBanner
  IndexBanner: {
    Title01: "My Best Friend's Breakfast",
    MainTitleOne01: "My Best Friend's Breakfast",
    MainTitleTwo01: 'Most Watched Campus Romance',
    SubheadingOne01: '周兴哲、李沐、宋柏纬、何思静、娄峻硕、林鹤轩',

    Title02: 'The Bridge Curse',
    MainTitleOne02: 'The Bridge Curse',
    MainTitleTwo02: 'Taiwan Suspense Thriller',
    SubheadingOne02: '詹宛儒、张寗、林哲熹、严正岚、葛丞、谢毅宏、孟耿如',

    Title03: "Mom Thinks I'm Crazy To Marry A Japanese Guy",
    MainTitleOne03: "Mom Thinks I'm Crazy To Marry A Japanese Guy",
    MainTitleTwo03: 'Romantic Comedy',
    SubheadingOne03: '简嫚书、中野裕太',

    Title04: 'The Lobster',
    MainTitleOne04: 'The Lobster',
    MainTitleTwo04: 'Black Humor Romance',
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
    MainTitle: 'Works Over The Years',
    Production: 'Production',
    Distribution: 'Distribution',
    Sales: 'Sales',
  },
  // CatalogueData 製作: make 發行: publication 銷售: sales
  CatalogueData: [
    // 47　My Best Friend's Breakfast　我吃了那男孩一整年的早餐　我吃了那男孩一整年的早餐　製作
    { Title: "My Best Friend's Breakfast", Business: 'Production', BusinessType: 'make', Youtube: 'https://youtu.be/6wCc5QcBkZc', Img: 'assets/img/portfolio/47.jpg', ImgAlt: "My Best Friend's Breakfast" },
    // 46　The Bridge Curse　女鬼橋　女鬼桥　製作　銷售
    { Title: 'The Bridge Curse', Business: 'Production Sales', BusinessType: 'make sales', Youtube: 'https://youtu.be/NA4Wa9E5Kpo', Img: 'assets/img/portfolio/46.jpg', ImgAlt: 'The Bridge Curse' },
    // 45　Mom Thinks I'm Crazy To Marry A Japanese Guy　雖然媽媽說我不可以嫁去日本　虽然妈妈说我不可以嫁去日本　發行
    { Title: "Mom Thinks I'm Crazy To Marry A Japanese Guy", Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/lZDcdCngqFY', Img: 'assets/img/portfolio/45.jpg', ImgAlt: "Mom Thinks I'm Crazy To Marry A Japanese Guy" },
    // 44　KISEKI -SOBITO OF THAT DAY-　唱吧!奇蹟!　唱吧!奇迹!　發行
    { Title: 'KISEKI -SOBITO OF THAT DAY-', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/1bBBRJ8D5xA', Img: 'assets/img/portfolio/44.jpg', ImgAlt: 'KISEKI -SOBITO OF THAT DAY-' },
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
    { Title: 'Hachiko', Business: 'Distribution', BusinessType: 'publication', Youtube: 'https://youtu.be/SAv1yXIVm_k', Img: 'assets/img/portfolio/22.jpg', ImgAlt: 'Hachiko' },
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
    MainTitle: 'Latest News',
    FilmLength: 'Runtime',
    ReleaseDate: 'Release Date',
    Minute: 'Minute',
  },
  // NewsBanner
  NewsBanner: {
    Title: 'NEWS',
    MainTitle: 'Dee Film Production, Distribution, Sales',
  },
  // NewsContent
  NewsContent: [
    {
      img: 'assets/img/newsImg/05/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/05/img01.jpg' }, { url: 'assets/img/newsImg/05/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/05/img01.jpg')",
      youtube: 'https://youtu.be/6wCc5QcBkZc',
      title: "My Best Friend's Breakfast",
      update: '2022/08/01',
      subLabel: '2022 Taiwan box office champion during Spring Festival.',
      info: 'A campus love story film based on a novel of the same name, directed by Ryan Tu, starring Eric Chou, Moon Lee, Jun-Shuo Lou, Edison Song, Da-her Lin, Jean Ho.',
      filmLength: '125',
      releaseDate: '2022/01/28',
      content: "<p>Overview<br>Wei-Xin Xiang (Moon Lee), a 17-year-old high school sophomore, regards eating as the most important and enjoying thing in life, and her first destined meeting with You-Quan Tao (Eric Chou) was at the school’s convenience store.<p>Like any other 17-year-old girl, Wei-Xin imagined what she will become in the future. At the same time, people around her such as You-Quan, Qiran Fang, and Yuan-shuo Zhang are the same, they never thought that this year would be so eventful and that life will be full of all kinds of questions..."
    },
    {
      img: 'assets/img/newsImg/04/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/04/img01.jpg' }, { url: 'assets/img/newsImg/04/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/04/img01.jpg')",
      youtube: 'https://youtu.be/NA4Wa9E5Kpo',
      title: 'The Bridge Curse',
      update: '2020/02/27',
      subLabel: 'Adapted from a real-life urban legend where a ghost crossed into a night break livestream video caused a stir in Taiwan.',
      info: 'Derived from a lasting urban legend, rumor says that a female student ended her life at the campus river in the middle of the night after being abandoned by a heartless man, since then the bridge became a place haunted by ghostly beings. Casted by J.C Lin, Summer Meng, Vera Yen, Zhan Wan-Ru, Cheng Ko.',
      filmLength: '87',
      releaseDate: '2020/02/27',
      content: "<p>Overview<br>Watch out! The untouchable campus taboo<p>2016 leap month, 6 students from the Soochow University planned a bravery initiation test for their fellow classmates and chose the campus bridge rumored to be haunted by a vengeful female ghost as the event venue.<p>To promote the bravery test, they night break into the campus to livestream on the bridge and accidently got the ghost framed in camera, this scene being witnessed by millions of viewers caused a stir in Taiwan but the students mysteriously disappeared from the public…. No one knew what happened that night and the rumors of the cursed bridge continues…<p>4 years later on the very same day, news reporter Lian along with her cameraman came back to the scene to find out the truth. What they did not expect is to step into the abyss cycle of inferno under the cursed bridge…"
    },
    {
      img: 'assets/img/newsImg/03/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/03/img01.jpg' }, { url: 'assets/img/newsImg/03/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/03/img01.jpg')",
      youtube: 'https://youtu.be/lZDcdCngqFY',
      title: "Mon Thinks I'm Crazy To Marry A Japanese Guy",
      update: '2017/06/05',
      subLabel: ' The sweet and romantic cross-border love story is about to become popular in Taiwan and Japan, leading you to find the courage to pursue love.',
      info: 'A Taiwanese girl & a Japanese boy that cannot speak a word of Chinese!? The exotic love story between Mr. and Mrs Mogi touched over 330,000 netizens are now in cinema. The sweet and romantic overseas love song is about to become popular in Taiwan and Japan, leading you to find the courage to pursue love. Jian Man-shu X Nakano Yuta, a fresh and sweet combination of beautiful and talented couple.',
      filmLength: '92',
      releaseDate: '2017/06/16',
      content: "<p>Overview<br>Directed by Akihisa Yachida, famous TV show and advert director in Japan, casted by Jian Man-shu, Nakano Yuta, Lotus Wang, Lin Mei-hsiu and Yoshikazu Ebisu.<p>Yi-han (Jian Man-shu) is a Taiwanese girl whom is in love with Japanese drama and anime, and also majors the language in college, she is a hundred percent Japanophile. Whilst the 311 earthquakes in Japan shocked the world, Yi-han received a Facebook message from a Japanese boy named “Mogi” (Nakano Yuta) to show appreciation for Taiwan’s support during the disaster. As Yi-han replies to Mogi’s message it opened the door of fate for the two.<p>During a holiday trip to Taiwan, Mogi finally met Yi-han for the first time. Although the time together was short, their affection grew quietly. Since then, exchanging messages on Facebook has become a sweet date time for Yihan and Mogi. Even if they were just talking about small things, the two felt extremely happy. The Internet connected the two across the ocean. As time accumulates, Yihan's thoughts are sent to Japan bit by bit, and Mogi's thoughts were also be flown to Taiwan.<p>After graduation, Yi-han plans to go to Japan for a working holiday. In order to realize her dream and shorten the distance between Mogi, Yi-han embarked on a journey to Japan with an uneasy mood. Despite her mother’s warning not to marry to Japan, she had already decided in her heart that she would spend the rest of her life with Mogi...<p>Meet Mr. Right and be brave to love at all costs!<p>The story of Mrs. Mogi's pursuit for love on her FB page 'Mom thinks I’m crazy to marry and Japanese Guy' has touched over 330,000 netizens. It recorded their daily lives as a cross-border couple as well as lots of funny videos and attracted many followers. One day, a Japanese stranger re-posted their story on the Internet and the click-rate skyrocketed overnight. Mr. and Mrs. Mogi were soon approached by dozens of Japanese publishers and published a book named after their FB page, and now the story being remade into a movie starring Jian Man-shu and Nakano Yuta.<p>As soon as the news about Mr. and Mr Mogi’s story will be released on the big screen, it attracted 1 million netizens searching on the internet causing a stir before the release. After all, people are curious on what kind of trick did Mrs. Mogi, whose pursuit for love were violently opposed by her mother, get to marry Mr. Mogi? The sweet and romantic cross-border love story is about to become popular in Taiwan and Japan, leading you to find the courage to pursue love."
    },
    {
      img: 'assets/img/newsImg/02/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/02/img01.jpg' }, { url: 'assets/img/newsImg/02/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/02/img01.jpg')",
      youtube: 'https://youtu.be/1bBBRJ8D5xA',
      title: "Kiseki: Anohi no sobito",
      update: '2017/04/25',
      subLabel: "GReeeeN's songs have swept the oriental music playground",
      info: 'Starred by A-list actors Hoshi Suda Masaki and Matsuzaka Tōri. The birth of the Japanese mysterious group GReeeeN! The story of four dental students struggling with confusion and conflicting relationships in their pursuit of dream of becoming singers, and gradually finds their courage to move forward.',
      filmLength: '112',
      releaseDate: '2017/05/05',
      content: "<p>Overview<br>For the first time, the film exposed the behind-the-scenes story on how GReeeeN overcame difficulties in pursuit of their dreams. Starred by Matsuzaka Tōri as producer JIN, Hoshi Suda Masaki as the lead HIDE, leading the band members singing for the first time.<p>JIN (Matsuzaka Tōri) regards the band as his life career, and in order to make his debut, he did not hesitate to break with his stubborn father (Kobayashi Kaoru) and ran away from home. The following year, his younger brother HIDE (Hoshi Suda Masaki) was admitted into the dental school. One day HIDE occasionally picked up JIN’s guitar and completely immersed himself in the world of music, soon he invited his classmate Nabi (Yokohama Ryusei), Kuni (Narita Ryō) and Sou (Yosuke Sugino) to form the GReeeeN band and started composing their own songs.<p>On the other hand, JIN's band had differences with the record company and are facing dissolution. Whilst JIN going through a difficult time, HIDE brought GReeeeN’s demo song and asked for JIN’s help to arrange music for it. As JIN listen to the songs that were sang happily from the heart, JIN felt his younger brother's talent and decided to do his best. The two brothers are determined to work together on the road of music, together they managed to a way to move forward with courage in conflicting relationships between their family and friends.<p>Soon, GReeeeN had their first concert in a student’s event. While HIDE's girlfriend Rika (starring Shiori Kutsuna) cheered for him at the audience, JIN cheered for them silently behind the scenes and decided to pursue his dream by supporting GReeeeN as producers. In order to prevent his father from obstructing HIDE's music career, JIN came up with a plan and did not hesitate ask the staff from the record company who have been sarcastic to JIN this whole time, just to let GReeeeN make his debut 'anonymously', and simply let music decide the market.<p>The song '道(Path)', written by HIDE and recorded in the wardrobe at JIN's apartment became GReeeeN's debut song and released their first album. While his mother and sister were excited about his choice, HIDE had a sudden feeling that he has been addicted to music for too long and intends to cease band activities as he’s estranged from his studies, but was touched by his girlfriend Rika asking a soul touching question 'HIDE, what exactly do you want to do?'. HIDE respects his father who saved lives as a doctor and wants to meet his mother’s expectations but at the same time could not let go of his love for music, with all these complicated feelings kept asking what exactly does he want. While HIDE struggles his brother appeared in his sight.<p>And the wheel of Kiseki (miracles) turns...<p>The most mysterious band in history, GReeeeN, debuted for over ten years with its outstanding achievement and status in Japan like Mayday in Taiwan, were able to sing out the growth and struggle of youngsters in bight and positive manner. Their signature hit 'Kiseki (miracle)' is the theme song for Japanese baseball series 'ROOKIES', with 180K download on the first day of release and 1 million download shortly it went viral and broke the Guinness World Record in the same year, it had over 5.9 million download in total.<p>GReeeeN's songs have swept the oriental music playground, creating a band miracle with its influence that cannot be underestimated. GReeeeN has never revealed their identity in the past ten years since their debut, but their popularity did not diminish a glimpse. This is a story of the early days of four dental students showing on the big screen for the first time."
    },
    {
      img: 'assets/img/newsImg/01/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/01/img01.jpg' }, { url: 'assets/img/newsImg/01/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/01/img01.jpg')",
      youtube: 'https://youtu.be/1e8rvpv5zuA',
      title: "The King",
      update: '2017/04/10',
      subLabel: 'Plans a dreadful revenge...',
      info: 'An unprecedented combination of superb actors in Korean film history, the two male gods Zo In-sung & Jung Woo-sung, the legal and political version of "The Wolf of Wall Street"! Betrayal has no bottom line, desire has no limit, in order to gain control of powers, young prosecutor clings to the powerful and makes his storm call. There is nothing to dare, nothing to fail, the world is at my feet!',
      filmLength: '135',
      releaseDate: '2017/04/21',
      content: "<p>Overview<br>An unprecedented combination of acting skills in Korean film history! Zo In-sung, Jung Woo-sung, Ryu Jun-yeol, Bae Seong-woo, Kim Eui-sung, and Kim Ah-joong competing on the same stage, revealing the inside story interweaved by money, power, and scandals, the public are faced with an astonishing proposition as to “who will be our king?”<p>Han Jae-Rim, who won the Great Bell Award for Best Director with 'The Face Reader', has returned with 'The King' in 2017. A revenge story about a young prosecutor starred by Zo In-sung, who clings to the powerful in order to gain more control over power. He swings his way between the law and the underworld, but was tumbled with sudden betrayal. The number of viewers in Korea has exceeded 5.33 million, setting a record for the highest box office in January over the years and won the championship for 8 consecutive days since its release!<p>Only 1% of the people in the world can become kings and enjoy the fruit of lust and power. Are YOU willing to sell your souls?<p>Park Tae-Soo (Starring Zo In-sung) was a gangster who often hang out with his buddy Choi Doo-Il (Starring Ryu Jun-yeol) causing trouble in the neighborhoods. One day, he witnessed his father being humiliated by a prosecutor, realizing the importance of power he passed the judicial examination with his extraordinary IQ and embarked on his path in pursuit of power.<p>While Tae-Soo investigates a sexual assault case after becoming a prosecutor, he accidently attracted the attention of his senior Yang Dong-chul (Starring Bae Seong-woo). Yang Dong-chul persuades Tae-soo to turn a blind eye and taught him to 'learn the best timing to expose a conspiracy'. He connects Tae-Soo to the power circle led by Han Kang-Sik (Starring Jung Woo-sung) and interweave him with means of profit. After several regime changes, Han Kang-Sik’s power circle has become more consolidated in pursuing his candidacy for the position of Chief Prosecutor, his right-hand man Park Tae-soo and Yang Dong-chul have also risen to the top.<p>On the other hand, Park Tae-soo reunites with his old folk Choi Doo-Il, who has become the successor of the underworld, is responsible for eradicating Park Tae-soo's dissident forces by illegal means. Thereafter Park Tae-soo marries Lim Sang-Hee (Starring Kim Ah-joong), the daughter of a chaebol, making him one step closer to the core power and he was able to make his storm call between the law and the underworld.<p>Unexpectedly, Park Tae-soo fell from heaven to hell overnight as Doo-Il made trouble, causing Han Kang-Sik to cut off with Tae-soo in anger, meanwhile his wife Sang-Hee left as she caught him cheating on her. Park Tae-soo suddenly realized that he had been a pawn that would come and go, so he plans a dreadful revenge..."
    },
  ],
  // NewsDetail
  NewsDetail: {
    Title: 'NEWS DETAIL',
    MainTitle: 'Latest News',
  },
  // IndexAbout
  IndexAbout: {
    Title: 'ABOUT',
    MainTitle: 'About Dee',
    Content: [
      { info: 'In 2001, Double Edge Entertainment was established in the United States of America and specialized in program planning. It also spans in movie special effects and 3D animation such as in《Cast Away》、《Batman Begins》、《Driven》etc.' },
      { info: "As of 2002, Double Edge continuously participates in Hollywood movie investments and production, and expands its scope of business in Mainland movies such as Mail Order wife》、《Sledge : The Untold Story》、《Minotaur》、《Smother》、《The Lazarus Project》、《The Women》、《Step by Step》、《The King of Fighters》、《MAYDAY 3DNA》、《The Soul of Bread》、《Partners In Crime》、《Second Chance》、《We Are Family 》、《The Bridge Curse》、《My Best Friend's Breakfast》、《哈勇他們家》etc. " },
      { info: "Since 2007, Double Edge spanned in film distribution and international copyright management, to date it has distributed over 20 movies in Taiwan, including 《Mushishi》、《Peaceful Warrior》、《The Eye》、《THE WOMEN》、《Painted Skin》、《Shonen Merikensack》、《Mom Thinks I'm Crazy to Marry a Japanese Guy》、《Kiseki: Anohi no sobito》、《The King》etc. and provided assistance to Asia films in international copyright management such as  《The Treasure Hunter刺陵》、《Spin Kid電哪吒》、《Love is sin白天的星星》、 《Forever Love阿嬤的夢中情人》etc." },
      { info: 'As of 2021, Double Edge invested and participated in the production of drama series 《What The Hell Is Love》、《中元大餐》、《The Nipple Talk》, etc., which will bring a full range of films and televisions to the audiences.' },
      { info: "Double Edge often plays a role as producer or investor and bridge between investors, producer and content creators so as to industrializing production businesses." },
    ],
  },
  // IndexContact
  IndexContact: {
    Title: 'CONTACT INFORMATION',
    MainTitle: 'Contact us',
    InputName: 'Your Name',
    InputEmail: 'Your Email',
    InputTitle: 'Skype、Telegram',
    InputMsg: 'Your Message',
    Notes: 'In order to provide our best service and product experience, please leave your message and we will contact you as soon as possible.',
  },
  // Footer
  Footer: {
    Info: 'The content of this website belongs to "Double Edge Entertainment Corp., LTD."',
    Address: '19F.-3, No. 77, Sec. 2, Dunhua S. Rd., Da’an Dist., Taipei City 106, Taiwan (R.O.C.)',
    Telephone: 'Tel：+886(2)-2325-3126',
    Fax: 'Fax：+886(2)-2325-3128',
  },
};
