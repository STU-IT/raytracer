//import * as ref from  "./references"
//import {HitRecord} from "./Shape";
//import {dot, unitVector} from "./Vector3";
class Camera
{
    center: Vector3;
    cornor: any;
    across: any;
    up: any;
    uvw: any;
    u0: number;
    u1: number;
    v0: number;
    v1: number;
    d: number;
    lens_radius: any;

    constructor(c: Vector3, gaze: Vector3, vup: Vector3, aperture: number, left: number, right: number, bottom: number, top: number, distance: number)
    {
        this.center = c;
        this.d = distance;
        this.u0 = left;
        this.u1 = right;
        this.v0 = bottom;
        this.v1 = top;

        this.lens_radius = aperture / 2;
        this.uvw.initFromWV(gaze.nik(), vup)

    }
}