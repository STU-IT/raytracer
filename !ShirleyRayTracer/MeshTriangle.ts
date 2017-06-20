class MeshTriangle extends Shape
{
    p: Array<number>;
    mesh_ptr: Mesh;
    constructor(_Mesh: Mesh, p0: number, p1: number, p2: number, index: number)
    {
        super();
        this.p[0] = p0;
        this.p[1] = p1;
        this.p[2] = p2;
        this.mesh_ptr = _Mesh
    }
    hit(r: Ray, tmin: number, tmax: number, time: number, rec: HitRecord)
    {
        var mesh_ptr = this.mesh_ptr.vertUVs();

        var p0 = new Vector3(mesh_ptr[this.p[0]].vertex.x(), mesh_ptr[this.p[0]].vertex.y(),mesh_ptr[this.p[0]].vertex.z());
        var p1 = new Vector3(mesh_ptr[this.p[1]].vertex.x(), mesh_ptr[this.p[1]].vertex.y(),mesh_ptr[this.p[1]].vertex.z());
        var p2 = new Vector3(mesh_ptr[this.p[2]].vertex.x(), mesh_ptr[this.p[2]].vertex.y(),mesh_ptr[this.p[2]].vertex.z());

        var tval;

        var A = p0.x() - p1.x();
        var B = p0.y() - p1.y();
        var C = p0.z() - p1.z();

        var D = p0.x() - p2.x();
        var E = p0.y() - p2.y();
        var F = p0.z() - p2.z();

        var G = r.direction().x();
        var H = r.direction().y();
        var I = r.direction().z();

        var J = p0.x() - r.origin().x();
        var K = p0.y() - r.origin().y();
        var L = p0.z() - r.origin().z();

        var EIHF = E * I - H * F;
        var GFDI = G * F - D * I;
        var DHEG = D * H - E * G;

        var denom = (A * EIHF + B * GFDI + C * DHEG);

        var beta = (J * EIHF + K * GFDI + L * DHEG) / denom;

        if (beta <= 0 || beta >= 1)
        {
            return(false)
        }

        var AKJB = A * J - J * B;
        var JCAL = J * C - A * L;
        var BLKC = B * L - K * C;

        var gamma = (I * AKJB + H * JCAL + G * BLKC) / denom;

        if (gamma <= 0 || beta + gamma >= 1)
        {
            return(false)
        }

        tval = -(F * AKJB + E * JCAL + D * BLKC) / denom;

        if (tval >= tmin && tval <= tmax)
        {
            var alpha = 1 - beta - gamma;

            var u0 = new Vector2(mesh_ptr[this.p[0]].x(), mesh_ptr[this.p[0]].y());
            var u1 = new Vector2(mesh_ptr[this.p[1]].x(), mesh_ptr[this.p[1]].y());
            var u2 = new Vector2(mesh_ptr[this.p[2]].x(), mesh_ptr[this.p[2]].y());

            rec.uv = new Vector2(alpha * u0.x() + beta * u1.x() + gamma * u2.x(), alpha * u0.y() + beta * u1.y() + gamma * u2.y());
            //getTexture findes ikke
            // rec.texture = mesh_ptr->getTexture();
            rec.t = tval;
            rec.normal = unitVector(cross((p1.minus(p0)), (p2.minus(p0))))

            return(true)
        }
        return(false)
    }
    shadowHit(r: Ray, tmin: number, tmax: number, time: number)
    {
        var mesh_ptr = this.mesh_ptr.vertUVs();

        var p0 = new Vector3(mesh_ptr[this.p[0]].vertex.x(), mesh_ptr[this.p[0]].vertex.y(),mesh_ptr[this.p[0]].vertex.z());
        var p1 = new Vector3(mesh_ptr[this.p[1]].vertex.x(), mesh_ptr[this.p[1]].vertex.y(),mesh_ptr[this.p[1]].vertex.z());
        var p2 = new Vector3(mesh_ptr[this.p[2]].vertex.x(), mesh_ptr[this.p[2]].vertex.y(),mesh_ptr[this.p[2]].vertex.z());

        var tval;

        var A = p0.x() - p1.x();
        var B = p0.y() - p1.y();
        var C = p0.z() - p1.z();

        var D = p0.x() - p2.x();
        var E = p0.y() - p2.y();
        var F = p0.z() - p2.z();

        var G = r.direction().x();
        var H = r.direction().y();
        var I = r.direction().z();

        var J = p0.x() - r.origin().x();
        var K = p0.y() - r.origin().y();
        var L = p0.z() - r.origin().z();

        var EIHF = E * I - H * F;
        var GFDI = G * F - D * I;
        var DHEG = D * H - E * G;

        var denom = (A * EIHF + B * GFDI + C * DHEG);

        var beta = (J * EIHF + K * GFDI + L * DHEG) / denom;

        if (beta <= 0 || beta >= 1)
        {
            return(false)
        }

        var AKJB = A * J - J * B;
        var JCAL = J * C - A * L;
        var BLKC = B * L - K * C;

        var gamma = (I * AKJB + H * JCAL + G * BLKC) / denom;

        if (gamma <= 0 || beta + gamma >= 1)
        {
            return(false)
        }
        var AKJB = A * J - J * B;
        var JCAL = J * C - A * L;
        var BLKC = B * L - K * C;

        var gamma = (I * AKJB + H * JCAL + G * BLKC) / denom;

        if (gamma <= 0 || beta + gamma >= 1)
        {
            return(false)
        }

        tval = -(F * AKJB + E * JCAL + D * BLKC) / denom;

        return(tval >= tmin && tval <= tmax)
    }
}