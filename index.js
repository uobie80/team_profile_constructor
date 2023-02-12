// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate_html = require('./src/generateHTML');
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

const engineer_questions = [
    "Please enter the engineer name.",
    "Please enter the engineer name employee ID.",
    "Please enter the engineer email address.",
    "Please enter the engineer github username.",

];

const intern_questions = [
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


function showInternPrompts(){

    inquirer
    .prompt([
          {
              type: 'input',
              message: intern_questions[0],
              name: 'name',
                    },
          {
              type: 'input',
              message: intern_questions[1],
              name: 'emplid',
                    },
          {
              type: 'input',
              message: intern_questions[2],
              name: 'email',
                    },
          {
              type: 'input',
              message: intern_questions[3],
              name: 'school',
                    },
  
          ])
    .then((response) => { 
             //Output the user input to the console
            console.log(response);
            //Initialize Intern object
            let intern = new Intern(response.name, response.emplid, response.email, response.school);
            //Add intern object to employee profile array
            employee_profiles.push(intern);
            //Ask end user if he/she would like to continue creating additional employee profiles
           ShowMenu();
    });

}


function showEngineerprompts(){
    inquirer
    .prompt([
          {
              type: 'input',
              message: engineer_questions[0],
              name: 'name',
                    },
          {
              type: 'input',
              message: engineer_questions[1],
              name: 'emplid',
                    },
          {
              type: 'input',
              message: engineer_questions[2],
              name: 'email',
                    },
          {
              type: 'input',
              message: engineer_questions[3],
              name: 'github_username',
                    },
  
          ])
    .then((response) => { 
             //Output the user input to the console
            console.log(response);
            //Initialize Engineer object
            let engineer = new Engineer(response.name, response.emplid, response.email, response.github_username);
            //Add engineer object to employee profile array
            employee_profiles.push(engineer);
            //Ask end user if he/she would like to continue creating additional employee profiles
           ShowMenu();
    });
}

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
            console.log(response.menu);
            if (response.menu === "Intern"){
                showInternPrompts();
            } else if (response.menu === "Engineer") {
                showEngineerprompts();
            } else {
                console.log(employee_profiles);
                generateHTML('dist/index.html', employee_profiles);
            }
            
    });

}


function init(){

    inquirer
    .prompt([
          {
              type: 'input',
              message: manager_questions[0],
              name: 'name',
                    },
          {
              type: 'input',
              message: manager_questions[1],
              name: 'emplid',
                    },
          {
              type: 'input',
              message: manager_questions[2],
              name: 'email',
                    },
          {
              type: 'input',
              message: manager_questions[3],
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