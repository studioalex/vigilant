<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import validator from 'validator'
  import PageCenterLayout from '../layout/PageCenterLayout.vue'
  import Divider from 'primevue/divider'
  import PageFooter from '../PageFooter.vue'
  import { initSignupAction, passwordScoreOptions } from '../../features/singon'
  import IconLogo from '../icons/IconLogo.vue'

  const store = useStore()
  const router = useRouter()
  const token = computed(() => store.state.token)
  const isSignupEnabled = computed(() => (validator.isEmail(email_input.value) && validator.isStrongPassword(password_input.value, passwordScoreOptions)))
  const { mutate: signiupAction, error: signupError, loading: isLoading } = initSignupAction()
  const email_input = ref<string>('')
  const password_input = ref<string>('')

  // Watch token has been set, then navigate to app page
  watch(token, () => router.push({name: 'dashboard'}))
</script>

<template>
  <PageCenterLayout>
    <template #default>
      <div class="vl_box vl_box--small">
        <div class="vl_text--center">
          <router-link :to="{ name: 'home' }">
            <IconLogo />
          </router-link>
        </div>
        <h1 class="vl_headline">
          Sign up
        </h1>
        <span class="vl_input__group">
          <label
            class="vl_input__label"
            for="email"
          >Email</label>
          <InputText 
            id="email"
            class="vl_input__field"
            type="text"
            v-model="email_input"
            placeholder="Email address"
          />
        </span>
        <span class="vl_input__group">
          <label
            class="vl_input__label"
            for="password"
          >Password</label>
          <Password 
            id="password"
            class="vl_input__field"
            v-model="password_input"
            placeholder="Password"
            toggle-mask
          >
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer>
              <Divider />
              <p class="p-mt-2">Suggestions</p>
              <ul
                class="p-pl-2 p-ml-2 p-mt-0"
                style="line-height: 1.5"
              >
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
        </span>
        <hr class="vl_divider vl_divider--transparent">
        <span class="vl_input__group">
          <Button
            class="vl_input__element--full"
            label="Sign Up"
            @click="signiupAction({email: email_input, password: password_input})"
            :loading="isLoading"
            :disabled="!isSignupEnabled"
          />
        </span>
        <hr class="vl_divider vl_divider--transparent">
        <span class="vl_input__group">
          <Message
            v-if="signupError"
            severity="error"
            :closable="false"
          >There was an error while Signin.</Message>
        </span>
        <div class="vl_text--hint vl_text--center">
          Has already account? Please <router-link to="/signin">
            sign in
          </router-link>.
        </div>
      </div>
    </template>
    <template #footer>
      <PageFooter />
    </template>
  </PageCenterLayout>
</template>
