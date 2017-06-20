class Parallelogram extends Shape
{
    base: Vector3;
    u: Vector3;
    v: Vector3;
    mptr: Material;
    norm: Vector3;
    unorm: Vector3;
    vnorm: Vector3;
    uv0: Vector2;
    uv1: Vector2;
    uv2: Vector2;
    width: number;
    proj: Vector3;
    height: number;
    area: number;
    pdf: number;

    constructor(_base: Vector3, _u: Vector3, _v: Vector3, _mptr: Material)
    constructor(_base: Vector3, _u: Vector3, _v: Vector3, _mptr: Material, _uv0?: Vector2, _uv1?: Vector2, _uv2?: Vector2)
    {
        super();
        this.base = _base;
        this.u = _u;
        this.v = _v;
        this.mptr = _mptr;

        this.norm = unitVector(cross(this.u, this.v));
        this.unorm = unitVector(this.u);
        this.vnorm = unitVector(this.v);

        this.uv0 = new Vector2(0, 0);
        this.uv1 = new Vector2(1, 0);
        this.uv2 = new Vector2(0, 1);

        if(typeof(_uv0) == "Object")
        {
            this.uv0 = _uv0;
            this.uv1 = _uv1;
            this.uv2 = _uv2;
        }

        this.width = this.u.length();
        //hved ikke om den er forkert V
        this.proj = this.v.minus(this.u.multi(dot(this.v, this.u) / (this.width * this.width)));
        this.height = this.proj.length();
        this.area = this.width * this.height;

        this.pdf = 1 / this.area;
    }
    hit(r: Ray, tmin: number, tmax: number, time: number, rec: SurfaceHitRecord)
    {
        var PARALLEL_EPSILDN = 0.00000001;

        var dot1 = dot(r.direction(), this.norm);

        if(dot1 < PARALLEL_EPSILDN && dot1 > -PARALLEL_EPSILDN)
        {
            return(false)
        }

        var dot2 = dot(this.norm, this.base);
        var t = (dot2 - dot(this.norm, r.origin())) / dot1;
        if(t > tmax || t < tmin)
        {
            return(false)
        }

        //hved ikke hvorfor Vector3 skal kun tage kun 1 paremeter
        var hit_plane = new Vector3(r.origin().plus(r.direction()).multi(t));
        var offset = new Vector3(this.base.minus(hit_plane));

        var u1 = dot(this.unorm, offset) / this.u.length();
        if(u1 < 0 || u1 > 1)
        {
            return(false)
        }

        var v1 = dot(this.vnorm, offset) / this.v.length();
        if(v1 < 0 || v1 > 1)
        {
            return(false)
        }

        rec.mat_ptr = this.mptr;
        rec.p = rec.texp = hit_plane;
        rec.t = t;

        rec.uvw.initFromW(this.norm);

        //this.uv er en Vector2 og Vector2 har ikke en plus function
        rec.uv = v1 * this.uv2 + (1 - v1) * this.uv0 + u1 * this.uv1;
        return(true)
    }
    shadowHit(r: Ray, tmin: number, tmax: number, time: number)
    {
        var PARALLEL_EPSILDN = 0.00000001;

        var dot1 = dot(r.direction(), this.norm);
        if(dot1 < PARALLEL_EPSILDN && -PARALLEL_EPSILDN)
        {
            return(false)
        }

        var dot2 = dot(this.norm, this.base);
        var t = (dot2 - dot(this.norm, r.origin())) / dot1;
        if(t > tmax || t < tmin)
        {
            return(false)
        }
        var hit_plane = new Vector3(r.origin(), + r.direction()* t);
        var offset = new Vector3(hit_plane - this.base);

        var u1 = dot(this.unorm, offset) / this.u.length();
        if(u1 < 0 || u1 > 1)
        {
            return(false)
        }
        var v1 = dot(this.vnorm, offset) / this.v.length();
        return(v1 >= 0 || v1 <= 1)
    }
}
//side 211