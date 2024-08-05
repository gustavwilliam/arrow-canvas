<template>
  <div class="flex flex-row items-center px-2 w-full md:w-14 md:flex-col md:h-full bg-white border-r shadow-sm z-40">
    <ToolPickerGroup>
      <ToolPickerItem v-tooltip="'Pen tool (P)'" v-shortkey="['p']" @shortkey="stateStore.tool.value='draw'" group="tool" value="draw" v-model:activeItem="stateStore.tool"><PencilIcon /></ToolPickerItem>
      <ToolPickerItem v-tooltip="'Select tool (V)'"  v-shortkey="['v']" @shortkey="stateStore.tool.value='select'" group="tool" value="select" v-model:activeItem="stateStore.tool"><CursorArrowRippleIcon /></ToolPickerItem>
    </ToolPickerGroup>
    <ToolPickerGroup>
      <ToolPickerButton v-tooltip="'Clear canvas'" @click="stateStore.clearCanvas"><TrashIcon /></ToolPickerButton>
    </ToolPickerGroup>
    <ToolPickerGroup>
      <ToolPickerButton v-tooltip="'Undo (CTRL+Z)'" v-shortkey="{mac: ['meta', 'z'], windows: ['ctrl', 'z']}" @shortkey="stateStore.undo" @click="stateStore.undo" :disabled="!stateStore.canUndo"><ArrowUturnLeftIcon /></ToolPickerButton>
      <ToolPickerButton v-tooltip="'Redo (CTRL+SHIFT+Z)'" v-shortkey="{mac: ['meta', 'shift', 'z'], windows: ['ctrl', 'shift', 'z']}" @shortkey="stateStore.redo" @click="stateStore.redo" :disabled="!stateStore.canRedo"><ArrowUturnRightIcon /></ToolPickerButton>
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