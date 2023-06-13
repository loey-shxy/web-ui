<template>
  <div class="m-layout">
    <div class="aside">
      <MMenu />
    </div>

    <div class="m-content_wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup name="m-layout" lang="ts">
import MMenu from '../m-menu/m-menu.vue'
</script>