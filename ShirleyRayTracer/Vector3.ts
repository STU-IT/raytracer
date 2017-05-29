class Vector3
{
    e: Array<number>;
    constructor(e0: number = 0, e1: number = 0, e2:number = 0)
    {
        this.e = [];

        this.e[0] = e0;
        this.e[1] = e1;
        this.e[2] = e2;
    }

    setX(x: number)
    {
        this.e[0] = x
    }
    setY(y: number)
    {
        this.e[1] = y
    }
    setZ(z: number)
    {
        this.e[2] = z
    }

    nik()
    {
        return(new Vector3(-this.e[0], -this.e[1], -this.e[2]))
    }

    length()
    {
        return(Math.sqrt((this.e[0] * this.e[0]) + (this.e[1] * this.e[1]) + (this.e[2] * this.e[2])))
    }
    squaredLength()
    {
        return((this.e[0] * this.e[0]) + (this.e[1] * this.e[1]) + (this.e[2] * this.e[2]))
    }
    makeUnitVector()
    {
        var rVector = this.div(this.length())
    }
    minComponent()
    {
        var temp = this.e[0];
        if (this.e[1] < temp)
        {
            temp = this.e[1]
        }
        if (this.e[2] < temp)
        {
            temp = this.e[2]
        }
        return(temp)
    }
    maxComponent()
    {
        var temp = this.e[0];
        if (this.e[1] > temp)
        {
            temp = this.e[1]
        }
        if (this.e[2] > temp)
        {
            temp = this.e[2]
        }
        return(temp)
    }
}
export {Vector3};