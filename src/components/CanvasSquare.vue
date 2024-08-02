<template>
  <div :ref="refId" class="inline-block align-bottom w-full aspect-square relative" @mousedown="handleMouseDown">
    <div class="absolute inset-1 bg-gray-100 rounded-lg z-10">
      <!-- Visual box -->
    </div>
    <div v-if="linePoints.length > 0">
      <div v-for="point in linePoints" :key="point">
        <img class="w-full h-full absolute z-20" :src="point.imageSrc()" alt="Tileset tile" >
        <img :class="'w-full h-full absolute z-20 '+point.connectorTransform()" :src="point.connectorSrc()" v-if="point.hasConnector()" alt="Line connector" >
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted } from "vue"
import Point from "../utils/point"

const props = defineProps(["index", "cols", "lines"])

const positionPoint = computed(() => {
  return new Point(
    props.index % props.cols,
    Math.floor(props.index / props.cols)
  ) // This (x, y) order because the grid is filled row-by-row
})
const refId = computed(() => `square-${positionPoint.value.x}-${positionPoint.value.y}`)

const linePoints = computed(() => {
  return props.lines
    .filter((line) => line.crosses(positionPoint.value))
    .flatMap((line) => line.points)
    .filter((point) => point.equals(positionPoint.value))
})

function handleMouseDown(event) {
}
</script>