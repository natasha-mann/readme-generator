// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title} 

  ![${data.license} badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
    

  ## Installation

  ${data.installation}
  

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This project is licensed under the ${data.license} license.

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [Github](${data.github}).
`;
};

module.exports = generateMarkdown;
