import { defineStore } from "pinia";
import { ref } from "vue";

export const useSelectionStore = defineStore("selection", () => {
  const line = ref(null);
  const point = ref(null);

  function deleteLine() {
    line.value.points.length = 0;
    clearSelection();
  }

  function clearSelection() {
    line.value = null;
    point.value = null;
  }

  return { line, point, deleteLine, clearSelection };
});
