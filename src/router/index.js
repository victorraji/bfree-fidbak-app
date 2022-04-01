import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ResetPassword from '../views/ResetPassword.vue'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import signin from '../views/signin.vue'
import feedback from '../views/feedback.vue'
import not from '../views/not.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: LandingPage

},
{
  path: '/signin',
  name: 'signin',
  component: signin
},
{
  path: '/ResetPassword',
  name: 'ResetPassword',
  component: ResetPassword
},
{
  path: '/not',
  name: 'not',
  component: not
},
{
  path: '/feedback',
  name: 'feedback',
  component: feedback
},
{
  path: '/Dashboard',
  name: 'Dashboard',
  component: Dashboard
},
{
  path: '/LandingPage',
  name: 'LandingPage',
  component: LandingPage
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/About.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
