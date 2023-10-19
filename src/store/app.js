import { defineStore } from 'pinia'
import storage from 'good-storage'
import { cloneDeep } from 'lodash'

// 设置localStorage中保存顶部导航栏的键值
const TOP_NAV_KEY = '__TOP_NAV_KEY__'

const initTabs = [
  {
    title: '首页',
    path: '/home',
    closable: false,
  },
]

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      topNav: initTabs, // 导航栏，没有值的时候，要默认打开首页
      asideCollapse: false, // 侧边栏收起
    }
  },
  actions: {
    // 切换侧边栏收起
    toggleAsideCollapse() {
      this.asideCollapse = !this.asideCollapse
    },
    // 添加顶部导航栏
    addTopNav(tab) {
      let hasTab = this.topNav.find((item) => item.path === tab.path)
      if (hasTab) return
      this.topNav.push(tab)
      // storage.set(TOP_NAV_KEY, cloneDeep(this.topNav))
    },
    // 删除一个顶部导航栏
    removeTopNav(tab) {
      let index = -1
      this.topNav.forEach((item, i) => {
        if (item.path === tab.path) {
          index = i
        }
      })
      if (index === -1) return
      this.topNav.splice(index, 1)
      return this.topNav[this.topNav.length - 1]
    },
    // 删除所有顶部导航栏
    removeAllTopNav() {
      this.topNav = []
    },
  },
})
