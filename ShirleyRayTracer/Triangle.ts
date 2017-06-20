import * as ref from  "./references"
import {unitVector, cross} from "./Vector3";
class Triangle extends ref.Shape
{
    p0: ref.Vector3;
    p1: ref.Vector3;
    p2: ref.Vector3;
    color: ref.RGB;

    constructor(_p0: ref.Vector3, _p1: ref.Vector3, _p2: ref.Vector3, _color: ref.RGB)
    {
        super();
        this.p0 = _p0;
        this.p1 = _p1;
        this.p2 = _p2;

        this.color = _color
    }
    hit(r: ref.Ray, tmin: number, tmax: number, time: number, record: ref.HitRecord): boolean
    {
        var tval = 0;
        var A = this.p0.x() - this.p1.x();
        var B = this.p0.y() - this.p1.y();
        var C = this.p0.z() - this.p1.z();

        var D = this.p0.x() - this.p2.x();
        var E = this.p0.y() - this.p2.y();
        var F = this.p0.z() - this.p2.z();

        var G = r.direction().x();
        var H = r.direction().y();
        var I = r.direction().z();

        var J = this.p0.x() - r.origin().x();
        var K = this.p0.y() - r.origin().y();
        var L = this.p0.z() - r.origin().z();

        var EIHF = (E * I) - (H * F);
        var GFDI = (G * F) - (D * I);
        var DHEG = (D * H) - (E * G);

        var denom = ((A * EIHF) + (B * GFDI) + (C * DHEG));

        var beta = ((J * EIHF) + (K * GFDI) + (L * DHEG)) / denom;

        if (beta <= 0 || beta >= 1)
        {
            return(false)
        }

        var AKJB = (A * K) - (J * B);
        var JCAL = (J * C) - (A * L);
        var BLKC = (B * L) - (K * C);

        var gamma = ((I * AKJB) + (H * JCAL) + (G * BLKC)) / denom;

        if (gamma <= 0 || beta + gamma >= 1)
        {
            return(false)
        }

        tval = -((F * AKJB) + (E * JCAL) + (D * BLKC)) / denom;

        //false && false == true
        //true && true == true
        if (tval >= tmin && tval <= tmax)
        {
            record.t = tval;
            record.normal = unitVector(cross(this.p1.minus(this.p0), this.p2.minus(this.p0)));
            record.color = this.color;
            return(true)
        }
        return(false)
    }
    shadowHit(r: ref.Ray, tmin: number, tmax: number, time: number): boolean
    {
        var tval = 0;
        var A = this.p0.x() - this.p1.x();
        var B = this.p0.y() - this.p1.y();
        var C = this.p0.z() - this.p1.z();

        var D = this.p0.x() - this.p2.x();
        var E = this.p0.y() - this.p2.y();
        var F = this.p0.z() - this.p2.z();

        var G = r.direction().x();
        var H = r.direction().y();
        var I = r.direction().z();

        var J = this.p0.x() - r.origin().x();
        var K = this.p0.y() - r.origin().y();
        var L = this.p0.z() - r.origin().z();

        var EIHF = (E * I) - (H * F);
        var GFDI = (G * F) - (D * I);
        var DHEG = (D * H) - (E * G);

        var denom = ((A * EIHF) + (B * GFDI) + (C * DHEG));

        var beta = ((J * EIHF) + (K * GFDI) + (L * DHEG)) / denom;

        if (beta <= 0 || beta >= 1)
        {
            return(false)
        }

        var AKJB = (A * K) - (J * B);
        var JCAL = (J * C) - (A * L);
        var BLKC = (B * L) - (K * C);

        var gamma = ((I * AKJB) + (H * JCAL) + (G * BLKC)) / denom;

        if (gamma <= 0 || beta + gamma >= 1)
        {
            return(false)
        }

        tval = -((F * AKJB) + (E * JCAL) + (D * BLKC)) / denom;

        //false && false == true
        //true && true == true
        return(tval >= tmin && tval <= tmax)
    }
}
export {Triangle}

//RAM Problem