<!--
Template Name: dialog
Create author: qinglong
Create Time  : 2020-11-04
-->
<template>
  <transition name="dialog">
    <div class="dialog" v-if="show" key="dialog">
      <div class="head">
        <slot name="head">head</slot>
      </div>
      <div class="body">
        <slot name="body">我是正文内容</slot>
      </div>
      <div class="foot">
        <slot class="foot">
          <span class="btn " @click.stop="cancel">取消</span>
          <span class="btn primary" @click.stop="confirm">确定</span>
        </slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modelDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm');
    },
  },
};
</script> 