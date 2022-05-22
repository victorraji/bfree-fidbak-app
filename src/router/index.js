import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ResetPassword from '../views/ResetPassword.vue'
import ResetPSuccess from '../views/ResetPSuccess.vue'
import resetPasswordR from '../views/resetPasswordR.vue'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import signin from '../views/signin.vue'
import signinR from '../views/signinR.vue'
import signup from '../views/signup.vue'
import signupR from '../views/signupR.vue'
import signupwel from '../views/signupwel.vue'
import feedback from '../views/feedback.vue'
import not from '../views/not.vue'
import notRating from '../views/notRating.vue'
import notR from '../views/notR.vue'
import notR1 from '../views/notR1.vue'
import HomeRView from '../views/HomeRView.vue'
import Report from '../views/Report.vue'
import ReportR from '../views/ReportR.vue'
import Poll from '../views/Poll.vue'
import PollR from '../views/PollR.vue'
import Logout from '../views/Logout.vue'
import LogoutR from '../views/LogoutR.vue'
import New from '../views/New.vue'
import NewR from '../views/NewR.vue'
import WrongDetails from '../views/WrongDetails.vue'
import WrongDetailR from '../views/WrongDetailR.vue'
import SigninSuccess from '../views/SigninSuccess.vue'
import SigninSuccessR from '../views/SigninSuccessR.vue'

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
  path: '/New',
  name: 'New',
  component: New
},
{
  path: '/NewR',
  name: 'NewR',
  component: NewR
},
{
  path: '/signinR',
  name: 'signinR',
  component: signinR
},
{
  path: '/signup',
  name: 'signup',
  component: signup
},
{
  path: '/signupR',
  name: 'signupR',
  component: signupR
},
{
  path: '/signupwel',
  name: 'signupwel',
  component: signupwel
},
{
  path: '/SigninSuccess',
  name: 'SigninSuccess',
  component: SigninSuccess
},
{
  path: '/SigninSuccessR',
  name: 'SigninSuccessR',
  component: SigninSuccessR
},
{
  path: '/reset-password',
  name: 'ResetPassword',
  component: ResetPassword
},
{
  path: '/resetPasswordR',
  name: 'resetPasswordR',
  component: resetPasswordR
},
{
  path: '/ResetPSuccess',
  name: 'ResetPSuccess',
  component: ResetPSuccess
},
{
  path: '/not',
  name: 'not',
  component: not
},
{
  path: '/notRating',
  name: 'notRating',
  component: notRating
},
{
  path: '/notR',
  name: 'notR',
  component: notR
},
{
  path: '/notR1',
  name: 'notR1',
  component: notR1
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
  path: '/WrongDetails',
  name: 'WrongDetails',
  component: WrongDetails
},
{
  path: '/WrongDetailR',
  name: 'WrongDetailR',
  component: WrongDetailR
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
