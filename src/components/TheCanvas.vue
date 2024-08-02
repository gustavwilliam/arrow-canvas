<template>
  <div class="w-full grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 select-none">
    <CanvasSquare v-for="(_, i) in 70" :key="i" :index="i" :cols="cols" :lines="lines" />
  </div>
</template>

<script setup>
import CanvasSquare from './CanvasSquare.vue'
import Point from '../utils/point'
import Line from '../utils/line'
import { onMounted, ref } from 'vue'

const cols = ref()
const lines = [
  new Line([new Point(0, 0), new Point(1, 1), new Point(1, 2), new Point(0, 2)]),
  new Line([new Point(1, 1), new Point(2,2), new Point(3,3), new Point(3,2), new Point(3,1)]),
  new Line([new Point(2, 0), new Point(3,0), new Point(2,0)]),
]

window.addEventListener('resize', () => {
  updateCols()
})

onMounted(() => {
  updateCols()
})

const updateCols = () => {
  cols.value = window.innerWidth < 768 ? 5 : window.innerWidth < 1024 ? 7 : 10
}
</script>