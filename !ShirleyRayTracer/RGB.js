var RGB = (function () {
    function RGB(r, g, b) {
        this._r = r || 0;
        this._g = g || 0;
        this._b = b || 0;
        //this._r = this._g = this._b = 0;
        if (typeof (this._r) != "number" || typeof (this._g) != "number" || typeof (this._b) != "number") {
            this._r = this._g = this._b = 0;
            throw ("ERROR don't input not number's in RGB constructor");
        }
    }
    RGB.prototype.setR = function (red) {
        this._r = red;
    };
    RGB.prototype.setG = function (green) {
        this._g = green;
    };
    RGB.prototype.setB = function (blue) {
        this._b = blue;
    };
    RGB.prototype.plus = function (rgb) {
        var that = new RGB(this._r + rgb._r, this._g + rgb._g, this._b + rgb._b);
    };
    RGB.prototype.multi = function (rgbOrNumber) {
        if (typeof (rgbOrNumber) == "number") {
            var that = new RGB(this._r * rgbOrNumber, this._g * rgbOrNumber, this._b * rgbOrNumber);
            return (that);
        }
        else {
            var that = new RGB(this._r * rgbOrNumber._r, this._g * rgbOrNumber._g, this._b * rgbOrNumber._b);
            return (that);
        }
    };
    RGB.prototype.div = function (rgbOrNumber) {
        if (typeof (rgbOrNumber) == "number") {
            var that = new RGB(this._r / rgbOrNumber, this._g / rgbOrNumber, this._b / rgbOrNumber);
            return (that);
        }
        else {
            var that = new RGB(this._r / rgbOrNumber._r, this._g / rgbOrNumber._g, this._b / rgbOrNumber._b);
            return (that);
        }
    };
    RGB.prototype.nik = function () {
        return (new RGB(-this._r, -this._g, -this._b));
    };
    return RGB;
}());
//export * from "./RGB"
//export {RGB};
//var smuk : RGB = new RGB();
//var grim : RGB = new RGB(22, 233, 123);
//var skør : RGB = new RGB(666);
//var fejl : RGB = new RGB('hest');
//# sourceMappingURL=RGB.js.map