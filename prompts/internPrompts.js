const inquirer = require("inquirer");

const internPrompts = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "intern_name",
      message: "What is your intern's name?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your intern's name?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "intern_id",
      message: "What is your intern's id?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your intern's github ID?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "intern_email",
      message: "What is your intern's email?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your intern's email?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "intern_school",
      message: "What is your intern's school?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log(
            "That didn't work. Re-enter your intern's github school?"
          );
          return false;
        }
      },
    },
  ]);
};

module.exports = internPrompts;
