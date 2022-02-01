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

    public static SplitSection(from: Point, to: Point, split_accuracy: number): Point[] {
        if (from == to) {
            return [from];
        }
        let partition: Point[] = [];
        for (let i = 0; i < split_accuracy; ++i) {
            let division_ratio = i/split_accuracy;
            let new_point_x = from.x + division_ratio*(to.x - from.x);
            let new_point_y = from.y + division_ratio*(to.y - from.y);
            partition.push(new Point(new_point_x, new_point_y));
        }
        return partition;
    }
}

export {PointsManager}