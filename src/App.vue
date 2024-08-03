<template>
  <TheCanvas
    :lines="lines"
    @addLine="addLine"
    @addPointToLine="addPointToLine"
  >
  </TheCanvas>
  <TheOptions
    @updateTileset="updateTileset"
    @clearCanvas="clearCanvas"
    @undo="undo"
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
const lines = reactive([])

const updateTileset = (newTileset) => {
  console.debug('Tileset changed to', newTileset);
  tileset.value = newTileset
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