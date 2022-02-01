import { Point } from "./Point.js"

abstract class Shape {
  private static readonly SPLIT_ACCURACY: number = 32;
  private static readonly FILL_COLOR: string = "#00FF00";
  public isFill: boolean;
  public points: Point[];
  public shapeId: number;
  protected constructor(shapeId: number, points: Point[]) {
    this.shapeId = shapeId;
    this.points = points;
    this.isFill = false;
  }
  public abstract upperPointY(): number;
  public abstract leftPointX(): number;
  public abstract lowerPointY(): number;
  public abstract rightPointX(): number;
  public abstract contains(x: number, y: number): boolean;
  public abstract draw(context: CanvasRenderingContext2D);
  public abstract getPointsForUpdateStatus(): Point[];
  public fill(context: CanvasRenderingContext2D) {
    context.fillStyle = Shape.FILL_COLOR;
    context.fill();
  }
  public updateStatusShape(shapes: Shape[]) {
    let firstFlag: boolean = false;
    let secondFlag: boolean = false;
    let self = this;
    let selfPoints = this.getPointsForUpdateStatus();

    shapes.forEach(function (value) {
      let points = value.getPointsForUpdateStatus();
      if (self.shapeId != value.shapeId) {
        for (let i = 0; i < points.length; i++) {
          if (self.contains(points[i].x, points[i].y)) {
            firstFlag = true;
            return;
          }
        }
        for (let i = 0; i < selfPoints.length; i++) {
          if (value.contains(selfPoints[i].x, selfPoints[i].y)) {
            secondFlag = true;
            return;
          }
        }
      }
    });
    self.isFill = firstFlag || secondFlag
  }
}

export { Shape };
