<template>
  <div class="h-full w-full overflow-hidden">
    <div
      class="z-[60] md:hidden bg-gray-100 dark:bg-gray-900 p-10 text-center absolute inset-0 flex flex-col gap-2 items-center justify-center"
    >
      <div class="font-bold text-lg">
        Mobile view is not supported yet. Please use a desktop browser.
      </div>
      <div class="text-sm text-gray-700 dark:text-gray-300">
        If you have a wide mobile device with a mouse, that would technically
        work too.
      </div>
    </div>
    <div class="h-full w-full flex flex-col">
      <TheMenu />
      <div class="h-full w-full flex flex-col md:flex-row">
        <ToolPicker />
        <TheCanvas />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCanvas from "@/components/TheCanvas.vue";
import TheMenu from "@/components/Menu/TheMenu.vue";
import ToolPicker from "@/components/ToolPicker/ToolPicker.vue";
</script>
