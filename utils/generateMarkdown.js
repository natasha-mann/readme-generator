// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  return `https://img.shields.io/badge/license-${license}-green`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  return `
  # ${title} 

  ![${license} badge](${licenseBadge})

  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
    

  ## Installation

  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## License
  This project is licensed under the ${license} license.

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [Github](${github}).
`;
};

module.exports = generateMarkdown;
