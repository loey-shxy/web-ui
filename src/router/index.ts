import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
const modules = import.meta.glob('./*.ts')

const createRouterFunc = (): Promise<Router> => 
  new Promise((resolve) => {
    const router = createRouter({
      history: createWebHashHistory(),
      routes: [
        {
          path: '/',
          redirect: '/text/base'
        }
      ]
    })

    Promise.all(
      Object.keys(modules).map((key) => {
        return modules[key]()
      })
    ).then((res) => {
      const childrenRoutes = res.map((item: any) => item.default).flat() as RouteRecordRaw[]
      childrenRoutes.map((item) => {
        router.addRoute(item)
      })
      resolve(router as Router)
    })
  })

export default createRouterFunc