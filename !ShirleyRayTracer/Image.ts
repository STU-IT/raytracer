//import * as RGB from "./RGB";

//import { RGB } from "./RGB"

//import * as ref from "./references"

class image
{
    canv: any;
    temp: RGB;
    nx: number;
    ny: number;
    gamma: number;
    raster: Array<Array<RGB>>;

    constructor()
    constructor( height : number, width : number)
    constructor( height : number, width : number, background : RGB)
    constructor(height? : number, width? : number, background? : RGB)
    {
        var background = background;
        this.nx = width;
        this.ny = height;
        this.raster = [];

        //HTML canvas
        this.canv = document.createElement("canvas");
        this.canv.height = height;
        this.canv.width = width;
        document.body.appendChild(this.canv);

        if (background != null)
        {
            for (var i = 0; i < this.nx; i++)
            {
                for (var j = 0; j < this.ny; i++)
                {
                    this.raster[i][j] = background;
                }
            }
        }


    }

    set(x: number, y: number, color: RGB)
    {
        if (0 > x || x > this.nx)
        {
            alert("out of bounds")
        }

        if(0 > y || y > this.ny)
        {
            alert("out of bounds")
        }
        this.raster[x][y] = color;

        var ctx = this.canv.getContext("2d");
        ctx.fillStyle = "rgb(" + String(color._r) + ", " + String(color._g) + ", " + String(color._b) + ")";
        ctx.fillRect(x, y, x + 1, y + 1);
    }

    gammaCorrect(gamma: number)
    {
        if (gamma >= 0)
        {
            var temp = new RGB();
            this.gamma = gamma;
            var power = 1 / gamma;
            for (var i = 0; i < this.nx; i++)
            {
                for (var j = 0; j < this.ny; j++)
                {
                    temp = this.raster[i][j];
                    this.raster[i][j] = new RGB
                    (
                        Math.pow(temp._r, power),
                        Math.pow(temp._g, power),
                        Math.pow(temp._b, power)
                    )
                }
            }
        }
        else
        {
            throw ("ERROR gamma need from 0 to 1")
        }
    }
}

//export {image};




