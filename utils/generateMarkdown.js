// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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

const renderContributingSection = (contributing) => {
  if (contributing !== "") {
    return `
## Contributing
${contributing}
`;
  } else {
    return "";
  }
};

const renderTableOfContents = ({
  installation,
  usage,
  contributing,
  tests,
  license,
}) => {
  const answersArray = Object.entries({
    installation,
    usage,
    contributing,
    tests,
    license,
  });
  console.log(answersArray);
  const tableOfContentsArray = [];
  const callback = ([key, value]) => {
    if (value === "" || value === "None") {
      console.log(value, "empty", value === "");
    } else {
      tableOfContentsArray.push(`* [${key}](#${key})\n`);
    }
  };

  answersArray.forEach(callback);
  console.log(tableOfContentsArray);
  const tableOfContents = tableOfContentsArray.join(" ");
  console.log(tableOfContents);
  return tableOfContents;
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
  const tableOfContents = renderTableOfContents({
    installation,
    usage,
    contributing,
    tests,
    license,
  });
  const testsSection = renderTestsSection(tests);
  const contributingSection = renderContributingSection(contributing);

  return `
  # ${title} 

  ${licenseBadge}

  ## Description
  ${description}

  ## Table of Contents
  ${tableOfContents}
  * [Questions](#questions)  

  ## Installation

  ${installation}

  ## Usage
  ${usage}

  ${contributingSection}

  ${testsSection}

  ${licenseSection}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [Github](${github}).
`;
};

module.exports = generateMarkdown;
