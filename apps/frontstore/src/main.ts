import { createApp, provide, h } from 'vue'
import { ApolloClients } from '@vue/apollo-composable'
import Oui from '@studioalex/oui'
import { router } from './router'
import { store } from './store'
import { apolloClient } from './apollo'
import { i18n } from './i18n'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Message from 'primevue/message'
import Toast from 'primevue/toast'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
// import '@studioalex/oui/style.css'

import './assets/fonts/Encode_Sans/EncodeSans/EncodeSans.css'
import './css/style.css'

/**
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from './locales/en.json'
import cz from './locales/cz.json'
import de from './locales/de.json'

export const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    cz,
    de
  }
})

const app = createApp({
    setup () {
      provide(ApolloClients, {
        default: apolloClient,
      })
    },
    render: () => h(App),
  })
  .use(Oui)
  .use(i18n)
  .use(router)
  .use(store)
  .use(ToastService)
  .use(PrimeVue)
  .component('Button', Button)
  .component('InputText', InputText)
  .component('Password', Password)
  .component('Message', Message)
  .component('Toast', Toast)
  .mount('#app')

export default app
