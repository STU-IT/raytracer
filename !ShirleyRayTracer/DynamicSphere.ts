class DynSphere extends Shape
{
    ocenter: Vector3;
    mintime: number;
    maxtime: number;
    radius: number;
    color: RGB;

    constructor(_ocenter: Vector3, _radius: number, _color:RGB, mintime: number, maxtime: number)
    {
        super();
        this.ocenter = _ocenter;
        this.mintime = mintime;
        this.maxtime = maxtime;
        this.radius = _radius;
        this.color = _color;
    }
    hit(r: Ray, tmin: number, tmax: number, time: number, record: HitRecord)
    {
        var new_center = this.getCenter(time);
        var temp = r.origin().minus(new_center);

        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - this.radius * this.radius;

        var discriminant = b * b- 4 * a * c;

        if(discriminant > 0)
        {
            discriminant = Math.sqrt(discriminant);
            var t = (-b - discriminant) / (2 * a);

            if(t < tmin)
            {
                t = (-b + discriminant) / (2 * a);
            }
            if(t < tmin || t > tmax)
            {
                return(false)
            }

            record.t = t;
            record.normal = unitVector(r.origin().plus(r.direction().multi(t)).minus(new_center));
            record.color = this.color;
            return(true)
        }
        return(false)
    }
    shadowHit(r: Ray, tmin: number, tmax: number, time: number)
    {
        var new_center = this.getCenter(time);
        var temp = r.origin().minus(new_center);

        var a = dot(r.direction(), r.direction());
        var b = 2 * dot(r.direction(), temp);
        var c = dot(temp, temp) - this.radius * this.radius;

        var discriminant = b * b- 4 * a * c;

        if(discriminant > 0)
        {
            discriminant = Math.sqrt(discriminant);
            var t = (-b - discriminant) / (2 * a);

            if(t < tmin)
            {
                t = (-b + discriminant) / (2 * a);
            }
            if(t < tmin || t > tmax)
            {
                return(false)
            }
            return(true)
        }
        return(false)
    }
    getCenter(time: number)
    {
        var realtime = time * this.maxtime + (1 - time) * this.mintime;
        return(new Vector3(this.ocenter.x() + realtime, this.ocenter.y() + realtime, this.ocenter.z() + realtime))
    }
}