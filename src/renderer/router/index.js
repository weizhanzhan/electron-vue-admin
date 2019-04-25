import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      redirect:'/layout',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/layout',
      name: 'layout',
      redirect:'/home',
      component:()=>import('../views/layout'),
      children:[
        {
          path:'/home',
          name:'Home',
          component:()=>import('../views/home')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
