import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Password from '../views/Password.vue'
import Terms from '../views/Terms.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  },
  {
    name: 'password',
    path: '/password/reset',
    component: Password,
  },
  {
    name: 'terms',
    path: '/terms',
    component: Terms,
  },
  {
    name: 'dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: 'settings',
    path: '/settings',
    component: Settings,
  },
]

const router = new VueRouter({
  routes
})

export default router