var ONB = (function () {
    function ONB(a, b, c) {
        if (a != null) {
            this.U = a;
            this.V = b;
            this.W = c;
        }
    }
    ONB.prototype.set = function (a, b, c) {
        this.U = a;
        this.V = b;
        this.W = c;
    };
    ONB.prototype.initFromU = function (u) {
        var ONB_EPSILON = 0.01;
        var n = new Vector3(1, 0, 0);
        var m = new Vector3(0, 1, 0);
        this.U = unitVector(u);
        this.V = cross(this.U, n);
        if (this.V.length() < ONB_EPSILON) {
            this.V = cross(this.U, m);
        }
        this.W = cross(this.U, this.V);
    };
    ONB.prototype.initFromV = function (v) {
        var ONB_EPSILON = 0.01;
        var n = new Vector3(1, 0, 0);
        var m = new Vector3(0, 1, 0);
        this.V = unitVector(v);
        this.U = cross(this.V, n);
        if (this.U.squaredLength() < ONB_EPSILON) {
            this.U = cross(this.V, m);
        }
        this.W = cross(this.U, this.V);
    };
    ONB.prototype.initFromW = function (w) {
        var ONB_EPSILON = 0.01;
        var n = new Vector3(1, 0, 0);
        var m = new Vector3(0, 1, 0);
        this.W = unitVector(w);
        this.U = cross(this.W, n);
        if (this.U.length() < ONB_EPSILON) {
            this.U = cross(this.W, m);
        }
        this.V = cross(this.W, this.U);
    };
    ONB.prototype.initFromUV = function (u, v) {
        this.U = unitVector(u);
        this.W = unitVector(cross(u, v));
        this.V = cross(this.W, this.U);
    };
    ONB.prototype.initFromVU = function (v, u) {
        this.V = unitVector(v);
        this.W = unitVector(cross(u, v));
        this.U = cross(this.V, this.W);
    };
    ONB.prototype.initFromUW = function (u, w) {
        this.U = unitVector(u);
        this.V = unitVector(cross(w, u));
        this.W = cross(this.U, this.V);
    };
    ONB.prototype.initFromWU = function (w, u) {
        this.W = unitVector(w);
        this.V = unitVector(cross(w, u));
        this.U = cross(this.V, this.W);
    };
    ONB.prototype.initFromVW = function (v, w) {
        this.V = unitVector(v);
        this.U = unitVector(cross(v, w));
        this.W = cross(this.U, this.V);
    };
    ONB.prototype.initFromWV = function (w, v) {
        this.W = unitVector(w);
        this.U = unitVector(cross(v, w));
        this.V = cross(this.W, this.U);
    };
    ONB.prototype.u = function () {
        return (this.U);
    };
    ONB.prototype.v = function () {
        return (this.V);
    };
    ONB.prototype.w = function () {
        return (this.W);
    };
    return ONB;
}());
//# sourceMappingURL=ONB.js.map