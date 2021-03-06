var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is your name?"
    },
    {
        type: "checkbox",
        message: "What languages do you know?",
        name: "stack",
        choices: [
            "English", 
            "Spanish", 
            "French"
        ]
    },
    {
        type: "list",
        message: "What is preferred method of communication?",
        name: "contact",
        choices: [
            "email", 
            "text", 
            "phone" 
        ]
    }
]).then(function(data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if(err) {
        return console.log(err);
    }
    else {
        console.log("success");
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err) throw err;
            console.log(data);
          });;
    }
});
});

