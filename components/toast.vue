<!--
Template Name: toast
Create author: qinglong
Create Time  : 2020-11-04
-->
<template>
  <transition name='toast'>
    <div class="toast" v-show="visible">
      <span> {{content}} </span>
    </div>
  </transition>
</template> 
<script>
export default {
  name: 'toast',
  data() {
    return {
      visible: false,
      content: '',
      duration: 3000,
    };
  },
  methods: {
    setTimer() {
      setTimeout(() => {
        this.close();
      }, this.duration);
    },
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 500);
    },
  },
  mounted() {
    this.setTimer();
  },
};
</script>
<style lang='less' scoped>
</style>