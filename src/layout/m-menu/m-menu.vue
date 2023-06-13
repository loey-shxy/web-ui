<template>
  <el-menu
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  :default-openeds="['/text']"
  :default-active="activeMenu"
  class="menus">
    <el-sub-menu 
      v-for="menu in menus" 
      :key="menu.menuId"
      :index="menu.menuUri"
      >
      <template #title>
        <el-icon></el-icon>
        <span class="sub-menu">{{ menu.menuName }}</span>
      </template>
        <el-menu-item 
          v-for="subMenu in menu.children" 
          :key="subMenu.menuId"
          :index="subMenu.menuUri"
          @click="openMenu(subMenu)"
          >{{ subMenu.menuName }}
        </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script setup name="m-menu" lang="ts">
import { useRouter, useRoute } from 'vue-router'
import menus from '../../data/menu'

interface IMenu {
  menuId: number;
  menuCode: string;
  menuUri: string;
  menuName: string;
}

const router = useRouter()
const route = useRoute()
const activeMenu = ref('')
watch(
  () => route.path,
  (newVal: string) => {
    activeMenu.value = newVal
  },
  {
    immediate: true
  }
)

const openMenu = (menu: IMenu) => {
  router.push({ path: menu.menuUri })
}
</script>