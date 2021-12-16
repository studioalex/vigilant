import { createI18n } from 'vue-i18n'
/**
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from './locales/en.json'
import cz from './locales/cz.json'
import de from './locales/de.json'

export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    cz,
    de
  }
})
