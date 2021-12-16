<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div>About</div>
  <div>
    <Button label="home" @click="router.push({name: 'home'})"></Button>
  </div>
</template>
