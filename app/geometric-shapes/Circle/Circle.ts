import { Point } from '../Point.js';
import { Shape } from '../Shape.js';
import {CirclePointManager} from "./CirclePointManager.js";

class Circle extends Shape {
    public readonly radius: number;
    constructor(shapeId: number, radius: number) {
        super(shapeId, [new Point(0, 0)]);
        this.radius = radius;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.points[0].x, this.points[0].y, this.radius, 0, 2 * Math.PI, false);
        context.stroke()
        if (this.isFill) {
            this.fill(context);
        }
        context.closePath();
    }

    public contains(x: number, y: number): boolean {
        return CirclePointManager.IsInCircle(this, x, y);
    }
    public upperPointY(): number {
        return CirclePointManager.GetTheHighestPoint(this).y;
    }
    public leftPointX(): number { 
        return CirclePointManager.GetTheLeftmostPoint(this).x;
     }
    public lowerPointY(): number { 
        return CirclePointManager.GetTheLowestPoint(this).y;
     }
    public rightPointX(): number { 
        return CirclePointManager.GetTheRightmostPoint(this).x;
     }

    public getPointsForUpdateStatus(): Point[] {
        let points: Point[] = [];
        for (let i = 0; i < 32; i++) {
            let x = this.points[0].x + this.radius * Math.cos(i * 2 / 32 * Math.PI);
            let y = this.points[0].y + this.radius * Math.sin(i * 2 / 32 * Math.PI);
            points.push(new Point(x, y));
        }
        return points;
    }
}

export { Circle };