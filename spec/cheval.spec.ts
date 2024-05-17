import {Cheval} from "../cheval";

describe("Test classe Cheval", function () {
    it("test le nom du cheval", function () {
        const monCheval: Cheval = new Cheval("Bellatrix");
        expect(monCheval.getName()).toBe("Bellatrix");
    });
    
    it("test la course du cheval", function () {
        const monCheval: Cheval = new Cheval("Bellatrix");
        let mapos = monCheval.getPos(); //recup position
        monCheval.runHorse(); //fait courir

        //position doit etre differente de avant courir
        expect(monCheval.getPos()).not.toEqual(mapos); 
    });
    
});
