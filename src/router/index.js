import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import loding from '@/components/loding'
import login from '@/components/HelloWorld'
import home from '@/components/home'
import page2 from '@/components/page2'
import accountInfo from '@/components/accountInfo'
import accountRegist from '@/components/accountRegist'
import page5 from '@/components/page5'
import page6 from '@/components/page6'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      // ログイン画面
      path: '/',
      name: 'login',
      component: login
    },
    {
      // メニュー画面
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    // アカウント一覧画面
    {
      path: '/accountInfo',
      name: 'accountInfo',
      component: accountInfo
    },
    // アカウント新規作成画面
    {
      path: '/accountRegist',
      name: 'accountRegist',
      component: accountRegist
    },
    {
      path: '/page5',
      name: 'page5',
      component: page5
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/page6',
      name: 'page6',
      component: page6
    },
    {
      path: '/loding',
      name: 'loding',
      component: loding
    }
  ]
})
// もともとのスクリプト
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router
