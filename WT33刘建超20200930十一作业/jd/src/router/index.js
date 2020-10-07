import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/index',name:'index',component:()=>import('@/pages/Index/index')},
    {path:'/find',name:'find',component:()=>import('@/pages/Find/find')},
    {path:'/myjd',name:'myjd',component:()=>import('@/pages/Myjd/myjd')},
    {path:'/shopping',name:'shopping',component:()=>import('@/pages/Shopping/shopping')},
  ]
})
