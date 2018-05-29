import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './style/reset.less'

import index from './index'
import home from './components/home.vue'
import message from './components/message'
import newbie from './components/newbie'
import about from './components/about'
import set from './components/set'

import all from './home/all'
import good from './home/good'
import share from './home/share'
import ask from './home/ask'
import job from './home/job'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.ajax = axios

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      name: 'home',
      redirect: '/all',
      children: [
        {
          path: 'all',
          component: all,
          name: 'all'
        },
        {
          path: 'good',
          component: good,
          name: 'good'
        },
        {
          path: 'share',
          component: share,
          name: 'share'
        },
        {
          path: 'ask',
          component: ask,
          name: 'ask'
        },
        {
          path: 'job',
          component: job,
          name: 'job'
        }
      ]
    },
    {
      path: '/message',
      component: message,
      name: 'message'
    },
    {
      path: '/newbie',
      component: newbie,
      name: 'newbie'
    },
    {
      path: '/about',
      component: about,
      name: 'about'
    },
    {
      path: '/set',
      component: set,
      name: 'set'
    }
  ]
})

new Vue({
  router,
  render: h => h(index)
}).$mount('#app')
