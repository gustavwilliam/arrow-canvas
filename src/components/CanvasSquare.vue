<template>
  <div class="inline-block align-bottom w-full p-1 aspect-square" @mousedown="handleMouseDown">
    <div class="w-full h-full bg-gray-100 rounded-lg">
      <!-- Visual box -->
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps(["index", "cols"])

const row = computed(() => Math.floor(props.index / props.cols))
const col = computed(() => props.index % props.cols)

function handleMouseDown(event) {
  console.debug("handleMouseDown", row.value, col.value)
}
</script>