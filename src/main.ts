import { createApp } from 'vue'
import App from './App.vue'
import createRouterFunc from './router/index'

import '@/assets/style/index.scss'
import 'amfe-flexible/index.js'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const app = createApp(App)
const router = await createRouterFunc()

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  document.title = (to.meta.title || import.meta.env.VITE_PAGE_TITLE) as string
  next()
})


router.afterEach((to, from) => {
  if (to.path === '/redirect') {
    if (from && from.path !== '/redirect') {
      router.replace({
        path: from.path,
        query: from.query,
      })
    }
  }
  nprogress.done()
})

app
.use(router)
.mount('#app')
