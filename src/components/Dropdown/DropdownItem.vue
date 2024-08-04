<template>
  <label
    class="flex items-center cursor-pointer p-2"
    :class="{
      'bg-gray-100': activeItem === value,
      'hover:bg-gray-100': activeItem !== value,
    }"
    :for="`item-${group}-${value}`"
  >
    <input
      class="appearance-none"
      :name="group"
      :id="`item-${group}-${value}`"
      type="radio"
      :value="value"
      v-model="activeItem"
    >
    <div class="select-none w-full" draggable="false">
      <slot></slot>
    </div>
  </label>
</template>

<script setup>
import { inject, watch } from "vue";

const props = defineProps(["group", "value", "name"])
const activeItem = defineModel("activeItem")
const closeDropdown = inject("closeDropdown");

watch(activeItem, () => closeDropdown());
</script>