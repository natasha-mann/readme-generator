const inquirer = require("inquirer");
const writeToFile = require("./writeToFile");

const getAnswersFromQuestions = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

const init = async () => {
  const questions = [
    {
      message: "What is the title of your project?",
      name: "title",
    },
    {
      message: "Please give a short description for your project",
      name: "description",
    },
    {
      message: "What are the installation instructions for your project?",
      name: "installation",
    },

    {
      message: "Please give the usage information for your project",
      name: "usage",
    },
    {
      message: "Please give the contribution guidelines for your project",
      name: "contributing",
    },
    {
      message:
        "If applicable, please give the test instructions for your project",
      name: "tests",
    },
    {
      type: "list",
      message: "Please choose a licence for your project",
      name: "license",
      choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    },
    {
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      message: "What is your email address?",
      name: "email",
    },
  ];
  const answers = await getAnswersFromQuestions(questions);
  writeToFile(answers);
};

init();
