<template>
  <div class="w-full grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
    <CanvasSquare v-for="(_, i) in 70" :key="i" :index="i" :cols="cols" />
  </div>
</template>

<script setup>
import CanvasSquare from './CanvasSquare.vue'
import { ref } from 'vue'

let cols = ref(5)

window.addEventListener('resize', () => {
  updateCols()
})

const updateCols = () => {
  cols.value = window.innerWidth < 640 ? 5 : window.innerWidth < 1024 ? 7 : 10
}
</script>