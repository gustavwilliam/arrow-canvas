import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import Line from "../utils/line";
import Point from "../utils/point";

export const useStateStore = defineStore("state", () => {
  const tileset = ref("default");
  const history = reactive([
    [], // No lines at start
  ]);
  const historyIndex = ref(0); // Current index in history (end of history=0, incrementing toward first moment in history)
  const _tool = ref("draw");

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

  function addLineFromPoint(point, lineTileset = null) {
    const line = new Line(
      [new Point(point.x, point.y)],
      lineTileset || tileset.value
    );
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

  function setTool(newTool) {
    _tool.value = newTool;
  }

  function getTool() {
    return _tool;
  }

  const canUndo = computed(() => historyIndex.value < history.length - 1);
  const canRedo = computed(() => historyIndex.value > 0);

  function undo() {
    if (canUndo.value) {
      historyIndex.value++;
    } else {
      console.debug("Tried to undo, but there's nothing to undo!");
    }
  }

  function redo() {
    if (canRedo.value) {
      historyIndex.value--;
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
    setTool,
    getTool,
    tileset,
    history,
    undo,
    redo,
    canUndo,
    canRedo,
  };
});
