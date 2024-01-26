const Employee = require("./Employee");

// Can set office number via constructor argument
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}

// getRole() should return "Manager"

// Can get office number via getOffice()

module.exports = Manager;
