import Employee from "./Employee.js";

class Intern extends Employee {
  // Can set school via constructor
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // Can get school via getSchool()
  getSchool() {
    return this.school;
  }

  // getRole() should return \"Intern\"
  getRole() {
    return "Intern";
  }
}

export default Intern;
