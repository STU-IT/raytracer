var Vector3 = (function () {
    function Vector3(e0, e1, e2) {
        if (e0 === void 0) { e0 = 0; }
        if (e1 === void 0) { e1 = 0; }
        if (e2 === void 0) { e2 = 0; }
        this.e = [];
        this.e[0] = e0;
        this.e[1] = e1;
        this.e[2] = e2;
    }
    Vector3.prototype.x = function () {
        return (this.e[0]);
    };
    Vector3.prototype.y = function () {
        return (this.e[1]);
    };
    Vector3.prototype.z = function () {
        return (this.e[2]);
    };
    Vector3.prototype.setX = function (x) {
        this.e[0] = x;
    };
    Vector3.prototype.setY = function (y) {
        this.e[1] = y;
    };
    Vector3.prototype.setZ = function (z) {
        this.e[2] = z;
    };
    Vector3.prototype.nik = function () {
        return (new Vector3(-this.e[0], -this.e[1], -this.e[2]));
    };
    Vector3.prototype.length = function () {
        return (Math.sqrt((this.e[0] * this.e[0]) + (this.e[1] * this.e[1]) + (this.e[2] * this.e[2])));
    };
    Vector3.prototype.squaredLength = function () {
        return ((this.e[0] * this.e[0]) + (this.e[1] * this.e[1]) + (this.e[2] * this.e[2]));
    };
    Vector3.prototype.makeUnitVector = function () {
        var rVector = this.div(this.length());
        return (rVector);
    };
    Vector3.prototype.minComponent = function () {
        var temp = this.e[0];
        if (this.e[1] < temp) {
            temp = this.e[1];
        }
        if (this.e[2] < temp) {
            temp = this.e[2];
        }
        return (temp);
    };
    Vector3.prototype.maxComponent = function () {
        var temp = this.e[0];
        if (this.e[1] > temp) {
            temp = this.e[1];
        }
        if (this.e[2] > temp) {
            temp = this.e[2];
        }
        return (temp);
    };
    Vector3.prototype.maxAbsComponent = function () {
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) > temp) {
            temp = Math.abs(this.e[1]);
        }
        if (Math.abs(this.e[2]) > temp) {
            temp = Math.abs(this.e[2]);
        }
        return (temp);
    };
    Vector3.prototype.minAbsComponent = function () {
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) < temp) {
            temp = Math.abs(this.e[1]);
        }
        if (Math.abs(this.e[2]) < temp) {
            temp = Math.abs(this.e[2]);
        }
        return (temp);
    };
    Vector3.prototype.indexOfMinComponent = function () {
        var index = 0;
        var temp = this.e[0];
        if (this.e[1] < temp) {
            temp = this.e[1];
            index = 1;
        }
        if (this.e[2] < temp) {
            index = 2;
        }
        return (index);
    };
    Vector3.prototype.indexOfMinAbsComponent = function () {
        var index = 0;
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) < temp) {
            temp = Math.abs(this.e[1]);
            index = 1;
        }
        if (Math.abs(this.e[2]) < temp) {
            index = 2;
        }
        return (index);
    };
    Vector3.prototype.equal = function (vector) {
        if (vector.e[0] != this.e[0]) {
            return (false);
        }
        if (vector.e[1] != this.e[1]) {
            return (false);
        }
        if (vector.e[2] != this.e[2]) {
            return (false);
        }
        return (true);
    };
    Vector3.prototype.notEqual = function (vector) {
        if (this.equal(vector) == false) {
            return (true);
        }
        return (false);
    };
    Vector3.prototype.indexOfMaxComponent = function () {
        var index = 0;
        var temp = this.e[0];
        if (this.e[1] > temp) {
            temp = this.e[1];
            index = 1;
        }
        if (this.e[2] > temp) {
            index = 2;
        }
        return (index);
    };
    Vector3.prototype.indexOfMaxAbsComponent = function () {
        var index = 0;
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) > temp) {
            temp = Math.abs(this.e[1]);
            index = 1;
        }
        if (Math.abs(this.e[2]) > temp) {
            index = 2;
        }
        return (index);
    };
    Vector3.prototype.multi = function (scalar) {
        return (new Vector3(this.e[0] * scalar, this.e[1] * scalar, this.e[2] * scalar));
    };
    Vector3.prototype.div = function (scalar) {
        return (new Vector3(this.e[0] / scalar, this.e[1] / scalar, this.e[2] / scalar));
    };
    Vector3.prototype.plus = function (vector) {
        return (new Vector3(this.e[0] + vector.e[0], this.e[1] + vector.e[1], this.e[2] + vector.e[2]));
    };
    Vector3.prototype.minus = function (vector) {
        return (new Vector3(this.e[0] - vector.e[0], this.e[1] - vector.e[1], this.e[2] - vector.e[2]));
    };
    Vector3.prototype.minVec = function (vector) {
        var vec = new Vector3(this.x(), this.y(), this.z());
        if (vector.x() < this.x()) {
            vec.setX(vector.x());
        }
        if (vector.y() < this.y()) {
            vec.setY(vector.y());
        }
        if (vector.z() < this.z()) {
            vec.setZ(vector.z());
        }
    };
    Vector3.prototype.maxVec = function (vector) {
        var vec = new Vector3(this.x(), this.y(), this.z());
        if (vector.x() > this.x()) {
            vec.setX(vector.x());
        }
        if (vector.y() > this.y()) {
            vec.setY(vector.y());
        }
        if (vector.z() > this.z()) {
            vec.setZ(vector.z());
        }
    };
    return Vector3;
}());
var cross = function (v1, v2) {
    var temp = new Vector3();
    temp.e[0] = v1.y() * v2.z() - v1.z() * v2.y();
    temp.e[1] = v1.z() * v2.x() - v1.x() * v2.z();
    temp.e[2] = v1.x() * v2.y() - v1.y() * v2.x();
    return (temp);
};
var dot = function (v1, v2) {
    return ((v1.x() * v2.x()) + (v1.y() * v2.y()) + (v1.z() * v2.z()));
};
var tripleProduct = function (v1, v2, v3) {
    return (dot((cross(v1, v2)), v3));
};
var unitVector = function (v) {
    var length = v.length();
    return (v.div(length));
};
//kan ikke finde Vector2 andre steder
//test class | |
//           V V
var Vector2 = (function () {
    function Vector2(_u, _v) {
        this._u = _u;
        this._v = _v;
    }
    Vector2.prototype.u = function () {
        return (this._u);
    };
    Vector2.prototype.v = function () {
        return (this._v);
    };
    return Vector2;
}());
//export {Vector3, cross, dot, tripleProduct, unitVector}; 
//# sourceMappingURL=Vector3.js.map