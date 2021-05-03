const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");

const getAnswersFromQuestions = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

const init = async () => {
  const initialQuestions = [
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
    {
      message:
        "If applicable, please give the contribution guidelines for your project",
      name: "contributing",
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
      validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        );
      },
    },
  ];

  const getInstallationInfo = async () => {
    const confirmInstallationQuestion = {
      type: "confirm",
      message: "Would you like to add installation guidelines for your app?",
      name: "confirmInstallation",
    };

    const isConfirmInstallation = await getAnswersFromQuestions(
      confirmInstallationQuestion
    );

    if (isConfirmInstallation.confirmInstallation) {
      const installationDetailQuestion = {
        message: "What are the installation instructions for your project?",
        name: "installation",
      };

      const installationDetail = await getAnswersFromQuestions(
        installationDetailQuestion
      );
      return installationDetail;
    } else {
      return { installation: "" };
    }
  };

  const getTestInfo = async () => {
    const confirmTestsQuestion = {
      type: "confirm",
      message: "Would you like to add testing guidelines for your app?",
      name: "confirmTests",
    };

    const isConfirmTests = await getAnswersFromQuestions(confirmTestsQuestion);

    if (isConfirmTests.confirmTests) {
      const testsDetailQuestion = {
        message: "Please give the test instructions for your project",
        name: "tests",
      };

      const testsDetail = await getAnswersFromQuestions(testsDetailQuestion);
      return testsDetail;
    } else {
      return { tests: "" };
    }
  };

  const initialAnswers = await getAnswersFromQuestions(initialQuestions);
  const installationAnswers = await getInstallationInfo();
  const testAnswers = await getTestInfo();

  const answers = { ...initialAnswers, ...installationAnswers, ...testAnswers };

  const generatedMarkdown = generateMarkdown(answers);
  writeToFile(generatedMarkdown);
};

init();
