export default {
  // Button
  Btn: {
    Submit: '送出',
  },
  // Nav
  Nav: {
    Index: '首页',
    Catalogue: '历年作品',
    News: '最新消息',
    Member: '会员中心',
    Information: '会员资料',
    Order: '订单查询',
    Cart: '购物车',
    About: '关于得艺',
    Contact: '联络我们',
    'zh-tw': '繁体中文',
    'zh-cn': '简体中文',
    en: 'English',
    jp: '日本語',
  },
  // IndexBanner
  IndexBanner: {
    Title01: '我吃了那男孩一整年的早餐',
    MainTitleOne01: "My Best Friend's Breakfast",
    MainTitleTwo01: '最受瞩目的校园爱情电影',
    SubheadingOne01: '周兴哲、李沐、宋柏纬、何思静、娄峻硕、林鹤轩',

    Title02: '女鬼桥',
    MainTitleOne02: 'The Bridge Curse',
    MainTitleTwo02: '台湾悬疑惊悚电影',
    SubheadingOne02: '詹宛儒、张寗、林哲熹、严正岚、葛丞、谢毅宏、孟耿如',

    Title03: '虽然妈妈说我不可以嫁去日本',
    MainTitleOne03: "Mom Thinks I'm Crazy To Marry A Japanese Guy",
    MainTitleTwo03: '爱情喜剧电影',
    SubheadingOne03: '简嫚书、中野裕太',

    Title04: '单身动物园',
    MainTitleOne04: 'The Lobster',
    MainTitleTwo04: '黑色幽默爱情片',
    SubheadingOne04: '柯林法洛、蕾雅瑟杜、瑞秋怀兹、班维萧主演',
  },
  // Advantage
  Advantage: {
    Title: 'ADVANTAGE',
    MainTitle: '平台优势',
    AdvantageMainOne: '资安防护',
    AdvantageInfoOne: 'SSL加密传输 机密资料不外泄',
    AdvantageInfoOne_Two: 'CDN应用 有效防止恶意攻击',
    AdvantageMainTwo: '代收代付',
    AdvantageInfoTwo: '应用脚本自动化任务',
    AdvantageInfoTwo_Two: '自动执行出款任务、明细及馀额查询任务',
    AdvantageInfoTwo_Three: '并做到最快速回调',
    AdvantageMainThree: '客户服务',
    AdvantageInfoThree: '多元性整合型平台',
    AdvantageInfoThree_Two: '有效率的技术支持',
    AdvantageInfoThree_Three: '7*24小时在线客服',
  },
  // Catalogue
  Catalogue: {
    Title: 'CATALOGUE',
    MainTitle: '历年作品',
    Production: '制作',
    Distribution: '发行',
    Sales: '销售',
  },
  // CatalogueData 制作: make 发行: publication 销售: sales
  CatalogueData: [
    // 47　My Best Friend's Breakfast　我吃了那男孩一整年的早餐　我吃了那男孩一整年的早餐　製作
    { Title: '我吃了那男孩一整年的早餐', Business: '制作', BusinessType: 'make', Youtube: 'https://youtu.be/6wCc5QcBkZc', Img: 'assets/img/portfolio/47.jpg', ImgAlt: '我吃了那男孩一整年的早餐' },
    // 46　The Bridge Curse　女鬼橋　女鬼桥　製作　銷售
    { Title: '女鬼桥', Business: '制作 销售', BusinessType: 'make sales', Youtube: 'https://youtu.be/NA4Wa9E5Kpo', Img: 'assets/img/portfolio/46.jpg', ImgAlt: '女鬼桥' },
    // 45　Mom Thinks I'm Crazy To Marry A Japanese Guy　雖然媽媽說我不可以嫁去日本　虽然妈妈说我不可以嫁去日本　發行
    { Title: '虽然妈妈说我不可以嫁去日本', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/lZDcdCngqFY', Img: 'assets/img/portfolio/45.jpg', ImgAlt: '虽然妈妈说我不可以嫁去日本' },
    // 44　KISEKI -SOBITO OF THAT DAY-　唱吧!奇蹟!　唱吧!奇迹!　發行
    { Title: '唱吧!奇迹!', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/1bBBRJ8D5xA', Img: 'assets/img/portfolio/44.jpg', ImgAlt: '唱吧!奇迹!' },
    // 43　THE KING　金權性內幕　金权性内幕　發行
    { Title: '金权性内幕', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/1e8rvpv5zuA', Img: 'assets/img/portfolio/43.jpg', ImgAlt: '金权性内幕' },
    // 42　We Are Family　我們全家不太熟　我们全家不太熟　製作　發行　銷售
    { Title: '我们全家不太熟', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/hVH_9Hpzn9k', Img: 'assets/img/portfolio/42.jpg', ImgAlt: '我们全家不太熟' },
    // 41　Tangerine　夜晚還年輕　夜晚还年轻　發行
    { Title: '夜晚还年轻', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/3u3fFFoUnyg', Img: 'assets/img/portfolio/41.jpg', ImgAlt: '夜晚还年轻' },
    // 40　Absolutely Anything　超能玩很大　超能玩很大　發行
    { Title: '超能玩很大', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/bDWLNPNG5PM', Img: 'assets/img/portfolio/40.jpg', ImgAlt: '超能玩很大' },
    // 39　Marvel Stories　漫威：超級英雄王國　漫威：超级英雄王国　發行
    { Title: '漫威：超级英雄王国', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/7UWiUgprCjw', Img: 'assets/img/portfolio/39.jpg', ImgAlt: '漫威：超级英雄王国' },
    // 38　Secret Sharer　海上情迷　海上情迷　發行
    { Title: '海上情迷', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/55CX2n-Za5M', Img: 'assets/img/portfolio/38.jpg', ImgAlt: '海上情迷' },
    // 37　Partner In Crime　共犯　共犯　製作　發行　銷售
    { Title: '共犯', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/9hvzzKZZbNg', Img: 'assets/img/portfolio/37.jpg', ImgAlt: '共犯' },
    // 36　A Girl Got Her Cue　逆轉勝　逆转胜　製作　發行　銷售
    { Title: '逆转胜', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/C56bsd7hxfY', Img: 'assets/img/portfolio/36.jpg', ImgAlt: '逆转胜' },
    // 35　MIDA　夢見　梦见　銷售
    { Title: '梦见', Business: '销售', BusinessType: 'sales', Youtube: 'https://youtu.be/n_43IBpjoAU', Img: 'assets/img/portfolio/35.jpg', ImgAlt: '梦见' },
    // 34　Forever Love　阿嬤的夢中情人　阿嬷的梦中情人　銷售
    { Title: '阿嬷的梦中情人', Business: '销售', BusinessType: 'sales', Youtube: 'https://youtu.be/vNf6mNpfA_s', Img: 'assets/img/portfolio/34.jpg', ImgAlt: '阿嬷的梦中情人' },
    // 33　Killing them softly　殺戮行動　杀戮行动　發行
    { Title: '杀戮行动', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/tDyaNnrgdp4', Img: 'assets/img/portfolio/33.jpg', ImgAlt: '杀戮行动' },
    // 32　Love Is Sin　白天的星星　白天的星星　銷售
    { Title: '白天的星星', Business: '销售', BusinessType: 'sales', Youtube: 'https://youtu.be/3Dj47fGfp1k', Img: 'assets/img/portfolio/32.jpg', ImgAlt: '白天的星星' },
    // 31　The Grey　即刻獵殺　即刻猎杀　發行
    { Title: '即刻猎杀', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/Hfb0-U0ydj8', Img: 'assets/img/portfolio/31.jpg', ImgAlt: '即刻猎杀' },
    // 30　The Soul of Bread　愛的麵包魂　爱的面包魂　製作　發行　銷售
    { Title: '爱的面包魂', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/HVFP6cNkLGc', Img: 'assets/img/portfolio/30.jpg', ImgAlt: '爱的面包魂' },
    // 29　MAYDAY 3DNA　五月天追夢3DNA　五月天追梦3DNA　製作　發行　銷售
    { Title: '五月天追梦3DNA', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/M1mzZ_8sijI', Img: 'assets/img/portfolio/29.jpg', ImgAlt: '五月天追梦3DNA' },
    // 28　Tomorrow, When the War Began　破曉開戰　破晓开战　發行
    { Title: '破晓开战', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/qAHqv4qXpmo', Img: 'assets/img/portfolio/28.jpg', ImgAlt: '破晓开战' },
    // 27　Killer Elite　特種菁英　特种菁英　發行
    { Title: '特种菁英', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/8XYV81QFI_E', Img: 'assets/img/portfolio/27.jpg', ImgAlt: '特种菁英' },
    // 26 The Kids Are All Right　性福拉警報　性福拉警报　發行
    { Title: '性福拉警报', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/cl93nSDNnbA', Img: 'assets/img/portfolio/26.jpg', ImgAlt: '性福拉警报' },
    // 25　Spin Kid　電哪吒　电哪吒　銷售
    { Title: '电哪吒', Business: '销售', BusinessType: 'sales', Youtube: 'https://youtu.be/AoIo0nIFvGs', Img: 'assets/img/portfolio/25.jpg', ImgAlt: '电哪吒' },
    // 24　Happy Tears　陌路姐妹淘　陌路姐妹淘　發行
    { Title: '陌路姐妹淘', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/G3lwyfjNKqg', Img: 'assets/img/portfolio/24.jpg', ImgAlt: '陌路姐妹淘' },
    // 23　The Experiment　叛獄風雲　叛狱风云　發行
    { Title: '叛狱风云', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/STo6qN4_Eq0', Img: 'assets/img/portfolio/23.jpg', ImgAlt: '叛狱风云' },
    // 22　Hachiko　忠犬小八　忠犬小八　發行
    { Title: '忠犬小八', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/SAv1yXIVm_k', Img: 'assets/img/portfolio/22.jpg', ImgAlt: '忠犬小八' },
    // 21　The King of Fighters　格鬥天王　格斗天王　製作　發行　銷售
    { Title: '格斗天王', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/EiaWx1V7rts', Img: 'assets/img/portfolio/21.jpg', ImgAlt: '格斗天王' },
    // 20　Gangster Rock　混混天團　混混天团　銷售
    { Title: '混混天团', Business: '销售', BusinessType: 'sales', Youtube: 'https://youtu.be/5widREOs0g4', Img: 'assets/img/portfolio/20.jpg', ImgAlt: '混混天团' },
    // 19　Step by Step　練戀舞　练恋舞　製作　發行　銷售
    { Title: '练恋舞', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/6SGUdJaijRE', Img: 'assets/img/portfolio/19.jpg', ImgAlt: '练恋舞' },
    // 18　Treasure Hunter　刺陵　刺陵　銷售
    { Title: '刺陵', Business: '销售', BusinessType: 'sales', Youtube: 'https://youtu.be/zyfp-1wRTAs', Img: 'assets/img/portfolio/18.jpg', ImgAlt: '刺陵' },
    // 17　Summer Time　夏天協奏曲　夏天协奏曲　銷售
    { Title: '夏天协奏曲', Business: '销售', BusinessType: 'sales', Youtube: 'https://youtu.be/R2apTeQUjFM', Img: 'assets/img/portfolio/17.jpg', ImgAlt: '夏天协奏曲' },
    // 16　Spiral　鬼影螺旋　鬼影螺旋　發行
    { Title: '鬼影螺旋', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/eC4NoVFa_NY', Img: 'assets/img/portfolio/16.jpg', ImgAlt: '鬼影螺旋' },
    // 15　Painted Skin　畫皮　画皮　發行
    { Title: '画皮', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/zd7NGlCgyyE', Img: 'assets/img/portfolio/15.jpg', ImgAlt: '画皮' },
    // 14　The Air I Breathe　交錯效應　交错效应　發行
    { Title: '交错效应', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/49vpQH3Jess', Img: 'assets/img/portfolio/14.jpg', ImgAlt: '交错效应' },
    // 13　10 Questions for the Dalai Lama　達賴喇嘛十問　达赖喇嘛十问　發行
    { Title: '达赖喇嘛十问', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/d9c9ugoSzcc', Img: 'assets/img/portfolio/13.jpg', ImgAlt: '达赖喇嘛十问' },
    // 12　The Eye　變眼　变眼　發行
    { Title: '变眼', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/MyrEQSpRiHo', Img: 'assets/img/portfolio/12.jpg', ImgAlt: '变眼' },
    // 11　The TV Set　電影夢工廠　电影梦工厂　發行
    { Title: '电影梦工厂', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/D5n-i4RmPiU', Img: 'assets/img/portfolio/11.jpg', ImgAlt: '电影梦工厂' },
    // 10　Bella　美好的瞬間　美好的瞬间　發行
    { Title: '美好的瞬间', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/mJ9AkTrbxgk', Img: 'assets/img/portfolio/10.jpg', ImgAlt: '美好的瞬间' },
    // 09　Just Friends　謝謝再聯絡　谢谢再联络　發行
    { Title: '谢谢再联络', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/vIBBVzy5UoQ', Img: 'assets/img/portfolio/09.jpg', ImgAlt: '谢谢再联络' },
    // 08　The Women　女人至上　女人至上　製作　發行　銷售
    { Title: '女人至上', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/gtuE87DQDFM', Img: 'assets/img/portfolio/08.jpg', ImgAlt: '女人至上' },
    // 07　The Lazarus Project　撕裂記憶體　撕裂记忆体　製作　發行　銷售
    { Title: '撕裂内存', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/4NU3p_LU6yI', Img: 'assets/img/portfolio/07.jpg', ImgAlt: '撕裂内存' },
    // 06　Peaceful Warrior　深夜加油站遇見蘇格拉底　深夜加油站遇见苏格拉底　發行
    { Title: '深夜加油站遇见苏格拉底', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/tzsGOE57HGo', Img: 'assets/img/portfolio/06.jpg', ImgAlt: '深夜加油站遇见苏格拉底' },
    // 05　Mushishi　蟲師　虫师　發行
    { Title: '虫师', Business: '发行', BusinessType: 'publication', Youtube: 'https://youtu.be/oF8Do0wMhB4', Img: 'assets/img/portfolio/05.jpg', ImgAlt: '虫师' },
    // 04　Smother　老媽愛死你　老妈爱死你　製作　發行　銷售
    { Title: '老妈爱死你', Business: '制作 发行 销售', BusinessType: 'make publication sales', Youtube: 'https://youtu.be/eSXYkZ2HIYc', Img: 'assets/img/portfolio/04.jpg', ImgAlt: '老妈爱死你' },
    // 03　Minotaur　牛頭人　牛头人　製作
    { Title: '牛头人', Business: '制作', BusinessType: 'make', Youtube: 'https://youtu.be/jpP7wSw9nww', Img: 'assets/img/portfolio/03.jpg', ImgAlt: '牛头人' },
    // 02　Confessions of an Action Star　打星自白　打星自白　製作
    { Title: '打星自白', Business: '制作', BusinessType: 'make', Youtube: 'https://youtu.be/hEib6yZmYes', Img: 'assets/img/portfolio/02.jpg', ImgAlt: '打星自白' },
    // 01　Mail Order Wife　伊媚兒新娘　伊媚儿新娘　製作　發行
    { Title: '伊媚儿新娘', Business: '制作 发行', BusinessType: 'make publication', Youtube: 'https://youtu.be/St4TzfeE-1o', Img: 'assets/img/portfolio/01.jpg', ImgAlt: '伊媚儿新娘' },
  ],
  // News
  News: {
    Title: 'NEWS',
    MainTitle: '最新消息',
    FilmLength: '片长',
    ReleaseDate: '上映日期',
    Minute: '分',
  },
  // NewsBanner
  NewsBanner: {
    Title: '最新消息',
    MainTitle: '得艺电影制作、发行、销售',
  },
  // NewsContent
  NewsContent: [
    {
      img: 'assets/img/newsImg/05/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/05/img01.jpg' }, { url: 'assets/img/newsImg/05/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/05/img01.jpg')",
      youtube: 'https://youtu.be/6wCc5QcBkZc',
      title: '我吃了那男孩一整年的早餐',
      update: '2022/08/01',
      subLabel: '2022年春节票房冠军',
      info: '台湾校园爱情电影，此部电影为小说改编的同名作品，由杜政哲执导，由周兴哲、李沐、娄峻硕、宋柏纬、林鹤轩、何思静主演。',
      filmLength: '125',
      releaseDate: '2022/01/28',
      content: "<p>剧情简介<br>17岁、高二的项微心（李沐 饰）视吃为人生最重要也是最疗癒的事，而她第一次跟学长陶宥全（周兴哲 饰）相遇，就是在学校的小卖部。<p>跟全世界的17岁女孩一样，项微心想像过各种自己在未来的样子，而她身边的陶宥全、方琦然、张元硕也一样，故事开始时的他们，并没有想过这一年竟然会有这么多事，人生竟会充满各式各样的疑问……"
    },
    {
      img: 'assets/img/newsImg/04/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/04/img01.jpg' }, { url: 'assets/img/newsImg/04/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/04/img01.jpg')",
      youtube: 'https://youtu.be/NA4Wa9E5Kpo',
      title: '女鬼桥',
      update: '2020/02/27',
      subLabel: '真实灵异传说改编夜闯直播意外鬼入镜轰动全台',
      info: '来自真实传闻已久的校园灵异传说，相传有位女学生被负心男抛弃，午夜跳河自尽，从此那座桥就成了众多灵异现象之地。由林哲熹.孟耿如.严正岚.张宁.詹宛儒.谢毅宏.葛承联合主演。',
      filmLength: '87',
      releaseDate: '2020/02/27',
      content: "<p>剧情简介<br>小心！绝不能碰的校园禁忌<p>2016年闰月，六名东湖大学营队干部同学，在校园传说中知名的女鬼桥举办试胆大会，这座女鬼桥是流传已久的校园禁地，传说中有学姊为了心仪的男生，从桥上跳下去殉情，之后就有许多恐怖传说。<p>为了帮试胆会做宣传，不怕死的这群人竟半夜到桥上直播，没想到直播中竟拍到女鬼现形，这场百万网友见证的惊人画面，轰动全台，但从此这群学生却下落不明……没有人知道发生了什么事，女鬼桥的灵异传说从未停止过....。<p>四年后的同一天，新闻追查主持人连舒宇和摄影师回到女鬼桥事发现场，想找出当年的真相，没想到他们将迎来的是，女鬼桥下惊悚难解的无间轮回地狱……"
    },
    {
      img: 'assets/img/newsImg/03/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/03/img01.jpg' }, { url: 'assets/img/newsImg/03/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/03/img01.jpg')",
      youtube: 'https://youtu.be/lZDcdCngqFY',
      title: "虽然妈妈说我不可以嫁去日本",
      update: '2017/06/05',
      subLabel: '甜蜜浪漫的跨海异国恋曲',
      info: '一个台湾女生Ｘ一句中文都不会的日本男生？！茂木夫妻感动33万网友的异国恋爱故事，搬上大萤幕。甜蜜浪漫的跨海异国恋曲即将风靡台日两地，引领你寻找追爱的勇气。简嫚书X中野裕太，才子佳人清新甜蜜组合。',
      filmLength: '92',
      releaseDate: '2017/06/16',
      content: "<p>剧情简介<br>日本电视、广告导演谷内田彰久首次执导的电影长片，简嫚书、中野裕太、王彩桦、林美秀、蛭子能収主演。<p>薏涵（简嫚书 饰）是个正值花样年华的台湾女孩，不但热爱日剧及日本动漫，大学也就读日文系，是个百分百的哈日族。正当日本311大地震震惊全球，薏涵的Facebook收到了一封来自日本男孩「茂木」的讯息。原来茂木（中野裕太 饰）在震灾后感受到台湾全力协助的热情，鼓起勇气传了讯息给几个台湾人想表达感激，薏涵回覆讯息的同时也开启了两人的缘份。<p>茂木放假期间和同事来台旅游，两人终于第一次碰面，虽然相处时间短暂，情愫却悄悄滋长。从那时起，在Facebook上交换讯息成了薏涵和茂木的甜蜜约会时光。即便只是聊些芝麻小事，两人却感到无比幸福。网络串连起隔着海洋的两人，随着时间累积，薏涵的心意一点一滴的送往日本，而茂木的思念之情也得以飞往台湾。<p>大学毕业后，薏涵打算到日本打工度假。为了一圆自己的梦想，并且拉近和茂木之间的距离，薏涵带着忐忑不安的心情，踏上了飞往日本的旅程。就在出发前，妈妈特别叮咛薏涵绝对不可以嫁去日本，殊不知薏涵的心中早已暗自决定，说什么都要和茂木共度一生……<p>遇见Mr.Right 不顾一切勇敢去爱！<p>茂木太太跨国追爱的故事曾在FB粉丝团「虽然妈妈说我不可以嫁去日本」上感动33万名网友，除了在上面记录异国婚姻日常，也分享了很多搞怪逗趣的影片。某天，素昧平生的日本人将这对可爱夫妻的故事po到网络，点阅率一夕爆冲，一口气连续十几家日本出版社找上茂木夫妻。先是出了粉丝团同名书籍，现更翻拍成电影，由简嫚书、中野裕太主演。<p>茂木夫妻的故事搬上大银幕的消息一释出，当天马上引来100万名网友热搜，人气超旺，未演先轰动。究竟当初受到妈妈猛烈反对婚事的茂木太太，用了什么妙计才嫁给茂木先生呢？甜蜜浪漫的跨海异国恋曲即将风靡台日两地，引领你寻找追爱的勇气。"
    },
    {
      img: 'assets/img/newsImg/02/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/02/img01.jpg' }, { url: 'assets/img/newsImg/02/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/02/img01.jpg')",
      youtube: 'https://youtu.be/1bBBRJ8D5xA',
      title: "唱吧！奇蹟！",
      update: '2017/04/25',
      subLabel: 'GReeeeN的歌曲席卷东洋乐坛',
      info: '一线人气演员星菅田将晖、松坂桃李主演。日本神秘天团GReeeeN的诞生历程！讲述四位牙医系学生，为了实现成为歌手的梦想，在亲情友情的迷惘与冲突中，逐渐找到一条勇往直前的道路。',
      filmLength: '112',
      releaseDate: '2017/05/05',
      content: "<p>剧情简介<br>本片首度曝光GReeeeN克服万难，追求梦想的幕后故事，由松坂桃李饰演制作人JIN，菅田将晖饰演团长HIDE，率领另外三位团员，首次献唱。<p>JIN(松坂桃李 饰)将乐团视为事业经营，为了出道，不惜和顽固的父亲(小林薰 饰)决裂而离家出走。隔年弟弟HIDE(菅田将晖 饰)考取牙医系，偶然拿起哥哥JIN留在家里的吉他，沉浸在音乐世界里不能自己的HIDE，邀同学Nabi(横浜流星 饰)、Kuni(成田凌 饰演)及Sou(杉野遥亮 饰)一起组成了GReeeeN乐团，开始了自己的创作。<p>另一方面，JIN的乐团和唱片公司理念分歧，面临解散。正当陷入低潮的时候，弟弟HIDE拿来了GReeeeN录好的Demo请哥哥帮忙编曲。听到这些打从心底觉得快乐而欢唱的乐曲，JIN感受到弟弟的天分，决定倾全力帮忙。两兄弟决心在音乐路上同心协力，一起在亲情、友情的迷惘与冲突之中，逐渐找到一条可以勇往直前的道路。<p>不久后，GReeeeN在学生活动中开了第一场演唱会，HIDE的女朋友理香(忽那汐里 饰演) 也在观众席为他加油。JIN也默默为他们打气，下定决心以制作人身分支持这四个人，同时寄託自己的音乐之梦在他们身上。为了不让父亲阻挠HIDE从事音乐事业， JIN想出妙计，拼命奔走，不惜放下身段去拜託一直挖苦自己乐团的唱片公司人员，让GReeeeN「不露脸」出道，单纯用音乐在市场上分胜负。<p>由HIDE撰写歌词，在JIN公寓的衣橱里完成录音的新歌「道」，成为GReeeeN的出道曲并出了第一张专辑。母亲与姐姐知情后也为这件事而兴奋，但HIDE却突然觉得自己沉溺音乐太久而疏远了学业，竟想中止乐团活动。这时被女友理香的一句话「HIDE你到底想要做甚么呢?」所触动。尊敬着救助许多生命的医生父亲，也希望能满足母亲的期待，却放不下对音乐的热爱，以这样的心情一路走来的HIDE，不停地问自己到底想做甚么呢？犹豫不决的HIDE眼前出现了哥哥JIN的身影。<p>这时候，奇蹟之轮转动了……<p>史上最神秘创作天团GReeeeN出道十年，在日本的地位犹如台湾五月天，总能唱出年轻人青春成长、光明正面的热血心声。成名曲「奇蹟」，是棒球日剧「ROOKIES不良学园」的爆红主题曲，曾突破最短时间下载量100万次、首日下载18万次等纪录，并于同年破吉尼斯世界纪录，总下载量超过590万次。<p>GReeeeN的歌曲席卷东洋乐坛，名符其实创造了乐团的奇蹟，影响力不容小觑。GReeeeN出道十年来从未露脸，人气却丝毫不减，讲述四位牙医系学生创团初期的故事跃上大银幕。"
    },
    {
      img: 'assets/img/newsImg/01/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/01/img01.jpg' }, { url: 'assets/img/newsImg/01/img02.jpg' }],
      filmImg: "background-image:url('assets/img/newsDetail/01/img01.jpg')",
      youtube: 'https://youtu.be/1e8rvpv5zuA',
      title: "金权性内幕",
      update: '2017/04/10',
      subLabel: '一场惊世骇俗的复仇',
      info: '韩国影史前所未有的演技神组合，最高颜值两大男神赵寅成X郑雨盛，法政版《华尔街之狼》！出卖无底线，慾望无极限，年轻检察官，为了掌控更多权力，攀附权贵呼风唤雨。没有什么不敢，没有什么不行，世界在我脚下！',
      filmLength: '135',
      releaseDate: '2017/04/21',
      content: "<p>剧情简介<br>韩国电影史上前所未有的演技神组合！赵寅成、郑雨盛、柳俊烈、裴晟佑、金义圣、金亚中等超强卡司同台较劲，掀开金钱、权力、桃色交织的内幕，向社会大众抛出「究竟谁才是王者？」的精彩命题。<p>曾以《观相大师：灭王风暴》获大钟奖最佳导演的韩在林，2017年的强势新作《金权性内幕》，讲述赵寅成饰演的一名年轻检察官，为了掌控更多权力，攀附权贵呼风唤雨，驰骋于黑白两道，却突遭出卖的复仇故事。在韩突破533万观影人次，创下历年1月票房最高纪录，上映后连续8天蝉联冠军！<p>世界上只有1%的人能成为王者，尽享金权慾望，你，愿意出卖自己吗？<p>主角朴泰秀（赵寅成 饰）原是小混混，到处聚众滋事、与崔斗日（柳俊烈 饰）时常一起出入不良场所。某天，因为目睹爸爸被检察官羞辱，意识到了权力的重要性，便凭着过人的智商通过司法考试，踏上追逐权力之路。<p>本性富有正义感的泰秀，当上检察官之后调查起一桩被吃案的性侵案，意外引来前辈杨东哲（裴晟佑 饰）的注目，杨东哲说服泰秀睁一只眼闭一只眼，要他「学会曝光内幕的最佳时机」，并将泰秀拉拢到韩江植（郑雨盛 饰）为首的势力圈，与各种盈利手段挂勾。历经多次政权交替，检察长候选人韩江植的势力更加巩固，身为左右手的朴泰秀和杨东哲也扶摇而上。<p>因缘际会之下，故乡老友崔斗日（柳俊烈 饰）也与朴泰秀重逢，已成为黑帮接班人的斗日，负责用非法手段剷除朴泰秀的异己势力。之后，朴泰秀与财阀的女儿尚熙（金亚中 饰）结婚，顺理成章地更接近权力核心，在黑白两道之中呼风唤雨。<p>岂料在一夕之间，朴泰秀从天堂掉到地狱。因为斗日闯祸，韩江植盛怒之下与泰秀断然切割，同时妻子尚熙抓到劈腿证据愤而离去，朴泰秀才发现自己从来只是一颗呼之则来挥之即去的棋子，便策划一场惊世骇俗的复仇……"
    },
  ],
  // NewsDetail
  NewsDetail: {
    Title: 'NEWS DETAIL',
    MainTitle: '最新消息',
  },
  // IndexAbout
  IndexAbout: {
    Title: 'ABOUT',
    MainTitle: '关于得艺',
    Content: [
      { info: '2001年，电影制片公司Double Edge Entertainment在美国成立，除策划工作之外并跨足电影特效领域与3D动画制作包括《Cast Away浩劫重生》、《Batman Begins蝙蝠侠：开战时刻》、《Driven生死极速》等。' },
      { info: "自2002年起，得艺文创持续参与好莱坞电影投资与制作，并将范围扩大至两岸三地华语电影，得艺制作及投资的电影，迄今已有十多部，包括《Mail Order wife 伊媚儿新娘》、《Sledge : The Untold Story》、《Minotaur牛头人》、《Smother 老妈爱死你》、《The Lazarus Project 撕裂内存》、《The Women 女人至上》、《Step by Step练恋舞》、《The King of Fighters 极限格斗》、《MAYDAY 3DNA五月天追梦3DNA》、《The Soul of Bread爱的面包魂》、《Partners In Crime共犯》、《Second Chance逆转胜》、《We Are Family 我们全家不太熟》、《The Bridge Curse 女鬼桥》、《My Best Friend's Breakfast我吃了那男孩一整年的早餐》、《哈勇他们家》等。" },
      { info: "2007年起，得艺文创也跨足电影发行与国际版权贩卖的业务，截至目前为止，已经在台湾发行超过20部电影，例如《Mushishi虫师》、《Peaceful Warrior深夜加油站遇见苏格拉底》、《The Eye变眼》、《THE WOMEN女人至上》、《Painted Skin画皮》、《少年手指虎》、《Mom Thinks I'm Crazy to Marry a Japanese Guy虽然妈妈说我不能嫁去日本》、《Kiseki: Anohi no sobito唱吧！奇蹟！》、《The King金权性内幕》…等。得艺文创亦协助华语电影，进行国际版权贩卖，例如《The Treasure Hunter刺陵》、《Spin Kid电哪咤》、《Love is sin白天的星星》、 《Forever Love阿嬷的梦中情人》等等。" },
      { info: '2021年起开始参与投资制作影集《What The Hell Is Love爱的混混》、《中元大餐》、《妮波自由式》…等等，将带给观众全方位影视作品。' },
      { info: '得艺文创通常以制片人或投资方的身分，扮演投资方、制作方与创作者之间的桥樑，以产业化模式进行企业经营。' },
    ],
  },
  // IndexContact
  IndexContact: {
    Title: 'CONTACT INFORMATION',
    MainTitle: '联络我们',
    InputName: '您的姓名',
    InputEmail: '您的邮箱',
    InputTitle: 'Skype、Telegram',
    InputMsg: '您的讯息',
    Notes: '为了致上我们最好的服务与产品体验，请留下您的信息，我们将尽快与您联系。',
  },
  // Footer
  Footer: {
    Info: '本网站内容属「 得艺文创国际股份有限公司 」所有',
    Address: '地址：106台北市大安区敦化南路二段77号19楼之3',
    Telephone: '电话：+886(2)-2325-3126',
    Fax: '传真：+886(2)-2325-3128',
  },
};
