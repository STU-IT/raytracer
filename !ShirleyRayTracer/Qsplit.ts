var qsplit = function (list: Array<Shape>, size: number, pivot_val: number, axis: number)
{
    var bbox;
    var centroid;
    var ret_val = 0;

    for(var i = 0; i < size; i++)
    {
        bbox = list[i].boundingBox(0, 0);
        centroid = ((bbox.min())[axis] + (bbox.max())[axis]) / 2;
        if(centroid < pivot_val)
        {
            var temp = list[i];
            list[i] = list[ret_val];
            list[ret_val] = temp;
            ret_val++;
        }
    }
    if(ret_val == 0 || ret_val == size)
    {
        ret_val = size / 2;
    }

    return(ret_val)
};