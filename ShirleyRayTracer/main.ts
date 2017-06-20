import * as ref from "./references"
import {HitRecord} from "./Shape";
import {Ray} from "./Ray";

var main = function ()
{
    var rec = new HitRecord();
    var is_a_hit: boolean;
    var tmax: number;
    var dir = new ref.Vector3(0, 0, -1);

    var shapes = [];
    shapes.push(new ref.Sphere(new ref.Vector3(250, 250, -1000), 150, new ref.RGB(.2 * 255, .2 * 255, .8 * 255)));
    shapes.push(new ref.Triangle(new ref.Vector3(300, 600, -800), new ref.Vector3(0, 100, -1000), new ref.Vector3(450, 20, -1000), new ref. RGB(.8 * 255, .2 * 255, .2 * 255)));

    var im = new ref.image(500, 500);

    for (var i = 0; i < 500; i++)
    {
        for (var j = 0; j < 500; j++)
        {
            tmax = 100000;
            is_a_hit = false;
            var r = new ref.Ray(new ref.Vector3(i, j, 0), dir);

            for (var k in shapes)
            {
                if (shapes[k].hit(r, .00001, tmax, rec))
                {
                    tmax = rec.t;
                    is_a_hit = true;
                }
            }

            if (is_a_hit = true)
            {
                im.set(i, j, rec.color)
            }
            else
            {
                im.set(i, j, new ref.RGB(.2 * 255, .2 * 255, .2* 255))
            }
        }
    }
};