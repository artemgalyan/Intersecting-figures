import { Polygon } from "./Polygon/Polygon.js";
import { Rectangle } from "./Polygon/Rectangle.js";
import { Ellipse } from "./Ellipse/Ellipse.js";
import { Circle } from "./Ellipse/Circle.js";
import { Square } from "./Polygon/Square.js";
import { Semicircle } from "./Semicircle/Semicircle.js";
var ShapesFabric = /** @class */ (function () {
    function ShapesFabric() {
        this.shapesCounter = 0;
    }
    ShapesFabric.prototype.CreateRectangle = function (weight, height) {
        this.shapesCounter++;
        return new Rectangle(this.shapesCounter, weight, height);
    };
    ShapesFabric.prototype.CreatePolygon = function (points) {
        this.shapesCounter++;
        return new Polygon(this.shapesCounter, points);
    };
    ShapesFabric.prototype.CreateCircle = function (radius) {
        this.shapesCounter++;
        return new Circle(this.shapesCounter, radius);
    };
    ShapesFabric.prototype.CreateEllipse = function (radiusX, radiusY) {
        this.shapesCounter++;
        return new Ellipse(this.shapesCounter, radiusX, radiusY);
    };
    ShapesFabric.prototype.CreateSquare = function (side) {
        this.shapesCounter++;
        return new Square(this.shapesCounter, side);
    };
    ShapesFabric.prototype.CreateSemicircle = function (radius) {
        this.shapesCounter++;
        return new Semicircle(this.shapesCounter, radius);
    };
    return ShapesFabric;
}());
export { ShapesFabric };
