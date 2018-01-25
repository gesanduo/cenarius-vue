import Vue from 'vue';
import Vuex from 'vuex';
// import logger from './logger'; // 记录日志 ：logger 插件会生成状态快照，所以仅在开发环境使用。

Vue.use(Vuex);

const store = new Vuex.Store({
//  plugins: [logger],
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export default store;
