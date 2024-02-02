import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import figlet from "figlet";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import managerPrompts from "./prompts/managerPrompts.js";
import choicePrompts from "./prompts/choicePrompts.js";
import internPrompts from "./prompts/internPrompts.js";
import engineerPrompts from "./prompts/engineerPrompts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

// asynchronous function to initialise the app
const manager = async () => {
  try {
    // asks user questions and wait for response
    const answers = await managerPrompts();

    const managerObj = new Manager(
      answers.name,
      answers.employeeId,
      answers.email,
      answers.officeNumber
    );
    // push the results into employees array
    employees.push(managerObj);
    employeeChoice();
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// asynchronous function to initialise the app
const employeeChoice = async () => {
  try {
    // asks user questions and wait for response
    const answers = await choicePrompts();

    switch (answers.team_member) {
      case "Engineer":
        engineer();
        break;
      case "Intern":
        intern();
        break;
      default:
        console.log("no more employees");
        const html = render(employees);
        writeToFile(html);
        break;
    }
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// asynchronous function to initialise the app
const engineer = async () => {
  try {
    const answers = await engineerPrompts();
    const engineerObj = new Engineer(
      answers.engineer_name,
      answers.engineer_id,
      answers.engineer_email,
      answers.engineer_github
    );

    employees.push(engineerObj);
    employeeChoice();
  } catch (error) {
    console.log(error);
  }
};

// asynchronous function to initialise the app
const intern = async () => {
  try {
    const answers = await internPrompts();
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
