// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown.js');
// The readme file needs!! 
// 1.what the app is for?
//  a. Title of project(Enter user input and print to readme page @ top)
//  b. Description section
//  c. Table of Contents(Add links for each section that will take the user to the corresponding part of the readme)
//  d. Installation,
//  e. Usage
//  f. License
//  g. Contributing
//  h. Tests,
//  i. and Questions(have a user input that will add Github user name that will take them to github profile.)(when the users inputs email this will display to this section as well and give instructions on to contact user with more questions)

// 2. how to use the app?
// 3. how to install it?
// 4. how to report issues.
// 5. how to make contributions.
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type:'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type:'input',
                message:'Please provide a brief description of your project:',
                name:'Description',
            },
            {
                type:'input',
                message: 'Please provided the steps needed to install this application:',
                name: 'installation',
            },
            {
                type:'input',
                message:'Please provide instructions and examples of use:',
                name: 'usage',
            },
            {
                type:'input',
                message:'List all the collaborators if any:',
                name:'credit',
            },
            {
                type:'list',
                message:'Please select which license you would like to use from this list:',
                choice: ['Apache License 2.0', 'Boost Software License 1.0','BSD 3-License','BSD 2-License','Eclipse Pubic License 1.0', 'GNU GPL v3', 'GNU LGPL v3', 'GNU AGPL v3','The MIT License', 'The Unlicense'],
                name: 'License',
            },
            {
                type:'input',
                message:'What is your github username?',
                name:'github',
            },
            {
                type:'input',
                message:'What is your email?',
                name:'email',
            },
        ])
    }
questions();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
