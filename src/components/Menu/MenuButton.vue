<template>
  <span class="mr-1" v-if="label">
    {{ label }}
  </span>
  <button
    @click="onClick"
    :disabled="disabled"
    class="pl-2 pr-3 py-2 flex flex-row gap-1 rounded-md items-center justify-center border dark:border-gray-800 bg-gray-50 dark:bg-dark-900 hover:bg-gray-100 dark:hover:bg-gray-800 hover:disabled:bg-inherit disabled:text-gray-300 dark:disabled:text-gray-600"
  >
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
  onClick: Function,
});
</script>
