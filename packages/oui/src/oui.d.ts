import { DefineComponent, Plugin } from 'vue'

declare const Oui: Exclude<Plugin['install'], undefined>
export default Oui
