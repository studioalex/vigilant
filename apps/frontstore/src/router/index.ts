import { nextTick } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
// import { useI18n } from 'vue-i18n'
import { store } from '../store'

// const { t } = useI18n({ inheritLocale: true })

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../components/views/HomeView.vue'),
    meta: {
      authentication: false,
      title: '',
    }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../components/views/AboutView.vue'),
    meta: {
      authentication: true,
      title: 'About',
    }
  },
  {
    name: 'signin',
    path: '/signin',
    component: () => import('../components/views/SigninView.vue'),
    meta: {
      authentication: false,
      title: 'Sign In'
    }
  },
  {
    name: 'signinemail',
    path: '/signinemail',
    component: () => import('../components/views/SigninEmailView.vue'),
    meta: {
      authentication: false,
      title: 'Sign In with Email'
    }
  },
  {
    name: 'signup',
    path: '/signup',
    component: () => import('../components/views/SignupView.vue'),
    meta: {
      authentication: false,
      title: 'Sign Up'
    }
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('../components/views/DashboardView.vue'),
    meta: {
      authentication: true,
      title: 'Dashboard'
    }
  }
]

// Define Routes,
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/**
 * Redirect to BRIDGE Page in case you enter the Root App
 * with ambassador path.
 */
 router.beforeEach((to, from, next) => {
  /**
   * User try to reach route where auth is required, without beeing authenticated!
   */
  if (to.matched.some((record) => record.meta.authentication) && store.getters.isAuthenticated === false) {
    store.commit('setMessage', {
      message: `You must authenticate to access "${to.meta.title}" page.`,
      title: 'Not Authenticated'
    })
    return next({ name: 'home' })
  }

  if (to.path.substr(0,12) === '/bridge/' && to.path.length > 12) {
    next(false)
    const pathMatch = [...to.params.pathMatch]
    pathMatch.shift()
    const nextPath: string = `/bridge/?path=${encodeURIComponent(pathMatch.join('/'))}`
    window.location.href = nextPath
  } else next()
})

router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  let newTitle = 'Vigilant'
  if (to.meta.title) {
    newTitle += ` - ${to.meta.title}`
  }
  nextTick(() => document.title = newTitle)
})
  