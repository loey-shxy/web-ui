import { App } from 'vue'
import useSystemStore from '../store/system'

export default function (app: App) {
  const systemStore = useSystemStore()
  app.directive('permission', {
    mounted(el: Element, binding: { value: string[] }) {
      const { value } = binding
      const permissions = systemStore.permissions
      if (value && Array.isArray(value) && value.length) {
        const hasPermission = value.every((permission: string) => {
          return permissions.includes(permission)
        })

        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      } else {
        throw new Error(`need permissions! Like v-permission="['xxx', 'xxx']"`)
      }
    }
  })
}