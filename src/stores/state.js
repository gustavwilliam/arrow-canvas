import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import Line from "../utils/line";
import Point from "../utils/point";
import { useSelectionStore } from "./selection";

export const useStateStore = defineStore("state", () => {
  const tileset = ref("arrows");
  const selectionStore = useSelectionStore();
  const history = reactive([
    [], // No lines at start
  ]);
  const historyIndex = ref(0); // Current index in history (end of history=0, incrementing toward first moment in history)
  const _tool = ref("draw");
  const tool = computed({
    get: () => _tool.value,
    set: (value) => {
      _tool.value = value;
      if (value === "draw") {
        selectionStore.clearSelection();
      }
    },
  });

  function currentLines() {
    return history[history.length - historyIndex.value - 1];
  }

  function _deleteRedoHistory() {
    if (historyIndex.value > 0) {
      history.splice(history.length - historyIndex.value);
      historyIndex.value = 0;
    }
  }

  function addLine(line) {
    _deleteRedoHistory();
    history.push([...currentLines(), line]);
    historyIndex.value = 0;
  }

  function addLineFromPoint(point) {
    const line = new Line([new Point(point.x, point.y)], tileset.value);
    addLine(line);
  }

  function clearCanvas() {
    history.push([]);
    historyIndex.value = 0;
  }

  function lastLine() {
    return currentLines()[currentLines().length - 1];
  }

  function addPointToLastLine(point) {
    _deleteRedoHistory();
    lastLine().addPoint(new Point(point.x, point.y));
  }

  const canUndo = computed(() => historyIndex.value < history.length - 1);
  const canRedo = computed(() => historyIndex.value > 0);

  function undo() {
    if (canUndo.value) {
      historyIndex.value++;
      selectionStore.clearSelection();
    } else {
      console.debug("Tried to undo, but there's nothing to undo!");
    }
  }

  function redo() {
    if (canRedo.value) {
      historyIndex.value--;
      selectionStore.clearSelection();
    } else {
      console.debug("Tried to redo, but there's nothing to redo!");
    }
  }

  return {
    currentLines,
    addLine,
    addLineFromPoint,
    clearCanvas,
    lastLine,
    addPointToLastLine,
    tool,
    tileset,
    history,
    undo,
    redo,
    canUndo,
    canRedo,
  };
});
