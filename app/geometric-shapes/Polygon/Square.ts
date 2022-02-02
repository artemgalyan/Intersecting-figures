import {Rectangle} from "./Rectangle";

class Square extends Rectangle {
    constructor(squareId: number, side: number) {
        super(squareId, side, side);
    }
}

export {Square}