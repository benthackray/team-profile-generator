const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office){
        this.office = office;
        super(name, id, email);
    }
    getOffice(){
        return this.office;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;