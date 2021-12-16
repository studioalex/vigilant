<script setup lang="ts">
import { useStore } from 'vuex'
import { useToast } from "primevue/usetoast"

const store = useStore()
const toast = useToast()

store.subscribe((mutation, state) => {
  if (mutation.type === 'setMessage') {
    const newMessages = store.getters.getNewToastMessages

    for (const message of newMessages) {
      toast.add({
        severity: message.type, 
        summary: message.title, 
        detail:message.message, 
        life: 3000
      })

      store.commit('setMessageViewed', message.id)
    }
  }
})
</script>

<template>
  <Toast />
  <router-view></router-view>
</template>
