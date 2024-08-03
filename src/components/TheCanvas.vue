<template>
  <div v-if="selectedLine" class="absolute inset-0 bg-gray-200 opacity-70 z-30"></div>
  <div class="w-full grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 select-none" :class="{
    'hover:cursor-crosshair': tool === 'draw',
    'hover:cursor-default': tool === 'select',
  }">
    <CanvasSquare
      v-for="(_, i) in 70"
      :key="i"
      :index="i"
      :cols="cols"
      :lines="lines"
      :selectedLine="selectedLine"
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

const props = defineProps(["lines", "tool"])
const emit = defineEmits(["addLine", "addPointToLine"])
const cols = ref()
const selectedLine = ref(null)

window.addEventListener('resize', () => {
  updateCols()
})

watch(() => props.tool, (changedFrom, changedTo) => {
  if (changedTo === 'select') {
    selectedLine.value = null
  }
})

onMounted(() => {
  updateCols()
})

const updateCols = () => {
  cols.value = window.innerWidth < 768 ? 5 : window.innerWidth < 1024 ? 7 : 10
}

function handleMouseDown(point) {
  if (props.tool === 'draw') {
    emit('addLine', point)
  }
  if (props.tool === 'select') {
    console.log('Selecting', point)
    const newSelection = props.lines
      ?.toReversed()  // Reverse to get the topmost line
      .find(line => line.points.some(p => p.equals(point)))
      || null  // Deselect if no line is found
      selectedLine.value = newSelection === selectedLine.value ? null : newSelection
    if (!selectedLine.value) return
    console.log('Selected line', selectedLine)
  }
}

function handleMouseOver(point) {
  if (props.tool === 'select') return

  const lastLine = props.lines[props.lines.length - 1]
  if (lastLine && lastLine.points.length > 0 && lastLine.points[lastLine.points.length - 1].equals(point)) {
    // If new point is the same as last point in last line in lines, ignore
    return
  }
  if (lastLine && lastLine.points.length > 0 && !lastLine.points[lastLine.points.length - 1].isAdjacent(point)) {
    // If last point in last line is more than one square away, create a new line
    emit('addLine', point)
    return
  }
  emit('addPointToLine', point)
}
</script>