import Employee from "./Employee";

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  // Can set GitHUb account via constructor
  constructor(github) {
    this.github = github;
  }
}

// getRole() should return \"Engineer\"

// Can get GitHub username via getGithub()
