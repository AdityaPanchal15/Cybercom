"use strict";
//modules
exports.__esModule = true;
exports.Point4 = void 0;
var Point4 = /** @class */ (function () {
    function Point4(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point4.prototype.draw = function () {
        console.log('X:' + this._x, ',Y:' + this._y);
    };
    return Point4;
}());
exports.Point4 = Point4;
