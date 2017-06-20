//måske fejl i construketeren

class MarbleTexture extends Texture
{
    freq: number;
    scale: number;
    octaves: number;
    c0: RGB;
    c1: RGB;
    c2: RGB;
    constructor(_c0orStr, _c1orScle, _c2orOct, stripes_per_unit: number, _scale: number, _octaves: number)
    constructor(_c0orStr, _c1orScle, _c2orOct, stripes_per_unit?: number, _scale?: number, _octaves?: number)
    {
        super();
        if (typeof(_c0orStr) == "number" && typeof(_c1orScle) == "number" && typeof(_c2orOct) == "number")
        {
            this.freq = Math.PI * _c0orStr;
            this.scale = _c1orScle || 5;
            this.octaves = _c2orOct || 8;
            this.c0 = new RGB(0.8, 0.8, 0.8);
            this.c1 = new RGB(0.4, 0.2, 0.1);
            this.c2 = new RGB(0.06, 0.04, 0.02);
        }
        else
        {
            this.c0 = _c0orStr;
            this.c1 = _c1orScle;
            this.c2 = _c2orOct;
            this.freq = Math.PI * stripes_per_unit;
            this.scale = _scale;
            this.octaves = _octaves;
        }
    }
    value(uv: any/*Vector2*/, p: Vector3)
    {
        var noise = new SolidNoise();

        var temp = this.scale * noise.turbulence(p.multi(this.freq), this.octaves);
        var t = 2 * Math.abs(Math.sin(this.freq * p.x() + temp));

        if (t < 1)
        {
            //måske skal alt gangen regnes først
            //c1.multi(t).multi(c2).plus(1 - t)
            return(this.c1.multi(t).plus(1 - t).multi(this.c2))
        }
        else
        {
            t -= 1;
            return(this.c0.multi(t).plus(1 - t).multi(this.c1))
        }
    }
}