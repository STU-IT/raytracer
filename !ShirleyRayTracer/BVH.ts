class BVH extends Shape
{
    bbox: BBox;
    left: Shape;
    right: Shape;

    constructor(prim1: Shape, prim2: Shape, _bbox?: BBox)
    constructor(Shapes : Array<Shape>, num_shapes: number)
    constructor(prim1OrShapes: any, prim2OrNum: any, _bbox?: BBox)
    {
        super();
        if(typeof(prim2OrNum) != "number")
        {
            this.bbox = _bbox || surround(prim1OrShapes.boundingBox(0, 0), prim2OrNum.boundingBox(0, 0));
            this.left = prim1OrShapes;
            this.right = prim2OrNum;
        }
        else
        {
            if(prim2OrNum == 1)
            {
                var temp = new BVH(prim1OrShapes[0], prim1OrShapes[0]);
            }
            if(prim2OrNum == 2)
            {
                var temp = new BVH(prim1OrShapes[0], prim1OrShapes[1]);
            }
            this.bbox = prim1OrShapes[0].boundingBox(0, 0);
            for(var i = 1; i < prim2OrNum; i++)
            {
                this.bbox = surround(this.bbox, prim1OrShapes[i].boundingBox(0, 0));
                var pivot = (this.bbox.max().plus(this.bbox.min()).div(2));

                var mid_point = qsplit(prim1OrShapes, prim2OrNum, pivot.x(), 0);

                //hved ikke hvad "buildBranch" er
                var left = this.buildBranch(prim1OrShapes, mid_point, 1);
                var right = this.buildBranch(prim1OrShapes[mid_point], prim2OrNum - mid_point, 1)
            }
        }
    }
    boundingBox(time0: number, time1: number)
    {
        return(this.bbox)
    }
    hit(r: Ray, tmin: number, tmax: number, time : number, rec: HitRecord): boolean
    {
        if(!(this.bbox.rayIntersect(r, tmin, tmax)))
        {
            return(false)
        }


        rec.t = tmax;

        var isahit1 = this.right.hit(r, tmin, tmax, time, rec);
        var isahit2 = this.left.hit(r, tmin, rec.t, time, rec);

        return(isahit1 || isahit2)
    }
    shadowHit(r: Ray, tmin: number, tmax: number, time: number)
    {
        if(!this.bbox.rayIntersect(r, tmin, tmax))
        {
            return(false)
        }
        if(this.right.shadowHit(r, tmin, tmax, time))
        {
            return(true)
        }
        return(this.left.shadowHit(r, tmin, tmax, time))
    }
    buildBranch(shapes: Array<Shape>, shape_size: number, axis: number): Shape
    {
        if(shape_size == 1)
        {
            return(shapes[0])
        }
        if(shape_size == 2)
        {
            return(new BVH(shapes[0], shapes[1]))
        }

        var box = shapes[0].boundingBox(0, 0);
        for(var i = 0; i < shape_size; i++)
        {
            box = surround(box, shapes[i].boundingBox(0, 0));
        }
        var pivot = (box.max().plus(box.min()).div(2));

        var mid_point = qsplit(shapes, shape_size, pivot[axis], axis);

        var left = this.buildBranch(shapes, mid_point, (axis + 1) % 3);
        var right = this.buildBranch(shapes[mid_point], shape_size - mid_point, (axis + 1) % 3)
        //hved ikke hvad der er galt oppe ^ Side: 152
        return(new BVH(left, right, box))
    }
}

var x = new BVH(new Sphere(new Vector3(0,0,0), 5, new RGB(0,0,0)),
    new Sphere(new Vector3(0,0,0), 5, new RGB(0,0,0)),
    new BBox() );