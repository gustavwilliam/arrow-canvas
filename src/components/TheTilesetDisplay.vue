<template>
  <div class="w-auto flex items-center justify-between">
    <span class="capitalize mr-1">{{ name }}</span>
    <div class="flex items-center">
      <img
        class="size-5"
        :src="`/tilesets/${name}/start-rr.svg`"
        alt="Tileset start"
      />
      <img
        class="size-5"
        :src="`/tilesets/${name}/end-ll.svg`"
        alt="Tileset end"
      />
    </div>
  </div>
</template>

<script setup>
defineProps(["name"]);
</script>
