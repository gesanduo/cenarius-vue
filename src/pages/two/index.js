import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from './manage/router.js';

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-box');
