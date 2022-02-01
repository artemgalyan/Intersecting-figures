import {Point} from '../Point.js';
import {Shape} from '../Shape.js';
import {PolygonManager} from "./PolygonManager.js";
import {PointsManager} from "../PointsManager.js";

class Polygon extends Shape {
    constructor(shapeId: number, points: Point[]) {
        super(shapeId, points);
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach(function (value) {
            let point: Point = value;
            context.lineTo(point.x, point.y);
        });
        context.lineTo(this.points[0].x, this.points[0].y);
        context.stroke();
        if (this.isFill) {
            this.fill(context);
        }
        context.closePath();
    }

    public contains(x: number, y: number): boolean {
        return PolygonManager.IsInPolygon(this, x, y);
    }

    public upperPointY(): number {
        return PointsManager.GetTheHighestPoint(this.points).y;
    }

    public leftPointX(): number {
        return PointsManager.GetLeftmostPoint(this.points).x;
    }

    public lowerPointY(): number {
        return PointsManager.GetTheLowestPoint(this.points).y;
    }

    public rightPointX(): number {
        return PointsManager.GetRightmostPoint(this.points).x;
    }

    public getPointsForUpdateStatus(): Point[] {
        let points: Point[] = [];
        Polygon.PushArrayIntoArray(points, this.points);
        for (let i = 0; i < this.points.length; ++i) {
            let A = this.points[i];
            for (let j = i; j < this.points.length; ++j) {
                let B = this.points[j];
                Polygon.PushArrayIntoArray(points, PointsManager.SplitSection(A, B, Shape.SPLIT_ACCURACY));
            }
        }
        return points;
    }
    private static PushArrayIntoArray<T>(to: T[], from: T[]) {
        from.forEach(element => to.push(element));
    }
}

export {Polygon}