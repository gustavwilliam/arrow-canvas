class Line {
  constructor(points, tileset = "default") {
    this.points = points;
    this._tileset = tileset;
    this.setPointRelations();
    this.setPointTilesets();
  }

  setPointRelations() {
    this.points.forEach((point, index) => {
      point.before = this.points[index - 1] || null;
      point.after = this.points[index + 1] || null;
    });
  }

  setPointTilesets() {
    this.points.forEach((point) => {
      point.tileset = this.tileset;
    });
  }

  addPoint(point) {
    this.points.push(point);
    this.setPointRelations();
    this.setPointTilesets();
  }

  get tileset() {
    return this._tileset;
  }

  set tileset(tileset) {
    this._tileset = tileset;
    this.setPointTilesets();
  }

  crosses(point) {
    return this.points.some((p) => p.equals(point));
  }
}

export default Line;
