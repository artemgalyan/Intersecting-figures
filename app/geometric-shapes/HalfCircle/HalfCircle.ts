import { Circle } from "./Circle.js"
import { Shape } from "../Shape"
import { Point } from "../Point.js"


class Sector extends Shape {

    private radius_;
    private angle_;

    protected constructor(shapeId: number, radius: number, angle: number) {
        super(shapeId, [new Point(0,0)]);
        this.radius_ = radius;
    }

    public upperPointY(): number {
        throw new Error("Method not implemented.")
    }
    public leftPointX(): number {
        throw new Error("Method not implemented.")
    }
    public lowerPointY(): number {
        throw new Error("Method not implemented.")
    }
    public rightPointX(): number {
        throw new Error("Method not implemented.")
    }
    public contains(x: number, y: number): boolean {
        throw new Error("Method not implemented.")
    }
    public draw(context: CanvasRenderingContext2D) {
        throw new Error("Method not implemented.")
    }
    public getPointsForUpdateStatus(): Point[] {
        throw new Error("Method not implemented.")
    }

}

export {Sector}

