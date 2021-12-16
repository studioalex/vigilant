<script setup lang="ts">
  import { defineProps, toRefs, computed, withDefaults } from "vue"

  interface Props {
    size?: string,
    shadow?: boolean,
    surface?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'medium',
    shadow: true,
    surface: '3th'
  })

  const { size, shadow, surface } = toRefs(props)

  const classProps = computed(() => {
    const result = []

    if (size.value && ['small', 'medium', 'large', 'extralarge'].includes(size.value)) {
      result.push(`one-box--${size.value}`)
    }

    if (shadow.value === true) {
      result.push(`one-box--shadow`)
    }

    if (surface.value && ['1th', '2th', '3th', '4th', 'primary', 'secondary'].includes(surface.value)) {
      result.push(`one-box--surface-${surface.value}`)
    }

    return result.join(' ')
  })
</script>

<template>
  <div
    class="one-box"
    :class="classProps"
  >
    <slot />
  </div>
</template>
