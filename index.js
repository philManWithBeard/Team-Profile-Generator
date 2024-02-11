const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const path = require("path");
const { fileURLToPath } = require("url");
const fs = require("fs");
const managerPrompts = require("./prompts/managerPrompts.js");
const choicePrompts = require("./prompts/choicePrompts.js");
const internPrompts = require("./prompts/internPrompts.js");
const engineerPrompts = require("./prompts/engineerPrompts.js");
const render = require("./src/page-template.js");
const inquirer = require("inquirer");

// set output directories and paths
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Set array to pass employees in to
const employees = [];

// function to start the manager prompts, pass them into a new Manager object and to push that object into an array
const manager = async () => {
  try {
    // asks user manager questions and wait for response
    const answers = await managerPrompts();

    // instantiate new manager object
    const managerObj = new Manager(
      answers.name,
      answers.employeeId,
      answers.email,
      answers.officeNumber
    );

    // push the results into employees array
    employees.push(managerObj);

    // call the employee choice function
    employeeChoice();
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// function to start the employee choice prompts, then call the appropriate function
const employeeChoice = async () => {
  try {
    // asks user questions and wait for response
    const answers = await choicePrompts();

    // selects the correct function to call based on user input
    switch (answers.team_member) {
      case "Engineer":
        engineer();
        break;
      case "Intern":
        intern();
        break;
      default:
        // renders the html
        const html = render(employees);
        //sends html to writeToFile function
        writeToFile(html);
        break;
    }
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// function to start the engineer prompts, pass them into a new engineer object and to push that object into an array
const engineer = async () => {
  try {
    // uses imported inquirer prompts
    const answers = await engineerPrompts();
    // creates a new Engineer object to store them in
    const engineerObj = new Engineer(
      answers.engineer_name,
      answers.engineer_id,
      answers.engineer_email,
      answers.engineer_github
    );

    // pushes them into the employees array
    employees.push(engineerObj);
    // calls the employeechoice function again
    employeeChoice();
  } catch (error) {
    console.log(error);
  }
};

// function to start the intern prompts, pass them into a new intern object and to push that object into an array
const intern = async () => {
  try {
    // uses imported inquirer prompts
    const answers = await internPrompts();

    // creates a new Intern object to store answers in
    const internObj = new Intern(
      answers.intern_name,
      answers.intern_id,
      answers.intern_email,
      answers.intern_school
    );

    employees.push(internObj);
    employeeChoice();
  } catch (error) {
    console.log(error);
  }
};

// Function to write to output file
function writeToFile(html) {
  // Checks if 'output' folder exists in current directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    // Create 'output' folder if does not exists
    fs.mkdirSync(OUTPUT_DIR, 0o744);
    console.log("TADA! output folder Created!");
  }

  // write htmldata to 'team.html' file
  fs.writeFileSync(outputPath, html, "utf8");

  console.log("TADA! TEAM GENERATED MAGIC!");
}

// function call to initialize program
manager();
