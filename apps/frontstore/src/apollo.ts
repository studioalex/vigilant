import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { store } from './store'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL?.toString()
})

// Cache implementation
const cache = new InMemoryCache()

// Auth link
const authLink = setContext((_, {
  headers
}) => {
  // get the authentication token from vuex store storage if it is set
  const token = store.state.token
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token.length ? `Bearer ${token}` : '',
    }
  }
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})
