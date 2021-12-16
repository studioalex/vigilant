<script setup lang="ts">
  import PageCenterLayout from '../layout/PageCenterLayout.vue'
  import PageFooter from '../PageFooter.vue'
  import IconLogo from '../icons/IconLogo.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<template>
  <PageCenterLayout>
    <template #default>
      <div class="vl_box vl_box--small">
        <div class="vl_text--center">
          <IconLogo />
        </div>
        <h1 class="vl_headline vl_text--center">
          {{ t('title') }}
        </h1>
        <ul class="vl_linklist">
          <li>
            <router-link :to="{ name: 'dashboard' }">
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">
              About
            </router-link>
          </li>
        </ul>
        <ul class="vl_linklist">
          <li>
            <router-link :to="{ name: 'signin' }">
              Sign In
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'signup' }">
              Sign Up
            </router-link>
          </li>
        </ul>
      </div>
    </template>
    <template #footer>
      <PageFooter />
    </template>
  </PageCenterLayout>
</template>

<style>
.vl_linklist {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.vl_linklist li {
  display: inline;
  padding: 0 1rem;
}
</style>
