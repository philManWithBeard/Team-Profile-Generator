import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
// const inquirer = require("inquirer");
import path from "path";
import fs from "fs";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";
// const render = require("./src/page-template.js");

const managerPrompts = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What's the name of your project?",
      // was there a response, if not then return false
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your project title.");
          return false;
        }
      },
    },
  ]);
};

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employees = [];

// asynchronous function to initialise the app
const manager = async () => {
  try {
    // asks user questions and wait for response
    const answers = await managerPrompts();

    // push the results into employees array
    employees.push(answers);
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// function call to initialize program
manager();
