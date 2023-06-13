import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/text/decoration',
    name: 'text-decoration',
    component: async () => await import('@/views/text-effect/text-decoration/text-decoration.vue'),
    meta: {
      title: '文字装饰'
    }
  },
  {
    path: '/text/scroll-animation',
    name: 'text-scroll-animation',
    component: async () => await import('@/views/text-effect/text-animation/text-animation.vue'),
    meta: {
      title: '文字滚动特效'
    }
  },
  {
    path: '/text/background-text-effect',
    name: 'background-text-effect',
    component: async () => await import('@/views/text-effect/background-effect/background-effect.vue'),
    meta: {
      title: 'background实现花式文字效果'
    }
  },
  {
    path: '/text/fade-in-simple',
    name: 'text-fade-in-simple',
    component: async () => await import('@/views/text-effect/fade-in/fade-in-simple.vue'),
    meta: {
      title: '文字渐现'
    }
  },
  {
    path: '/text/fade-in-complex',
    name: 'text-fade-in-complex',
    component: async () => await import('@/views/text-effect/fade-in/fade-in-complex.vue'),
    meta: {
      title: '文字渐现'
    }
  }
]

export default routes