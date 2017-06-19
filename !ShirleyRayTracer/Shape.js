//import * as ref from  "./references"
var HitRecord = (function () {
    function HitRecord() {
        this.t = 0;
        this.normal = new Vector3;
        this.uv;
        this.hit_p = new Vector3();
        this.hit_tex;
        this.color = new RGB();
        this.uvw;
    }
    return HitRecord;
}());
var Shape = (function () {
    function Shape() {
    }
    Shape.prototype.hit = function (r, tmin, tmax, time, record) {
    };
    Shape.prototype.shadowHit = function (r, tmin, tmax, time) {
    };
    return Shape;
}());
//export {Shape, HitRecord} 
//# sourceMappingURL=Shape.js.map