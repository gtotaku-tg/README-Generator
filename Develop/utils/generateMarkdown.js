// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
      break
    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
      break
    case 'BSD 3-Clause "New" or "Revised" License':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
      break
    case 'GNU General Public License v3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
      break
    default:
      return ''
  }
}

  

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

