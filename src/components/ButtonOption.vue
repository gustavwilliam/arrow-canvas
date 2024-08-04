<template>
  <button :disabled="disabled" class="px-5 py-4 border-r flex flex-col items-center justify-center last:border-0 hover:bg-gray-50 hover:disabled:bg-inherit disabled:text-gray-300">
    <div class="w-6 h-6 select-none" draggable="false">
      <slot></slot>
    </div>
    {{ name }}
  </button>
</template>

<script setup>
import { onMounted } from "vue"

const props = defineProps({
  name: String,
  disabled: Boolean,
})
</script>