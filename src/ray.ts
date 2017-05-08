class Thing
{

}

class Sphere extends Thing
{

    radius: number;
    color: Color;
    pos: Vector;

    constructor(radius: number, color: Color, pos: Vector)
    {
        super();
        this.radius = radius;
        this.color = color;
        this.pos = pos;
    }
    intersect(camara: Camara, ray: Vector)
    {
        //var A = camara.direction.x * camara.direction.x + camara.direction.y * camara.direction.y + camara.direction.z * camara.direction.z;

        /*var B = (camara.direction.x * (camara.pos.x - this.pos.x))
            + (camara.direction.y * (camara.pos.y - this.pos.y))
            + (camara.direction.z * (camara.pos.z - this.pos.z));**/

        /*var C = ((camara.pos.x - this.pos.x) * (camara.pos.x - this.pos.x)
            + (camara.pos.y - this.pos.y) * (camara.pos.y - this.pos.y)
            + (camara.pos.z - this.pos.z) * (camara.pos.z - this.pos.z)) - (this.radius * this.radius);**/
        var A = camara.direction.dot(camara.direction);
        var B = camara.direction.dot(camara.pos.minus(this.pos));
        var C = camara.pos.minus(this.pos).dot(camara.pos.minus(this.pos)) - (this.radius * this.radius);

        var D = (B * B) - (A * C);

        if (D > 0)
        {
            var t;
            var t1 = (-B + Math.sqrt(D)) / A;
            var t2 = (-B - Math.sqrt(D)) / A;

            if (t1 < t2)
            {
                t = t1;
            }
            else
            {
                t = t2;
            }
            return (new Vector(camara.pos.x + camara.direction.x * t, camara.pos.y + camara.direction.y * t, camara.pos.z + camara.direction.z * t));
        }
        else { return (null) }
    }
    colorAt(camara: Camara, light: Light)
    {
        var p = this.intersect(camara, new Vector(0, 0, 0));
        var pDir = this.pos.minus(p);
        var pSkalar = this.pos.distance(p);
        var pNormal = new Vector(pDir.x / pSkalar, pDir.y / pSkalar, pDir.z / pSkalar);

        var lightDir = p.minus(light.pos);
        var lightSkalar = lightDir.distance(p);
        var lightNormal = new Vector(lightDir.x / lightSkalar, lightDir.y / lightSkalar, lightDir.z / lightSkalar);
        var colorStrength = pNormal.dot(lightNormal);
        return(new Color(( this.color.red * (light.color.red * colorStrength)) / 255,
              (this.color.green * (light.color.green * colorStrength)) / 255,
              (this.color.blue * (light.color.blue * colorStrength)) / 255))
    }

}

class Vector
{
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    distance(Vector)
    {
        var dX = this.x - Vector.x;
        var dY = this.y - Vector.y;
        var dZ = this.z - Vector.z;

        return (Math.sqrt((dX * dX) + (dY * dY) + (dZ * dZ)))
    }

    dot(vector: Vector)
    {
        var newVector = new Vector(this.x * vector.x, this.y * vector.y, this.z * vector.z).sum();
        return (newVector);
    }
    plus(vektor: Vector)
    {
        var newVector = new Vector(this.x + vektor.x, this.y + vektor.y, this.z + vektor.z);
        return (newVector)
    }
    minus(vector: Vector)
    {
        var newVector = new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
        return (newVector)
    }
    sum()
    {
        return (this.x + this.y + this.z)
    }
}


class Color
{
    red: number;
    green: number;
    blue: number;

    constructor(red: number, green: number, blue: number)
    {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    multi(color: Color)
    {
        return(new Color(this.red * color.red, this.green * color.green, this.blue * color.blue))
    }
};

class Camara
{
    pos: Vector;
    voidColor: Color;
    direction: Vector;
    viewPort;

    constructor(viewPort, pos: Vector, voidColor: Color, direction: Vector)
    {
        this.viewPort = viewPort;
        this.pos = pos;
        this.voidColor = voidColor;
        this.direction = direction;
    }
    Render()
    {

    }
}

class Light
{
    pos: Vector;
    color: Color;

    constructor(pos: Vector, color: Color)
    {
        this.pos = pos;
        this.color = color;
    }
}

class Scene
{
    camara: Camara;
    things: Array<Thing>;
    lights: Array<Light>;

    constructor()
    {
        //{}
    }
    create_sphere(name: string, radius: number, color: Color, pos: Vector)
    {
        this.things[name] = new Sphere(radius, color, pos)
    }
    create_light(name: string, pos: Vector, color: Color)
    {
        this.lights[name] = new Light(pos, color)
    }
    create_camara(viewPort, pos: Vector, voidColor: Color, direction: Vector)
    {
        this.camara = new Camara(viewPort, pos, voidColor, direction)
    }
    save()
    {
        var data = "{name: 'Bob', occupation: 'Plumber'}";
        var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
        window.open(url, '_blank');
        window.focus();
    }
    load()
    {

    }
}

scene = new Scene();

var camDir = new Vector(1,0,0);
var camPos = new Vector(0,0,0);
var lightPos = new Vector(2,3,0);
var spherePos = new Vector(5,0,0);

var sphereColor = new Color(255, 0, 100);
var lightColor = new Color(255, 255, 255);

var cam = new Camara(0, camPos, new Color(0, 0, 0), camDir);
var light = new Light(lightPos,lightColor);
var sp = new Sphere(1,sphereColor,spherePos);
