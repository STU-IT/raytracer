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
        //p^2 = radius (x^2 + y^2 + z^2 = radius)
        //hvis kamara er pos 0, 0, 0 så skal man pluse kuglen pos med kamara pos
        var A = dir.x * dir.x + dir.y * dir.y + dir.z * dir.z;
        var B = 2 * (camara.pos.x * dir.x + camara.pos.y * dir.y + camara.pos.z * dir.z);
        //var B = 2 *(camara.pos.x * dir.x * this.pos.x)
        var C = (camara.pos.x * camara.pos.x + camara.pos.y * camara.pos.y + camara.pos.z * camara.pos.z) - 1;

        var D = (B * B) - 4 * A * C;

        if(D > 0)
        {
            var t;
            var t1 = (-B + Math.sqrt(D)) / (2 * A);
            var t2 = (-B - Math.sqrt(D)) / (2 * A);
            if (t1 < t2)
            {
                t = t1;
            }
            else
            {
                t = t2;
            }
            return(new Vector(camara.pos.x + dir.x * t ,camara.pos.y + dir.y * t , camara.pos.z + dir.z *t));
        }
        else{return(null)}
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