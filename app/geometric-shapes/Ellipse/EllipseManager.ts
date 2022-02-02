import {Ellipse} from "./Ellipse.js";
import {Point} from "../Point.js";

class EllipseManager {
    public static SplitEllipse(ellipse: Ellipse, split_accuracy: number): Point[] {
        let points: Point[] = [];
        let e_x = ellipse.points[0].x;
        let e_y = ellipse.points[0].y;
        for (let i = 0; i <= split_accuracy; ++i) {
            let k: number = i / split_accuracy;
            let y: number = ellipse.radiusY * (1 - k);
            let x: number = ellipse.radiusX * Math.sqrt(1 - this.sqr(y / ellipse.radiusY));
            points.push(new Point(e_x + x, e_y + y));
            points.push(new Point(e_x - x, e_y + y));
            points.push(new Point(e_x + x, e_y - y));
            points.push(new Point(e_x - x, e_y - y));
        }
        return points;
    }
    public static sqr(num: number): number {
        return num * num;
    }
}

export {EllipseManager}