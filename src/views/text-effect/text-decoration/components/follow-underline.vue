<template>
  <el-card header="下划线跟随">
    <div class="list">
      <div class="list-item underline-follow" v-for="item in list" :key="item">{{ item }}</div>
    </div>
  </el-card>
</template>
<script setup lang="ts" name="follow-underline">
const list = ['CSS', 'JavaScript', 'React', 'Vue', 'NodeJS', 'WebGL', 'ThreeJS']
</script>
<style lang="scss" scoped>
  .list {
    display: flex;
    width: 80%;
    margin: 20px auto;
    .list-item {
      padding: 10px;
      font-size: 24px;
      cursor: pointer;
      margin: 0 20px;
    }
  }
</style>