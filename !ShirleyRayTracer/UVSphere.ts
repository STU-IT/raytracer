class UVSphere extends Shape
{
    center: Vector3;
    radius: number;
    tex: Texture;

    constructor(_center: Vector3, _radius: number, _tex: Texture)
    {
        super();
        this.center = _center;
        this.radius = _radius;
        this.tex = _tex;
    }

    hit(r: Ray, tmin: number, tmax: number, time: number, record: HitRecord): boolean
    {
        var temp = r.origin().minus(this.center);

        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - this.radius * this.radius;

        var discriminant = b * b- 4 * a * c;

        if (discriminant > 0)
        {
            discriminant = Math.sqrt(discriminant);
            //var t = (-b - discriminant) / (2 * a);
            //skulle være det samme som
            var t = (b + discriminant) / (2 * a);

            if (t < tmin)
            {
                //t = (-b + discriminant) / (2 * a)
                t = (b - discriminant) / (2 * a)
            }
            if (t < tmin || t > tmax)
            {
                return(false)
            }

            record.t = t;
            record.hit_p = (r.origin().plus(r.direction().multi(t)));
            var n = record.normal = this.center.minus(record.hit_p).div(this.radius);

            var twopi = 6.28318530718;
            var theta = Math.acos(n.z());
            var phi = Math.atan2(n.y(), n.x());

            if (phi < 0)
            {
                phi += twopi;
            }
            var one_over_2pi = 0.159154943092;
            var one_over_pi = 0.318309886184;

            record.uv = new Vector2(phi * one_over_2pi, (Math.PI - theta) * one_over_pi);

            record.hit_tex = this.tex;
            return(true)
        }
        return(false)
    }

    shadowHit(r: Ray, tmin: number, tmax: number, time: number): boolean
    {
        var temp = r.origin().minus(this.center);

        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - this.radius * this.radius;

        var discriminant = b * b - 4 * a * c;

        if (discriminant > 0)
        {
            discriminant = Math.sqrt(discriminant);
            //var t = (-b - discriminant) / (2 * a);
            //skulle være det samme som
            var t = (b + discriminant) / (2 * a);

            if (t < tmin)
            {
                //t = (-b + discriminant) / (2 * a)
                t = (b - discriminant) / (2 * a)
            }
            if (t < tmin || t > tmax)
            {
                return (false)
            }
            return (true)
        }
        return (false)
    }
}