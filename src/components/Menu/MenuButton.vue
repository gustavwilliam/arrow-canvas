<template>
  <span class="mr-1" v-if="label">
    {{ label }}
  </span>
  <button :disabled="disabled" class="px-2 py-2 flex flex-row gap-1 rounded-md items-center justify-center border bg-gray-50 hover:bg-gray-100 hover:disabled:bg-inherit disabled:text-gray-300">
    <div v-if="$slots.default" class="w-5 h-5 select-none" draggable="false">
      <slot></slot>
    </div>
    <span class="select-none">
      {{ name }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  name: String,
  label: String,
  disabled: Boolean,
})
</script>