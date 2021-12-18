<template>
  <ThemeBox>
    <section>
      <Box surface="1th">Surface 1</Box>
      <Box surface="2th" size="small">Surface 2 small size</Box>
      <Box surface="3th">Surface 3</Box>
      <Box surface="4th">Surface 4</Box>
      <Box surface="4th" :shadow="false">Surface 4 no border</Box>
    </section>
  </ThemeBox>
</template>
<script setup>
  import { Box } from '../../../src/index'
  import ThemeBox from '../theme/ThemeBox.vue'
</script>
