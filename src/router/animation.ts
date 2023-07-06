import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/animation/loading',
    name: 'animation-loading',
    component: async () => await import('@/views/animation/loading/loading.vue'),
    meta: {
      title: 'Loading'
    }
  },
  {
    path: '/animation/charging',
    name: 'animation-charging',
    component: async () => await import('@/views/animation/charging/charging.vue'),
    meta: {
      title: 'Charging'
    }
  },
  {
    path: '/animation/wave',
    name: 'animation-wave',
    component: async () => await import('@/views/animation/wave/wave.vue'),
    meta: {
      title: 'Wave'
    }
  }
]

export default routes