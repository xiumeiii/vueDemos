import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/views/parentChild/parent'
import barrage from '@/views/barrage/barrage'

Vue.use(Router)

export default new Router({
  // mode:'history',
  mode:'hash',// 默认模式
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/parentChild',
      name: 'parentChild',
      component: parent
    },
    {
      path: '/barrage',
      name: 'barrage',
      component: barrage
    }
  ]
})
