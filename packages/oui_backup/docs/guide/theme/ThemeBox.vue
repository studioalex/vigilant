<template>
  <div class="oui-theme theme-box">
    <header>
      <h3>Scheme</h3>
      <form id="theme-switcher">
        <div>
          <input checked type="radio" id="default" name="theme" value="default" v-model="selection" @change="onChange">
          <label for="default">Default</label>
        </div>
        <div>
          <input type="radio" id="light" name="theme" value="light" v-model="selection" @change="onChange">
          <label for="light">Light</label>
        </div>
        <div>
          <input type="radio" id="dark" name="theme" value="dark" v-model="selection" @change="onChange">
          <label for="dark">Dark</label>
        </div>
        <div>
          <input type="radio" id="dim" name="theme" value="dim" v-model="selection" @change="onChange">
          <label for="dim">Dim</label>
        </div>
      </form>
    </header>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  let doc = null
  const selection = ref('default')

  onMounted(() => {
    doc = document.firstElementChild
    selection.value = doc?.getAttribute('color-scheme') || 'default'
  })

  function onChange() {
    doc.setAttribute('color-scheme', selection.value)
  }  
</script>
<style lang="postcss">
.theme-box {
  padding: 1rem;
  border-radius: 5px;
}

.theme-box header {
  display: inline-grid;
  gap: 1ch;
  margin-bottom: 2ch;
  text-align: center;
  width: 100%;
}

.theme-box header h3 {
  margin-top: 0;
}

.theme-box form {
  display: flex;
  gap: 2ch;
  justify-content: center;

  & > div {
    display: inline-flex;
    align-items: center;
    gap: .75ch;
  }
}

.theme-box section {
  display: grid;
  gap: 2.5vh;
}
</style>
