// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is your title?'
       
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is your description?'
    },
    // {
    //     // type: 'input',
    //     // name: 'tableOfContents',
    //     // message: 'what is your table of contents?'
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?'
    },
    // {
    //     type: 'input',
    //     name: 'credits',
    //     message: 'Are any credits due?'
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Which license was used?',
        choices: ['Apache License 2.0', 'GNU GPL', 'MIT', 'Boost Software License 1.0', 'Creative Commons Zero', 'None']
    },
    // {
    //     type: 'input',
    //     name: 'features',
    //     message: 'What are the features of this application?'
    // },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what steps can be taken to tests this application?'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'enter your GitHub profile Link'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(data => {
   //console.table(questions)
    console.table(data);
    console.log(generateMarkdown(data));
    fs.writeFile('./output/READMEGEN.md', generateMarkdown(data),(err)=> err ? console.log(err) : console.log('Success'));
}) 


    // fs.writeFile("doohicky.js", "console.log('doohicky')", (err, tacocat) => {
    //     if(err) throw err
    //     console.log(tacocat)
    // })
}

// Function call to initialize app
init();
