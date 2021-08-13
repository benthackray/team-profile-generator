const Employee = require("../lib/Employee");

describe("Employee", () =>{
    it("should create an object", () => {
        const dela = new Employee("BenDeLaCreme", 1, "dela@email.com");
        expect(typeof(dela)).toBe("object");
    })
    
    it("will take in a name property", () => {
        const dela = new Employee("BenDeLaCreme", 1, "dela@email.com");
        expect(dela.name).toBe("BenDeLaCreme");
        expect(dela.getName()).toBe("BenDeLaCreme");
    })

    it("will take in an id property", () => {
        const dela = new Employee("BenDeLaCreme", 1, "dela@email.com");
        expect(dela.id).toBe(1);
        expect(dela.getId()).toBe(1);
    })

    it("will take in an email property", () => {
        const dela = new Employee("BenDeLaCreme", 1, "dela@email.com");
        expect(dela.email).toBe("dela@email.com");
        expect(dela.getEmail()).toBe("dela@email.com");
    })

    it("will assign the Employee role by default", () => {
        const dela = new Employee("BenDeLaCreme", 1, "dela@email.com");
        expect(dela.getRole()).toBe("Employee");
    })

})