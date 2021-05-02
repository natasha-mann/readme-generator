const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `
![${license} badge](https://img.shields.io/badge/license-${license}-green)
`;
  } else {
    return "";
  }
};

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

const renderInstallationSection = (installation) => {
  if (installation !== "") {
    return `
## Installation
${installation}
`;
  } else {
    return "";
  }
};

const renderUsageSection = (usage) => {
  if (usage !== "") {
    return `
## Usage
${usage}
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
  const tableOfContentsArray = [];
  const callback = ([key, value]) => {
    if (value === "" || value === "None") {
      return "";
    } else {
      const upperCaseKey = key.charAt(0).toUpperCase() + key.slice(1);
      tableOfContentsArray.push(`* [${upperCaseKey}](#${key})\n`);
    }
  };

  answersArray.forEach(callback);
  const tableOfContents = tableOfContentsArray.join(" ");
  return tableOfContents;
};

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

  const tableOfContents = renderTableOfContents({
    installation,
    usage,
    contributing,
    tests,
    license,
  });

  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  const installationSection = renderInstallationSection(installation);
  const usageSection = renderUsageSection(usage);
  const contributingSection = renderContributingSection(contributing);
  const testsSection = renderTestsSection(tests);

  return `
  # ${title} 

  ${licenseBadge}

  ## Description
  ${description}

  ## Table of Contents
  ${tableOfContents}
  * [Questions](#questions)  

  ${installationSection}

  ${usageSection}

  ${contributingSection}

  ${testsSection}

  ${licenseSection}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work on [Github](${github}).
`;
};

module.exports = generateMarkdown;
