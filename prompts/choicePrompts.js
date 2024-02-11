const inquirer = require("inquirer");

const choicePrompts = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "team_member",
      message: "What type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members.",
      ],
    },
  ]);
};

module.exports = choicePrompts;
