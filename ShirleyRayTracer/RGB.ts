class RGB
{
    _r: number;
    _g: number;
    _b: number;

    constructor()
    constructor( r : number, g : number, b : number)
    constructor(r? : number, g? : number, b? : number)
    {
        this._r = r || 0;
        this._g = g || 0;
        this._b = b || 0;
        //this._r = this._g = this._b = 0;
        if(typeof (this._r) != "number" || typeof (this._g) != "number" || typeof (this._b) != "number")
        {
            this._r = this._g = this._b = 0;
            throw ("ERROR don't input not number's in RGB constructor")
        }
    }
    setR(red: number)
    {
        this._r = red;
    }
    setG(green: number)
    {
        this._g = green;
    }
    setB(blue: number)
    {
        this._b = blue;
    }

    plus(rgb: RGB)
    {
        var that = new RGB(this._r + rgb._r, this._g + rgb._g, this._b + rgb._b)
    }

    multi(rgbOrNumber: number)
    multi(rgbOrNumber: RGB)
    multi(rgbOrNumber)
    {
        if (typeof (rgbOrNumber) == "number")
        {
            var that = new RGB(this._r * rgbOrNumber, this._g * rgbOrNumber, this._b * rgbOrNumber);
            return(that)
        }
        else
        {
            var that = new RGB(this._r * rgbOrNumber._r, this._g * rgbOrNumber._g, this._b * rgbOrNumber._b);
            return(that)
        }
    }
    div(rgbOrNumber: number)
    div(rgbOrNumber: RGB)
    div(rgbOrNumber)
    {
        if (typeof (rgbOrNumber) == "number")
        {
            var that = new RGB(this._r / rgbOrNumber, this._g / rgbOrNumber, this._b / rgbOrNumber);
            return(that)
        }
        else
        {
            var that = new RGB(this._r / rgbOrNumber._r, this._g / rgbOrNumber._g, this._b / rgbOrNumber._b);
            return(that)
        }
    }
    nik()
    {
        return(new RGB(-this._r, -this._g, -this._b))
    }

}
//export * from "./RGB"

export {RGB};

var smuk : RGB = new RGB();

var grim : RGB = new RGB(22, 233, 123);

//var skør : RGB = new RGB(666);

//var fejl : RGB = new RGB('hest');


