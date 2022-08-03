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
const questions = [
    inquirer
        .prompt([
            {
                type:''
            }
        ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
