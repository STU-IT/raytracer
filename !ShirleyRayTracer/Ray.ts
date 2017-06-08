//import * as ref from "./references"
class Ray
{
    data: Array<Vector3>;

    constructor()
    constructor(a: Vector3, b: Vector3)
    constructor(a? : Vector3, b? : Vector3)
    {
        if (a != null && b != null)
        {
            this.data = [];
            this.data[0] = a;
            this.data[1] = b;
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
}
//export {Ray};