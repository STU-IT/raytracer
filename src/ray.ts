class Thing
{
    colorAt(camera: Camera, light: Light, p: Vector)
    {}
    intersect(camera: Camera, ray: Vector)
    {}
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
    intersect(camera: Camera, ray: Vector): Vector
    {
        /*
        var A = camera.direction.dot(camera.direction);
        var B = camera.direction.dot(camera.pos.minus(this.pos));
        var C = camera.pos.minus(this.pos).dot(camera.pos.minus(this.pos)) - (this.radius * this.radius);
        **/
        var A = ray.dot(ray);
        var B = ray.dot(camera.pos.minus(this.pos));
        var C = camera.pos.minus(this.pos).dot(camera.pos.minus(this.pos)) - (this.radius * this.radius);

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
            return (new Vector(camera.pos.x + ray.x * t, camera.pos.y + ray.y * t, camera.pos.z + ray.z * t));
        }
        else { return (null) }
    }
    colorAt(camera: Camera, light: Light, p: Vector)
    {
        //var p : Vector = this.intersect(camera);
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
        var lightDir : Vector = p.minus(light.pos);
        var colorStrength = p.normal().dot(lightDir.normal());
        colorStrength = Math.abs(colorStrength);
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
    length()
    {
        var zero = new Vector(0, 0, 0);
        return(zero.distance(this))
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
    normal()
    {
        var normalLength = this.length();
        return(new Vector(this.x / normalLength, this.y / normalLength, this.z / normalLength))
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

class Camera
{
    pos: Vector;
    voidColor: Color;
    direction: Vector;
    viewport : Viewport;

    constructor(viewport: Viewport, pos: Vector, voidColor: Color, direction: Vector)
    {
        this.viewport = viewport;
        this.pos = pos;
        this.voidColor = voidColor;
        this.direction = direction.normal();
    }
    Render(): Array<Array<Color>>
    {
        var image = [];
        for(var i = 0; i < this.viewport.horizRes; i++)
        {
            image.push([]);
            for(var j = 0; j < this.viewport.vertRes; j++)
            {
                var minP;
                var minPDis = Infinity;
                var thingName;

                var x = this.viewport.xOf(i);
                var y = this.viewport.yOf(j);

                var raySpear = new Vector(this.viewport.upperLeftCorner.x + x, this.viewport.upperLeftCorner.y - y, this.viewport.upperLeftCorner.z);

                for(var t in scene.things)
                {
                    var temP;
                    temP = scene.things[t].intersect(scene.camera, raySpear);

                    if(temP != null)
                    {
                        if (temP.distance(scene.camera.pos) < minPDis)
                        {
                            minP = temP;
                            minPDis = minP.distance(scene.camera.pos);
                            thingName = t;
                        }
                    }
                }
                if(minPDis != Infinity)
                {
                    image[i][j] = scene.things[thingName].colorAt(scene.camera, scene.lights["mainLight"], minP);
                }
                else
                {
                    image[i][j] = scene.camera.voidColor;
                }
            }
        }
        return(image)
    }
}

class Viewport
{
    horizAngl: number;
    horizRes: number;
    vertRes: number;
    upperLeftCorner: Vector;
    lowerRightCorner: Vector;
    dX: number;

    constructor(horizRes: number, vertRes: number, center: Vector, horizAngl: number)
    {
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
    xOf(i)
    {
        return(this.dX / 2 + this.dX * i)
    }
    yOf(j)
    {
        return(this.dX / 2 + this.dX * j)
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
    camera: Camera;
    things: Array<Thing>;
    lights: Array<Light>;

    constructor()
    {
        //{}
        this.things = [];
        this.lights = [];
    }
    create_sphere(name: string, radius: number, color: Color, pos: Vector)
    {
        this.things[name] = new Sphere(radius, color, pos)
    }
    create_light(name: string, pos: Vector, color: Color)
    {
        this.lights[name] = new Light(pos, color)
    }
    create_camera(viewPort, pos: Vector, voidColor: Color, direction: Vector)
    {
        this.camera = new Camera(viewPort, pos, voidColor, direction)
    }
    save()
    {
        var data = scene.toString();
        var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
        window.open(url, '_blank');
        window.focus();
    }
    load()
    {

    }
}

function showImageInCanvas(image: Array<Array<Color>>, ctx, width: number, height: number)
{
    for (var x in image)
    {
        for (var y in image[x])
        {
            var color: Color = image[x][y];
            var cText = "rgb("
                + String(Math.floor(color.red)) + ", "
                + String(Math.floor(color.green)) + ", "
                + String(Math.floor(color.blue))
                + ")";
            ctx.fillStyle = cText;
            ctx.fillRect(x,y, x+1, y+1)
        }
    }
}

var scene = new Scene();

var camaraDir = new Vector(0,0,1);
var camaraPos = new Vector(0,0,0);
var lightPos = new Vector(-1,0,3);
var spherePos = new Vector(0, 0, 2);

var sphereColor = new Color(255, 0, 100);
var lightColor = new Color(255, 255, 255);

var v = new Viewport(300, 600, camaraDir, 40);
scene.create_camera(v, camaraPos, new Color(0, 100, 0), camaraDir);
scene.create_light("mainLight", lightPos, lightColor);
scene.create_sphere("testSphere", 0.1, sphereColor, spherePos);


scene.camera.Render();

//console.log(scene.things['testSphere'].colorAt(scene.camera, scene.lights['mainLight']));

/*
 var cam = new Camera(0, camPos, new Color(0, 0, 0), camDir);
 var light = new Light(lightPos,lightColor);
 var sp = new Sphere(1,sphereColor,spherePos);
 */

var billede: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('billede');
var ctx = billede.getContext("2d");

var img = scene.camera.Render();

showImageInCanvas(img, ctx, billede.width, billede.height);