var Sphere = (function () {
    function Sphere(radius, color, pos) {
        this.radius = radius;
        this.color = color;
        this.pos = pos;
    }
    Sphere.prototype.intersect = function (camara, dir) {
        var A = dir.x * dir.x + dir.y * dir.y + dir.z * dir.z;
        var B = 2 * (camara.pos.x * dir.x + camara.pos.y * dir.y + camara.pos.z * dir.z);
        var C = (camara.pos.x * camara.pos.x + camara.pos.y * camara.pos.y + camara.pos.z * camara.pos.z) - 1;
        var D = (B * B) - 4 * A * C;
        if (D > 0) {
            var t;
            var t1 = (-B + Math.sqrt(D)) / (2 * A);
            var t2 = (-B - Math.sqrt(D)) / (2 * A);
            if (t1 < t2) {
                t = t1;
            }
            else {
                t = t2;
            }
            return (new Vector(camara.pos.x + dir.x * t, camara.pos.y + dir.y * t, camara.pos.z + dir.z * t));
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
        dX = this.x - Vector.x;
        dY = this.y - Vector.y;
        dZ = this.z - Vector.z;
        return (Math.sqrt((dX * dX) + (dY * dY) + (dZ * dZ)));
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
//var kugle = new Sphere(14, {255,255,255}, {x: 30, y: 77}); 
//# sourceMappingURL=ray.js.map