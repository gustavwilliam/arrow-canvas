<template>
  <div :ref="refId" class="inline-block align-bottom w-full aspect-square relative" @mousedown="handleMouseDown">
    <div class="absolute inset-1 bg-gray-100 rounded-lg z-10">
      <!-- Visual box -->
    </div>
    <div class="w-full h-full absolute z-20" v-if="linePoints.length > 0">
      <img :src="point.imageSrc()" v-for="point in linePoints" :key="point" alt="Tileset tile" >
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted } from "vue"
import Point from "../utils/point"

const props = defineProps(["index", "cols", "lines"])

const positionPoint = computed(() => {
  return new Point(Math.floor(props.index / props.cols), props.index % props.cols)
})
const refId = computed(() => `square-${positionPoint.value.x}-${positionPoint.value.y}`)

const linePoints = computed(() => {
  return props.lines
    .filter((line) => line.crosses(positionPoint.value))
    .flatMap((line) => line.points)
    .filter((point) => point.equals(positionPoint.value))
})

function handleMouseDown(event) {
  console.debug("handleMouseDown", point.value)
}
</script>