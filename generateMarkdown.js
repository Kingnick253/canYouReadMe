// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTitle(title) {
  return `# ${data.title}`;

}
//data.title
//data.authorName
//data.description

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderTitle(data.title)}

`;
}

module.exports = generateMarkdown;//grabs the whole function from this file that will make the README.md
