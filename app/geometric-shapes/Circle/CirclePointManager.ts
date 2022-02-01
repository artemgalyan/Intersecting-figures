import {Point} from "../Point.js";
import {Circle} from "./Circle.js";

class CirclePointManager {
    public static IsInCircle(circle: Circle,
                             x: number, y: number): boolean {
        let deltaX: number = x - circle.points[0].x;
        let deltaY: number = y - circle.points[0].y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY) < circle.radius;
    }
    public static GetTheHighestPoint(circle: Circle): Point {
        return new Point(circle.points[0].x, circle.points[0].y - circle.radius);
    }
    public static GetTheLowestPoint(circle: Circle): Point {
        return new Point(circle.points[0].x, circle.points[0].y + circle.radius);
    }
    public static GetTheLeftmostPoint(circle: Circle): Point {
        return new Point(circle.points[0].x - circle.radius, circle.points[0].y);
    }
    public static GetTheRightmostPoint(circle: Circle): Point {
        return new Point(circle.points[0].x + circle.radius, circle.points[0].y);
    }
}

export {CirclePointManager}