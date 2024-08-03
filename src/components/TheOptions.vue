<template>
    <div class="absolute bottom-5 left-1/2 overflow-hidden -translate-x-1/2 bg-white border rounded-lg shadow-md z-50">
      <div class="w-full h-full flex relative">
        <button class="px-5 py-4 border-r flex flex-col items-center justify-center last:border-0 hover:bg-gray-50" @click="emit('undo')">
          <ArrowUturnLeftIcon class="w-6 h-6" />
          Undo
        </button>
        <button class="px-5 py-4 border-r flex flex-col items-center justify-center last:border-0 hover:bg-gray-50" @click="emit('clearCanvas')">
          <TrashIcon class="w-6 h-6" />
          Clear
        </button>
        <TilesetOptions v-model:tileset="tileset"></TilesetOptions>
      </div>
    </div>
</template>

<script setup>
import TilesetOptions from './TilesetOptions.vue'
import { ref, watch } from 'vue'
import { ArrowUturnLeftIcon, TrashIcon } from '@heroicons/vue/24/outline'

const tileset = ref('default')

const emit = defineEmits(['updateTileset', "clearCanvas", "undo"])

watch(tileset, (newTileset) => {
  emit('updateTileset', newTileset)
})
</script>