<template>
  <div class="h-full w-full flex flex-col">
    <TheMenu />
    <div class="h-full w-full flex flex-col md:flex-row">
      <ToolPicker />
      <TheCanvas />
    </div>
  </div>
</template>

<script setup>
import TheCanvas from '@/components/TheCanvas.vue'
import TheMenu from '@/components/Menu/TheMenu.vue'
import ToolPicker from '@/components/ToolPicker/ToolPicker.vue'
import { useSelectionStore } from '@/stores/selection'
import { useStateStore } from './stores/state'
import Line from '@/utils/line'
import Point from '@/utils/point'

const selectionStore = useSelectionStore()
const stateStore = useStateStore()
</script>