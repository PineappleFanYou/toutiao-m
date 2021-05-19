import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/')
  },
  {
    path: '/',
    component: () => import('@/views/Layout/'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/'),
      },
      {
        path: '/qa',
        name: 'Qa',
        component: () => import('@/views/Qa/'),
      },
      {
        path: '/vedio',
        name: 'Vedio',
        component: () => import('@/views/Vedio/'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
