<template>
  <transition name="dropdown-content">
    <div
      v-show="toggleState"
      class="origin-top-left absolute w-32 left-0 mt-1 bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-800 py-2"
    >
      <!-- v-if breaks v-model inside DropdownItem, hence v-show -->
      <slot />
    </div>
  </transition>
</template>

<script setup>
import { inject } from "vue";

const toggleState = inject("toggleState");
</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
