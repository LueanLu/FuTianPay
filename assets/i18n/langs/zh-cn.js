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
      img: 'assets/img/newsImg/01/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/01/img01.jpg' }, { url: 'assets/img/newsImg/01/img02.jpg' }],
      filmImg: 'assets/img/newsDetail/01/img01.jpg',
      youtube: 'https://youtu.be/NA4Wa9E5Kpo',
      title: '女鬼橋',
      update: '2020/02/27',
      subLabel: '真實靈異傳說改編夜闖直播意外鬼入鏡轟動全台',
      info: '來自真實傳聞已久的校園靈異傳說，相傳有位女學生被負心男拋棄，午夜跳河自盡，從此那座橋就成了眾多靈異現象之地。由林哲熹.孟耿如.嚴正嵐.張甯.詹宛儒.謝毅宏.葛承聯合主演。',
      filmLength: '87',
      releaseDate: '2020/02/27',
      content: "<p>劇情簡介<br>小心！絕不能碰的校園禁忌<p>2016年閏月，六名東湖大學營隊幹部同學，在校園傳說中知名的女鬼橋舉辦試膽大會，這座女鬼橋是流傳已久的校園禁地，傳說中有學姊為了心儀的男生，從橋上跳下去殉情，之後就有許多恐怖傳說。<p>為了幫試膽會做宣傳，不怕死的這群人竟半夜到橋上直播，沒想到直播中竟拍到女鬼現形，這場百萬網友見證的驚人畫面，轟動全台，但從此這群學生卻下落不明……沒有人知道發生了什麼事，女鬼橋的靈異傳說從未停止過....。<p>四年後的同一天，新聞追查主持人連舒宇和攝影師回到女鬼橋事發現場，想找出當年的真相，沒想到他們將迎來的是，女鬼橋下驚悚難解的無間輪迴地獄……"
    },
    {
      img: 'assets/img/newsImg/02/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/02/img01.jpg' }, { url: 'assets/img/newsImg/02/img02.jpg' }],
      filmImg: 'assets/img/newsDetail/02/img01.jpg',
      youtube: 'https://youtu.be/lZDcdCngqFY',
      title: "雖然媽媽說我不可以嫁去日本",
      update: '2017/06/05',
      subLabel: '甜蜜浪漫的跨海異國戀曲',
      info: '一個台灣女生Ｘ一句中文都不會的日本男生？！茂木夫妻感動33萬網友的異國戀愛故事，搬上大螢幕。甜蜜浪漫的跨海異國戀曲即將風靡台日兩地，引領你尋找追愛的勇氣。簡嫚書X中野裕太，才子佳人清新甜蜜組合。',
      filmLength: '92',
      releaseDate: '2017/06/16',
      content: "<p>劇情簡介<br>日本電視、廣告導演谷內田彰久首次執導的電影長片，簡嫚書、中野裕太、王彩樺、林美秀、蛭子能収主演。<p>薏涵（簡嫚書 飾）是個正值花樣年華的台灣女孩，不但熱愛日劇及日本動漫，大學也就讀日文系，是個百分百的哈日族。正當日本311大地震震驚全球，薏涵的Facebook收到了一封來自日本男孩「茂木」的訊息。原來茂木（中野裕太 飾）在震災後感受到台灣全力協助的熱情，鼓起勇氣傳了訊息給幾個台灣人想表達感激，薏涵回覆訊息的同時也開啟了兩人的緣份。<p>茂木放假期間和同事來台旅遊，兩人終於第一次碰面，雖然相處時間短暫，情愫卻悄悄滋長。從那時起，在Facebook上交換訊息成了薏涵和茂木的甜蜜約會時光。即便只是聊些芝麻小事，兩人卻感到無比幸福。網路串連起隔著海洋的兩人，隨著時間累積，薏涵的心意一點一滴的送往日本，而茂木的思念之情也得以飛往台灣。<p>大學畢業後，薏涵打算到日本打工度假。為了一圓自己的夢想，並且拉近和茂木之間的距離，薏涵帶著忐忑不安的心情，踏上了飛往日本的旅程。就在出發前，媽媽特別叮嚀薏涵絕對不可以嫁去日本，殊不知薏涵的心中早已暗自決定，說什麼都要和茂木共度一生……<p>遇見Mr.Right 不顧一切勇敢去愛！<p>茂木太太跨國追愛的故事曾在FB粉絲團「雖然媽媽說我不可以嫁去日本」上感動33萬名網友，除了在上面記錄異國婚姻日常，也分享了很多搞怪逗趣的影片。某天，素昧平生的日本人將這對可愛夫妻的故事po到網路，點閱率一夕爆衝，一口氣連續十幾家日本出版社找上茂木夫妻。先是出了粉絲團同名書籍，現更翻拍成電影，由簡嫚書、中野裕太主演。<p>茂木夫妻的故事搬上大銀幕的消息一釋出，當天馬上引來100萬名網友熱搜，人氣超旺，未演先轟動。究竟當初受到媽媽猛烈反對婚事的茂木太太，用了什麼妙計才嫁給茂木先生呢？甜蜜浪漫的跨海異國戀曲即將風靡台日兩地，引領你尋找追愛的勇氣。"
    },
    {
      img: 'assets/img/newsImg/03/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/03/img01.jpg' }, { url: 'assets/img/newsImg/03/img02.jpg' }],
      filmImg: 'assets/img/newsDetail/03/img01.jpg',
      youtube: 'https://youtu.be/1bBBRJ8D5xA',
      title: "唱吧！奇蹟！",
      update: '2017/04/25',
      subLabel: 'GReeeeN的歌曲席捲東洋樂壇',
      info: '一線人氣演員星菅田將暉、松坂桃李主演。日本神秘天團GReeeeN的誕生歷程！講述四位牙醫系學生，為了實現成為歌手的夢想，在親情友情的迷惘與衝突中，逐漸找到一條勇往直前的道路。',
      filmLength: '112',
      releaseDate: '2017/05/05',
      content: "<p>劇情簡介<br>本片首度曝光GReeeeN克服萬難，追求夢想的幕後故事，由松坂桃李飾演製作人JIN，菅田將暉飾演團長HIDE，率領另外三位團員，首次獻唱。<p>JIN(松坂桃李 飾)將樂團視為事業經營，為了出道，不惜和頑固的父親(小林薰 飾)決裂而離家出走。隔年弟弟HIDE(菅田將暉 飾)考取牙醫系，偶然拿起哥哥JIN留在家裡的吉他，沉浸在音樂世界裡不能自己的HIDE，邀同學Nabi(横浜流星 飾)、Kuni(成田凌 飾演)及Sou(杉野遙亮 飾)一起組成了GReeeeN樂團，開始了自己的創作。<p>另一方面，JIN的樂團和唱片公司理念分歧，面臨解散。正當陷入低潮的時候，弟弟HIDE拿來了GReeeeN錄好的Demo請哥哥幫忙編曲。聽到這些打從心底覺得快樂而歡唱的樂曲，JIN感受到弟弟的天分，決定傾全力幫忙。兩兄弟決心在音樂路上同心協力，一起在親情、友情的迷惘與衝突之中，逐漸找到一條可以勇往直前的道路。<p>不久後，GReeeeN在學生活動中開了第一場演唱會，HIDE的女朋友理香(忽那汐里 飾演) 也在觀眾席為他加油。JIN也默默為他們打氣，下定決心以製作人身分支持這四個人，同時寄託自己的音樂之夢在他們身上。為了不讓父親阻撓HIDE從事音樂事業， JIN想出妙計，拼命奔走，不惜放下身段去拜託一直挖苦自己樂團的唱片公司人員，讓GReeeeN「不露臉」出道，單純用音樂在市場上分勝負。<p>由HIDE撰寫歌詞，在JIN公寓的衣櫥裡完成錄音的新歌「道」，成為GReeeeN的出道曲並出了第一張專輯。母親與姐姐知情後也為這件事而興奮，但HIDE卻突然覺得自己沉溺音樂太久而疏遠了學業，竟想中止樂團活動。這時被女友理香的一句話「HIDE你到底想要做甚麼呢?」所觸動。尊敬著救助許多生命的醫生父親，也希望能滿足母親的期待，卻放不下對音樂的熱愛，以這樣的心情一路走來的HIDE，不停地問自己到底想做甚麼呢？猶豫不決的HIDE眼前出現了哥哥JIN的身影。<p>這時候，奇蹟之輪轉動了……<p>史上最神秘創作天團GReeeeN出道十年，在日本的地位猶如台灣五月天，總能唱出年輕人青春成長、光明正面的熱血心聲。成名曲「奇蹟」，是棒球日劇「ROOKIES不良學園」的爆紅主題曲，曾突破最短時間下載量100萬次、首日下載18萬次等紀錄，並於同年破金氏世界紀錄，總下載量超過590萬次。<p>GReeeeN的歌曲席捲東洋樂壇，名符其實創造了樂團的奇蹟，影響力不容小覷。GReeeeN出道十年來從未露臉，人氣卻絲毫不減，講述四位牙醫系學生創團初期的故事躍上大銀幕。"
    },
    {
      img: 'assets/img/newsImg/04/img01.jpg',
      imgs: [{ url: 'assets/img/newsImg/04/img01.jpg' }, { url: 'assets/img/newsImg/04/img02.jpg' }],
      filmImg: 'assets/img/newsDetail/04/img01.jpg',
      youtube: 'https://youtu.be/1e8rvpv5zuA',
      title: "金權性內幕",
      update: '2017/04/10',
      subLabel: '一場驚世駭俗的復仇',
      info: '韓國影史前所未有的演技神組合，最高顏值兩大男神趙寅成X鄭雨盛，法政版《華爾街之狼》！出賣無底線，慾望無極限，年輕檢察官，為了掌控更多權力，攀附權貴呼風喚雨。沒有什麼不敢，沒有什麼不行，世界在我腳下！',
      filmLength: '135',
      releaseDate: '2017/04/21',
      content: "<p>劇情簡介<br>韓國電影史上前所未有的演技神組合！趙寅成、鄭雨盛、柳俊烈、裴晟佑、金義聖、金亞中等超強卡司同台較勁，掀開金錢、權力、桃色交織的內幕，向社會大眾拋出「究竟誰才是王者？」的精彩命題。<p>曾以《觀相大師：滅王風暴》獲大鐘獎最佳導演的韓在林，2017年的強勢新作《金權性內幕》，講述趙寅成飾演的一名年輕檢察官，為了掌控更多權力，攀附權貴呼風喚雨，馳騁於黑白兩道，卻突遭出賣的復仇故事。在韓突破533萬觀影人次，創下歷年1月票房最高紀錄，上映後連續8天蟬聯冠軍！<p>世界上只有1%的人能成為王者，盡享金權慾望，你，願意出賣自己嗎？<p>主角朴泰秀（趙寅成 飾）原是小混混，到處聚眾滋事、與崔斗日（柳俊烈 飾）時常一起出入不良場所。某天，因為目睹爸爸被檢察官羞辱，意識到了權力的重要性，便憑著過人的智商通過司法考試，踏上追逐權力之路。<p>本性富有正義感的泰秀，當上檢察官之後調查起一樁被吃案的性侵案，意外引來前輩楊東哲（裴晟佑 飾）的注目，楊東哲說服泰秀睜一隻眼閉一隻眼，要他「學會曝光內幕的最佳時機」，並將泰秀拉攏到韓江植（鄭雨盛 飾）為首的勢力圈，與各種盈利手段掛勾。歷經多次政權交替，檢察長候選人韓江植的勢力更加鞏固，身為左右手的朴泰秀和楊東哲也扶搖而上。<p>因緣際會之下，故鄉老友崔斗日（柳俊烈 飾）也與朴泰秀重逢，已成為黑幫接班人的斗日，負責用非法手段剷除朴泰秀的異己勢力。之後，朴泰秀與財閥的女兒尚熙（金亞中 飾）結婚，順理成章地更接近權力核心，在黑白兩道之中呼風喚雨。<p>豈料在一夕之間，朴泰秀從天堂掉到地獄。因為斗日闖禍，韓江植盛怒之下與泰秀斷然切割，同時妻子尚熙抓到劈腿證據憤而離去，朴泰秀才發現自己從來只是一顆呼之則來揮之即去的棋子，便策劃一場驚世駭俗的復仇……"
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
