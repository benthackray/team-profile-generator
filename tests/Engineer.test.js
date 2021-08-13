const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it("should create an object", () => {
        const jinkx = new Engineer("Jinkx Monsoon", 2, "jinkx@email.com", "jinkxmonsoon");
        expect(typeof(jinkx)).toBe("object");
    })
    
    it("will take in a name property", () => {
        const jinkx = new Engineer("Jinkx Monsoon", 2, "jinkx@email.com", "jinkxmonsoon");
        expect(jinkx.name).toBe("Jinkx Monsoon");
        expect(jinkx.getName()).toBe("Jinkx Monsoon");
    })

    it("will take in an id property", () => {
        const jinkx = new Engineer("Jinkx Monsoon", 2, "jinkx@email.com", "jinkxmonsoon");
        expect(jinkx.id).toBe(2);
        expect(jinkx.getId()).toBe(2);
    })

    it("will take in an email property", () => {
        const jinkx = new Engineer("Jinkx Monsoon", 2, "jinkx@email.com", "jinkxmonsoon");
        expect(jinkx.email).toBe("jinkx@email.com");
        expect(jinkx.getEmail()).toBe("jinkx@email.com");
    })

    it("will assign the Engineer role", () => {
        const jinkx = new Engineer("Jinkx Monsoon", 2, "jinkx@email.com", "jinkxmonsoon");
        expect(jinkx.getRole()).toBe("Engineer");
    })

    it("will take in a Github username", () =>{
        const jinkx = new Engineer("Jinkx Monsoon", 2, "jinkx@email.com", "jinkxmonsoon");
        expect(jinkx.github).toBe("jinkxmonsoon");
        expect(jinkx.getGithub()).toBe("jinkxmonsoon");
    })
})
