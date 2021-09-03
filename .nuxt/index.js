import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_4834e2ea from 'nuxt_plugin_plugin_4834e2ea' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_axios_45c9e60d from 'nuxt_plugin_axios_45c9e60d' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_api_785206da from 'nuxt_plugin_api_785206da' // Source: ..\\plugins\\api.js (mode: 'all')
import nuxt_plugin_inject_7bfac410 from 'nuxt_plugin_inject_7bfac410' // Source: ..\\plugins\\inject.js (mode: 'all')
import nuxt_plugin_services_4e38a3a3 from 'nuxt_plugin_services_4e38a3a3' // Source: ..\\plugins\\services.js (mode: 'all')
import nuxt_plugin_utils_45bd078c from 'nuxt_plugin_utils_45bd078c' // Source: ..\\plugins\\utils\\utils.js (mode: 'all')
import nuxt_plugin_filter_4c10d16b from 'nuxt_plugin_filter_4c10d16b' // Source: ..\\plugins\\utils\\filter.js (mode: 'all')
import nuxt_plugin_asciiclient_006b14db from 'nuxt_plugin_asciiclient_006b14db' // Source: ..\\plugins\\utils\\ascii.client.js (mode: 'client')
import nuxt_plugin_libvuelazyloadclient_36ab4d92 from 'nuxt_plugin_libvuelazyloadclient_36ab4d92' // Source: ..\\plugins\\libs\\lib-vue-lazyload.client.js (mode: 'client')
import nuxt_plugin_libvuexpersistedstateclient_42d5f384 from 'nuxt_plugin_libvuexpersistedstateclient_42d5f384' // Source: ..\\plugins\\libs\\lib-vuex-persistedstate.client.js (mode: 'client')
import nuxt_plugin_markedclient_3a2950c4 from 'nuxt_plugin_markedclient_3a2950c4' // Source: ..\\plugins\\utils\\marked.client.js (mode: 'client')
import nuxt_plugin_libaosclient_dcbfabe0 from 'nuxt_plugin_libaosclient_dcbfabe0' // Source: ..\\plugins\\libs\\lib-aos.client.js (mode: 'client')
import nuxt_plugin_liblive2dclient_6ba0a5a2 from 'nuxt_plugin_liblive2dclient_6ba0a5a2' // Source: ..\\plugins\\libs\\lib-live2d.client.js (mode: 'client')
import nuxt_plugin_libaplayerclient_124407cd from 'nuxt_plugin_libaplayerclient_124407cd' // Source: ..\\plugins\\libs\\lib-aplayer.client.js (mode: 'client')
import nuxt_plugin_libvssueclient_1c0e441e from 'nuxt_plugin_libvssueclient_1c0e441e' // Source: ..\\plugins\\libs\\lib-vssue.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Watora - TsukiSeele的个人小站","htmlAttrs":{"lang":"zh-CN"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width,initial-scale=1.0,maximum-scale=1,minimum-scale=1,user-scalable=no"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_4834e2ea === 'function') {
    await nuxt_plugin_plugin_4834e2ea(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_45c9e60d === 'function') {
    await nuxt_plugin_axios_45c9e60d(app.context, inject)
  }

  if (typeof nuxt_plugin_api_785206da === 'function') {
    await nuxt_plugin_api_785206da(app.context, inject)
  }

  if (typeof nuxt_plugin_inject_7bfac410 === 'function') {
    await nuxt_plugin_inject_7bfac410(app.context, inject)
  }

  if (typeof nuxt_plugin_services_4e38a3a3 === 'function') {
    await nuxt_plugin_services_4e38a3a3(app.context, inject)
  }

  if (typeof nuxt_plugin_utils_45bd078c === 'function') {
    await nuxt_plugin_utils_45bd078c(app.context, inject)
  }

  if (typeof nuxt_plugin_filter_4c10d16b === 'function') {
    await nuxt_plugin_filter_4c10d16b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_asciiclient_006b14db === 'function') {
    await nuxt_plugin_asciiclient_006b14db(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libvuelazyloadclient_36ab4d92 === 'function') {
    await nuxt_plugin_libvuelazyloadclient_36ab4d92(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libvuexpersistedstateclient_42d5f384 === 'function') {
    await nuxt_plugin_libvuexpersistedstateclient_42d5f384(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_markedclient_3a2950c4 === 'function') {
    await nuxt_plugin_markedclient_3a2950c4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libaosclient_dcbfabe0 === 'function') {
    await nuxt_plugin_libaosclient_dcbfabe0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_liblive2dclient_6ba0a5a2 === 'function') {
    await nuxt_plugin_liblive2dclient_6ba0a5a2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libaplayerclient_124407cd === 'function') {
    await nuxt_plugin_libaplayerclient_124407cd(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libvssueclient_1c0e441e === 'function') {
    await nuxt_plugin_libvssueclient_1c0e441e(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
