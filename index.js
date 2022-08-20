// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./assets/generateMarkdown.js');
const path = require('path');
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


function init(){
const questions = [ 
    inquirer
        .prompt([
            {
                type:'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type:'input',
                message:'Please provide a brief description of your project:',
                name:'description',
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
                choices: ['Apache_2.0', 'Boost_1.0','BSD_3','Perl','N/A'],
                name: 'license',
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
            }

        ])
        .then((response) => {
            console.log(response)
            writeToFile('./output/README.md',markdown(response));
            console.log('It worked!!')
        }),
    ];
    
    }
    // Creates function to write the readme file
    function writeToFile (fileName, data){
        fs.writeFileSync(path.join(process.cwd(),fileName),data);
    }




// Function call to initialize app
 init()
