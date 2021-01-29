var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('X:' + this.x, ',Y:' + this.y);
    };
    return Point2;
}());
var point1 = new Point2(1, 2);
point1.draw();
