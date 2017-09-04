import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
import Home from '../component/Home.vue';
import About from '../component/About.vue';

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  // 重定向
  {
    path: '/',
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
});
export default router;
