// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What's the title of the file?",
    name: "title",
  },
  {
    type:'input',

  }
];

// TODO: Create a function to write README file
// Create a file using fs package
function writeToFile(fileName, data) {
fs.writeFile('README.md', 'utf8', function())
}

// TODO: Create a function to initialize app
// When the application start, firstly call inquirer prompts function
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

  });
}

// Function call to initialize app
init();
