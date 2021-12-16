<script setup lang="ts">
  import { ref, computed } from 'vue'
  import validator from 'validator'
  import PageCenterLayout from '../layout/PageCenterLayout.vue'
  import PageFooter from '../PageFooter.vue'
  import { initSigninAction } from '../../features/singon'
  import IconLogo from '../icons/IconLogo.vue'

  const isSigninEnabled = computed(() => (validator.isEmail(email_input.value)))
  const { mutate: signinAction, error: signinError, loading: isLoading } = initSigninAction()
  const email_input = ref<string>('')
</script>

<template>
  <PageCenterLayout>
    <template v-slot:default>
      <div class="vl_box vl_box--small">
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
        <hr class="vl_divider vl_divider--transparent" />
        <span class="vl_input__group">
          <Button
            class="vl_input__element--full"
            label="Send Email Token"
            @click="signinAction({email: email_input})"
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
          Password remembered?  <router-link to="/signin">sign in</router-link> <br>or new here <router-link to="/signup">sign up</router-link>?
        </div>
      </div>
    </template>
    <template v-slot:footer><PageFooter /></template>
  </PageCenterLayout>
</template>
