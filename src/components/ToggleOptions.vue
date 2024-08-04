<template>
  <OptionGroup :class="{
    'bg-gray-100': invertedColor,
    'bg-white': !invertedColor
  }">
    <slot></slot>
  </OptionGroup>
</template>

<script setup>
import OptionGroup from "./OptionGroup.vue"

defineProps({
  invertedColor: Boolean,
})
</script>