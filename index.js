var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt(
    [{
        // Title
        type: "input",
        name: "title",
        message: "What do you want to title it?"
    },
    {
        // GitHub
        type: "input",
        name: "git",
        message: "What is your GitHub username?"
    },
    {
        // Description
        type: "input",
        message: "What is the description of the application?",
        name: "description"
    },
    {
        // Installation
        type: "input",
        message: "How do you install this app?",
        name: "install"
    },
    {
        // Usage
        type: "input",
        message: "Please describe the usage of the app:",
        name: "usage"
    },
    {
      type: "list",
      message: "What license did you use?",
      name: "license",
      choices: [
        "MIT",
        "GPLv3",
        "AGPL"
      ]
    },
    {
        // Contributer
        type: "input",
        message: "List all contributors:",
        name: "contributors"
    },
    {
        // Tests
        type: "input",
        message: "What tests did you run on this application?",
        name: "tests"
    },
    {
        // Questions
        type: "input",
        message: "What's your email address?",
        name: "email"
    },
    {
        // Questions
        type: "input",
        message: "Please provide a url for your GitHub Profile Picture:",
        name: "image"
    },

    // The generated README includes 1 badge that's specific to the repository.


// Creates object from user inputs 
]).then(function (data) {
    console.log(data);

    // format of ReadMe
    var page = 
`
# ${ data.title }

### [GitHub Repository](https://github.com/${ data.git })
 
<p align="center">
    <img src="${ data.image }" width="500" />
</p>
    
### Description
${ data.description }
    
### Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
### Installation
${ data.install }

### Usage
${ data.usage }

### License
[![License: ${ data.license }](https://img.shields.io/badge/License-${ data.license }-yellow.svg)](https://opensource.org/licenses/${ data.license })
   
### Tests
${ data.tests }

### Questions?
Contact me! 
* Authors: ${ data.contributors }
* Email me: ${ data.email }`






// Takes object and puts it in READme
fs.writeFile('README.md', page, data, (err) => {
    if (err) throw err;
    console.log('it worked!');
});

});

// The generated README includes 1 badge that's specific to the repository.