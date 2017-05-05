var Sphere = (function () {
    function Sphere(radius, color, pos) {
        this.radius = radius;
        this.color = color;
        this.pos = pos;
    }
    Sphere.prototype.intersect = function (camara, ray) {
        var A = camara.direction.x * camara.direction.x + camara.direction.y * camara.direction.y + camara.direction.z * camara.direction.z;
        var B = (camara.direction.x * (camara.pos.x - this.pos.x))
            + (camara.direction.y * (camara.pos.y - this.pos.y))
            + (camara.direction.z * (camara.pos.z - this.pos.z));
        var C = ((camara.pos.x - this.pos.x) * (camara.pos.x - this.pos.x)
            + (camara.pos.y - this.pos.y) * (camara.pos.y - this.pos.y)
            + (camara.pos.z - this.pos.z) * (camara.pos.z - this.pos.z)) - (this.radius * this.radius);
        var D = (B * B) - (A * C);
        if (D > 0) {
            var t;
            var t1 = (-B + Math.sqrt(D)) / A;
            var t2 = (-B - Math.sqrt(D)) / A;
            if (t1 < t2) {
                t = t1;
            }
            else {
                t = t2;
            }
            return (new Vector(camara.pos.x + camara.direction.x * t, camara.pos.y + camara.direction.y * t, camara.pos.z + camara.direction.z * t));
        }
        else {
            return (null);
        }
    };
    Sphere.prototype.colorat = function () {
    };
    return Sphere;
}());
var Vector = (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.prototype.distance = function (Vector) {
        var dX = this.x - Vector.x;
        var dY = this.y - Vector.y;
        var dZ = this.z - Vector.z;
        return (Math.sqrt((dX * dX) + (dY * dY) + (dZ * dZ)));
    };
    Vector.prototype.pount = function (vector) {
        return (new Vector(this.x * vector.x, this.y * vector.y, this.z * vector.z));
    };
    Vector.prototype.plus = function (vektor) {
        var newVector = new Vector(this.x + vektor.x, this.y + vektor.y, this.z + vektor.z);
        return (newVector);
    };
    Vector.prototype.minus = function (vector) {
        var newVector = new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
        return (newVector);
    };
    Vector.prototype.sum = function () {
        return (this.x + this.y + this.z);
    };
    return Vector;
}());
var Color = (function () {
    function Color(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    return Color;
}());
;
var Camara = (function () {
    function Camara(viewPort, pos, voidColor, direction) {
        this.viewPort = viewPort;
        this.pos = pos;
        this.voidColor = voidColor;
        this.direction = direction;
    }
    return Camara;
}());
var Light = (function () {
    function Light(pos, color) {
        this.pos = pos;
        this.color = color;
    }
    return Light;
}());
var Scene = (function () {
    function Scene() {
    }
    return Scene;
}());
//var kugle = new Sphere(14, {255,255,255}, {x: 30, y: 77}); 
//# sourceMappingURL=app.js.map
