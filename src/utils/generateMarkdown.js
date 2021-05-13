const renderLicenseBadge = (license) =>
  license !== "None"
    ? `![${license} badge](https://img.shields.io/badge/license-${license}-green)`
    : "";

const getLicenseLink = (license) => {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACHE_2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL_3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "BSD_3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
};

const renderLicenseSection = (license) =>
  license !== "None"
    ? `## License\nThis project is licensed under the ${license} license.\nFor further information about this license, see [here](${getLicenseLink(
        license
      )}).`
    : "";

const renderInstallationSection = (...args) =>
  args.length ? `## Installation\n\`\`\`\n${args.join("\n")}\n\`\`\`\n` : "";

const renderUsageSection = (usage) => (usage ? `## Usage\n${usage}` : "");

const renderContributingSection = (contributing) =>
  contributing ? `## Contributing\n${contributing}` : "";

const renderTestsSection = (tests) => (tests ? `## Tests\n${tests}` : "");

const renderTableOfContents = (contents) => {
  const callback = (acc, [key, value]) =>
    !value || value === "None"
      ? [...acc, ""]
      : [
          ...acc,
          `* [${key.charAt(0).toUpperCase() + key.slice(1)}](#${key})\n`,
        ];

  return [
    ...Object.entries(contents).reduce(callback, []),
    "* [Questions](#questions)",
  ].join(" ");
};

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
