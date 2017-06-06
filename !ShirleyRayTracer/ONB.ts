class ONB
{
    U: Vector3;
    V: Vector3;
    W: Vector3;

    constructor(a: Vector3, b: Vector3, c: Vector3)
    {
        this.U = a;
        this.V = b;
        this.W = c;
    }

    set(a: Vector3, b: Vector3, c: Vector3)
    {
        this.U = a;
        this.V = b;
        this.W = c;
    }

    initFromU(u: Vector3)
    {
        var ONB_EPSILON = 0.01;

        var n = new Vector3(1, 0, 0);
        var m = new Vector3(0, 1, 0);

        this.U = unitVector(u);
        this.V = cross(this.U, n);

        if (this.V.length() < ONB_EPSILON)
        {
            this.V = cross(this.U, m);
        }
        this.W = cross(this.U, this.V)
    }

    initFromV(v: Vector3)
    {
        var ONB_EPSILON = 0.01;

        var n = new Vector3(1, 0, 0);
        var m = new Vector3(0, 1, 0);

        this.V = unitVector(v);
        this.U = cross(this.V, n);

        if (this.U.squaredLength() < ONB_EPSILON)
        {
            this.U = cross(this.V, m)
        }
        this.W = cross(this.U, this.V)
    }

    initFromW(w: Vector3)
    {
        var ONB_EPSILON = 0.01;

        var n = new Vector3(1, 0, 0);
        var m = new Vector3(0, 1, 0);

        this.W = unitVector(w);
        this.U = cross(this.W, n);

        if (this.U.length() < ONB_EPSILON)
        {
            this.U = cross(this.W, m)
        }
        this.V = cross(this.W, this.U)
    }

    initFromUV(u: Vector3, v: Vector3)
    {
        this.U = unitVector(u);
        this.W = unitVector(cross(u, v));
        this.V = cross(this.W, this.U)
    }

    initFromVU(v: Vector3, u: Vector3)
    {
        this.V = unitVector(v);
        this.W = unitVector(cross(u, v));
        this.U = cross(this.V, this.W);
    }

    initFromUW(u: Vector3, w: Vector3)
    {
        this.U = unitVector(u);
        this.V = unitVector(cross(w, u));
        this.W = cross(this.U, this.V);
    }

    initFromWU(w: Vector3, u: Vector3)
    {
        this.W = unitVector(w);
        this.V = unitVector(cross(w, u));
        this.U = cross(this.V, this.W);
    }

    initFromVW(v: Vector3, w: Vector3)
    {
        this.V = unitVector(v);
        this.U = unitVector(cross(v, w));
        this.W = cross(this.U, this.V);
    }

    initFromWV(w: Vector3, v: Vector3)
    {
        this.W = unitVector(w);
        this.U = unitVector(cross(v, w));
        this.V = cross(this.W, this.U);
    }
}

