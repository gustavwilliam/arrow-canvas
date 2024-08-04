<template>
  <button :disabled="disabled" class="px-3 py-2 flex flex-col rounded-md items-center justify-center hover:bg-gray-100 hover:disabled:bg-inherit disabled:text-gray-300">
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