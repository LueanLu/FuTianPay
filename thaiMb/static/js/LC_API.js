function parseJwt (token) {
  var base64Url = token.split('.')[1];
  if(base64Url){
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  } else {
    return {}
  }
};
if(window.localStorage.JWT_TOKEN){
  var JWT = localStorage.getItem('JWT_TOKEN')
  var decode = parseJwt(JWT)
  if(decode==undefined){
    decode={}
    decode.name='Guest';
  }
  window.__lc = window.__lc || {};
  window.__lc.license = 11733069;
  window.__lc.group = 1;
  window.__lc.visitor = {name:decode.username};
}else{
  window.__lc = window.__lc || {};
  window.__lc.license = 11733069;
  window.__lc.group = 1;
  window.__lc.visitor = {name:'Guest'};
}
(function() {
  var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
  lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
})();

var LC_API = LC_API || {};
var livechat_chat_started = false;

LC_API.on_before_load = function() {
  // don't hide the chat window only if visitor
  // is currently chatting with an agent
  if (LC_API.visitor_engaged() === false && livechat_chat_started === false) {
    LC_API.hide_chat_window();
  }
};

LC_API.on_chat_started = function() {
  livechat_chat_started = true;
};

// 聊天窗口最小化時隱藏聊天窗口
LC_API.on_chat_window_minimized = function() {
  LC_API.hide_chat_window();
};