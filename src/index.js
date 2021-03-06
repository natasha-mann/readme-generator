const inquirer = require("inquirer");

const generateMarkdown = require("../src/utils/generateMarkdown");
const writeToFile = require("../src/utils/writeToFile");

// runs inquirer prompts and returns user answers
const getAnswersFromQuestions = async (questions) => inquirer.prompt(questions);

const init = async () => {
  // questions to be prompted by inquirer
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
      message: "Please give the usage information for your project",
      name: "usage",
    },

    // the questions with a "when" key will only run if the "when" function returns true

    {
      type: "confirm",
      message:
        "Would you like to give contribution guidelines for your project?",
      name: "confirmContribution",
    },
    {
      message: "Please give the contribution guidelines for your project",
      name: "contributing",
      when: (answers) => {
        return answers.confirmContribution;
      },
    },
    {
      type: "list",
      message: "Please choose a licence for your project",
      name: "license",
      choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    },
    {
      type: "confirm",
      message: "Would you like to add testing guidelines for your app?",
      name: "confirmTests",
    },
    {
      message: "Please give the test instructions for your project",
      name: "tests",
      when: (answers) => {
        return answers.confirmTests;
      },
    },
    {
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      message: "What is your email address?",
      name: "email",
      validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        );
      },
    },
    {
      message:
        "What would you like to name your README.md file? *** Only enter the file name, without the .md",
      name: "readme",
      default: "GENERATEDREADME",
    },
  ];

  const { readme, ...initialAnswers } = await getAnswersFromQuestions(
    questions
  );

  const getInstallationAnswers = async () => {
    const confirmInstallationQuestion = [
      {
        type: "confirm",
        message: "Would you like to add installation guidelines for your app?",
        name: "confirmInstallation",
      },
    ];

    const furtherInstallationQuestion = [
      {
        message: "Please add your installation code here",
        name: "installationCode",
      },
    ];

    const confirmFurtherInstallationQuestion = [
      {
        type: "confirm",
        message:
          "Would you like to add any further installation guidelines for your app?",
        name: "confirmFurtherInstallation",
      },
    ];

    const { confirmInstallation } = await getAnswersFromQuestions(
      confirmInstallationQuestion
    );

    if (confirmInstallation) {
      let inProgress = true;
      let installationDataString = "";

      while (inProgress) {
        const { installationCode } = await getAnswersFromQuestions(
          furtherInstallationQuestion
        );

        installationDataString += `${installationCode}\n`;

        const { confirmFurtherInstallation } = await getAnswersFromQuestions(
          confirmFurtherInstallationQuestion
        );

        if (!confirmFurtherInstallation) {
          inProgress = false;
        }
      }

      return installationDataString;
    } else {
      return "";
    }
  };

  const installation = await getInstallationAnswers();

  // user answers are passed to generateMarkdown fn and return value is stored
  const generatedMarkdown = generateMarkdown({
    ...initialAnswers,
    installation,
  });

  writeToFile(readme, generatedMarkdown);
};

init();
