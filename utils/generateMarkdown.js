// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  return "";
 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'None'){
    return ''
  }
  else if(license != 'None'){

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License` 
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge()}
  # ${data.title}
  ## Description:  
  ${data.description}
  ## Table Of Contents 
  ${data.tableOfContents}
  ## [Installation](#Installation)
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection()}
  ## Contribute
  ${data.contribute}
  ## Tests 
  ${data.tests}
  ## Questions 
  If you have any questions, here is my email ${data.email}. Also here is a link to my GitHub ${data.GitHub}
  `

}

module.exports = generateMarkdown;


// badge links
//Apache License 2.0 = [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

//GNU GPL v 3.0 = [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

//MIT = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

//BSD 2 = [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

//BSD 3 =[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

//Boost software license 1.0 = [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

//Creative Commons zero = [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)


// Eclipse Public License = [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

//