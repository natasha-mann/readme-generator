const fs = require("fs");
const inquirer = require("inquirer");

const writeToFile = (answers) => {};

const getAnswersFromQuestions = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

const init = async () => {
  const questions = [];
  const answers = await getAnswersFromQuestions(questions);
  writeToFile(answers);
};

init();
