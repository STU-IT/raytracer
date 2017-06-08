class NoiseTexture
{
    scale: number;
    c0: RGB;
    c1: RGB;
    solid_noise: SolidNoise;
    constructor(_scale: number = 1)
    {
        this.scale = _scale;
        this.c0 = new RGB(0.8, 0, 0);
        this.c1 = new RGB(0, 0, 0.8);
        this.solid_noise = new SolidNoise()
    }
    value(uv: any/*Vector2*/,p: Vector3)
    {
        var t = (1 + this.solid_noise.noise(p.multi(this.scale)) / 2);
        return(this.c0.multi(t).plus(1 - t).multi(this.c1))
    }
}
//c++
/*
 II MarbleTexture.h
 #ifndef MARBLE_TEXTURE_H_
 #define MARBLE_TEXTURE_H_ 1
 #include <math.h>
 #include "Texture.h"
 #include "rgb.h"
 #include "SolidNoise.h"
 class MarbleTexture : public Texture
 {
 public:
 MarbleTexture(float stripes_per_unit, float _scale
 int _octaves 8)
 {
 }
 freq= M_PI * stripes_per_unit;
 scale = _scale;
 octaves = _octaves;
 cO rgb(0.8,0.8,0.8);
 c1 rgb(0.4,0.2,0.1);
 c2 rgb(0.06, 0.04,0.02);
 5.0f,
 MarbleTexture(const rgb & _cO, const rgb & _c1, const rgb & _c2,
 float stripes_per_unit, float _scale = 3.0f,
 int _octaves = 8)
 {
 }
 : cO(_cO), c1(_c1), c2(_c2)
 freq= M_PI * stripes_per_unit;
 scale = _scale;
 octaves = _octaves;
 virtual rgb value(const Vector2& uv, const Vector3& p) const;
 float freq, scale;
 int octaves;
 rgb cO, c1, c2;
 SolidNoise noise;
 #endif II MARBLE_TEXTURE_H_
 II MarbleTexture.cc
 #include "MarbleTexture.h"
 rgb MarbleTexture: :value(const Vector2& uv, const Vector3& p) const
 {
 }
 float temp= scale*noise.turbulence(freq*p, octaves);
 float t = 2.0f*f abs(sin(freq*p.x() + temp));
 if (t < 1.0f)
 return (c1*t + (1.0f - t)*c2);
 else
 {
 t -= 1. Of;
 return (cO*t + (1.0f - t)*c1);
 }
 5.5 NOTES
 93
 Ken
 */