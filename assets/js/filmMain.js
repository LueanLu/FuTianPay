// 繁中: zh-tw、簡中: zh-cn、英文: en、日文: jp

// 語系文件
import zhtwLang from '../i18n/langs/zh-tw.js';
import zhcnLang from '../i18n/langs/zh-cn.js';
import enLang from '../i18n/langs/en.js';
import jpLang from '../i18n/langs/jp.js';

// 定義語系物件
const messages = {
  'zh-tw': { ...zhtwLang, },
  'zh-cn': { ...zhcnLang, },
  en: { ...enLang, },
  jp: { ...jpLang, },
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
  el: '#film',
  i18n, // 多語系
  data: {
    // 裝置
    isMobile: false,
    // 視窗寬度
    bodyWidth: '',
    // 國旗
    language: '',
    // 歷年作品
    catalogueData: null,
    // 關於我們
    about: '',
    // 最新消息
    news: '',
    newsId: 0,
    // 聯絡我們
    contact: {
      Name: '',
      Email: '',
      Title: '',
      Content: '',
    },
    cartAmount: 0,
    // 每頁顯示條目個數
    pageSize: 3,
    // 頁碼按鈕數量
    pagerCount: 3,
    // 總條數目
    total: 0,
    // 當前頁數
    curretPage: null,
    // Member Tab
    activeName: 'information',
  },
  methods: {
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
    // 判斷裝置
    checkIsMobile () {
      const ua = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      return ua;
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
        this.language = locale;
      } else {
        window.localStorage.setItem('Language', locale);
        i18n.locale = locale;
        this.language = locale;
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
    // Pagination 分頁
    handleCurrentChange(val) {
      console.log(`當前页: ${val}`);
      this.curretPage = val;
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

    this.catalogueData = this.$t('CatalogueData');
  },
  mounted() {
    // 取視窗寬度
    this.getWidth();
    this.about = this.$t('IndexAbout.Content');
    this.news = this.$t('NewsContent');
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    this.newsId = params.newsId;
  },
});

// jQuery Function

function main() {
  (function () {
    'use strict';
    // Testimonial Slider
    $('a.page-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    // Show Menu on Book
    $(window).bind('scroll', function () {
      var navHeight = $(window).height() - 550;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });

    $('body').scrollspy({
      target: '.navbar-default',
      offset: 80
    })

    $("#clients").owlCarousel({
      navigation: false, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      autoHeight: true,
      itemsCustom: [
        [0, 1],
        [450, 2],
        [600, 2],
        [700, 2],
        [1000, 4],
        [1200, 5],
        [1400, 5],
        [1600, 5]
      ],
    });

    $("#testimonial").owlCarousel({
      navigation: false, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true
    });
  });

  // Portfolio Isotope Filter
  $(window).on('load', function () {
    var $container = $('.portfolioItems');
    $container.isotope({
      filter: '.make',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    $('.cat a').click(function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  });

  // Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

  // Index Banner
  $('.carousel').carousel({
    interval: 5000,
    ride: true,
    wrap: true,
  });
};

main();
