import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

// define your typings for the store state
interface Message {
  id: string
  type: string
  title?: string
  message: string
  description?: string
  toast: boolean
  viewed: boolean
  timestamp: number
}
export interface State {
  count: number
  token: string
  messages: Message[]
}

export const store = createStore<State>({
  state: {
    count: 0,
    token: '',
    messages: []
  },
  getters: {
    isAuthenticated (state) {
      return (state.token.length > 0)
    },
    getNewMessages (state) {
      return state.messages.filter(messageItem => messageItem.viewed === false)
    },
    getNewToastMessages (state) {
      return state.messages.filter(messageItem => (messageItem.viewed === false && messageItem.toast === true))
    }
  },
  mutations: {
    setToken (state, token: string) {
      state.token = token
    },
    setMessage (state, newmessage: Message) {
      const {type, message, title, description, toast} = newmessage
      const messageItem: Message = {
        id: uuidv4(),
        timestamp: Date.now(),
        type: type?.toLowerCase(),
        viewed: false,
        message,
        title,
        description,
        toast: toast || true
      }
      if (!['error', 'warn', 'info', 'success'].includes(messageItem.type)) {
        messageItem.type = 'info'
      }
      state.messages.push(messageItem)
    },
    setMessageViewed (state, id) {
      const indexOfId = state.messages.findIndex((messageItem) => (messageItem.id === id))
      if (indexOfId > -1) {
        state.messages[indexOfId].viewed = true
      }
    }
  }
})

export default store
