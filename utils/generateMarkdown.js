// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `
![${license} badge](https://img.shields.io/badge/license-${license}-green)
`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `
## License
This project is licensed under the ${license} license.
`;
  } else {
    return "";
  }
};

const renderTestsSection = (tests) => {
  if (tests !== "") {
    return `
## Tests
${tests}
`;
  } else {
    return "";
  }
};

const renderTableOfContents = (answers) => {
  if (answers.license !== "None") {
    return `
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
`;
  } else {
    return `
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    github,
    email,
  } = answers;

  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  const tableOfContents = renderTableOfContents(answers);
  const testsSection = renderTestsSection(tests);

  return `
  # ${title} 

  ${licenseBadge}

  ## Description
  ${description}

  ${tableOfContents}  

  ## Installation

  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributing}

  ${testsSection}

  ${licenseSection}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [Github](${github}).
`;
};

module.exports = generateMarkdown;
