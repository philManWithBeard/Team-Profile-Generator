import inquirer from "inquirer";

const internPrompts = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "intern_name",
      message: "What is your intern's name?",
    },
    {
      type: "input",
      name: "intern_id",
      message: "What is your intern's id?",
      validate: function (value) {
        if (isNaN(value)) return " Please enter valid ID";
        else return true;
      },
    },
    {
      type: "input",
      name: "intern_email",
      message: "What is your intern's email?",
      validate: function (value) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

        if (valid) return true;
        else return "  Please enter valid email ID ";
      },
    },
    {
      type: "input",
      name: "intern_school",
      message: "What is your intern's school?",
    },
  ]);
};

export default internPrompts;
