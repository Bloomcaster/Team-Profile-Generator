
const inquirer = requier('inquirer');
const Manager = requier('./lib/Manager');
const Engineer = requier('./lib/Engineer');
const Intern = requier('./lib/Intern');
const createSite = requier('./src/create-site.js');
const path = requier("path");
const fs = requier("fs");
const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "roster.html");
const roster = [];

const promptManager = () => {
    return inquier.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Your name here (REQUIREMENT)',
            validate: nameInput => {
                if (nameImput) {
                    return true;
                } else {
                    console.log('Must enter your name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter your employee ID (REQUIREMENT)',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Must enter your ID Number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide current email address (REQUIREMENT)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Must enter your current email!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
            roster.push(manager);
            promptMenu ();

    })
};

const promptMenu = () => {
    return inquier.prompt([
        {
            type: 'list',
            name: 'menu',
            messge: 'Select which option roster positions you would like to input',
            choices: ['add manager', 'add intern', 'no addtional team memeber to roster']
}])

.then(userChoice => {
    switch (userChoice.menu) {
        case "add engineer":
        promptEngineer();
        break;
        case "add intern":
        promptIntern ();
        break;
        default:
            buildRoster();

    }
});
};

const promptEngineer = () => {
    console.log(`

    Add a New Engineer
    
    `);
    return inquier.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Write in the name of the engineer (REQUIREMENT)',
            validate: engineerName => {
                if (engineerName) {
                return true;
            } else {
                console.log('Enter the name of the engineer please!');
                return false;
            }
        }
},
{ 
    type: 'input',
    name: 'githubUsername',
    message: 'Enter github unsername (REQUIREMENT)',
    validate: githubUsername => {
        if (githubUsername) {
            return true;
        } else {
            console.log('Must enter valid github username!');
            return false;
        }
    }
},
    ]).then(answers =>{
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        roster.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    Add New Intern
    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern (REQUIREMENT)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Enter the interns name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Write in the employee ID',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Enter the employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'email',
            name: 'email',
            message: 'Enter a valid email (REQUIREMENT)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Must enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'school',
            name: 'school',
            message: 'Please enter the last school you are either attending currently or graduated from',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Must enter your most current school of attendence!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern (answers.name, answers.employeeID, answers.email, answers.school);
        roster.push(intern);
        promptMenu ();
    })
};

const createRoster = () => {
    console.log(`
    Finished Roster
    `);


if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, generateSite(roster), "utf-8");

}

promptManager();






    

