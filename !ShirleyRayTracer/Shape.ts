//import * as ref from  "./references"

class HitRecord
{
    t: number;
    normal: Vector3;
    uv: Vector2;
    hit_p: Vector3;
    hit_tex: any;
    color: RGB;
    uvw: ONB;
    constructor()
    {
        this.t = 0;
        this.normal = new Vector3;
        this.uv;
        this.hit_p = new Vector3();
        this.hit_tex;
        this.color = new RGB();
        this.uvw;
    }
}
class SurfaceHitRecord
{
    t: number;
    p: Vector3;
    texp: Vector3;
    uvw: ONB;
    uv: Vector2;
    mat_ptr: Material;
    constructor()
    {
        this.t;
        this.p;
        this.texp;
        this.uvw;
        this.uv;
        this.mat_ptr;
    }
}

abstract class Shape
{
    abstract hit(r: Ray, tmin: number, tmax: number, time: number, record: HitRecord): boolean

    abstract shadowHit(r: Ray, tmin: number, tmax: number, time: number): boolean
}

//export {Shape, HitRecord}