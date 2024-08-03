<template>
    <label
      class="flex flex-col items-center justify-center p-4 h-full" 
      :class="{
        ' bg-gray-100 hover:bg-gray-100 rounded-md': activeTool === tool,
        'hover:bg-gray-50': activeTool !== tool
      }"
      :for="`tool-${tool}`"
    >
      <input
        class="appearance-none"
        name="tool"
        :id="`tool-${tool}`"
        type="radio"
        :value="tool"
        v-model="activeTool"
      >
      <icon class="w-6 h-6"></icon>
      <span>
        <slot></slot>
      </span>
    </label>
</template>

<script setup>
defineProps({
  tool: String,
  icon: Object
})

const activeTool = defineModel("activeTool")
</script>