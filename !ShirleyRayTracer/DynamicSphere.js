var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynSphere = (function (_super) {
    __extends(DynSphere, _super);
    function DynSphere(_ocenter, _radius, _color, mintime, maxtime) {
        _super.call(this);
        this.ocenter = _ocenter;
        this.mintime = mintime;
        this.maxtime = maxtime;
        this.radius = _radius;
        this.color = _color;
    }
    DynSphere.prototype.hit = function (r, tmin, tmax, time, record) {
        var new_center = this.getCenter(time);
        var temp = r.origin().minus(new_center);
        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - this.radius * this.radius;
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
            record.t = t;
            record.normal = unitVector(r.origin().plus(r.direction().multi(t)).minus(new_center));
            record.color = this.color;
            return (true);
        }
        return (false);
    };
    DynSphere.prototype.shadowHit = function (r, tmin, tmax, time) {
        var new_center = this.getCenter(time);
        var temp = r.origin().minus(new_center);
        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - this.radius * this.radius;
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
    DynSphere.prototype.getCenter = function (time) {
        var realtime = time * this.maxtime + (1 - time) * this.mintime;
        return (new Vector3(this.ocenter.x() + realtime, this.ocenter.y() + realtime, this.ocenter.z() + realtime));
    };
    return DynSphere;
}(Shape));
//# sourceMappingURL=DynamicSphere.js.map