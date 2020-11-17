// 繁中: zh-tw、簡中: zh-cn、英文: en、泰文: th、越南文: vi、馬來文: ms

// 語系文件
import zhtwLang from '../i18n/langs/zh-tw.js';
import zhcnLang from '../i18n/langs/zh-cn.js';
import enLang from '../i18n/langs/en.js';
import thLang from '../i18n/langs/th.js';
import viLang from '../i18n/langs/vi.js';
import msLang from '../i18n/langs/ms.js';
import inLang from '../i18n/langs/in.js';

// 定義語系物件
const messages = {
  'zh-tw': { ...zhtwLang, },
  'zh-cn': { ...zhcnLang, },
  en: { ...enLang, },
  th: { ...thLang },
  vi: { ...viLang },
  ms: { ...msLang },
  in: { ...inLang },
};

// 預設語系
let locale = (window.navigator.userLanguage || window.navigator.language).toLowerCase();

// 建立 VueI18n 實體多語系設定
const i18n = new VueI18n({
  locale, // set locale
  messages, // set locale messages
});

// Vue
new Vue({
  el: '#app',
  i18n, // 多語系
  data: {
    // 裝置
    isMobile: false,
    // 視窗寬度
    bodyWidth: '',
    // 國旗
    flag: '',
    // 登入
    loginForm: {
      Account: '',
      Password: '',
    },
    // 註冊
    registerForm: {
      Account: '',
      RealName: '',
      Password: '',
      CheckPassword: '',
      Phone: '',
      Email: '',
    },
    // 忘記密碼
    forgetForm: {
      Phone: '',
      Email: '',
    },
    // 會員中心
    memberForm: {
      OldPassword: '',
      Password: '',
      CheckPassword: '',
      Phone: '',
      Email: '',
      Address: '',
      Skype: '',
      Telegram: '',
    },
    // 聯絡我們
    contact: {
      Name: '',
      Email: '',
      Title: '',
      Content: '',
    },
    cartAmount: 0,
    // Shop Select
    shopSelect: '',
    goodsAmount: '',
    // 每頁顯示條目個數
    pageSize: 6,
    // 頁碼按鈕數量
    pagerCount: 5,
    // 總條數目
    total: 600,
    // 當前頁數
    curretPage: null,
    // Member Tab
    activeName: 'information',
    // Order Select
    orderSelect: '',
    // Order Search
    orderSearch: '',
  },
  methods: {
    // 判斷裝置
    checkIsMobile () {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      return flag;
    },
    // 取視窗寬度
    getWidth() {
      this.bodyWidth = parseInt(window.document.body.clientWidth);
    },
    // 預設語系
    setLanguage() {
      if (window.localStorage.Language) {
        locale = window.localStorage.Language;
        i18n.locale = locale;
        this.flag = locale;
      } else {
        window.localStorage.setItem('Language', locale);
        i18n.locale = locale;
        this.flag = locale;
      }
    },
    // 切換語系
    switchLanguage(value) {
      locale = value;
      i18n.locale = locale;
      window.localStorage.setItem('Language', locale);
      window.location.href = '#top';
      window.location.reload();
    },
    // Google Analytics
    // GA_Examples() {
      // Examples
      // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
      // eventCategory,  Value Type text,  Required yes,  Typically the object that was interacted with (e.g. 'Video')
      // eventAction,  Value Type text,  Required yes,  The type of interaction (e.g. 'play')
      // eventLabel,  Value Type text,  Required no,  Useful for categorizing events (e.g. 'Fall Campaign')
      // eventValue,  Value Type integer,  Required no,  A numeric value associated with the event (e.g. 42)
      // ga('send', 'event', 'Videos', 'play', 'Fall Campaign');
    // },
    // GA_Login() {
    //   ga('send', 'event', '登入', 'click');
    // },
    // Pagination 分頁
    handleCurrentChange(val) {
      console.log(`當前页: ${val}`);
      this.curretPage = val;
    },
    // 加入購物車
    addCart() {
      this.cartAmount = this.cartAmount + 1;
    },
    // 刪除購物車
    deleteCart() {
      if (this.cartAmount > 0) {
        this.cartAmount = this.cartAmount - 1;
      } else {
        console.log('No Cart')
        return false;
      }
    },
    // Member Tab
    tabHandleClick(tab, event) {
      window.localStorage.setItem('TabActive', tab.name);
    },
    // Go To Member
    goMember(val) {
      window.localStorage.setItem('TabActive', val);
    },
  },
	created() {
    // 判斷裝置
    if (this.checkIsMobile()) {
      this.isMobile = true;
    }
    // 預設語系
    this.setLanguage();
    // 判斷 Member Tab
    if (!window.localStorage.TabActive) {
      this.activeName = 'information';
    } else {
      this.activeName = window.localStorage.TabActive;
    }
  },
  mounted() {
    // 取視窗寬度
    this.getWidth();
  },
});

// IndexServices
$('.carousel').carousel({
  interval: false,
  ride: false,
  wrap: false,
});
