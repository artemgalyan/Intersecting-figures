import {Shape} from "../Shape.js"
import {Point} from "../Point.js"
import {PointsManager} from "../PointsManager.js";

class Semicircle extends Shape {

    private readonly radius_;

    constructor(shapeId: number, radius: number) {
        super(shapeId, [new Point(0, 0)]);
        this.radius_ = radius;
    }

    public upperPointY(): number {
        return this.points[0].y - this.radius_;
    }

    public leftPointX(): number {
        return this.points[0].x - this.radius_;
    }

    public lowerPointY(): number {
        return this.points[0].y;
    }

    public rightPointX(): number {
        return this.points[0].x + this.radius_;
    }

    public contains(x: number, y: number): boolean {
        if (y < this.upperPointY() || y > this.lowerPointY() || x < this.leftPointX() || x > this.rightPointX()) {
            return false;
        }
        let deltaX = this.points[0].x - x;
        let deltaY = this.points[0].y - y;
        return deltaX * deltaX + deltaY * deltaY <= this.radius_ * this.radius_;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.points[0].x, this.points[0].y, this.radius_, Math.PI, 2 * Math.PI, false);
        context.moveTo(this.rightPointX(), this.lowerPointY());
        context.lineTo(this.leftPointX(), this.lowerPointY());
        context.stroke();
        if (this.isFill) {
            this.fill(context);
        }
        context.closePath();
    }

    public getPointsForUpdateStatus(): Point[] {
        let points: Point[] = [];
        for (let i: number = this.leftPointX(); i < this.rightPointX(); i += 1 / Shape.SPLIT_ACCURACY) {
            let y: number = Math.sqrt(this.radius_ * this.radius_ - i * i);
            points.push(new Point(i, y))
        }
        let y = this.points[0].y;
        let split = PointsManager.SplitSection(new Point(this.leftPointX(), y), new Point(this.rightPointX(), y), Shape.SPLIT_ACCURACY);
        split.forEach(el => points.push(el));
        return points;
    }
}

export {Semicircle}