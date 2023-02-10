// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate_html = require('./src/generateHTML.js');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const employee_profiles = [];

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


function showInternPrompts(){}

function showEngineerprompts(){}

function ShowMenu(){

    inquirer
    .prompt([
        {
             type: 'list',
             message: "Please select an option to add an intern or engineer profile or finish to exit",
             name: 'menu',
             choices: ['Intern', 'Engineer', 'Finish'],
            },
          ])
    .then((response) => { 
            console.log(response);
            if (response.chocies === "intern"){
                showInternPrompts();
            } else if (response.choices === "Engineer") {
                showEngineerprompts();
            } else {
                generateHTML('dist/index.html', response);
            }
            
    });

}


function init(){

    inquirer
    .prompt([
          {
              type: 'input',
              message: questions[0],
              name: 'name',
                    },
          {
              type: 'input',
              message: questions[1],
              name: 'emplid',
                    },
          {
              type: 'input',
              message: questions[2],
              name: 'email',
                    },
          {
              type: 'input',
              message: questions[3],
              name: 'office_number',
                    },
  
          ])
    .then((response) => { 
             //Output the user input to the console
            console.log(response);
            //Initialize Manager object
            mngr = new Manager(response.name, response.emplid, response.email, response.office_number);
            //Add manager object to employee profile array
            employee_profiles.push(mngr);
            //Ask end user if he/she would like to continue creating additional employee profiles
           ShowMenu();
    });

}




init();