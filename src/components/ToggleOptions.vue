<template>
  <form @submit.prevent="" class="p-2 border-r last:border-0" :class="{
    'bg-gray-100': invertedColor,
    'bg-white': !invertedColor
  }">
    <div class="flex gap-2 h-full">
      <slot></slot>
    </div>
  </form>
</template>

<script setup>
defineProps({
  invertedColor: Boolean
})
</script>