import { Utils } from '../../Utils.js';
import {Polygon} from "./Polygon.js";

class Rectangle extends Polygon {
    constructor(shapeId: number, width: number, height: number) {
        super(shapeId, Utils.getPointsForRectangle(width, height));
    }
}

export { Rectangle };