var Knud = (function () {
    function Knud() {
        this.navn = "Knud";
    }
    return Knud;
}());
describe("Tester hul til Jasmine", function () {
    var knud;
    beforeEach(function () {
        knud = new Knud();
    });
    it("should be Knud", function () {
        expect(knud.navn).toBe("Knud");
    });
});
//# sourceMappingURL=testTest.js.map