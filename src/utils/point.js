const diffCharMap = [
  { dx: 0, dy: -1, char: "tt" },
  { dx: 1, dy: -1, char: "tr" },
  { dx: 1, dy: 0, char: "rr" },
  { dx: 1, dy: 1, char: "rb" },
  { dx: 0, dy: 1, char: "bb" },
  { dx: -1, dy: 1, char: "bl" },
  { dx: -1, dy: 0, char: "ll" },
  { dx: -1, dy: -1, char: "tl" },
];

class Point {
  constructor(x, y, before = null, after = null) {
    this.x = x;
    this.y = y;
    this.before = before; // Previous point in line
    this.after = after; // Next point in line
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }

  _diffChar(point) {
    const dx = point.x - this.x;
    const dy = point.y - this.y;
    return diffCharMap.find((diffChar) => {
      return diffChar.dx === dx && diffChar.dy === dy;
    }).char;
  }

  _imageName() {
    console.info(this.before, this.after);
    if (this.before && this.after) {
      const beforeDiffChar = this._diffChar(this.before);
      const afterDiffChar = this._diffChar(this.after);
      const beforeIndex = diffCharMap.findIndex(
        (diffChar) => diffChar.char === beforeDiffChar
      );
      const afterIndex = diffCharMap.findIndex(
        (diffChar) => diffChar.char === afterDiffChar
      );
      return beforeIndex < afterIndex
        ? `${beforeDiffChar}${afterDiffChar}`
        : `${afterDiffChar}${beforeDiffChar}`;
    } else if (this.before) {
      const beforeDiffChar = this._diffChar(this.before);
      return `end-${beforeDiffChar}`;
    } else if (this.after) {
      const afterDiffChar = this._diffChar(this.after);
      return `start-${afterDiffChar}`;
    } else {
      return "point";
    }
  }

  imageSrc() {
    return `/tilesets/default/${this._imageName()}.svg`;
  }
}

export default Point;
