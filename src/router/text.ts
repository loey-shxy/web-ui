import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/text/decoration',
    name: 'text-decoration',
    component: async () => await import('@/views/text-effect/text-decoration/text-decoration.vue'),
    meta: {
      title: 'Decoration'
    }
  },
  {
    path: '/text/scroll-animation',
    name: 'text-scroll-animation',
    component: async () => await import('@/views/text-effect/text-animation/text-animation.vue'),
    meta: {
      title: 'Scroll Animation'
    }
  },
  {
    path: '/text/background-text-effect',
    name: 'background-text-effect',
    component: async () => await import('@/views/text-effect/background-effect/background-effect.vue'),
    meta: {
      title: 'Background'
    }
  },
  {
    path: '/text/fade-in-simple',
    name: 'text-fade-in-simple',
    component: async () => await import('@/views/text-effect/fade-in/fade-in-simple.vue'),
    meta: {
      title: 'Fade In (Simple)'
    }
  },
  {
    path: '/text/fade-in-complex',
    name: 'text-fade-in-complex',
    component: async () => await import('@/views/text-effect/fade-in/fade-in-complex.vue'),
    meta: {
      title: 'Fade In (Complex)'
    }
  },
  {
    path: '/text/shadow',
    name: 'text-shadow',
    component: async () => await import('@/views/text-effect/text-shadow/text-shadow.vue'),
    meta: {
      title: 'Shadow'
    }
  }
]

export default routes