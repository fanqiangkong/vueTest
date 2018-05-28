import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'


import HelloWorld from './components/HelloWorld.vue'
import index from './index'
Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      name: 'app'
    }
  ]
})

new Vue({
  router,
  render: h => h(index)
}).$mount('#app')
