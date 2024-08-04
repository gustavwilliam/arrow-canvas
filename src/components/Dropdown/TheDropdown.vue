<template>
  <span class="mr-1">{{ name }}</span>
  <div @click="toggle" class="relative">
    <slot name="toggler">
    </slot>
    <slot/>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";

const active = ref(false);

defineProps(["name"]);
provide("toggleState", active);
provide("closeDropdown", () => active.value = false);

const toggle = () => active.value = !active.value;
</script>