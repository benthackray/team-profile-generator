const js = require("fs");
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const { writeFile } = require("fs");

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
    }
    ])

        .then(function ({ name, id, email, role }) {
            if (role === 'Manager') {
                inquirer.prompt([{
                    type: 'input',
                    message: 'What is their office number?',
                    name: 'office'
                }])
            } else if (role === 'Engineer') {
                inquirer.prompt([{
                    type: 'input',
                    message: 'What is their GitHub username?',
                    name: 'github'
                }])
            } else {
                inquirer.prompt([{
                    type: 'input',
                    message: 'What school do they attend?',
                    name: 'school'
                }])}
        })

}



const startHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="../dist/style.css" rel="stylesheet">
    <title>Team Profile</title>
</head>

<body>
    <div class="jumbotron">
        <h1>Team Profiles</h1>
    </div>


    <div class="team-cards">`

const managerHTML = `        <article>
<h3>${this.name}</h3>
<p class="manager">Manager</p>
<p>ID: ${this.id}</p>
<p>Email: ${this.email} </p>
<p>Office Number: ${this.office} </p>
</article>`

const engineerHTML = `        <article>
<h3>${this.name}</h3>
<p class="engineer">Engineer</p>
<p>ID: ${this.id}</p>
<p>Email: ${this.email} </p>
<p>GitHub: ${this.github} </p>
</article>`

const internHTML = `        <article>
<h3>${this.name}</h3>
<p class="intern">Intern</p>
<p>ID: ${this.id}</p>
<p>Email: ${this.email} </p>
<p>School: ${this.school} </p>
</article>`

const finishHTML = `    </div>
</body>

</html>`

newEmployee()