var Point3 = /** @class */ (function () {
    function Point3(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point3.prototype.draw = function () {
        console.log('X:' + this._x, ',Y:' + this._y);
    };
    Object.defineProperty(Point3.prototype, "x", {
        get: function () {
            return this.x;
        },
        set: function (val) {
            if (val < 0)
                throw new Error('value cannot be less than 0');
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    return Point3;
}());
var point3 = new Point3(1, 2);
var x = point3.x;
point3.x = 10;
point3.draw();
