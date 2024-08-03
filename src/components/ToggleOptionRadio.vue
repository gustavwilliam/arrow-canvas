<template>
    <label
      class="flex flex-col items-center justify-center p-4 h-full rounded-md" 
      :class="{
        'bg-gray-200 hover:bg-gray-200': activeItem === value && invertedColor,
        'bg-gray-100 hover:bg-gray-200': activeItem !== value && invertedColor,
        'bg-gray-100 hover:bg-gray-100': activeItem === value,
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
      <div class="w-6 h-6 select-none" draggable="false">
        <slot></slot>
      </div>
      <span class="select-none">
        {{ name}}
      </span>
    </label>
</template>

<script setup>
defineProps(["group", "name", "value", "invertedColor"])

const activeItem = defineModel("activeItem")
</script>