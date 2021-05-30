const inquirer = require('inquirer');
const generationMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

const questions =
[ 

        {
            type: "input",
            message: "what is the title for your project",
            name: "Title",
        },
        {

            type: "input",
            Message: "please give description of your project",
            name: "Description",
        },
        {

            type: "input",
            message: "What is your Github username",
            name: "userName",
        },
        {


            type: "input",
            name: "email",
            Message: "what is your email",

        },
        {
            type: "list",
            name: "license",
            Message: "what kind of license should your project have ",
            choices: ["Apache 2.0", "MIT", "BSD 2.0", "CCO 2.0", "NONE"],
        },
        {
            type: "input",
            name: "test",
            Message: "What commamd should be run to run test?",

        },
        {
            type: "input",
            name: "usage",
            Message: "What does the user need to know to run test?",
        },
    ]


function start() {
  inquirer.prompt(questions).then( responses => {
       console.log("generating readme")
       writeToFile("README.MD", generateMarkdown({...responses}) )
  })
}       

function writeToFile (filename , data){
return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

start();
