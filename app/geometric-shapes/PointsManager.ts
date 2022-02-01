import {Point} from "./Point.js";

class PointsManager {
    public static GetTheHighestPoint(points: Point[]): Point {
        let highestPoint: Point = points[0];
        for (let i = 0; i < points.length; i++) {
            if (highestPoint.y > points[i].y) {
                highestPoint = points[i];
            }
        }
        return highestPoint;
    }
    public static GetTheLowestPoint(points: Point[]): Point {
        let lowestPoint: Point = points[0];
        for (let i = 0; i < points.length; i++) {
            if (lowestPoint.y < points[i].y) {
                lowestPoint = points[i];
            }
        }
        return lowestPoint;
    }
    public static GetLeftmostPoint(points: Point[]): Point {
        let leftmostPoint: Point = points[0];
        for (let i = 0; i < points.length; i++) {
            if (leftmostPoint.x > points[i].x) {
                leftmostPoint = points[i];
            }
        }
        return leftmostPoint;
    }
    public static GetRightmostPoint(points: Point[]): Point {
        let rightmostPoint: Point = points[0];
        for (let i = 0; i < points.length; i++) {
            if (rightmostPoint.x < points[i].x) {
                rightmostPoint = points[i];
            }
        }
        return rightmostPoint;
    }
}

export {PointsManager}