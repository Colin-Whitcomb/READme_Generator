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
        message: "What is the READme Description?",
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
        "GPL v3",
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
        message: "Please describe the usage of the app:",
        name: "tests"
    },
    {
        // Questions
        type: "input",
        message: "Are there any questions that remain about this project?",
        name: "questions"
    },

    // The generated README includes 1 badge that's specific to the repository.


// Creates object from user inputs 
]).then(function (data) {
    console.log(data);

    // Taking user inputs and moving to page
    var title = data.title;
    var github = data.git;
    var description = data.description;
    var install = data.install;
    var usage = data.usage;
    var license = data.license;
    var contributors = data.contributors;
    var tests = data.tests;
    var questions = data.questions;


    // format of ReadMe
    var page = 
`
# ${ title }

### [GitHub Repository](https://github.com/${ github })
    
### Description
${ description }
    
### Table of contents (links of:)
    
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
    
### Installation
${ install }

### Usage
${ usage }

### License badge
[![License: ${ license }]("https://img.shields.io/badge/License-${ license }-yellow.svg)](https://opensource.org/licenses/${ license }")
   

### Contributing
${ contributors }

### Tests
${ tests }

### Questions
 ${ questions }`






// Takes object and puts it in READme
fs.writeFile('README.md', page, data, (err) => {
    if (err) throw err;
    console.log('it worked!');
});

});

// The generated README includes 1 badge that's specific to the repository.