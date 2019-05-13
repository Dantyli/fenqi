import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(Router)

const router= new Router({
  mode:'hash',
  routes: [
    {
      path:'/',
      redirect:'/index/home'
    },
    {
      path:'/index',
      component:()=>import('./views/index/index'),
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'orders',
          name: 'orders',
          //懒加载
          component: () => import( './views/order/Order.vue')
        },
        {
          path:'my',
          name:'my',
          component:()=>import('./views/my')
        }
      ]
    },
    {
      path:'/login',
      name:'name',
      component:()=>import('./views/login/login.vue')
    },
    {
      path:'/idcard',
      name:'idcard',
      component:()=>import('./views/idcard/idcard.vue')
    },
    {
      path:'/kyc',
      name:'kyc',
      component:()=>import('./views/kycindex')
    },
    {
      path:'/myinfo',
      name:'info',
      component:()=>import('./views/myinfo')
    },
    {
      path:'/bindcard',
      name:'bindcard',
      component:()=>import('./views/bindcard')
    },
    {
      path:'/supportbank',
      name:'support',
      component:()=>import('./views/supportbank')
    },
    {
      path:'/xieyi',
      name:'xieyi',
      component:()=>import('./views/xieyi')
    },
    {
      path:'/setting',
      name:'setting',
      component:()=>import('./views/settings')
    },
    {
      path:'/kefu',
      component:()=>import('./views/kefu')
    },
    {
      path:'/cardlist',
      component:()=>import('./views/bindcard/hascard')
    },{
      path:'/cardinfo',
      component:()=>import('./views/idcard/cardinfo')
    },
    {
      path:'/myinfoed',
      component:()=>import('./views/myinfo/information')
    },
    {
      path:'/credit',
      component:()=>import('./views/credit')
    },
    {
      path:'/credited',
      component:()=>import('./views/credit/credited')
    },
    {
      path:'/loan',
      component:()=>import('./views/loan')
    },
    {
      path:'/orderDetail',
      component:()=>import('./views/loan/merchant')
    },
    {
      path:'/pinggu',
      component:()=>import('./views/loan/load')
    },
    {
      path:'/report',
      component:()=>import('./views/my/report')
    }
  ]
})
//全局钩子函数
router.beforeEach((to,from,next)=>{
  if(to.path=='/index/home'||to.path=='/login'||localStorage.getItem('token')){
     next()
  }else{
     next(`/login?redirect=${to.path}`)
  }
})
export default router;