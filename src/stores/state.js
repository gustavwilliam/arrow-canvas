import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import Line from "../utils/line";
import Point from "../utils/point";

export const useStateStore = defineStore("state", () => {
  const lines = reactive([]);
  const tileset = ref("default");
  const _tool = ref("draw");

  function addLine(line) {
    lines.push(line);
  }

  function addLineFromPoint(point, lineTileset = null) {
    const line = new Line(
      [new Point(point.x, point.y)],
      lineTileset || tileset.value
    );
    addLine(line);
  }

  function clearLines() {
    lines.length = 0;
  }

  function lastLine() {
    return lines[lines.length - 1];
  }

  function setTool(newTool) {
    _tool.value = newTool;
  }

  function getTool() {
    return _tool;
  }

  return {
    lines,
    addLine,
    addLineFromPoint,
    clearLines,
    lastLine,
    setTool,
    getTool,
    tileset,
  };
});
