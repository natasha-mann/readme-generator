const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const writeToFile = (answers) => {
  const callback = (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Write successful");
    }
  };

  fs.appendFile("./GENERATED_README.md", generateMarkdown(answers), callback);
};

module.exports = writeToFile;
