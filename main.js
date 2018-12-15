// 引入vue
import Vue from 'vue'
// 引进组件
import index from './index.vue'
// 引进router
import router from './rotuer'
// vue实例
new Vue({
  el: '#app',
// 注入路由
router,
// 渲染
  render: h => h(index)
})