<template>
  <div class="flex py-2 pl-2 pr-4" :class="{
      'bg-gray-100 rounded-md': activeTileset === tileset
    }">
    <input class="appearance-none" name="tileset" :id="`tileset-${tileset}`" type="radio" :value="tileset" v-model="activeTileset">
    <label :for="`tileset-${tileset}`" class="flex items-center">
      <img :src="`/tilesets/${tileset}/start-rr.svg`" class="w-8 h-8" alt="Tileset emoji left">
      <img :src="`/tilesets/${tileset}/end-ll.svg`" class="w-8 h-8" alt="Tileset emoji right">
      <span class="ml-2">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  tileset: String
})

const activeTileset = defineModel("activeTileset")
</script>