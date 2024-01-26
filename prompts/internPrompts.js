import inquirer from "inquirer";

const internPrompts = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What's the team managers name?",
      // was there a response, if not then return false
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your managers name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "What's the managers Employee ID?",
      // was there a response, if not then return false
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your managers Employee ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What's the team managers email address?",
      // was there a response, if not then return false
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log(
            "That didn't work. Re-enter your managers email address."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What's the team managers office number?",
      // was there a response, if not then return false
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log(
            "That didn't work. Re-enter your managers office number."
          );
          return false;
        }
      },
    },
  ]);
};

export default internPrompts;
