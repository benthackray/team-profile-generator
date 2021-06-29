const js = require("js");
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./Employee");

function newEmployee() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the name of this employee?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What is their position?',
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ],
        name: 'role',
    },
    ])
}