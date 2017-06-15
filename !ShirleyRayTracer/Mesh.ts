class Mesh
{
    constructor()
    {

    }
    vertUVs()
    {
        return(new VertexUV())
    }
    vertNs()
    {
        return(new VertexN())
    }
    vertUVNs()
    {
        return(new VertexUVN())
    }
    tex()
    {
        return(new Texture())
    }
    verts(e0: number = 0, e1: number = 0, e2:number = 0)
    {
        return(new Vector3(e0, e1, e2))
    }
}