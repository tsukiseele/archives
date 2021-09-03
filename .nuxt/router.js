import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f6e37a78 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _798d41fc = () => interopDefault(import('..\\pages\\friends\\index.vue' /* webpackChunkName: "pages/friends/index" */))
const _139b4522 = () => interopDefault(import('..\\pages\\timeline\\index.vue' /* webpackChunkName: "pages/timeline/index" */))
const _71c22b4c = () => interopDefault(import('..\\pages\\archives\\_id.vue' /* webpackChunkName: "pages/archives/_id" */))
const _4dcb187f = () => interopDefault(import('..\\pages\\post\\_page.vue' /* webpackChunkName: "pages/post/_page" */))
const _008ada7a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f6e37a78,
    name: "about"
  }, {
    path: "/friends",
    component: _798d41fc,
    name: "friends"
  }, {
    path: "/timeline",
    component: _139b4522,
    name: "timeline"
  }, {
    path: "/archives/:id?",
    component: _71c22b4c,
    name: "archives-id"
  }, {
    path: "/post/:page?",
    component: _4dcb187f,
    name: "post-page"
  }, {
    path: "/",
    component: _008ada7a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
