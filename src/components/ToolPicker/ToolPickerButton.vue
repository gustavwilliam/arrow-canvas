<template>
  <button class="rounded-md w-full aspect-square flex items-center justify-center p-1 hover:bg-gray-200 hover:disabled:bg-inherit disabled:text-gray-300">
    <div class="w-full h-full select-none" draggable="false">
      <slot></slot>
    </div>
  </button>
</template>