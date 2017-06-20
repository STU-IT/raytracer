//import * as ref from "./references"
//import {HitRecord} from "./Shape";
//import {Ray} from "./Ray";
var main = function () {
    var rec = new HitRecord();
    var is_a_hit;
    var tmax;
    var dir = new Vector3(0, 0, -1);
    var shapes = [];
    shapes.push(new Sphere(new Vector3(250, 250, -1000), 150, new RGB(.2 * 255, .2 * 255, .8 * 255)));
    shapes.push(new Triangle(new Vector3(300, 600, -800), new Vector3(0, 100, -1000), new Vector3(450, 20, -1000), new RGB(.8 * 255, .2 * 255, .2 * 255)));
    var im = new image(500, 500);
    for (var i = 0; i < 500; i++) {
        im.raster[i] = [];
        for (var j = 0; j < 500; j++) {
            tmax = 100000;
            is_a_hit = false;
            var r = new Ray(new Vector3(i, j, 0), dir);
            for (var k in shapes) {
                if (shapes[k].hit(r, .00001, tmax, 0, rec)) {
                    tmax = rec.t;
                    is_a_hit = true;
                }
            }
            if (is_a_hit == true) {
                im.set(i, j, rec.color);
            }
            else {
                im.set(i, j, new RGB(.2 * 255, .2 * 255, .2 * 255));
            }
        }
    }
};
//# sourceMappingURL=main.js.map