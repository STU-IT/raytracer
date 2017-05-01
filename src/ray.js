var Sphere = (function () {
    function Sphere(radius, color, pos) {
        this.radius = radius;
        this.color = color;
        this.pos = pos;
    }
    Sphere.prototype.intersect = function (camara, dir) {
    };
    Sphere.prototype.angle = function () {
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