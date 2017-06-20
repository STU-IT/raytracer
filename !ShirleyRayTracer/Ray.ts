//import * as ref from "./references"
class Ray
{
    data: Array<Vector3>;
    posneg: Array<number>;

    constructor()
    constructor(a: Vector3, b: Vector3)
    constructor(a? : Vector3, b? : Vector3)
    {
        if (a != null && b != null)
        {
            this.data = [];
            this.data[0] = a;
            //this.data[1] = b;
            this.setDirection(b);


            this.posneg = [];
        }
    }
    origin()
    {
        return(this.data[0])
    }
    direction()
    {
        return(this.data[1])
    }
    invDirection()
    {
        return(this.data[2])
    }

    setOrigin(v: Vector3)
    {
        this.data[0] = v
    }
    setDirection(v: Vector3)
    {
        this.data[1] = v;
        this.data[2] = new Vector3(1 / v.x(), 1 / v.y(), 1 / v.z());

        this.posneg[0] = (this.data[1].x() > 0 ? 0 : 1);
        this.posneg[1] = (this.data[1].y() > 0 ? 0 : 1);
        this.posneg[2] = (this.data[1].z() > 0 ? 0 : 1);
    }
}
//export {Ray};