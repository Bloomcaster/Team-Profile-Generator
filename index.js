const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const tempPage = require('./src/populatePage');

const rosterArray = []

function employeeQuestions() {
    inquirer
        .prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is the name of the employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id  of the employee?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email address of the employee?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'Please choose the role of the employee form list',
                choices: ["Manager", "Engineer", "Intern",],
            },

        ])
        .then(function (answers) {
            if (answers.role === "Manager") {
                managerQuestions(answers);
            } else if (answers.role === "Engineer") {
                engineerQuestions(answers);
            } else {
                internQuestions(answers);
            }
        })
};

function managerQuestions(managerAnswers) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is  the office number?',
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another employee?',
        }
    ])
    .then(function (answers) {
        const newManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, answers.officeNumber);
        rosterArray.push(newManager);
        if (answers.addAnother === true) {
            console.log("Employee has been added!!")
            employeeQuestions()
        } else {
            buildRoster();
            console.log("Employee has been added!!")
        }
    })
};

function engineerQuestions(engineerAnswers) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Provide their GitHub username?',
            },
            {
                type: 'confirm',
                name: 'addAnother',
                message: 'Would you like to add another employee?',
            }
        ])
        .then(function (answers) {
            const newEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, answers.github);
            rosterArray.push(newEngineer);
            if (answers.addAnother === true) {
                console.log("Employee added!")
                employeeQuestions()
            } else {
                buildRoster();
                console.log("Employee has been added!!")
            }
        })
};

function internQuestions(internAnswers) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What school did or do they currently attend?',
            },
            {
                type: 'confirm',
                name: 'addAnother',
                message: 'Would you like to add another employee?',
            }
        ])
        .then(function (answers) {
            const newIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, answers.school);
            rosterArray.push(newIntern);
            if (answers.addAnother === true) {
                console.log("Employee added!")
                employeeQuestions()
            } else {
                buildRoster();
                console.log("Employee has been added!")
            }
        })
};

function buildRoster() {
    fs.writeFile('./dist/index.html', tempPage(rosterArray), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created in dist/index.html")
        }
    })
};

employeeQuestions();