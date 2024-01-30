import inquirer from "inquirer";

const internPrompts = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "intern_name",
      message: "What is your intern's name?",
      validate: function (value) {
        if (isNaN(value))
          return "That didn't work. Re-enter your intern's name";
        else return true;
      },
    },
    {
      type: "input",
      name: "intern_id",
      message: "What is your intern's id?",
      validate: function (value) {
        if (isNaN(value))
          return "That didn't work. Please enter your intern's ID";
        else return true;
      },
    },
    {
      type: "input",
      name: "intern_email",
      message: "What is your intern's email?",
      validate: function (value) {
        if (isNaN(value))
          return "That didn't work. Please enter your intern's email";
        else return true;
      },
    },
    {
      type: "input",
      name: "intern_school",
      message: "What is your intern's school?",
      validate: function (value) {
        if (isNaN(value))
          return "That didn't work. Please enter your intern's school";
        else return true;
      },
    },
  ]);
};

export default internPrompts;
