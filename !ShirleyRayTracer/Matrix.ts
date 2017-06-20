class Matrix
{
    x: Array<Array<number>>;

    constructor()
    {
        this.x = [];
        for(var i = 0; i < 4; i++)
        {
            //this.x[i].push(0);
            var tempA = [];
            for(var j = 0; j < 4; j++)
            {
                tempA[j] = 0;
            }
            this.x.push(tempA);
        }
    }

    plusE(right_op: Matrix)
    {
        for(var i = 0; i < 4; i++)
        {
            for(var j = 0; j < 4; j++)
            {
                this.x[i][j] += right_op.x[i][j];
            }
        }
        return(this)
    }
    minusE(right_op: Matrix)
    {
        for(var i = 0; i < 4; i++)
        {
            for(var j = 0; j < 4; j++)
            {
                this.x[i][j] -= right_op.x[i][j];
            }
        }
        return(this)
    }
    multiE(right_op: number)
    multiE(right_op: Matrix)
    multiE(right_op)
    {
        if (typeof(right_op == "number"))
        {
            for (var i = 0; i < 4; i++)
            {
                for (var j = 0; j < 4; j++)
                {
                    this.x[i][j] *= right_op.x[i][j];
                }
            }
            return(this)
        }
        else
        {
            var  ret = this;

            for(var i = 0; i < 4; i++)
            {
                for(var j = 0; j < 4; j++)
                {
                    var sum = 0;
                    for(var k = 0; k < 4; k++)
                    {
                        sum += ret.x[i][k] * right_op[k][j];
                    }
                    this.x[i][j] = sum;
                }
            }
            return(this)
        }
    }

    getInvert()
    {
        var det = this.determinant();
        var inverse = new Matrix();

        inverse.x[0][0] = det3(this.x[1][1], this.x[1][2], this.x[1][3], this.x[2][1], this.x[2][2], this.x[2][3], this.x[3][1], this.x[3][2], this.x[3][3]) / det;
        inverse.x[0][1] = -det3(this.x[0][1], this.x[0][2], this.x[0][3], this.x[2][1], this.x[2][2], this.x[2][3], this.x[3][1], this.x[3][2], this.x[3][3]) / det;
        inverse.x[0][2] = det3(this.x[0][1], this.x[0][2], this.x[0][3], this.x[1][1], this.x[1][2], this.x[1][3], this.x[3][1], this.x[3][2], this.x[3][3]) / det;
        inverse.x[0][3] = -det3(this.x[0][1], this.x[0][2], this.x[0][3], this.x[1][1], this.x[1][2], this.x[1][3], this.x[2][1], this.x[2][2], this.x[2][3]) / det;

        inverse.x[1][0] = -det3(this.x[1][0], this.x[1][2], this.x[1][3], this.x[2][0], this.x[2][2], this.x[2][3], this.x[3][0], this.x[3][2], this.x[3][3]) / det;
        inverse.x[1][1] = det3(this.x[0][0], this.x[0][2], this.x[0][3], this.x[2][0], this.x[2][2], this.x[2][3], this.x[3][0], this.x[3][2], this.x[3][3]) / det;
        inverse.x[1][2] = -det3(this.x[0][0], this.x[0][2], this.x[0][3], this.x[1][0], this.x[1][2], this.x[1][3], this.x[3][0], this.x[3][2], this.x[3][3]) / det;
        inverse.x[1][3] = det3(this.x[0][0], this.x[0][2], this.x[0][3], this.x[1][0], this.x[1][2], this.x[1][3], this.x[2][0], this.x[2][2], this.x[2][3]) / det;

        inverse.x[2][0] = det3(this.x[1][0], this.x[1][1], this.x[1][3], this.x[2][0], this.x[2][1], this.x[2][3], this.x[3][0], this.x[3][1], this.x[3][3]) / det;
        inverse.x[2][1] = -det3(this.x[0][0], this.x[0][1], this.x[0][3], this.x[2][0], this.x[2][1], this.x[2][3], this.x[3][0], this.x[3][1], this.x[3][3]) / det;
        inverse.x[2][2] = det3(this.x[0][0], this.x[0][1], this.x[0][3], this.x[1][0], this.x[1][1], this.x[1][3], this.x[3][0], this.x[3][1], this.x[3][3]) / det;
        inverse.x[2][3] = -det3(this.x[0][0], this.x[0][1], this.x[0][3], this.x[1][0], this.x[1][1], this.x[1][3], this.x[2][0], this.x[2][1], this.x[2][3]) / det;

        inverse.x[3][0] = -det3(this.x[1][0], this.x[1][1], this.x[1][2], this.x[2][0], this.x[2][1], this.x[2][2], this.x[3][0], this.x[3][1], this.x[3][2]) / det;
        inverse.x[3][1] = det3(this.x[0][0], this.x[0][1], this.x[0][2], this.x[2][0], this.x[2][1], this.x[2][2], this.x[3][0], this.x[3][1], this.x[3][2]) / det;
        inverse.x[3][2] = -det3(this.x[0][0], this.x[0][1], this.x[0][2], this.x[1][0], this.x[1][1], this.x[1][2], this.x[3][0], this.x[3][1], this.x[3][2]) / det;
        inverse.x[3][3] = det3(this.x[0][0], this.x[0][1], this.x[0][2], this.x[1][0], this.x[1][1], this.x[1][2], this.x[2][0], this.x[2][1], this.x[2][2]) / det;

        return(inverse)
    }

    getTranspose() : Matrix
    {
        var res = new Matrix();
        for(var i = 0; i < 4; i++)
        {
            for(var j = 0; j < 4; j++)
            {
                res.x[j][i] = this.x[i][j];
                res.x[i][j] = this.x[j][i];
            }
        }
        return(res);
    }

    determinant()
    {
        var det;

        det  = this.x[0][0] * det3(this.x[1][1], this.x[1][2], this.x[1][3], this.x[2][1], this.x[2][2], this.x[2][3], this.x[3][1], this.x[3][2], this.x[3][3]);
        det -= this.x[0][1] * det3(this.x[1][0], this.x[1][2], this.x[1][3], this.x[2][0], this.x[2][2], this.x[2][3], this.x[3][0], this.x[3][2], this.x[3][3]);
        det += this.x[0][2] * det3(this.x[1][0], this.x[1][1], this.x[1][3], this.x[2][0], this.x[2][1], this.x[2][3], this.x[3][0], this.x[3][1], this.x[3][3]);
        det -= this.x[0][3] * det3(this.x[1][0], this.x[1][1], this.x[1][2], this.x[2][0], this.x[2][1], this.x[2][2], this.x[3][0], this.x[3][1], this.x[3][2]);

        return(det)
    }

    plus(right_op: Matrix)
    {
        var ret = new Matrix();

        for(var i = 0; i < 4; i++)
        {
            for(var j = 0; j < 4; j++)
            {
                ret.x[i][j] = this.x[i][j] + right_op.x[i][j];
            }
        }
        return(ret)
    }

    minus(right_op: Matrix)
    {
        var ret = new Matrix();

        for(var i = 0; i < 4; i++)
        {
            for(var j = 0; j < 4; j++)
            {
                ret.x[i][j] = this.x[i][j] - right_op.x[i][j];
            }
        }
        return(ret)
    }

    multi(right_op: number): Matrix
    multi(right_op: Matrix): Matrix
    multi(right_op: Vector3) : Vector3
    multi(right_op) : any
    {
        var ret = new Matrix();

        if (typeof(right_op) == "number")
        {
            for (var i = 0; i < 4; i++)
            {
                for (var j = 0; j < 4; j++)
                {
                    ret.x[i][j] = this.x[i][j] * right_op;
                }
            }
            return (ret)
        }
        else if(right_op.x != null)
        {
            for (var i = 0; i < 4; i++)
            {
                for (var j = 0; j < 4; j++)
                {
                    var subt = 0;
                    for(var k = 0; k < 4; k++)
                    {
                        subt += this.x[i][k] * right_op.x[k][j];
                        ret.x[i][j] = subt;
                    }
                }
            }
            return (ret)
        }
        else
        {
            var v = new Vector3();
            var temp;

            v[0] = right_op[0] * this.x[0][0] + right_op[1] * this.x[0][1] + right_op[2] * this.x[0][2] + this.x[0][3];
            v[1] = right_op[0] * this.x[1][0] + right_op[1] * this.x[1][1] + right_op[2] * this.x[1][2] + this.x[1][3];
            v[2] = right_op[0] * this.x[2][0] + right_op[1] * this.x[2][1] + right_op[2] * this.x[2][2] + this.x[2][3];
            temp = right_op[0] * this.x[3][0] + right_op[1] * this.x[3][1] + right_op[2] * this.x[3][2] + this.x[3][3];

            var rV = v.div(temp);
            return(rV)
        }
    }
}

var det3 = function (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number)
{
    return(a * e * i + d * h * c + g * b * f - g * e * c - d * b * i - a * h * f)
};

var transformVec = function (left_op: Matrix, right_op: Vector3)
{
    var ret = new Vector3();

    ret[0] = right_op[0] * left_op.x[0][0] + right_op[1] * left_op.x[0][1] + right_op[2] * left_op[0][2];
    ret[1] = right_op[0] * left_op.x[1][0] + right_op[1] * left_op.x[1][1] + right_op[2] * left_op[1][2];
    ret[2] = right_op[0] * left_op.x[2][0] + right_op[1] * left_op.x[2][1] + right_op[2] * left_op[2][2];

    return(ret)
};

var zeroMatrix = function ()
{
    var ret = new Matrix();
    for(var i = 0; i < 4; i++)
    {
        for(var j = 0; j < 4; j++)
        {
            ret.x[i][j] = 0;
        }
    }
    return(ret)
};

var identityMatrix = function ()
{
    var ret = zeroMatrix();

    ret.x[0][0] = 1;
    ret.x[1][1] = 1;
    ret.x[2][2] = 1;
    ret.x[3][3] = 1;

    return(ret)
};

var translate = function (_x: number, _y: number, _z: number)
{
    var ret = identityMatrix();

    ret.x[0][3] = _x;
    ret.x[1][3] = _y;
    ret.x[2][3] = _z;

    return(ret)
};

var rotateX = function (angle: number)
{
    var ret = identityMatrix();

    var cosine = Math.cos(angle);
    var sine = Math.sin(angle);

    ret.x[1][1] = cosine;
    ret.x[1][2] = -sine;
    ret.x[2][1] = sine;
    ret.x[2][2] = cosine;

    return(ret)
};

var rotateY = function (angle: number)
{
    var ret = identityMatrix();

    var cosine = Math.cos(angle);
    var sine = Math.sin(angle);

    ret.x[0][0] = cosine;
    ret.x[0][2] = sine;
    ret.x[2][0] = -sine;
    ret.x[2][2] = cosine;

    return(ret)
};

var rotateZ = function (angle: number)
{
    var ret = identityMatrix();

    var cosine = Math.cos(angle);
    var sine = Math.sin(angle);

    ret.x[0][0] = cosine;
    ret.x[0][1] = -sine;
    ret.x[1][0] = sine;
    ret.x[1][1] = cosine;

    return(ret)
};

var rotate = function (axis: Vector3, angle)
{
    var _axis = unitVector(axis);
    var ret = new Matrix();
    var x = _axis.x();
    var y = _axis.y();
    var z = _axis.z();
    var cosine = Math.cos(angle);
    var sine = Math.sin(angle);
    var t = 1 - cosine;

    ret.x[0][0] = t * x * x + cosine;
    ret.x[0][1] = t * x * y - sine * y;
    ret.x[0][2] = t * x * z + sine * y;
    ret.x[0][3] = 0;

    ret.x[1][0] = t * x * y + sine * z;
    ret.x[1][1] = t * y * y + cosine;
    ret.x[1][2] = t * y * z - sine * x;
    ret.x[1][3] = 0;

    ret.x[2][0] = t * x * z - sine * y;
    ret.x[2][1] = t * y * z + sine * x;
    ret.x[2][2] = t * z * z + cosine;
    ret.x[2][3] = 0;

    ret.x[3][0] = 0;
    ret.x[3][1] = 0;
    ret.x[3][2] = 0;
    ret.x[3][3] = 1;

    return(ret)
};

var scale = function (_x: number, _y: number, _z: number)
{
    var ret = zeroMatrix();

    ret.x[0][0] = _x;
    ret.x[1][1] = _y;
    ret.x[2][2] = _z;
    ret.x[3][3] = 1;

    return(ret)
};

var viewMatrix = function (eye: Vector3, gaze: Vector3, up: Vector3)
{
    var ret = identityMatrix();

    var w = unitVector(gaze).nik();
    var u = unitVector(cross(up, w));
    var v = cross(w, u);

    ret.x[0][0] = u.x();
    ret.x[0][1] = u.y();
    ret.x[0][2] = u.z();
    ret.x[1][0] = v.x();
    ret.x[1][1] = v.y();
    ret.x[1][2] = v.z();
    ret.x[2][0] = w.x();
    ret.x[2][1] = w.y();
    ret.x[2][2] = w.z();

    var move = identityMatrix();
    move.x[0][3] = -(eye.x());
    move.x[1][3] = -(eye.y());
    move.x[2][3] = -(eye.z());

    ret = ret.multi(move);
    return(ret)
};

var transformLoc = function (left_op: Matrix, right_op: Vector3)
{
    return(left_op.multi(right_op))
};

//side 135
