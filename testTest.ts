import Jasmine = jasmine.Jasmine;

class Knud{
    navn: string;
    constructor()
    {
        this.navn = "Knud";
    }
}

describe("Tester hul til Jasmine", function(){
    var knud;

    beforeEach(function(){
        knud = new Knud();
    });

    it("should be Knud", function () {
        expect(knud.navn).toBe("Knud")
    })
})