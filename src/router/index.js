import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import City from 'pages/city/City'
import Detail from 'pages/detail/Detail'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
