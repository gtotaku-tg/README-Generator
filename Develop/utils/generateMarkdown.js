
// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
    ## License
    This project is licensed under the ${license} license.
    `;
  }else{
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

    ${data.renderLicenseBadge}
  
  ## Description

    ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)


  ## Installation

   ${data.installation}

  ## Usage

   ${data.usage}

  ## Contribution

   ${data.contribution}

  ## Tests

   ${data.test}

  ## License

    ${data.license}

  ## Questions

  If you have any questions, please don't hesitate to email me: [${data.email}](mailto:${data.email}).
  My Github: [${data.gitname}](${data.gitname}).

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseSection,
  generateMarkdown
}

