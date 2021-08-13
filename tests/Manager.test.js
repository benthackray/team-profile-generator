const Manager = require("../lib/Manager");

describe('Manager', () => {
    it("should create an object", () => {
        const rupaul = new Manager("Rupaul Charles", 4, "rupaul@email.com", "101");
        expect(typeof(rupaul)).toBe("object");
    })
    
    it("will take in a name property", () => {
        const rupaul = new Manager("Rupaul Charles", 4, "rupaul@email.com", "101");
        expect(rupaul.name).toBe("Rupaul Charles");
        expect(rupaul.getName()).toBe("Rupaul Charles");
    })

    it("will take in an id property", () => {
        const rupaul = new Manager("Rupaul Charles", 4, "rupaul@email.com", "101");
        expect(rupaul.id).toBe(4);
        expect(rupaul.getId()).toBe(4);
    })

    it("will take in an email property", () => {
        const rupaul = new Manager("Rupaul Charles", 4, "rupaul@email.com", "101");
        expect(rupaul.email).toBe("rupaul@email.com");
        expect(rupaul.getEmail()).toBe("rupaul@email.com");
    })

    it("will assign the Manager role", () => {
        const rupaul = new Manager("Rupaul Charles", 4, "rupaul@email.com", "101");
        expect(rupaul.getRole()).toBe("Manager");
    })

    it("will take in an Office", () =>{
        const rupaul = new Manager("Rupaul Charles", 4, "rupaul@email.com", "101");
        expect(rupaul.office).toBe("101");
        expect(rupaul.getOffice()).toBe("101");
    })
})
