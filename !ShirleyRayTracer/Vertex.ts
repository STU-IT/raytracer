class VertexUV
{
    vertex: Vector3;
    uv: Vector2;

    constructor(v: Vector3, v2: Vector2)
    {
        this.vertex = v;
        this.uv = v2;
    }
}

class VertexN
{
    vertex: Vector3;
    normal: Vector3;

    constructor(v: Vector3, n: Vector3)
    {
        this.vertex = v;
        this.normal = n;
    }
}

class VertexUVN
{
    vertex: Vector3;
    normal: Vector3;
    uv: Vector2;

    constructor(v: Vector3, n: Vector3, v2: Vector2)
    {
        this.vertex = v;
        this.normal = n;
        this.uv = v2;
    }
}