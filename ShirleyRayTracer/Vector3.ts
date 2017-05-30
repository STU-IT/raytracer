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
    x()
    {
        return(this.e[0])
    }
    y()
    {
        return(this.e[1])
    }
    z()
    {
        return(this.e[2])
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
        var rVector = this.div(this.length());
        return (rVector)
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
    maxAbsComponent()
    {
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) > temp)
        {
            temp = Math.abs(this.e[1])
        }
        if (Math.abs(this.e[2]) > temp)
        {
            temp = Math.abs(this.e[2])
        }
        return(temp)
    }
    minAbsComponent()
    {
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) < temp)
        {
            temp = Math.abs(this.e[1])
        }
        if (Math.abs(this.e[2]) < temp)
        {
            temp = Math.abs(this.e[2])
        }
        return(temp)
    }
    indexOfMinComponent()
    {
        var index = 0;
        var temp = this.e[0];
        if (this.e[1] < temp)
        {
            temp = this.e[1];
            index = 1;
        }
        if (this.e[2] < temp)
        {
            index = 2;
        }
        return(index)
    }
    indexOfMinAbsComponent()
    {
        var index = 0;
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) < temp)
        {
            temp = Math.abs(this.e[1]);
            index = 1;
        }
        if (Math.abs(this.e[2]) < temp)
        {
            index = 2;
        }
        return(index)
    }
    equal(vector: Vector3)
    {
        if (vector.e[0] != this.e[0])
        {
            return(false)
        }
        if (vector.e[1] != this.e[1])
        {
            return(false)
        }
        if (vector.e[2] != this.e[2])
        {
            return(false)
        }
        return(true)
    }
    notEqual(vector: Vector3)
    {
        if (this.equal(vector) == false)
        {
            return(true)
        }
        return(false)
    }
    indexOfMaxComponent()
    {
        var index = 0;
        var temp = this.e[0];
        if (this.e[1] > temp)
        {
            temp = this.e[1];
            index = 1;
        }
        if (this.e[2] > temp)
        {
            index = 2;
        }
        return(index)
    }
    indexOfMaxAbsComponent()
    {
        var index = 0;
        var temp = Math.abs(this.e[0]);
        if (Math.abs(this.e[1]) > temp)
        {
            temp = Math.abs(this.e[1]);
            index = 1;
        }
        if (Math.abs(this.e[2]) > temp)
        {
            index = 2;
        }
        return(index)
    }
    multi(scalar)
    {
        return(new Vector3(this.e[0] * scalar, this.e[1] * scalar, this.e[2] * scalar))
    }
    div(scalar)
    {
        return(new Vector3(this.e[0] / scalar, this.e[1] / scalar, this.e[2] / scalar))
    }
    plus(vector: Vector3)
    {
        return(new Vector3(this.e[0] + vector.e[0], this.e[1] + vector.e[1], this.e[2] + vector.e[2]))
    }
    minus(vector: Vector3)
    {
        return(new Vector3(this.e[0] - vector.e[0], this.e[1] - vector.e[1], this.e[2] - vector.e[2]))
    }
    dot(vector: Vector3): number
    {
        return((this.x() * vector.x()) + (this.y() * vector.y()) + (this.z() * vector.z()))
    }
    cross(vector: Vector3): Vector3
    {
        var temp = new Vector3();

        temp.e[0] = this.y() * vector.z() - this.z() * vector.y();
        temp.e[1] = this.z() * vector.x() - this.x() * vector.z();
        temp.e[2] = this.x() * vector.y() - this.y() * vector.x();
        return (temp)
    }
    minVec(vector: Vector3)
    {
        var vec = new Vector3(this.x(), this.y(), this.z());
        if (vector.x() < this.x())
        {
            vec.setX(vector.x())
        }
        if (vector.y() < this.y())
        {
            vec.setY(vector.y())
        }
        if (vector.z() < this.z())
        {
            vec.setZ(vector.z())
        }
    }
    maxVec(vector: Vector3)
    {
        var vec = new Vector3(this.x(), this.y(), this.z());
        if (vector.x() > this.x())
        {
            vec.setX(vector.x())
        }
        if (vector.y() > this.y())
        {
            vec.setY(vector.y())
        }
        if (vector.z() > this.z())
        {
            vec.setZ(vector.z())
        }
    }
    tripleProduct(v2: Vector3, v3: Vector3)
    {
        var vec = this.cross(v2);
        return (vec.dot(v3))
    }
}
var unitVector = function ()
{

}
export {Vector3};