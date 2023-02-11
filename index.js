// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What will the title of your application be?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'A Description of the application:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What type of examples/instructions for application usage?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Application Credits:',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What kind of License for the Application?',
        choices: ['None', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicensed'],
        default: 'None',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Github Username:',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'contact email:'
    }


];


const readmetemplate = ({title, description, installation, usage, contribution, Liscense, Github, Email}) => 
`# ${title}

## Description:
-${description}\n
## Table of Content:d

## Installation:
-${installation}\n
## Usage:
-${usage}\n
## Credits:
-${contribution}\n
## License: 
-${Liscense}\n
## Questions/Comments
-${Github}\n
-${Email}\n
## Test`;


// TODO: Create a function to write README file
function writeToFile(answers) { 
    const READMENOW = readmetemplate(answers);
    fs.writeFile('README.md', READMENOW, (err) =>
    err ? console.log(err) : console.log())
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile)
}

// Function call to initialize app
init();