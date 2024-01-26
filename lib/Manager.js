const Employee = require("./Employee");

// Can set office number via constructor argument
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // Can get office number via getOffice()
  getOfficeNumber() {
    return this.officeNumber;
  }

  // getRole() should return "Manager"
}

module.exports = Manager;
