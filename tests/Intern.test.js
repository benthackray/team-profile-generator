const Intern = require("../lib/Intern");

describe('Intern', () => {
    it("should create an object", () => {
        const bianca = new Intern("Bianca Del Rio", 3, "bianca@email.com", "Drag U");
        expect(typeof(bianca)).toBe("object");
    })
    
    it("will take in a name property", () => {
        const bianca = new Intern("Bianca Del Rio", 3, "bianca@email.com", "Drag U");
        expect(bianca.name).toBe("Bianca Del Rio");
        expect(bianca.getName()).toBe("Bianca Del Rio");
    })

    it("will take in an id property", () => {
        const bianca = new Intern("Bianca Del Rio", 3, "bianca@email.com", "Drag U");
        expect(bianca.id).toBe(3);
        expect(bianca.getId()).toBe(3);
    })

    it("will take in an email property", () => {
        const bianca = new Intern("Bianca Del Rio", 3, "bianca@email.com", "Drag U");
        expect(bianca.email).toBe("bianca@email.com");
        expect(bianca.getEmail()).toBe("bianca@email.com");
    })

    it("will assign the Intern role", () => {
        const bianca = new Intern("Bianca Del Rio", 3, "bianca@email.com", "Drag U");
        expect(bianca.getRole()).toBe("Intern");
    })

    it("will take in a School", () =>{
        const bianca = new Intern("Bianca Del Rio", 3, "bianca@email.com", "Drag U");
        expect(bianca.school).toBe("Drag U");
        expect(bianca.getSchool()).toBe("Drag U");
    })
})
