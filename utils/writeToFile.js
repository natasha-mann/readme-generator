const fs = require("fs");

const writeToFile = (generatedMarkdown) => {
  const callback = (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Write successful");
    }
  };

  fs.appendFile("./GENERATED_README.md", generatedMarkdown, callback);
};

module.exports = writeToFile;
