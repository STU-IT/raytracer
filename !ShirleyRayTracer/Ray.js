//import * as ref from "./references"
var Ray = (function () {
    function Ray(a, b) {
        if (a != null && b != null) {
            this.data = [];
            this.data[0] = a;
            //this.data[1] = b;
            this.setDirection(b);
            this.posneg = [];
        }
    }
    Ray.prototype.origin = function () {
        return (this.data[0]);
    };
    Ray.prototype.direction = function () {
        return (this.data[1]);
    };
    Ray.prototype.invDirection = function () {
        return (this.data[2]);
    };
    Ray.prototype.setOrigin = function (v) {
        this.data[0] = v;
    };
    Ray.prototype.setDirection = function (v) {
        this.data[1] = v;
        this.data[2] = new Vector3(1 / v.x(), 1 / v.y(), 1 / v.z());
        this.posneg[0] = (this.data[1].x() > 0 ? 0 : 1);
        this.posneg[1] = (this.data[1].y() > 0 ? 0 : 1);
        this.posneg[2] = (this.data[1].z() > 0 ? 0 : 1);
    };
    return Ray;
}());
//export {Ray}; 
//# sourceMappingURL=Ray.js.map