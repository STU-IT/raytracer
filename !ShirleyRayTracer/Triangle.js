var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//import * as ref from  "./references"
//import {unitVector, cross} from "./Vector3";
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle(_p0, _p1, _p2, _color) {
        _super.call(this);
        this.p0 = _p0;
        this.p1 = _p1;
        this.p2 = _p2;
        this.color = _color;
    }
    Triangle.prototype.hit = function (r, tmin, tmax, time, record) {
        var tval = 0;
        var A = this.p0.x() - this.p1.x();
        var B = this.p0.y() - this.p1.y();
        var C = this.p0.z() - this.p1.z();
        var D = this.p0.x() - this.p2.x();
        var E = this.p0.y() - this.p2.y();
        var F = this.p0.z() - this.p2.z();
        var G = r.direction().x();
        var H = r.direction().y();
        var I = r.direction().z();
        var J = this.p0.x() - r.origin().x();
        var K = this.p0.y() - r.origin().y();
        var L = this.p0.z() - r.origin().z();
        var EIHF = (E * I) - (H * F);
        var GFDI = (G * F) - (D * I);
        var DHEG = (D * H) - (E * G);
        var denom = ((A * EIHF) + (B * GFDI) + (C * DHEG));
        var beta = ((J * EIHF) + (K * GFDI) + (L * DHEG)) / denom;
        if (beta <= 0 || beta >= 1) {
            return (false);
        }
        var AKJB = (A * K) - (J * B);
        var JCAL = (J * C) - (A * L);
        var BLKC = (B * L) - (K * C);
        var gamma = ((I * AKJB) + (H * JCAL) + (G * BLKC)) / denom;
        if (gamma <= 0 || beta + gamma >= 1) {
            return (false);
        }
        tval = -((F * AKJB) + (E * JCAL) + (D * BLKC)) / denom;
        //false && false == true
        //true && true == true
        if (tval >= tmin && tval <= tmax) {
            record.t = tval;
            record.normal = unitVector(cross(this.p1.minus(this.p0), this.p2.minus(this.p0)));
            record.color = this.color;
            return (true);
        }
        return (false);
    };
    Triangle.prototype.shadowHit = function (r, tmin, tmax, time) {
        var tval = 0;
        var A = this.p0.x() - this.p1.x();
        var B = this.p0.y() - this.p1.y();
        var C = this.p0.z() - this.p1.z();
        var D = this.p0.x() - this.p2.x();
        var E = this.p0.y() - this.p2.y();
        var F = this.p0.z() - this.p2.z();
        var G = r.direction().x();
        var H = r.direction().y();
        var I = r.direction().z();
        var J = this.p0.x() - r.origin().x();
        var K = this.p0.y() - r.origin().y();
        var L = this.p0.z() - r.origin().z();
        var EIHF = (E * I) - (H * F);
        var GFDI = (G * F) - (D * I);
        var DHEG = (D * H) - (E * G);
        var denom = ((A * EIHF) + (B * GFDI) + (C * DHEG));
        var beta = ((J * EIHF) + (K * GFDI) + (L * DHEG)) / denom;
        if (beta <= 0 || beta >= 1) {
            return (false);
        }
        var AKJB = (A * K) - (J * B);
        var JCAL = (J * C) - (A * L);
        var BLKC = (B * L) - (K * C);
        var gamma = ((I * AKJB) + (H * JCAL) + (G * BLKC)) / denom;
        if (gamma <= 0 || beta + gamma >= 1) {
            return (false);
        }
        tval = -((F * AKJB) + (E * JCAL) + (D * BLKC)) / denom;
        //false && false == true
        //true && true == true
        return (tval >= tmin && tval <= tmax);
    };
    return Triangle;
}(Shape));
//export {Triangle}
//RAM Problem 
//# sourceMappingURL=Triangle.js.map