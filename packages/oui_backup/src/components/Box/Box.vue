<script lang="ts" setup>
  import { toRefs, computed } from "vue"

  const props = defineProps({
    size: {
      type: String,
      default: 'medium'
    },
    shadow: {
      type: Boolean,
      default: true
    },
    surface: {
      type: String,
      default: '3th'
    }
  })

  const { size, shadow, surface } = toRefs(props)
  const classProps = computed(() => {
    const result = ['oui-box']

    if (['small', 'medium', 'large', 'extralarge'].includes(size.value)) {
      result.push(`oui-box--${size.value}`)
    }

    if (shadow.value !== false) {
      result.push(`oui-box--shadow`)
    }

    if (['1th', '2th', '3th', '4th', 'primary', 'secondary'].includes(surface.value)) {
      result.push(`oui-box--surface-${surface.value}`)
    }

    return result.join(' ')
  })
</script>

<template>
  <div :className="classProps">
    <slot />
  </div>
</template>
