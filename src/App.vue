<template>
  <TheCanvas
    :lines="lines"
    :tool="selectedTool"
    @addLine="addLine"
    @addPointToLine="addPointToLine"
  >
  </TheCanvas>
  <TheOptions
    @updateTileset="updateTileset"
    @clearCanvas="clearCanvas"
    @undo="undo"
    @selectTool="selectTool"
  >
  </TheOptions>
</template>

<script setup>
import TheCanvas from './components/TheCanvas.vue'
import TheOptions from './components/TheOptions.vue'
import { reactive, ref } from 'vue'
import Line from './utils/line'
import Point from './utils/point'

const tileset = ref('default')
const selectedTool = ref('draw')
const lines = reactive([])

const updateTileset = (newTileset) => {
  tileset.value = newTileset
  selectTool('draw')
}

const selectTool = (newTool) => {
  selectedTool.value = newTool
}

const addLine = (point) => {
  lines.push(new Line(
    [new Point(point.x, point.y)],
    tileset.value)
  )
}

const addPointToLine = (point) => {
  const lastLine = lines[lines.length - 1]
  lastLine.addPoint(
    new Point(point.x, point.y)
  )
}

const clearCanvas = () => {
  lines.length = 0
}

const undo = () => {
  lines.pop()
}
</script>