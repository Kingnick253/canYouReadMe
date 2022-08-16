// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `![License:${license}](https://img.shields.io/badge${license}-green.svg)`
  }else{
    return ' '
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache_2.0"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  if(license === "Boost_1.0"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }
  if(license === "BSD_3.0"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  }
  if(license === "Perl"){
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
  }
  if(license === "N/A"){
    return ` `
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "Apache_2.0"){
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === "Boost_1.0"){
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  }
  if(license === "BSD_3.0"){
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  }
  if(license === "Perl"){
    return `(https://opensource.org/licenses/Artistic-2.0)`
  }
  if(license === "N/A"){
    return ` `
  }

}




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
    ${data.usage}
    Provide instructions and examples for use. Include Screenshots/Screenrecords
    
    ## Credits
    ${data.credit}
    md
    List of collaaborators if any link their Github profiles.
    Any third-party assets that require attribution
    
    
    ## License
    ${data.credit}
    
    Add License information
    
    ## Contributions
    
    If you created an application of package and would like other development
    
    ## Tests
    
    This is where the test that you have made will go 
    
    ## Questions
    You can contact me at:
      Gmail:${data.email}
      Github:${data.github}
     `;
}

module.exports = generateMarkdown;//grabs the whole function from this file that will make the README.md
