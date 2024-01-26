const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  // Can set GitHUb account via constructor
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

// getRole() should return \"Engineer\"

module.exports = Engineer;
