class Line {
  constructor(points) {
    this.points = points;
    this.setPointRelations();
  }

  setPointRelations() {
    this.points.forEach((point, index) => {
      point.before = this.points[index - 1] || null;
      point.after = this.points[index + 1] || null;
    });
  }

  crosses(point) {
    return this.points.some((p) => p.equals(point));
  }
}

export default Line;
