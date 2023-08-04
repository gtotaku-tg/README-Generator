// packages needed for this application
const inquirer = require("inquirer");
// Importing Utilities module
const util = require('util')
// Importing File System module
const fs = require('fs');
const generateMd = require("./utils/generateMarkdown");

// // Prompts the user with questions
function promptQuestion() {
  return inquirer
  .prompt([
    {
      type: 'input',
      message: ' What is the title of the file? ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of the project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How would you like to use this project?',
      name: 'usage',
    },
    {
      type:'input',
      message: 'What are the contribution you could made?',
      name: 'contribution'
    },
    {
      type:'input',
      message: 'What are the test instructions?',
      name: 'test'
    },
    {
      type: 'list',
      message: 'What license would you like to use?',
      name: 'licenses',
      choices: [
        'MIT', 
        'Apache', 
        'GPL', 
        'BSD', 
        'None'],
    },
    {
      type:'input',
      message: 'What is your GitHub username?',
      name: 'gitname'
    },
    {
          type: 'input',
          message: 'What is your email address?',
          name: 'email',
      },
  ])
  };

// Writes content to a file asynchronously
const writeFileAsync = util.promisify(fs.writeFile);
//initialize the app
async function init() { 
  try {
      const answers = await promptQuestion();
      // answers.license = licenseBadge(answers.license);
      let generateContent = generateMd(answers);
      await writeFileAsync('./export/README.md', generateContent);
      console.log('Successfully wrote to README.md');
  } catch (error) {
      console.error('Error while writing file', error);
  }
}
// Function call to initialize app
init();
   


