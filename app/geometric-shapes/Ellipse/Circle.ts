import {Ellipse} from "./Ellipse.js";

class Circle extends Ellipse{
    constructor(shapeId: number, radius: number) {
        super(shapeId, radius, radius);
    }
}

export {Circle}