import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ColorsView from '../views/ColorsView.vue'
import ShadowView from '../views/ShadowView.vue'
import FontView from '../views/FontView.vue'
import LoginView from '../views/LoginView.vue'
import ButtonsView from '../views/ButtonsView.vue'
import TableView from '../views/TableView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/colors',
    name: 'colors',
    component: ColorsView
  },
  {
    path: '/shadow',
    name: 'shadow',
    component: ShadowView
  },
  {
    path: '/font',
    name: 'font',
    component: FontView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: ButtonsView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
