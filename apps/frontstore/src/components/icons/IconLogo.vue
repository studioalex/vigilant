<template>
  <svg
    viewBox="0 0 656 600"
    fill="none"
    :class="classname"
    xmlns="http://www.w3.org/2000/svg">
    <!-- eslint-disable -->
    <path d="M535.84 240L431.917 60L639.763 60L535.84 240Z" fill="#05EBFF"/>
    <path d="M327.84 600L223.917 420H431.763L327.84 600Z" fill="#20357C"/>
    <path d="M432 420L328.077 240H535.923L432 420Z" fill="#3851A3"/>
    <path d="M120 240L16.077 60H223.923L120 240Z" fill="#E90119"/>
    <path d="M223.92 420L119.997 240H327.843L223.92 420Z" fill="#CC0171"/>
    <path d="M327.84 240L431.763 420H223.917L327.84 240Z" fill="#930885"/>
    <path d="M432 60L535.923 240L328.077 240L432 60Z" fill="#08C3D3"/>
    <path d="M223.92 60L327.843 240L119.997 240L223.92 60Z" fill="#F9088E"/>
    <!-- eslint-enable -->
  </svg>
</template>

<script lang="ts">
export default {
  name: 'LvLogo',
  props: {
    classname: {
      type: String,
      default: 'vl_logo vl_logo--medium'
    }
  }
}
</script>
