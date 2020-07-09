var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([{
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

    //   type: "list",
    //   message: "What is your preferred method of communication?",
    //   name: "contact",
    //   choices: [
    //     "email",
    //     "phone",
    //     "telekinesis"
    //   ]


    // Installation
    // Usage
    // License
    // Contributing
    // Tests
    // Questions



    // The generated README includes 1 badge that's specific to the repository.
]).then(function (data) {

    console.log(data);

    // var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    //   if (err) {
    //     return console.log(err);
    //   }

    console.log("Success!");

    // });
});




//   Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions



// The generated README includes 1 badge that's specific to the repository.