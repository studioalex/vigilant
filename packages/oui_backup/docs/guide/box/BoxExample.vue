<template>
  <ThemeBox>
    <section>
      <Oui-Box surface="1th">Surface 1</Oui-Box>
      <Oui-Box surface="2th" size="small">Surface 2 small size</Oui-Box>
      <Oui-Box surface="3th">Surface 3</Oui-Box>
      <Oui-Box surface="4th">Surface 4</Oui-Box>
      <Oui-Box surface="4th" :shadow="false">Surface 4 no border</Oui-Box>
    </section>
  </ThemeBox>
</template>
<script setup>
  import { OuiBox } from '../../../src/oui.esm.ts'
  import ThemeBox from '../theme/ThemeBox.vue'
</script>
