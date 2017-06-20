import * as ref from "./references"
class Ray
{
    data: Array<ref.Vector3>;

    constructor()
    constructor(a: ref.Vector3, b: ref.Vector3)
    constructor(a? : ref.Vector3, b? : ref.Vector3)
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
export {Ray};