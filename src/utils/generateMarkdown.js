/*
Individual functions which render
each section of the readme
depending on user input
*/

const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `
![${license} badge](https://img.shields.io/badge/license-${license}-green)
`;
  } else {
    return "";
  }
};

const getLicenseLink = (license) => {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
    case "APACHE_2.0":
      return "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL_3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "BSD_3":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "None":
      return "";
      break;
    default:
      return "";
      break;
  }
};

const renderLicenseSection = (license) => {
  const licenseLink = getLicenseLink(license);
  if (license !== "None") {
    return `
## License
This project is licensed under the ${license} license.

For further information about this license, see [here](${licenseLink}).
`;
  } else {
    return "";
  }
};

const renderInstallationSection = (installation, furtherInstallation) => {
  if (installation && !furtherInstallation) {
    return `
## Installation
\`\`\`
${installation}
\`\`\`
`;
  } else if (installation && furtherInstallation) {
    return `
## Installation
\`\`\`
${installation}
    
${furtherInstallation}
\`\`\`
`;
  } else {
    return "";
  }
};

const renderUsageSection = (usage) => {
  if (usage) {
    return `
## Usage
${usage}
`;
  } else {
    return "";
  }
};

const renderContributingSection = (contributing) => {
  if (contributing) {
    return `
## Contributing
${contributing}
`;
  } else {
    return "";
  }
};

const renderTestsSection = (tests) => {
  if (tests) {
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
    if (!value || value === "None") {
      return "";
    } else {
      const upperCaseKey = key.charAt(0).toUpperCase() + key.slice(1);
      tableOfContentsArray.push(`* [${upperCaseKey}](#${key})\n`);
    }
  };

  answersArray.forEach(callback);
  tableOfContentsArray.push("* [Questions](#questions)");
  const tableOfContents = tableOfContentsArray.join(" ");
  return tableOfContents;
};

// main function to render markdown which will be written to file
const generateMarkdown = (answers) => {
  const {
    title,
    description,
    installation,
    furtherInstallation,
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
  const installationSection = renderInstallationSection(
    installation,
    furtherInstallation
  );
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

  ${installationSection}

  ${usageSection}

  ${contributingSection}

  ${testsSection}

  ${licenseSection}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly by [email](mailto:${email}). You can find more of my work on [Github](https://www.github.com/${github}).
`;
};

module.exports = generateMarkdown;
