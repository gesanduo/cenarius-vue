<template>
  <div>
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
    <div class="xx"></div>
    <common></common>
    <p>vuex: {{ count }}</p>
  </div>
</template>
<script>
import common from '~components/Common.vue';

export default {
  data() {
    return {
      aboutMsg: '我是about组件',
    };
  },
  components: {
    common,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
<style>
.xx {
  height: 200px;
  background-image: url('../assets/vux_logo.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
}
</style>

