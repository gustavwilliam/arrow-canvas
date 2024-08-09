<template>
  <label
    class="rounded-md w-full aspect-square flex items-center justify-center p-1"
    :class="{
      'bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-800':
        activeItem.value === value,
      'hover:bg-gray-200 dark:hover:bg-gray-800': activeItem.value !== value,
    }"
  >
    <input
      class="appearance-none"
      :name="group"
      :id="`item-${group}-${value}`"
      type="radio"
      :value="value"
      v-model="activeItem"
    />
    <div class="w-full select-none" draggable="false">
      <slot></slot>
    </div>
  </label>
</template>

<script setup>
defineProps(["group", "value"]);
const activeItem = defineModel("activeItem");
</script>
