import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Doc',
      name: 'Doc',
      component: () => import('components/doc/Doc')
    },
    {
      path: '/Houtai',
      name: 'Houtai',
      component: () => import('components/Houtai/Houtai'),
      children: [
        {
          path: ':type',
          component: () => import('components/typeArtcle/typeArtcle')
        }
      ]
    },
    {
      path: '/Artcle',
      name: 'Artcle',
      component: () => import('components/Artcle/Artcle')
    },
    {
      path: '*',
      redirect: {name: 'Doc'}
    }
  ]
})
