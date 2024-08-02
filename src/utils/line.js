class Line {
  constructor(points) {
    this.points = points;
  }

  crosses(point) {
    return this.points.some((p) => p.equals(point));
  }
}

export default Line;
