var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Thing = (function () {
    function Thing() {
    }
    return Thing;
}());
var Sphere = (function (_super) {
    __extends(Sphere, _super);
    function Sphere(radius, color, pos) {
        _super.call(this);
        this.radius = radius;
        this.color = color;
        this.pos = pos;
    }
    Sphere.prototype.intersect = function (camara, ray) {
        //var A = camera.direction.x * camera.direction.x + camera.direction.y * camera.direction.y + camera.direction.z * camera.direction.z;
        /*var B = (camera.direction.x * (camera.pos.x - this.pos.x))
         + (camera.direction.y * (camera.pos.y - this.pos.y))
         + (camera.direction.z * (camera.pos.z - this.pos.z));**/
        /*var C = ((camera.pos.x - this.pos.x) * (camera.pos.x - this.pos.x)
         + (camera.pos.y - this.pos.y) * (camera.pos.y - this.pos.y)
         + (camera.pos.z - this.pos.z) * (camera.pos.z - this.pos.z)) - (this.radius * this.radius);**/
        var A = camara.direction.dot(camara.direction);
        var B = camara.direction.dot(camara.pos.minus(this.pos));
        var C = camara.pos.minus(this.pos).dot(camara.pos.minus(this.pos)) - (this.radius * this.radius);
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
    Sphere.prototype.colorAt = function (camara, light) {
        var p = this.intersect(camara, new Vector(0, 0, 0));
        /*
        var pDir : Vector = p.minus(this.pos);
        var pSkalar : number = this.pos.distance(p);
        //var pNormal : Vector = new Vector(pDir.x / pSkalar, pDir.y / pSkalar, pDir.z / pSkalar);
        var pNormal = p.normal();


        var lightSkalar : number = light.pos.distance(p);
        var lightNormal : Vector = new Vector(lightDir.x / lightSkalar, lightDir.y / lightSkalar, lightDir.z / lightSkalar);
        var lightNormal = lightDir.normal();
        var colorStrength : number = pNormal.dot(lightNormal);
        **/
        var lightDir = p.minus(light.pos);
        var colorStrength = p.normal().dot(lightDir.normal());
        colorStrength = Math.abs(colorStrength);
        return (new Color((this.color.red * (light.color.red * colorStrength)) / 255, (this.color.green * (light.color.green * colorStrength)) / 255, (this.color.blue * (light.color.blue * colorStrength)) / 255));
    };
    return Sphere;
}(Thing));
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
    Vector.prototype.length = function () {
        var zero = new Vector(0, 0, 0);
        return (zero.distance(this));
    };
    Vector.prototype.dot = function (vector) {
        var newVector = new Vector(this.x * vector.x, this.y * vector.y, this.z * vector.z).sum();
        return (newVector);
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
    Vector.prototype.normal = function () {
        var normalLength = this.length();
        return (new Vector(this.x / normalLength, this.y / normalLength, this.z / normalLength));
    };
    return Vector;
}());
var Color = (function () {
    function Color(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    Color.prototype.multi = function (color) {
        return (new Color(this.red * color.red, this.green * color.green, this.blue * color.blue));
    };
    return Color;
}());
;
var Camera = (function () {
    function Camera(viewport, pos, voidColor, direction) {
        this.viewport = viewport;
        this.pos = pos;
        this.voidColor = voidColor;
        this.direction = direction.normal();
    }
    Camera.prototype.Render = function () {
    };
    return Camera;
}());
var Viewport = (function () {
    function Viewport(horizRes, vertRes, center, horizAngl) {
        //this.horizAngl = 39.6;
        this.horizAngl = horizAngl;
        this.horizRes = horizRes;
        this.vertRes = vertRes;
        /*var leftX = -Math.tan(horizAngl / 2);
        var dX = horizRes / (leftX * 2);
        var leftY = dX * (vertRes / 2);

        var B = 1;**/
        var leftX = Math.tan((horizAngl / 2) * (Math.PI / 180));
        this.dX = 2 * leftX / (horizRes);
        var leftY = this.dX * (vertRes / 2);
        this.upperLeftCorner = new Vector(-leftX, leftY, center.z);
        this.lowerRightCorner = new Vector(leftX, -leftY, center.z);
        console.debug("lextX = " + leftX);
        console.debug("lextY = " + leftY);
        console.debug("dX = " + this.dX);
    }
    Viewport.prototype.xOf = function (i) {
        return (this.dX / 2 + this.dX * i);
    };
    Viewport.prototype.yOf = function (j) {
        return (this.dX / 2 + this.dX * j);
    };
    return Viewport;
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
        //{}
        this.things = [];
        this.lights = [];
    }
    Scene.prototype.create_sphere = function (name, radius, color, pos) {
        this.things[name] = new Sphere(radius, color, pos);
    };
    Scene.prototype.create_light = function (name, pos, color) {
        this.lights[name] = new Light(pos, color);
    };
    Scene.prototype.create_camera = function (viewPort, pos, voidColor, direction) {
        this.camera = new Camera(viewPort, pos, voidColor, direction);
    };
    Scene.prototype.save = function () {
        var data = scene.toString();
        var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
        window.open(url, '_blank');
        window.focus();
    };
    Scene.prototype.load = function () {
    };
    return Scene;
}());
var scene = new Scene();
var camaraDir = new Vector(0, 0, 1);
var camaraPos = new Vector(0, 0, 0);
var lightPos = new Vector(-1, 0, 3);
var spherePos = new Vector(0.5, 0, 4);
var sphereColor = new Color(255, 0, 100);
var lightColor = new Color(255, 255, 255);
scene.create_camera(0, camaraPos, new Color(0, 0, 0), camaraDir);
scene.create_light("mainLight", lightPos, lightColor);
scene.create_sphere("testSphere", 1, sphereColor, spherePos);
var v = new Viewport(100, 100, scene.camera.direction, 40);
scene.camera.Render();
console.log(scene.things['testSphere'].colorAt(scene.camera, scene.lights['mainLight']));
/*
 var cam = new Camera(0, camPos, new Color(0, 0, 0), camDir);
 var light = new Light(lightPos,lightColor);
 var sp = new Sphere(1,sphereColor,spherePos);
 */ 
//# sourceMappingURL=ray.js.map