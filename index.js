const { writeFile, copyFile } = require('./src/generate-page');
const generatePage = require(`./src/page-template`);
const inquirer = require(`inquirer`);
const promptEmployee = employeeData => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the employee name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please share your name!');
                    return false;
                }
            }
        },
        {
            type: `number`,
            name: `id`,
            message: `Enter the employee Id`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please provide the employee id as a number only!');
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the employee's email address`,
        },
        {
            type: 'checkbox',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern', 'Employee (none of above)'],
        },
        {
            type: 'confirm',
            name: 'confirmGithub',
            message: 'For an engineer, do you have the GitHub username?',
            default: true,
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide the GitHub username.',
            when: ({ confirmGithub }) => {
                if (confirmGithub) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmManager',
            message: 'For a manager, do you have the office number?',
            default: true,
        }, 
        {
            type: 'number',
            name: 'office',
            message: 'Please provide the office number.',
            when: ({ confirmManager }) => {
                if (confirmManager) {
                    return true;
                } else {
                    return false; 
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmSchool',
            message: 'For an intern, do you have the name of the school?',
            default: true,
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of the school for your intern?',
            when: ({ confirmSchool }) => {
                if (confirmSchool) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};



promptEmployee()
     .then (pageHTML => {
        return writeFile(pageHTML);
    })
    .then (writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

   