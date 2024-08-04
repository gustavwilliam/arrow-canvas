<template>
  <div v-if="selectionStore.line" class="absolute inset-0 bg-gray-200 opacity-70 z-30"></div>
  <div class="w-full grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 select-none" :class="{
    'hover:cursor-crosshair': stateStore.tool.value === 'draw',
    'hover:cursor-default': stateStore.tool.value === 'select',
  }">
    <CanvasSquare
      v-for="(_, i) in 70"
      :key="i"
      :index="i"
      :cols="cols"
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
import { useSelectionStore } from '../stores/selection'
import { useStateStore } from '../stores/state'

const cols = ref()
const selectionStore = useSelectionStore()
const stateStore = useStateStore()

window.addEventListener('resize', () => {
  updateCols()
})

onMounted(() => {
  updateCols()
})

const updateCols = () => {
  cols.value = window.innerWidth < 768 ? 5 : window.innerWidth < 1024 ? 7 : 10
}

const _getPossibleSelections = (point) => {
  const lines = stateStore.currentLines()?.toReversed()  // Reverse to get the topmost line
    .filter(line => line.intersects(point))
  return lines || []
}

const selectLine = (point) => {
  const possibleSelections = _getPossibleSelections(point)
    if (possibleSelections.length === 0) {
      selectionStore.line = null
      selectionStore.point = null
      return
    }
    if (selectionStore.point && selectionStore.point.equals(point)) {
      // If the same point is clicked again, select the next point in possible selections
      // For example, if there are 3 lines intersecting at the same point, clicking the point 3 times will select each line in turn
      const currentIndex = possibleSelections.findIndex(line => line === selectionStore.line)
      if (currentIndex === possibleSelections.length - 1) {
        // At the last click, the selection will be cleared
        selectionStore.line = null
        selectionStore.point = null
        return
      }
      selectionStore.line = possibleSelections[currentIndex + 1]
      return
    }
    selectionStore.line = possibleSelections[0]
    selectionStore.point = point
}

function handleMouseDown(point) {
  console.log('handleMouseDown', point)
  console.log('stateStore.tool', stateStore.tool)

  if (stateStore.tool === 'draw') {
    stateStore.addLineFromPoint(point)
  }
  if (stateStore.tool === 'select') {
    selectLine(point)
  }
}

function handleMouseOver(point) {
  if (stateStore.tool.value === 'select') return

  const lastLine = stateStore.lastLine()
  if (lastLine && lastLine.points.length > 0 && lastLine.points[lastLine.points.length - 1].equals(point)) {
    // If new point is the same as last point in last line in lines, ignore
    return
  }
  if (lastLine && lastLine.points.length > 0 && !lastLine.points[lastLine.points.length - 1].isAdjacent(point)) {
    // If last point in last line is more than one square away, create a new line
    stateStore.addLineFromPoint(point)
    return
  }
  stateStore.addPointToLastLine(point);
}
</script>