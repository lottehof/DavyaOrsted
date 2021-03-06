import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _385c1744 = () => interopDefault(import('../pages/boten/index.vue' /* webpackChunkName: "pages/boten/index" */))
const _2bf47f0e = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _486886ac = () => interopDefault(import('../pages/handmade/index.vue' /* webpackChunkName: "pages/handmade/index" */))
const _73176bd6 = () => interopDefault(import('../pages/jachthaven/index.vue' /* webpackChunkName: "pages/jachthaven/index" */))
const _0bc01fef = () => interopDefault(import('../pages/nieuws/index.vue' /* webpackChunkName: "pages/nieuws/index" */))
const _e6d294cc = () => interopDefault(import('../pages/occasions/index.vue' /* webpackChunkName: "pages/occasions/index" */))
const _49435b4a = () => interopDefault(import('../pages/onderdelen/index.vue' /* webpackChunkName: "pages/onderdelen/index" */))
const _054527e4 = () => interopDefault(import('../pages/overons/index.vue' /* webpackChunkName: "pages/overons/index" */))
const _8f649a62 = () => interopDefault(import('../pages/privacystatement/index.vue' /* webpackChunkName: "pages/privacystatement/index" */))
const _99e80c78 = () => interopDefault(import('../pages/voorwaarden/index.vue' /* webpackChunkName: "pages/voorwaarden/index" */))
const _057b7e0a = () => interopDefault(import('../pages/boten/_bootpostId/index.vue' /* webpackChunkName: "pages/boten/_bootpostId/index" */))
const _130ed3cc = () => interopDefault(import('../pages/nieuws/_postId/index.vue' /* webpackChunkName: "pages/nieuws/_postId/index" */))
const _86427d86 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/boten",
    component: _385c1744,
    name: "boten"
  }, {
    path: "/contact",
    component: _2bf47f0e,
    name: "contact"
  }, {
    path: "/handmade",
    component: _486886ac,
    name: "handmade"
  }, {
    path: "/jachthaven",
    component: _73176bd6,
    name: "jachthaven"
  }, {
    path: "/nieuws",
    component: _0bc01fef,
    name: "nieuws"
  }, {
    path: "/occasions",
    component: _e6d294cc,
    name: "occasions"
  }, {
    path: "/onderdelen",
    component: _49435b4a,
    name: "onderdelen"
  }, {
    path: "/overons",
    component: _054527e4,
    name: "overons"
  }, {
    path: "/privacystatement",
    component: _8f649a62,
    name: "privacystatement"
  }, {
    path: "/voorwaarden",
    component: _99e80c78,
    name: "voorwaarden"
  }, {
    path: "/boten/:bootpostId",
    component: _057b7e0a,
    name: "boten-bootpostId"
  }, {
    path: "/nieuws/:postId",
    component: _130ed3cc,
    name: "nieuws-postId"
  }, {
    path: "/",
    component: _86427d86,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
