//import * as ref from  "./references"
//import {HitRecord} from "./Shape";
//import {dot, unitVector} from "./Vector3";
class Camera
{
    center: Vector3;
    cornor: Vector3;
    across: Vector3;
    up: Vector3;
    uvw: ONB;
    u0: number;
    u1: number;
    v0: number;
    v1: number;
    d: number;
    lens_radius: number;

    constructor(c: Vector3, gaze: Vector3, vup: Vector3, aperture: number, left: number, right: number, bottom: number, top: number, distance: number)
    {
        this.center = c;
        this.d = distance;
        this.u0 = left;
        this.u1 = right;
        this.v0 = bottom;
        this.v1 = top;

        this.lens_radius = aperture / 2;
        this.uvw.initFromWV(gaze.nik(), vup);

        //ved ikke om den dur
        this.cornor = this.center.plus(this.uvw.u().multi(this.u0)).plus(this.uvw.v().multi(this.v0)).minus(this.uvw.w().multi(this.d));
        this.across = this.uvw.u().multi(this.u0 - this.u1);
        this.up = this.uvw.v().multi(this.v0 - this.v1);
    }
}

var getRay = function (a: number, b: number, xi1:number, xi2:number)
{
    var origin = this.center.plus(this.uvw.u().multi(2 * (xi1 - 0.5) * this.lens_radius).plus(this.uvw.v().multi(2 * (xi2 - 0.5) * this.lens_radius)));
    var target = this.cornor.plus(this.across.multi(a).plus(this.up.multi(b)));
    return(new Ray(origin, unitVector(target.minus(origin))));
};
