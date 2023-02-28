// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
      { type: 'input' , name: 'Name' , message: 'What would you like to name your project?'}

    , { type: 'input' , name: 'Description' , message: 'Now tell me what you would like in the description of your project?'}

    , { type: 'input' , name: 'Installation' , message: 'What is your installation process'}
    
    , { type: 'input' , name: 'Usage' , message: 'Would you like to put any information on the usage of your project?'}

    , { type: 'input' , name: 'Contribution' , message: 'What are your guidelines when it comes to contribution?'}

    , { type: 'input' , name: 'Test' , message: 'What are your test instructions?'}
  ]);
};

// TODO: Create a function to write README file

const writeToFile = (respones) => {
  return generateMarkdown(respones);
};

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((respones) => writeFileAsync('README.md', writeToFile(respones)))
    .then(() => console.log('Good job! You added your README.md file!'))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
