<template>
  <div class="w-full grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 select-none">
    <CanvasSquare
      v-for="(_, i) in 70"
      :key="i"
      :index="i"
      :cols="cols"
      :lines="lines"
      @squareMouseDown="handleMouseDown"
      @squareMouseOver="handleMouseOver"
    />
  </div>
</template>

<script setup>
import CanvasSquare from './CanvasSquare.vue'
import Point from '../utils/point'
import Line from '../utils/line'
import { onMounted, ref, reactive } from 'vue'

const cols = ref()
const lines = reactive([])
let dragging = false

window.addEventListener('resize', () => {
  updateCols()
})

onMounted(() => {
  updateCols()
})

function handleMouseDown(point) {
  console.debug('Mouse down on point', point)
  dragging = true
  // Create line in lines when mouse down. This line will be updated on mouse move.
  lines.push(new Line([point], "lemoji"))
}

function handleMouseOver(point) {
  console.debug('Mouse over point', point)
  if (dragging) {
    // Update the last line in lines with the new point
    lines[lines.length - 1].addPoint(point)
  }
}

const updateCols = () => {
  cols.value = window.innerWidth < 768 ? 5 : window.innerWidth < 1024 ? 7 : 10
}
</script>