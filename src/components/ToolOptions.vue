<template>
  <form @submit.prevent="" class="p-2 border-r last:border-0">
    <div class="flex font-semibold gap-2 h-full">
      <ToolOptionRadio :icon="PencilIcon" tool="edit" v-model:activeTool="tool">Edit</ToolOptionRadio>
      <ToolOptionRadio :icon="CursorArrowRaysIcon" tool="select" v-model:activeTool="tool">Select</ToolOptionRadio>
    </div>
  </form>
</template>

<script setup>
import ToolOptionRadio from './ToolOptionRadio.vue'
import { PencilIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/outline'

const tool = defineModel("tool")
</script>