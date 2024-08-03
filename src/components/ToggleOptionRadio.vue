<template>
    <label
      class="flex flex-col items-center justify-center p-4 h-full" 
      :class="{
        ' bg-gray-100 hover:bg-gray-100 rounded-md': activeItem === value,
        'hover:bg-gray-50': activeItem !== value
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
defineProps(["group", "name", "value"])

const activeItem = defineModel("activeItem")
</script>