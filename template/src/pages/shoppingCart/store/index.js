import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import cart from './modules/cart';
import products from './modules/products';
// import logger from './logger'; // 记录日志 ：logger 插件会生成状态快照，所以仅在开发环境使用。


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  // plugins: [logger],
  actions,
  modules: {
    cart,
    products,
  },
  strict: debug,
});
