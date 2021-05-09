const fs = require("fs");

const writeToFile = (fileName, generatedMarkdown) => {
  const callback = (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Write successful");
    }
  };

  fs.writeFile(`./${fileName}.md`, generatedMarkdown, callback);
};

module.exports = writeToFile;
