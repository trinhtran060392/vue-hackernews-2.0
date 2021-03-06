import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// route-level code splitting
const Dashboard = () => import('../views/Dashboard.vue')
const Browse = () => import('../views/Browse.vue')
const MovieDetail = () => import('../views/MovieDetail.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/browse/1/24' },
      { path: '/movie/:id', component: Dashboard},
      { path: '/browse/:pageNumber/:pageSize', component: Browse },
      { path: '/browse/:title', component: MovieDetail }
    ]
  })
}
