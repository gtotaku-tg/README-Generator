// packages needed for this application
const inquirer = require("inquirer");
// Importing Utilities module
const util = require('util')
// Importing File System module
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/badges");
const questions = require("./utils/questions").questions;

// // Prompts the user with questions
// async function promptUser() {
//   try {
//       const answers = await inquirer.prompt(questions);
//       return answers;
//   } catch (error) {
//       console.error("Error while prompting:", error);
//       throw error;
//   }
// }

// Writes content to a file asynchronously
const writeFileAsync = util.promisify(fs.writeFile);
//initialize the app
async function init() { 
  try {
      const answers = await inquirer.prompt(questions);
      answers.licenseBadge = licenseBadge(answers.license);
      let generateContent = generateMarkdown(answers);
      await writeFileAsync('README.md', generateContent);
      console.log('Successfully wrote to README.md');
  } catch (error) {
      console.error('Error while writing file', error);
  }
}
// Function call to initialize app
init();
   

// // Create a function to write README file

// const writeToFile = (fileName, data) => {

// function writeToFile(data) {
//   fs.writeFile('README.md', data, (err) =>
//   err? console.log(err): console.log("README file is generated and saved!")
//   );
// }

// // Create a function to initialize app
// // When the application start, firstly call inquirer prompts function
// function init() {
//   inquirer
//     .prompt(questions)
//     .then(answers => {
//       const readme = generateMarkdown(answers);
//       writeToFile(readme);
//     })
//     // console.log(answers);
   
//     // .catch(error => {
//     //   if(error.isTtyError) {
//     //     console.log("Prompt couldn't be rendered in the current environment")
//     //   }else{
//     //     console.log("Something else went wrong")
//     //   }
//     // })
// }
  

// // Function call to initialize app
// init();
