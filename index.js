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
        // Description
        type: "input",
        message: "What is the READme Description?",
        name: "description"
    },
    {
        // Table of Contents
        type: "input",
        message: "What would you like in Table of Contents?",
        name: "tableOfContents"
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
});


// Takes object and puts it in READme
var filename = "README.md"
    console.log(filename);

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

      if (err) {
        return console.log(err);
      }

    console.log("Success!");

    });

// The generated README includes 1 badge that's specific to the repository.