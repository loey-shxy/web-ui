import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/text/base',
    name: 'text-base',
    component: async () => await import('@/views/text-effect/text-base/text-base.vue'),
    meta: {
      title: '下划线跟随'
    }
  }
]

export default routes