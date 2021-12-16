<template>
  <div class="vl_page-center">
    <div class="vl_page-center__header">
      <slot name="header"></slot>
    </div>
    <div class="vl_page-center__body">
      <slot></slot>
    </div>
    <div class="vl_page-center__footer">
      <slot name="footer">re</slot>
    </div>
  </div>
</template>
