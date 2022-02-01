import {Polygon} from "./Polygon.js";
import {PolygonManager} from "./PolygonManager.js";

class Rectangle extends Polygon {
    constructor(shapeId: number, width: number, height: number) {
        super(shapeId, PolygonManager.GetPointsForRectangle(width, height));
    }
}

export { Rectangle };