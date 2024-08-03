<template>
  <div :ref="refId" class="inline-block align-bottom w-full aspect-square relative" @mousedown="handleMouseDown">
    <div v-if="intersectingLines.length > 0">
      <div
        v-for="[i, [point, line]] of intersectingLines.entries()"
        :key="refId + i"
        class="absolute inset-0 z-20"
        :class="{
          'z-40': selectionStore.line && selectionStore.line === line,
        }"
      >
        <div class="relative">
          <img class="w-full h-full" :src="point.imageSrc()" draggable="false" alt="Tileset tile" >
          <img :class="'w-full h-full absolute inset-0 '+point.connectorTransform()" draggable="false" :src="point.connectorSrc()" v-if="point.hasConnector()" alt="Line connector" >
        </div>
      </div>
    </div>
    <div class="absolute inset-1 bg-gray-50 rounded-lg z-10">
      <!-- Visual box -->
    </div>
    <div class="absolute -inset-1 rounded-full z-40" @mouseover="handleMouseOver">
      <!-- Mouseover interaction box -->
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import Point from "../utils/point"
import { useSelectionStore } from '../stores/selection'

const props = defineProps(["index", "cols", "lines"])
const emit = defineEmits(["squareMouseDown", "squareMouseOver"])
const selectionStore = useSelectionStore()

const positionPoint = computed(() => {
  return new Point(
    props.index % props.cols,
    Math.floor(props.index / props.cols)
  ) // This (x, y) order because the grid is filled row-by-row
})
const refId = computed(() => `square-${positionPoint.value.x}-${positionPoint.value.y}`)

const intersectingLines = computed(() => {
  const intersecting = []
  props.lines.forEach(line => {
    const points = line.points.filter(p => p.equals(positionPoint.value))
    points.forEach(point => {
      intersecting.push([point, line])
    })
  })
  return intersecting
})

function handleMouseDown(event) {
  emit("squareMouseDown", positionPoint.value)
}

function handleMouseOver(event) {
  if (event.buttons === 1) {
    emit("squareMouseOver", positionPoint.value)
    }
}
</script>