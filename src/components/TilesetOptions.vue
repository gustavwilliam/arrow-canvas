<template>
  <form @submit.prevent="" class="px-5 py-4 border-r last:border-0">
    <h3 class="text-sm font-semibold uppercase mb-2">Next arrow tileset</h3>
    <div class="flex font-semibold gap-2">
      <TilesetOptionsRadio tileset="default" v-model:activeTileset="tileset">Arrows</TilesetOptionsRadio>
      <TilesetOptionsRadio tileset="lemoji" v-model:activeTileset="tileset">Lemoji</TilesetOptionsRadio>
    </div>
  </form>
</template>

<script setup>
import TilesetOptionsRadio from './TilesetOptionsRadio.vue'

const tileset = defineModel("tileset")
</script>