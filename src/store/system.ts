import { defineStore } from 'pinia'

const systemStore = defineStore({
  id: 'system',
  state: () => {
    return {
      permissions: [] as string[]
    }
  },
  actions: {
    setPermissions(permissions: string[]) {
      this.permissions = permissions
    }
  }
})

export default systemStore