//import * as ref from  "./references"
//import {HitRecord} from "./Shape";
//import {dot, unitVector} from "./Vector3";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sphere = (function (_super) {
    __extends(Sphere, _super);
    function Sphere(_center, _radius, _color) {
        _super.call(this);
        this.center = _center;
        this.radius = _radius;
        this.color = _color;
    }
    Sphere.prototype.hit = function (r, tmin, tmax, time, record) {
        var temp = r.origin().minus(this.center);
        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - (this.radius * this.radius);
        var discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            discriminant = Math.sqrt(discriminant);
            var t = (-b - discriminant) / (2 * a);
            if (t < tmin) {
                t = (-b + discriminant) / (2 * a);
            }
            if (t < tmin || t > tmax) {
                return (false);
            }
            //hvis fejl nedenfor
            record.t = t; // rec.t = t;
            record.normal = unitVector(r.origin().plus(r.direction().multi(t).minus(this.center)));
            record.color = this.color;
            return (true);
        }
        return (false);
    };
    Sphere.prototype.shadowHit = function (r, tmin, tmax, time) {
        var temp = r.origin().minus(this.center);
        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - (this.radius * this.radius);
        var discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            discriminant = Math.sqrt(discriminant);
            var t = (-b - discriminant) / (2 * a);
            if (t < tmin) {
                t = (-b + discriminant) / (2 * a);
            }
            if (t < tmin || t > tmax) {
                return (false);
            }
            return (true);
        }
        return (false);
    };
    return Sphere;
}(Shape));
//export {Sphere} 
//# sourceMappingURL=Sphere.js.map