import Vue from 'vue'
import Router, { createRouter, createWebHashHistory } from 'vue-router';


import Home from 'pages/home/Home'
import City from 'pages/city/City'
import Detail from 'pages/detail/Detail'


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

export default createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
