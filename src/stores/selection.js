import { defineStore } from "pinia";
import { useStateStore } from "./state";
import { computed, ref } from "vue";

export const useSelectionStore = defineStore("selection", () => {
  const line = ref(null);
  const point = ref(null);
  const _stateStore = useStateStore();

  const hasSelection = computed(() => line.value || point.value);

  function deleteLine() {
    if (!line.value) return;
    // create a new entry in history that's the same as the last item at the historyindex, but without the selected line
    const newState = _stateStore
      .currentLines()
      .toReversed()
      .filter((l) => l !== line.value);
    _stateStore.history.push(newState);
    _stateStore.historyIndex = 0;
    clearSelection();
  }

  function clearSelection() {
    line.value = null;
    point.value = null;
  }

  return { line, point, deleteLine, clearSelection, hasSelection };
});
