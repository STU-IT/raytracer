class NoiseTexture extends Texture
{
    scale: number;
    c0: RGB;
    c1: RGB;
    solid_noise: SolidNoise;
    constructor(_c0: RGB = new RGB(0.8, 0, 0), _c1: RGB = new RGB(0, 0, 0.8), _scale: number = 1)
    {
        super();
        this.scale = _scale;
        this.c0 = _c0;
        this.c1 = _c1;
        this.solid_noise = new SolidNoise()
    }
    value(uv: any/*Vector2*/,p: Vector3)
    {
        var t = (1 + this.solid_noise.noise(p.multi(this.scale)) / 2);
        return(this.c0.multi(t).plus(1 - t).multi(this.c1))
    }
}