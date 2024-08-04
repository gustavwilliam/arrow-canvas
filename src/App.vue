<template>
  <TheCanvas />
  <TheOptions
    @clearCanvas="clearCanvas"
  />
  <TheSelectionBar v-if="selectionStore.line"/>
</template>

<script setup>
import TheCanvas from './components/TheCanvas.vue'
import TheOptions from './components/TheOptions.vue'
import TheSelectionBar from './components/TheSelectionBar.vue'
import { useSelectionStore } from './stores/selection'
import { useStateStore } from './stores/state'
import Line from './utils/line'
import Point from './utils/point'

const selectionStore = useSelectionStore()
const stateStore = useStateStore()

const clearCanvas = () => {
  stateStore.clearLines()
}
</script>