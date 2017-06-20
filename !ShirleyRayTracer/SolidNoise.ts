class SolidNoise
{
    //noise: number;
    //turbulence: number;
    //dturbulence: number;
    //omega: number;
    //gamma: Vector3;
    //intGamma: number;
    //knot: number;
    grad: Array<Vector3>;
    phi: Array<number>;

    constructor()
    {
        this.phi = [];

        this.grad[0] = new Vector3(1, 1, 0);
        this.grad[1] = new Vector3(-1, 1, 0);
        this.grad[2] = new Vector3(1, -1, 0);
        this.grad[3] = new Vector3(-1, -1, 0);

        this.grad[4] = new Vector3(1, 0, 1);
        this.grad[5] = new Vector3(-1, 0, 1);
        this.grad[6] = new Vector3(1, 0, -1);
        this.grad[7] = new Vector3(-1, 0, -1);

        this.grad[8] = new Vector3(0, 1, 1);
        this.grad[9] = new Vector3(0, -1, 1);
        this.grad[10] = new Vector3(0, 1, -1);
        this.grad[11] = new Vector3(0, -1, -1);

        this.grad[12] = new Vector3(1, 1, 0);
        this.grad[13] = new Vector3(-1, 1, 0);
        this.grad[14] = new Vector3(0, -1, 1);
        this.grad[15] = new Vector3(0, -1, -1);

        for(var i = 0; i < 16; i++)
        {
            this.phi[i] = i;
        }

        for(var i = 14; i >= 0; i--)
        {
            var target = Math.floor(Math.random() * i);
            var temp = this.phi[i + 1];
            this.phi[i + 1] = this.phi[target];
            this.phi[target] = temp;
        }
    }
    omega(t: number): number
    {
        t = (t > 0)? t : -t;
        return(-6.0 * t * t * t * t * t + 15.0 * t * t * t * t -10.0 * t * t * t  + 1.0);
    }
    gamma(i: number, j: number, k: number): Vector3
    {
        var idx;
        idx = this.phi[Math.abs(k) % 16];
        idx = this.phi[Math.abs(j + idx) % 16];
        idx = this.phi[Math.abs(i + idx) % 16];
        return(this.grad[idx])
    }
    knot(i: number, j: number, k: number, v: Vector3): number
    {
        return(this.omega(v.x()) * this.omega(v.y()) * this.omega(v.z()) * (dot(this.gamma(i, j, k), v)))
    }
    intGamma(i: number, j: number): number
    {
        var idx;
        idx = this.phi[Math.abs(j) % 16];
        idx = this.phi[Math.abs(i + idx) % 16];
        return(idx)
    }
    turbulence(p: Vector3, depth: number): number
    {
        var sum = 0;
        var weight = 1;
        var ptemp = p;

        sum = Math.abs(this.noise(ptemp));

        for(var i = 1; i < depth; i++)
        {
            weight = weight * 2;
            ptemp.setX(p.x() * weight);
            ptemp.setY(p.y() * weight);
            ptemp.setZ(p.z() * weight);

            sum += Math.abs(this.noise(ptemp)) / weight;
        }
        return(sum)
    }
    dturbulence(p: Vector3, depth: number, d: number): number
    {
        var sum = 0;
        var weight = 1;
        var ptemp = p;

        sum += Math.abs(this.noise(ptemp)) / d;

        for(var i = 0; i < depth; i++)
        {
            weight = weight * d;
            ptemp.setX(p.x() * weight);
            ptemp.setY(p.y() * weight);
            ptemp.setZ(p.z() * weight);

            sum += Math.abs(this.noise(ptemp)) / d;
        }
        return(sum)
    }
    noise(p: Vector3): number
    {
        var fi, fj, fk;
        var fu, fv, fw, sum;
        var v = new Vector3();

        fi = Math.floor(p.x());
        fj = Math.floor(p.y());
        fk = Math.floor(p.z());
        fu = p.x() - fi;
        fv = p.y() - fj;
        fw = p.z() - fk;
        sum = 0;

        v = new Vector3(fu, fv, fw);
        sum += this.knot(fi, fj, fk, v);

        v = new Vector3(fu - 1, fv, fw);
        sum += this. knot(fi + 1, fj, fk, v);

        v = new Vector3(fu, fv - 1, fw);
        sum += this.knot(fi, fj + 1, fk, v);

        v = new Vector3(fu, fv, fw -1);
        sum += this.knot(fi, fj, fk + 1, v);

        v = new Vector3(fu -1, fv -1, fw);
        sum += this.knot(fi + 1, fj + 1, fk, v);

        v = new Vector3(fu -1, fv, fw -1);
        sum += this.knot(fi + 1, fj, fk + 1, v);

        v = new Vector3(fu, fv -1, fw -1);
        sum += this.knot(fi, fj + 1, fk + 1, v);

        v = new Vector3(fu -1, fv -1, fw -1);
        sum += this.knot(fi + 1, fj + 1, fk + 1, v);

        return sum;
    }
}