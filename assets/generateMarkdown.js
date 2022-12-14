// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  

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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if(license){
  return `Covered by ${license}`
 }

}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description 
  ${data.description}
    

    
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
    
## Installation
  ${data.installation}
    
    
## Usage
  ${data.usage}
  Provide instructions and examples for use. Include Screenshots/Screenrecords
    
## Credits
Collaborators: ${data.credit}
    
  
    
    
## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
    
  
    
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
