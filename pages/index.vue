<!--
Template Name: home
Create author: qinglong
Create Time  : 2020-11-03
-->
<template>
  <div>
    <button @click.stop="show = true">打开弹窗</button>
    <modelDialog :show="show" @cancel="cancel" @confirm="confirm" />
  </div>
</template>
<script>
import toast from '@/components/toast.js';
import modelDialog from '@/components/dialog.vue';
export default {
  name: 'home',
  components: { modelDialog },
  data() {
    return { show: false };
  },
  methods: {
    cancel() {
      this.$emit('cancel');
      toast('您取消了');
    },
    confirm() {
      this.$emit('confirm');
      toast('您确定了');
    },
  },
};
</script> 