// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
// 全局使用
Vue.use(ElementUI)
Vue.use(VueRouter)

import Login from './components/Login.vue'
import TodoList from './components/TodoList.vue'
const router = new VueRouter({
  //开启h5的history模式，让地址栏的url没有#，和正常的url一样
  mode:'history',
  bace:__dirname,
  routes:[
    {
      path:'/',
      component:Login
    },
    {
      path:'/todo',
      component:TodoList
    },
    {
      path:'*',
      //输入其他路由跳转到根目录
      redirect:'/'
    }
  ]
});

new Vue({
  router:router,
  el: '#app',
  template: '<App/>',
  components: { App }
})


