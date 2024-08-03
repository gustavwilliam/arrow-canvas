<template>
  <button class="px-5 py-4 border-r flex flex-col items-center justify-center last:border-0 hover:bg-gray-50">
    <div class="w-6 h-6 select-none" draggable="false">
      <slot></slot>
    </div>
    {{ name }}
  </button>
</template>

<script setup>
defineProps({
  name: String
})
</script>