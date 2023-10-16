import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      asideCollapse: false, // 侧边栏收起
    } 
  },
  actions: {
    // 切换侧边栏收起
    toggleAsideCollapse() {
      this.asideCollapse = !this.asideCollapse
    },
    
  },
})
