<template>
  <div :ref="refId" class="inline-block align-bottom w-full p-1 aspect-square" @mousedown="handleMouseDown">
    <div class="w-full h-full bg-gray-100 rounded-lg" :class="{'bg-red-500' : crossingLines.length > 0}">
      <!-- Visual box -->
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import Point from "../utils/point"

const props = defineProps(["index", "cols", "lines"])

const point = computed(() => {
  return new Point(Math.floor(props.index / props.cols), props.index % props.cols)
})

const refId = computed(() => `square-${point.value.x}-${point.value.y}`)

const crossingLines = computed(() => {
  return props.lines.filter((line) => line.crosses(point.value))
})

function handleMouseDown(event) {
  console.debug("handleMouseDown", point.value)
  console.log(props.lines)
  console.log(crossingLines.value)
}
</script>