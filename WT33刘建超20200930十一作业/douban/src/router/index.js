import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// let router = new Router({
export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path:'/audio',name:'Audio',component:()=>import('@/pages/Audio/audio')},
    {path:'/broadcast',name:'Broadcast',component:()=>import('@/pages/Broadcast/broadcast'),
    children:[
      {path:'film',component:()=>import('@/pages/Broadcast/sub/film')},
      {path:'city',component:()=>import('@/pages/Broadcast/sub/city')},
      {path:'music',component:()=>import('@/pages/Broadcast/sub/music')},
      {path:'read',component:()=>import('@/pages/Broadcast/sub/read')},
      {path:'tv',component:()=>import('@/pages/Broadcast/sub/tv')},
      
    ],
  },
    {path:'/group',name:'group',component:()=>import('@/pages/Group/group')},
    {path:'/home',name:'home',component:()=>import('@/pages/Home/home')},
    {path:'/mine',name:'mine',component:()=>import('@/pages/Mine/mine')},
    {path:'/login',name:'login',component:()=>import('@/components/login')},
    {path:'/loginTwo',name:'login',component:()=>import('@/components/loginTwo')}
  ],
  
  
})
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   if(to.path=='/index'){
//     next()
//   }else{
//     let isIndex = true
//     if(isIndex){
//       console.log('已登录')
//       next()
//     }else{
//       console.log('未登录')
//       next({path:'/'})
//     }
//   }
// })
// export default router