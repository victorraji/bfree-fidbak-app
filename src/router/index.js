import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ResetPassword from '../views/ResetPassword.vue'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import signin from '../views/signin.vue'
import feedback from '../views/feedback.vue'
import not from '../views/not.vue'
import HomeRView from '../views/HomeRView.vue'
import Report from '../views/Report.vue'
import ReportR from '../views/ReportR.vue'
import Poll from '../views/Poll.vue'
import PollR from '../views/PollR.vue'
import Logout from '../views/Logout.vue'
import LogoutR from '../views/LogoutR.vue'

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
  path: '/reset-password',
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
  path: '/Logout',
  name: 'Logout',
  component: Logout
},
{
  path: '/LogoutR',
  name: 'LogoutR',
  component: LogoutR
},
{
  path: '/Dashboard',
  name: 'Dashboard',
  component: Dashboard
},
{
  path: '/Poll',
  name: 'Poll',
  component: Poll
},
{
  path: '/PollR',
  name: 'PollR',
  component: PollR
},
{
  path: '/HomeRView',
  name: 'HomeRView',
  component: HomeRView
},
{
  path: '/LandingPage',
  name: 'LandingPage',
  component: LandingPage
},
{
  path: '/Report',
  name: 'Report',
  component: Report
},
{
  path: '/ReportR',
  name: 'ReportR',
  component: ReportR
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
