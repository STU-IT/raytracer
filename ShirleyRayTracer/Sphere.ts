import * as ref from  "./references"
import {HitRecord} from "./Shape";
import {dot, unitVector} from "./Vector3";


class Sphere extends ref.Shape
{
    center: ref.Vector3;
    radius: number;
    color: ref.RGB;

    constructor(_center: ref.Vector3, _radius: number, _color: ref.RGB)
    {
        super();
        this.center = _center;
        this.radius = _radius;
        this.color = _color;
    }

    hit(r: ref.Ray, tmin: number, tmax: number, time: number, record: HitRecord)  : boolean
    {
        var temp = r.origin().minus(this.center);

        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - (this.radius * this.radius);

        var discriminant = b * b - 4 * a * c;

        if (discriminant > 0)
        {
            discriminant = Math.sqrt(discriminant);
            var t = (-b - discriminant) / (2 * a);

            if (t < tmin)
            {
                t = (-b + discriminant) / (2 * a);
            }
            if (t < tmin || t > tmax)
            {
                return(false)
            }

            //hvis fejl nedenfor
            record.t = t; // rec.t = t;
            record.normal = unitVector(r.origin().plus(r.direction().multi(t).minus(this.center)));
            record.color = this.color;
            return(true)
        }
        return(false)
    }
    shadowHit(r: ref.Ray, tmin: number, tmax: number, time: number)
    {
        var temp = r.origin().minus(this.center);

        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - (this.radius * this.radius);

        var discriminant = b * b - 4 * a * c;

        if (discriminant > 0)
        {
            discriminant = Math.sqrt(discriminant);
            var t = (-b - discriminant) / (2 * a);

            if (t < tmin)
            {
                t = (-b + discriminant) / (2 * a);
            }
            if (t < tmin || t > tmax)
            {
                return (false)
            }
            return(true)
        }
        return(false)
    }
}
export {Sphere}