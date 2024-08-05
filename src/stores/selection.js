import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSelectionStore = defineStore("selection", () => {
  const line = ref(null);
  const point = ref(null);

  const hasSelection = computed(() => line.value || point.value);

  function deleteLine() {
    if (!line.value) return;
    line.value.points.length = 0;
    clearSelection();
  }

  function clearSelection() {
    line.value = null;
    point.value = null;
  }

  return { line, point, deleteLine, clearSelection, hasSelection };
});
