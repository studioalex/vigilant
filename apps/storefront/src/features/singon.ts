import gql from 'graphql-tag'
import { provideApolloClient, useMutation } from '@vue/apollo-composable'
import { apolloClient } from '../apollo'
import store from '../store'

provideApolloClient(apolloClient)

export const passwordScoreOptions = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
  returnScore: false
}

/**
 * Hint: The returning signinAction function can be only used inside Vue setup method.
 * @returns 
 */
export const SIGNIN_MUTATION = gql`
  mutation signIn ($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`

export function initSigninAction() {
  const { mutate, loading, error, onDone, onError} = useMutation(SIGNIN_MUTATION)
  
  onDone(({data: {signIn}}) => {
    store.commit('setToken', signIn)
  })

  onError((saveError) => {
    store.commit('setMessage', {
      type: 'error',
      description: JSON.stringify(saveError),
      message: saveError.message,
      title: saveError.name,
      toast: false
    })
  })

  return { mutate, loading, error }
}

/**
 * Hint: The returning signupAction function can be only used inside Vue setup method.
 * @returns 
 */
export const SIGNUP_MUTATION = gql`
  mutation signIn ($email: String!, $password: String!) {
    signUp(email: $email, password: $password)
  }
`

export function initSignupAction() {
  const { mutate, loading, error, onDone, onError} = useMutation(SIGNUP_MUTATION)
  
  onDone(({data: {signUp}}) => {
    store.commit('setToken', signUp)
  })

  onError((saveError) => {
    store.commit('setMessage', {
      type: 'error',
      description: JSON.stringify(saveError),
      message: saveError.message,
      title: saveError.name,
      toast: false
    })
  })

  return { mutate, loading, error }
}

/**
 * Hint: 
 */
export const SIGNSENDTOKEN_MUTATION = gql`
  mutation sendToken ($email: String!) {
    sendToken(email: $email)
  }
`

export function initSignSendTokenAction() {
  const { mutate, loading, error, onDone, onError} = useMutation(SIGNSENDTOKEN_MUTATION)
  
  onDone(({data: {singtokens}}) => {
    // Send mail here
  })

  onError((saveError) => {
    store.commit('setMessage', {
      type: 'error',
      description: JSON.stringify(saveError),
      message: saveError.message,
      title: saveError.name,
      toast: false
    })
  })

  return { mutate, loading, error }
}

/**
 * Hint: 
 */
 export const SIGNTOKEN_MUTATION = gql`
 mutation singToken ($token: String!) {
   singToken(token: $token)
 }
`

export function initSignTokenAction() {
  const { mutate, loading, error, onDone, onError} = useMutation(SIGNTOKEN_MUTATION)
  
  onDone(({data: {singToken}}) => {
    store.commit('setToken', singToken)
  })

  onError((saveError) => {
    store.commit('setMessage', {
      type: 'error',
      description: JSON.stringify(saveError),
      message: saveError.message,
      title: saveError.name,
      toast: false
    })
  })

  return { mutate, loading, error }
}
