<template>
    <div class="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white border rounded-lg shadow-md z-50">
      <div class="w-full h-full flex relative">
        <TilesetOptions v-model:tileset="tileset"></TilesetOptions>
      </div>
    </div>
</template>

<script setup>
import TilesetOptions from './TilesetOptions.vue'
import { ref, watch } from 'vue'

const tileset = ref('default')

const emit = defineEmits(['updateTileset'])

watch(tileset, (newTileset) => {
  emit('updateTileset', newTileset)
})
</script>