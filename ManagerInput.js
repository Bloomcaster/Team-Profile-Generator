
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //parent constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRolde () {
        return "Manager";
    }
}

module.exports = Manager;