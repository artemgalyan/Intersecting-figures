import {Shape} from "../Shape.js";
import {Point} from "../Point.js";
import {EllipseManager} from "./EllipseManager.js";

class Ellipse extends Shape {
    public readonly radiusX: number;
    public readonly radiusY: number;

    constructor(shapeId: number, radiusX: number, radiusY: number) {
        super(shapeId, [new Point(0, 0)]);
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    contains(x: number, y: number): boolean {
        let ellipse_x = this.points[0].x, ellipse_y = this.points[0].y,
            eq: number = EllipseManager.sqr(ellipse_x - x) / EllipseManager.sqr(this.radiusX)
                + EllipseManager.sqr(ellipse_y - y) / EllipseManager.sqr(this.radiusY);
        return eq <= 1;
    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.ellipse(this.points[0].x, this.points[0].y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
        context.stroke();
        if (this.isFill) {
            this.fill(context);
        }
        context.closePath();
    }

    getPointsForUpdateStatus(): Point[] {
        return EllipseManager.SplitEllipse(this, Shape.SPLIT_ACCURACY);
    }

    leftPointX(): number {
        return this.points[0].x - this.radiusX;
    }

    lowerPointY(): number {
        return this.points[0].y + this.radiusY;
    }

    rightPointX(): number {
        return this.points[0].x + this.radiusX;
    }

    upperPointY(): number {
        return this.points[0].y - this.radiusY;
    }
}

export {Ellipse}
