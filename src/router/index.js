import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Order from '@/page/order/Order'
import Settlement from '@/page/settlement/Settlement'
import Payment from '@/page/payment/Payment'
import User from '@/page/user/User'
import Mine from '@/page/mine/Mine'
import Notice from '@/page/notice/Notice'
import Platform from '@/page/platform/Platform'
import Miner from '@/page/miner/Miner'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/platform',
      name: 'Platform',
      component: Platform
    },
    {
      path: '/miner',
      name: 'Miner',
      component: Miner
    }
  ]
})
