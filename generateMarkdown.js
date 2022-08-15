// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `![License:${license}](https://img.shields.io/badge${license}-green.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}




//data.title
//data.authorName
//data.description

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${renderTitle(data.title)}

    ## Description 
    ${data.description}
    
    Brief description explaining the what, why, and how
    - what was the motivation?
    - Why did you build this project?
    - What problem does it solve?
    - What did you learn?
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributions](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${data.installation}
    
    
    ## Usage
    $
    Provide instructions and examples for use. Include Screenshots/Screenrecords
    
    ## Credits
    md
    List of collaaborators if any link their Github profiles.
    Any third-party assets that require attribution
    
    
    ## License
    
    Add License information
    
    ## Contributions
    
    If you created an application of package and would like other development
    
    ## Tests
    
    This is where the test that you have made will go 
    
    ## Questions
    
    (have a user input that will add Github user name that will take them to github profile.)(when the users inputs email this will display to this section as well and give instructions on to contact user with more questions)
     `;
}

module.exports = generateMarkdown;//grabs the whole function from this file that will make the README.md
