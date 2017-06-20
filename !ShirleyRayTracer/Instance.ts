
class Instance extends Shape
{
    M: Matrix;
    N: Matrix;
    prim: Shape;

    constructor(trans: Matrix,_prim: Shape, trans_inverse?: Matrix)
    //constructor(trans?: Matrix, _prim?: Shape, trans_inverse?: Matrix)
    {
        super();
        this.M = trans;
        this.N = trans_inverse || trans.getInvert();
        this.prim = _prim
    }
    hit(r: Ray, tmin: number, tmax: number, time: number, rec: HitRecord)
    {
        var no = transformLoc(this.N, r.origin());
        var nd = transformVec(this.N, r.direction());

        var tray = new Ray(no, nd);

        if(this.prim.hit(tray, tmin, tmax, time, rec))
        {
            rec.hit_p = transformLoc(this.M, rec.hit_p);
            var normal = transformVec(this.N.getTranspose(), rec.uvw.w());
            var uvw = new ONB();
            uvw.initFromW(normal);
            rec.uvw = uvw;
            return(true)
        }
        else
        {
            return(false)
        }
    }
    shadowHit(r: Ray, tmin: number, tmax: number, time: number)
    {
        var no = transformLoc(this.N, r.origin());
        var nd = transformVec(this.N, r.direction());
        var tray = new Ray(no, nd);

        return(this.prim.shadowHit(tray, tmin, tmax, time));
    }
}