import {Point} from './Point.js'
import {Polygon} from "./Polygon/Polygon.js";
import {Rectangle} from "./Polygon/Rectangle.js"
import {Ellipse} from "./Ellipse/Ellipse.js";
import {Circle} from "./Ellipse/Circle.js"
import {Square} from "./Polygon/Square";

class ShapesFabric {

    private shapesCounter: number;

    constructor() {
        this.shapesCounter = 0;
    }

    public CreateRectangle(weight: number, height: number): Rectangle {
        this.shapesCounter++;
        return new Rectangle(this.shapesCounter, weight, height);
    }

    public CreatePolygon(points: Point[]): Polygon {
        this.shapesCounter++;
        return new Polygon(this.shapesCounter, points);
    }

    public CreateCircle(radius: number): Circle {
        this.shapesCounter++;
        return new Circle(this.shapesCounter, radius);
    }

    public CreateEllipse(radiusX: number, radiusY: number) {
        this.shapesCounter++;
        return new Ellipse(this.shapesCounter, radiusX, radiusY);
    }

    public CreateSquare(side: number) {
        this.shapesCounter++;
        return new Square(this.shapesCounter, side);
    }

}

export {ShapesFabric};