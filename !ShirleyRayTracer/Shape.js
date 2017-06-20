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
var SurfaceHitRecord = (function () {
    function SurfaceHitRecord() {
        this.t;
        this.p;
        this.texp;
        this.uvw;
        this.uv;
        this.mat_ptr;
    }
    return SurfaceHitRecord;
}());
var Shape = (function () {
    function Shape() {
    }
    return Shape;
}());
//export {Shape, HitRecord} 
//# sourceMappingURL=Shape.js.map