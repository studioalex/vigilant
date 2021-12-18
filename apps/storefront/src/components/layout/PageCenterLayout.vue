<template>
  <div class="vl_page-center">
    <div class="vl_page-center__header">
      <slot name="header" />
    </div>
    <div class="vl_page-center__body">
      <slot />
    </div>
    <div class="vl_page-center__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
