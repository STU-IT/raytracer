class Sphere
{
    radius: number;
    color: Color;
    pos: Vector;

    constructor(radius: number, color: Color, pos: Vector)
    {
        this.radius = radius;
        this.color = color;
        this.pos = pos;
    }
    intersect(camara: Camara, ray: Vector)
    {
        var A = camara.direction.x * camara.direction.x + camara.direction.y * camara.direction.y + camara.direction.z * camara.direction.z;
        var B = (camara.direction.x * (camara.pos.x - this.pos.x))
            + (camara.direction.y * (camara.pos.y - this.pos.y))
            + (camara.direction.z * (camara.pos.z - this.pos.z));
        var C = ((camara.pos.x - this.pos.x) * (camara.pos.x - this.pos.x)
            + (camara.pos.y - this.pos.y) * (camara.pos.y - this.pos.y)
            + (camara.pos.z - this.pos.z) * (camara.pos.z - this.pos.z)) - (this.radius * this.radius);

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
    colorat()
    {

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

    pount(vector: Vector)
    {
        return (new Vector(this.x * vector.x, this.y * vector.y, this.z * vector.z))
    }
    plus(vektor: Vector)
    {
        var newVector = new Vector(this.x + vektor.x, this.y + vektor.y, this.z + vektor.z);
        return (newVector)
    }
    minus(vector: Vector)
    {
        var newVector = new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z)
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

}

//var kugle = new Sphere(14, {255,255,255}, {x: 30, y: 77});
