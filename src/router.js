import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'slider'},
    component: () => import('./views/Home.vue')
  },
  {
    path: '/aesthetic',
    name: 'Aesthetic',
    meta: {layout: 'slider'},
    component: () => import('./views/aesthetic/Aesthetic.vue')
  },
  {
    path: '/regular',
    name: 'Regular',
    meta: {layout: 'slider'},
    component: () => import('./views/regular/Regular.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'main'},
    component: () => import('./views/menu/About.vue')
  },
  {
    path: '/safety',
    name: 'safety',
    meta: {layout: 'main'},
    component: () => import('./views/menu/Safety.vue')
  },
  {
    path: '/сontacts',
    name: 'сontacts',
    meta: {layout: 'main'},
    component: () => import('./views/menu/Contacts.vue')
  },
  {
    path: '/balancingface',
    name: 'balancingface',
    meta: {layout: 'main'},
    component: () => import('./views/aesthetic/BalancingFace')
  },
  {
    path: '/before',
    name: 'before',
    meta: {layout: 'main'},
    component: () => import('./views/aesthetic/Before')
  },
  {
    path: '/handcrafting',
    name: 'handcrafting',
    meta: {layout: 'main'},
    component: () => import('./views/aesthetic/HandCrafting')
  },
  {
    path: '/perfection',
    name: 'perfection',
    meta: {layout: 'main'},
    component: () => import('./views/aesthetic/Perfection')
  },
  {
    path: '/endotherapy',
    name: 'endotherapy',
    meta: {layout: 'main'},
    component: () => import('./views/regular/EndoTherapy')
  },
  {
    path: '/hygiene',
    name: 'hygiene',
    meta: {layout: 'main'},
    component: () => import('./views/regular/Hygiene')
  },
  {
    path: '/implants',
    name: 'implants',
    meta: {layout: 'main'},
    component: () => import('./views/regular/Implants')
  },
  {
    path: '/invisalign',
    name: 'invisalign',
    meta: {layout: 'main'},
    component: () => import('./views/regular/Invisalign')
  },
  {
    path: '/periotherapy',
    name: 'periotherapy',
    meta: {layout: 'main'},
    component: () => import('./views/regular/PerioTherapy')
  },
  {
    path: '/restoration',
    name: 'restoration',
    meta: {layout: 'main'},
    component: () => import('./views/regular/Restoration')
  },
  {
    path: '/sleepdentistry',
    name: 'sleepdentistry',
    meta: {layout: 'main'},
    component: () => import('./views/regular/SleepDentistry')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
