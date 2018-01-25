<template>
  <div>
    <h1>home</h1>
    <p>{{msg}}</p>
    <a href="./shoppingcart.html">jump</a>
    <common></common>
    <div style="padding: 15px;">
      <x-button @click.native="showLoading" type="primary">显示loading(2s后关闭)</x-button>
    </div>
    <div>
      <p>vuex: {{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
    <img :src="ss">
  </div>
</template>
<script>
import { XButton } from 'vux';
import Common from '~components/Common.vue';
import logo from '../assets/logo.png';
import vuxLogo from '../assets/vux_logo.png';

export default {
  data() {
    return {
      msg: '我是home 组件',
      show1: false,
      text1: 'Processing',
      ss: '/static/img/..',
    };
  },
  methods: {
    showLoading() {
      this.$vux.loading.show({
        text: 'Loading',
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 2000);
    },
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
  components: {
    Common,
    XButton,
  },
  computed: {
    count() {
      if (this.ss === logo) {
        this.ss = vuxLogo;
      } else {
        this.ss = logo;
      }
      return this.$store.state.count;
    },
  },
};
</script>
