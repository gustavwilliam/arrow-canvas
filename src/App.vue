<template>
  <TheCanvas :globalTileset="tileset">
  </TheCanvas>
  <TheOptions @updateTileset="tileset = $event">
  </TheOptions>
</template>

<script setup>
import TheCanvas from './components/TheCanvas.vue'
import TheOptions from './components/TheOptions.vue'
import { ref } from 'vue'

const tileset = ref('default')
</script>