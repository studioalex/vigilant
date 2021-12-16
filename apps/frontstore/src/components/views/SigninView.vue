<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import validator from 'validator'
  import Box from '../global/Box.vue'
  import PageCenterLayout from '../layout/PageCenterLayout.vue'
  import PageFooter from '../PageFooter.vue'
  import { initSigninAction, passwordScoreOptions } from '../../features/singon'
  import IconLogo from '../icons/IconLogo.vue'

  const store = useStore()
  const router = useRouter()
  const token = computed(() => store.state.token)
  const isSigninEnabled = computed(() => (validator.isEmail(email_input.value) && validator.isStrongPassword(password_input.value, passwordScoreOptions)))
  const { mutate: signinAction, error: signinError, loading: isLoading } = initSigninAction()
  const email_input = ref<string>('') // bi65ngbing@test.com
  const password_input = ref<string>('') // Gong2Dong.

  // Remove the error message when user input change
  watch([email_input, password_input], () => {
    if (signinError.value) {
      signinError.value = null
    }
  })
  // Watch token has been set, then navigate to app page
  watch(token, () => router.push({name: 'dashboard'}))
</script>

<template>
  <PageCenterLayout>
    <template v-slot:default>
      <Box surface="3th" size="small">
        <div class="vl_text--center"><router-link :to="{ name: 'home' }"><IconLogo /></router-link></div>
        <h1 class="vl_headline">Sign in</h1>
        <span class="vl_input__group">
          <label class="vl_input__label" for="email">Email</label>
          <InputText 
            id="email"
            class="vl_input__field"
            type="text"
            v-model="email_input"
            placeholder="Email address"/>
        </span>
        <span class="vl_input__group">
          <label class="vl_input__label" for="password">Password</label>
          <Password
            id="password"
            class="vl_input__field"
            v-model="password_input"
            :feedback="false"
            placeholder="Password"
            toggleMask />
        </span>
        <hr class="vl_divider vl_divider--transparent" />
        <span class="vl_input__group">
          <Button
            class="vl_input__element--full"
            label="Sign In"
            @click="signinAction({email: email_input, password: password_input})"
            :loading="isLoading"
            :disabled="!isSigninEnabled"/>
        </span>
        <hr class="vl_divider vl_divider--transparent" />
        <span class="vl_input__group">
          <Message
            v-if="signinError"
            severity="error"
            :closable="false">There was an error while Signin.</Message>
        </span>
        <div class="vl_text--hint vl_text--center">
          <router-link to="/signinemail">Forgot password</router-link>? or new here <router-link to="/signup">sign up</router-link>?
        </div>
      </Box>
    </template>
    <template v-slot:footer><PageFooter /></template>
  </PageCenterLayout>
</template>
