

// Create a function to generate markdown for README
function generateMd(answers) {
  return `
  
  # ${answers.title}

  ![badge](https://img.shields.io/badge/license-${answers.licenses}-brightgreen)
    
  
  ## Description

    ${answers.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)


  ## Installation

   ${answers.installation}

  ## Usage

   ${answers.usage}

  ## Contribution

   ${answers.contribution}

  ## Tests

   ${answers.test}

  ## License

  This application is covered by the ${answers.licenses} license. 

  ## Questions

  If you have any questions, please don't hesitate to email me: [${answers.email}](mailto:${answers.email}).
  My Github: [${answers.gitname}](${answers.gitname}).

`;
}

module.exports = generateMd;
