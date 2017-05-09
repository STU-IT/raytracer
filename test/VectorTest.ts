//import Jasmine = jasmine.Jasmine;
import { Vector } from "../src/ray";

describe("Vector class", function () {
    var v0, v5, v6, v9;

    beforeEach(function () {
        this.v0 = new Vector(0,0,0);
        this.v5 = new Vector(5,0,0);
        this.v6 = new Vector(2,3,0);
    })

    //distance
    it("should be zerro", function () {
        expect(this.v0.distance(this.v0)).toBe(0);
        expect(this.v5.distance(this.v5)).toBe(0);
        expect(this.v6.distance(this.v6)).toBe(0);
    })

    it("shold be 5", function () {
        expect(this.v0.distance(this.v5)).toBe(5);
        expect(this.v5.distance(this.v0)).toBe(5);
    })

    it("should be ... apx 3.6", function () {
        expect(this.v0.distance(this.v6)).toBeCloseTo(3.605551, 6);
        expect(this.v6.distance(this.v0)).toBeCloseTo(3.605551, 6);
    })

    it("should be ... apx 4.25", function () {
        expect(this.v5.distance(this.v6)).toBeCloseTo(4.242640, 5);
        expect(this.v6.distance(this.v5)).toBeCloseTo(4.242640, 5);
    })

    it("should fail", function () {
        //expect(this.v9.distance()).toThrowError("TypeError: Cannot read property 'distance' of undefined");
        //expect(this.v0.distance(v9)).toThrow();
    })

    //dot
    //plus
    //minus
    //sum
    // skaler
    // elemMultiply
})
