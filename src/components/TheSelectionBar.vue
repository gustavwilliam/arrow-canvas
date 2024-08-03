<template>
  <div class="absolute top-5 left-1/2 overflow-hidden -translate-x-1/2 bg-white border rounded-lg shadow-md z-50">
    <div class="bg-gray-100 py-3 px-4 flex justify-between">
      <span class="font-semibold text-gray-900">1 line selected</span>
      <button @click="selectionStore.clearSelection" class="bg-gray-200 hover:bg-gray-300 px-3 uppercase text-sm font-semibold text-gray-800 rounded-full">
        Unselect
      </button>
    </div>
    <div class="w-full">
      <div class="w-full h-full flex relative">
        <ButtonOption name="Delete" @click="selectionStore.deleteLine"><TrashIcon/></ButtonOption>
        <ToggleOptions>
          <ToggleOptionRadio group="selection-tileset" value="default" name="Arrows" v-model:activeItem="selectionStore.line.tileset">
            <div class="-mx-2 size-5 flex">
              <img src="/tilesets/default/start-rr.svg" alt="Tileset start">
              <img src="/tilesets/default/end-ll.svg" alt="Tileset end">
            </div>
          </ToggleOptionRadio>
          <ToggleOptionRadio group="selection-tileset" value="lemoji" name="Lemoji" v-model:activeItem="selectionStore.line.tileset">
            <div class="-mx-6 -mt-1 size-8 flex">
              <img src="/tilesets/lemoji/start-rr.svg" alt="Tileset start">
              <img src="/tilesets/lemoji/end-ll.svg" alt="Tileset end">
            </div>
          </ToggleOptionRadio>
        </ToggleOptions>
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleOptions from './ToggleOptions.vue'
import ToggleOptionRadio from './ToggleOptionRadio.vue'
import ButtonOption from './ButtonOption.vue'
import { useSelectionStore } from '../stores/selection'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { ref, watch } from 'vue'

const selectionStore = useSelectionStore()  
</script>