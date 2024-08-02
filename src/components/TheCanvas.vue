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
import { onMounted, ref, reactive, watch } from 'vue'

const cols = ref()
const lines = reactive([])

const props = defineProps(["globalTileset"])

watch(() => props.globalTileset, (newTileset) => {
  console.debug('Tileset changed to', newTileset);
  lines.forEach(line => {
    line.tileset = newTileset
  })
})

window.addEventListener('resize', () => {
  updateCols()
})

onMounted(() => {
  updateCols()
})

function handleMouseDown(point) {
  console.debug('Mouse down on point', point)
  // Create line in lines when mouse down. This line will be updated on mouse move.
  lines.push(new Line([new Point(point.x, point.y)], props.globalTileset))
}

function handleMouseOver(point) {
  console.debug('Mouse over point', point)
  // Update the last line in lines with the new point
  lines[lines.length - 1].addPoint(new Point(point.x, point.y))
}

const updateCols = () => {
  cols.value = window.innerWidth < 768 ? 5 : window.innerWidth < 1024 ? 7 : 10
}
</script>