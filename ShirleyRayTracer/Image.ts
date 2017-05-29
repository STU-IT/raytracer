//import * as RGB from "./RGB";

//import { RGB } from "./RGB"

import * as ref from "./references"

class image
{
    temp: ref.RGB;
    nx: number;
    ny: number;
    gamma: number;
    raster: Array<Array<ref.RGB>>;

    constructor()
    constructor( height : number, width : number)
    constructor( height : number, width : number, background : ref.RGB)
    constructor(h? : number, w? : number, rgb? : ref.RGB)
    {
        var background = background;
        this.nx = w;
        this.ny = h;
        this.raster = [];

        //HTML canvas
        var canv = document.createElement("canvas");
        canv.height = h;
        canv.width = w;
        document.body.appendChild(canv);

        if (rgb != null)
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

    set(x: number, y: number, rgb: ref.RGB)
    {
        if (0 > x || x > this.nx)
        {
            alert("out of bounds")
        }

        if(0 > y || y > this.ny)
        {
            alert("out of bounds")
        }
    }

    gammaCorrect(gamma: number)
    {
        if (gamma >= 0)
        {
            var temp = new ref.RGB();
            this.gamma = gamma;
            var power = 1 / gamma;
            for (var i = 0; i < this.nx; i++)
            {
                for (var j = 0; j < this.ny; j++)
                {
                    temp = this.raster[i][j];
                    this.raster[i][j] = new ref.RGB
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

export {image};

var hej = new ref.RGB();

var hejsa = new image();



