class BBox
{
    pp:Array<Vector3>;

    constructor()
    constructor(a: Vector3, b: Vector3)
    constructor(a?: Vector3, b?: Vector3)
    {
        this.pp = [];
        if(a != null)
        {
            if(b != null)
            {
                this.pp[0] = a;
                this.pp[1] = b;
            }
        }
    }
    min(): Vector3
    {
        return(this.pp[0])
    }
    max(): Vector3
    {
        return(this.pp[1])
    }
    rayIntersect(r: Ray, tmin: number, tmax: number)
    {
        var interval_min = tmin;
        var interval_max = tmax;

        var posneg = r.posneg[0];
        var t0 = (this.pp[posneg].e[0] - r.data[0].e[0]) * r.data[2].e[0];
        var t1 = (this.pp[1 - posneg].e[0] - r.data[0].e[0]) * r.data[2].e[0];

        if(t0 > interval_min)
        {
            interval_min = t0;
        }
        if(t1 < interval_max)
        {
            interval_max = t1;
        }
        if(interval_min > interval_max)
        {
            return(false)
        }

        posneg = r.posneg[1];
        t0 = (this.pp[posneg].e[1] - r.data[0].e[1]) * r.data[2].e[1];
        t1 = (this.pp[1 - posneg].e[1] - r.data[0].e[1]) * r.data[2].e[1];
        if(t0 > interval_min)
        {
            interval_min = t0;
        }
        if(t1 < interval_max)
        {
            interval_max = t1;
        }
        if(interval_min > interval_max)
        {
            return(false)
        }

        posneg = r.posneg[2];
        t0 = (this.pp[posneg].e[2] - r.data[0].e[2]) * r.data[2].e[2];
        t1 = (this.pp[1 - posneg].e[2] - r.data[0].e[2]) * r.data[2].e[2];
        if(t0 > interval_min)
        {
            interval_min = t0;
        }
        if(t1 < interval_max)
        {
            interval_max = t1;
        }
        return(interval_min <= interval_max)
    }
}

var surround = function (b1: BBox, b2: BBox)
{
    return(new BBox(new Vector3(b1.min().x() < b2.min().x() ? b1.min().x() : b2.min().x(), b1.min().y() < b2.min().y() ? b1.min().y() : b2.min().y(), b1.min().z() < b2.min().z() ? b1.min().z() : b2.min().z()), new Vector3(b1.max().x() > b2.max().x() ? b1.max().x() : b2.max().x(), b1.max().y() > b2.max().y() ? b1.max().y() : b2.max().y(), b1.max().z() > b2.max().z() ? b1.max().z() : b2.max().z())))
};