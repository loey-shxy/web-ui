<template>
  <div class="list">
    <div class="list-item" v-for="item in list" :key="item">{{ item }}</div>
  </div>
</template>
<script setup lang="ts" name="follow-underline">
const list = ['CSS', 'JavaScript', 'React', 'Vue', 'NodeJS', 'WebGL', 'ThreeJS']
</script>
<style lang="scss" scoped>
  .list {
    display: flex;
    width: 80%;
    margin: 100px auto;
    .list-item {
      padding: 10px 30px;
      font-size: 24px;
      cursor: pointer;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #000;
        transition: .3s all linear;
      }
      &:hover::before {
        width: 100%;
        left: 0;
        top: 0;
        transition-delay: .1s;
      }
      &:hover ~ &::before {
        left: 0;
      }
    }
  }
</style>