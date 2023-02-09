// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate_html = require('./src/generateHTML.js');

// Create an array of questions for user input
const manager_questions = [
    "Please enter the team manager name.",
    "Please enter the team manager employee ID.",
    "Please enter the team manager email address.",
    "Please enter the team manager office number.",
   ];

const intern_questions = [
    "Please enter the engineer name.",
    "Please enter the engineer name employee ID.",
    "Please enter the engineer email address.",
    "Please enter the engineer github username.",

];

const engineer_questions = [
    "Please enter the intern name.",
    "Please enter the intern employee ID.",
    'Please enter the intern email address.',
    'Please enter the name of the school the intern is attending.',
];

// Create a function to generate HTML file
function generateHTML(fileName, data) {

const html = generate_html(data);

fs.writeFile(fileName, html, (err) => err ? console.error(err) : console.log('Commit logged!'));

}

function init(){

    inquirer
    .prompt([
          {
                      type: 'input',
                      message: questions[0],
                      name: 'username',
                    },
          {
                      type: 'input',
                      message: questions[1],
                      name: 'email',
                    },
          {
                      type: 'input',
                      message: questions[2],
                      name: 'title',
                    },
          {
                      type: 'input',
                      message: questions[3],
                      name: 'description',
                    },
          {
                      type: 'input',
                      message: questions[4],
                      name: 'installation',
                    },
          {
                      type: 'input',
                      message: questions[5],
                      name: 'usage'
  
                    },
          {
                      type: 'list',
                      message: questions[6],
                      name: 'license',
                      choices: ['Apache 2.0', 'MIT', 'Perl', 'Mozilla', 'GNU'],
                    },
          {
                      type: 'input',
                      message: questions[7],
                      name: 'contribute',
                    },
          {
                      type: 'input',
                      message: questions[8],
                      name: 'tests',
                    },
  
          ])
    .then((response) => { 
            console.log(response);
            generateHTML('dist/index.html', response);
    });

}


init();