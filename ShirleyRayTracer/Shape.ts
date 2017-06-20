import * as ref from  "./references"

class HitRecord
{
    t: number;
    normal: ref.Vector3;
    color: ref.RGB;
    constructor()
    {
        this.t = 0;
        this.normal = new ref.Vector3;
        this.color = new ref.RGB();
    }
}

class Shape
{
    hit(r: ref.Ray, tmin: number, tmax: number, time: number, record: HitRecord)
    {

    }


}
export {Shape, HitRecord}