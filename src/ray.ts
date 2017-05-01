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
    intersect(camara: Camara, dir: Vector)
    {

    }
    angle()
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
        dX = this.x - Vector.x;
        dY = this.y - Vector.y;
        dZ = this.z - Vector.z;

        return(Math.sqrt((dX * dX) + (dY * dY) + (dZ * dZ)))
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

//var kugle = new Sphere(14, {255,255,255}, {x: 30, y: 77});