<template>
    <div class="absolute bottom-5 left-1/2 overflow-hidden -translate-x-1/2 bg-white border rounded-lg shadow-md z-50">
      <div class="w-full h-full flex relative">
        <ButtonOption name="Undo" @click="emit('undo')"><ArrowUturnLeftIcon /></ButtonOption>
        <ButtonOption name="Clear" @click="emit('clearCanvas')"><TrashIcon /></ButtonOption>
        <ToggleOptions>
          <ToggleOptionRadio group="tool" value="draw" name="Draw" v-model:activeItem="tool"><PencilIcon /></ToggleOptionRadio>
          <ToggleOptionRadio group="tool" value="select" name="Select" v-model:activeItem="tool"><CursorArrowRaysIcon /></ToggleOptionRadio>
        </ToggleOptions>
        <ToggleOptions>
          <ToggleOptionRadio group="tileset" value="default" name="Arrows" v-model:activeItem="tileset">
            <div class="-mx-2 size-5 flex">
              <img src="/tilesets/default/start-rr.svg" alt="Tileset start">
              <img src="/tilesets/default/end-ll.svg" alt="Tileset end">
            </div>
          </ToggleOptionRadio>
          <ToggleOptionRadio group="tileset" value="lemoji" name="Lemoji" v-model:activeItem="tileset">
            <div class="-mx-6 -mt-1 size-8 flex">
              <img src="/tilesets/lemoji/start-rr.svg" alt="Tileset start">
              <img src="/tilesets/lemoji/end-ll.svg" alt="Tileset end">
            </div>
          </ToggleOptionRadio>
        </ToggleOptions>
      </div>
    </div>
</template>

<script setup>
import ToggleOptions from './ToggleOptions.vue'
import ToggleOptionRadio from './ToggleOptionRadio.vue'
import ButtonOption from './ButtonOption.vue'
import { ref, watch } from 'vue'
import { ArrowUturnLeftIcon, TrashIcon, PencilIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/outline'

const tileset = ref('default')
const tool = ref('draw')

const emit = defineEmits(['updateTileset', "clearCanvas", "undo", "selectTool"])

watch(tileset, (newTileset) => {
  emit('updateTileset', newTileset)
})
watch(tool, (newTool) => {
  emit('selectTool', newTool)
})
</script>