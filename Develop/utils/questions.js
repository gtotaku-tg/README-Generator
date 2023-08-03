// Create an array of questions for user input
const questions = [
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
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
      // {
      // 	type: 'input',
      // 	message: 'Name your file',
      // 	name: 'file',
      // },
  ]

  module.exports = {
    questions: questions
    }