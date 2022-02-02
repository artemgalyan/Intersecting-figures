var Shape = /** @class */ (function () {
    function Shape(shapeId, points) {
        this.shapeId = shapeId;
        this.points = points;
        this.isFill = false;
    }
    Shape.prototype.fill = function (context) {
        context.fillStyle = Shape.FILL_COLOR;
        context.fill();
    };
    Shape.prototype.updateStatusShape = function (shapes) {
        var firstFlag = false;
        var secondFlag = false;
        var self = this;
        var selfPoints = this.getPointsForUpdateStatus();
        shapes.forEach(function (value) {
            var points = value.getPointsForUpdateStatus();
            if (self.shapeId != value.shapeId) {
                for (var i = 0; i < points.length; i++) {
                    if (self.contains(points[i].x, points[i].y)) {
                        firstFlag = true;
                        return;
                    }
                }
                for (var i = 0; i < selfPoints.length; i++) {
                    if (value.contains(selfPoints[i].x, selfPoints[i].y)) {
                        secondFlag = true;
                        return;
                    }
                }
            }
        });
        self.isFill = firstFlag || secondFlag;
    };
    Shape.SPLIT_ACCURACY = 32;
    Shape.FILL_COLOR = "#00FF00";
    return Shape;
}());
export { Shape };
