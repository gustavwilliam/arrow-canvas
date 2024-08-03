<template>
  <div class="w-full grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 select-none hover:cursor-crosshair">
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

const props = defineProps(["lines"])
const emit = defineEmits(["addLine", "addPointToLine"])
const cols = ref()

window.addEventListener('resize', () => {
  updateCols()
})

onMounted(() => {
  updateCols()
})

const updateCols = () => {
  cols.value = window.innerWidth < 768 ? 5 : window.innerWidth < 1024 ? 7 : 10
}

function handleMouseDown(point) {
  emit('addLine', point)
}

function handleMouseOver(point) {
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