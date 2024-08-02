class Line {
  constructor(points, tileset = "default") {
    this.points = points;
    this.tileset = tileset;
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

  crosses(point) {
    return this.points.some((p) => p.equals(point));
  }
}

export default Line;
