import {Point} from "../Point.js";
import {Polygon} from "./Polygon.js";

class PolygonManager {
    public static IsInPolygon(polygon: Polygon, x: number, y: number): boolean {
        let points: Point[] = polygon.points;
        let result: boolean = false;
        let j: number = points.length - 1;
        for (let i: number = 0; i < points.length; i++) {
            if ((points[i].y < y && points[j].y > y ||
                    points[j].y < y && points[i].y > y) &&
                (points[i].x + (y - points[i].y) /
                    (points[j].y - points[i].y) *
                    (points[j].x - points[i].x) < x)) {
                result = !result;
            }
            j = i;
        }
        return result;
    }
    public static GetPointsForRectangle(weight: number, height: number): Point[] {
        let leftPointX: number = 0;
        let upperPointY: number = 0;
        let rightPointX: number = leftPointX + weight;
        let lowerPointY: number = upperPointY + height;
        return [new Point(leftPointX, upperPointY),
            new Point(rightPointX, upperPointY), new Point(rightPointX, lowerPointY),
            new Point(leftPointX, lowerPointY)];
    }
}

export {PolygonManager}