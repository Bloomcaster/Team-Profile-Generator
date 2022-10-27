
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //parent constructor is called here using super, nice shortcut for code writing!
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;