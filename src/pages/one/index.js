import Vue from 'vue';
// plugins
import { LoadingPlugin } from 'vux';
import App from './App.vue';

// 引入路由
import router from './manage/router.js';
// 注入 vuex
import store from './manage/vuex.js';

Vue.use(LoadingPlugin);

/* eslint-disable no-new */
new Vue({
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  // 把 router 注入到根实例中
  router,
  render: h => h(App),
}).$mount('#app-box');
