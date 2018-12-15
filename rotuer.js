// 引进vue
import Vue from 'vue'
// 引进router
import VueRouter from 'vue-router';
// 引进组件
import Home from './home.vue'
// 引进组件
import Activities from './activities.vue'
// 引进组件
import Books from './books.vue'
// 引进组件
import ListCom from './listCom.vue'
// 引进组件
import detailCom from './detailCom.vue'
// 启动路由插件
Vue.use(VueRouter)
// 创建路由对象，配置路由规则
let router = new VueRouter({
  routes: [
    {
      name: 'home', path: '/home', component: Home,
      // 配置文章子路由
      children: [
        {name:'listCom',path:':type',component:ListCom},
        {name:'detailCom',path:'detail/:id',component:detailCom}
      ]
    },
    {name:'activities',path:'/activities',component:Activities},
    {name:'books',path:'/books',component:Books}
  ]
})
// 暴露出去
export default router