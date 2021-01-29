var Point1 = /** @class */ (function () {
    function Point1() {
    }
    Point1.prototype.draw = function () {
        console.log('X:' + this.x, ',Y:' + this.y);
    };
    Point1.prototype.getInstance = function (another) {
        //..
    };
    return Point1;
}());
var point = new Point1();
point.x = 1;
point.y = 2;
point.draw();
