<template>
  <div class="flex flex-row items-center px-2 w-full md:w-14 md:flex-col md:h-full bg-white border-r shadow-sm z-40">
    <ToolPickerGroup>
      <ToolPickerItem v-tooltip="'Pen tool'" group="tool" value="draw" v-model:activeItem="stateStore.tool"><PencilIcon /></ToolPickerItem>
      <ToolPickerItem v-tooltip="'Select tool'" group="tool" value="select" v-model:activeItem="stateStore.tool"><CursorArrowRippleIcon /></ToolPickerItem>
    </ToolPickerGroup>
    <ToolPickerGroup>
      <ToolPickerButton v-tooltip="'Clear canvas'" @click="stateStore.clearCanvas"><TrashIcon /></ToolPickerButton>
    </ToolPickerGroup>
    <ToolPickerGroup>
      <ToolPickerButton v-tooltip="'Undo'" @click="stateStore.undo" :disabled="!stateStore.canUndo"><ArrowUturnLeftIcon /></ToolPickerButton>
      <ToolPickerButton v-tooltip="'Undo'" @click="stateStore.redo" :disabled="!stateStore.canRedo"><ArrowUturnRightIcon /></ToolPickerButton>
    </ToolPickerGroup>
  </div>
</template>

<script setup>
import ToolPickerItem from './ToolPickerItem.vue'
import ToolPickerGroup from './ToolPickerGroup.vue'
import ToolPickerButton from './ToolPickerButton.vue'
import { useStateStore } from '@/stores/state'
import { PencilIcon, CursorArrowRippleIcon, ArrowUturnLeftIcon, ArrowUturnRightIcon, TrashIcon } from '@heroicons/vue/16/solid'

const stateStore = useStateStore()
</script>