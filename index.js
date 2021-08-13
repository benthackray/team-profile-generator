const fs = require("fs");
const inquirer = require('inquirer');
// const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let data;
const employees = [];

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

        .then(function (response) {
            data = response
            let classPrompt;
            if (response.role === "Manager") {
                classPrompt = 'What is their office number?';
            } else if (response.role === "Engineer") {
                classPrompt = 'What is their GitHub username?';
            } else {
                classPrompt = 'What school do they attend?';
            }
            inquirer.prompt([{
                type: 'input',
                message: `${classPrompt}`,
                name: 'classInfo'
            },
            {
                type: "list",
                message: 'Would you like to add another member?',
                choices: [
                    'Yes',
                    'No'
                ],
                name: 'another'
            }])
                .then(function (response) {
                    data.classInfo = response.classInfo
                    let employee;
                    // console.log(data);
                    if (data.role === 'Manager') {
                        employee = new Manager(data.name, data.id, data.email, data.classInfo)

                    } else if (data.role === 'Engineer') {
                        employee = new Engineer(data.name, data.id, data.email, data.classInfo)

                    } else {
                        employee = new Intern(data.name, data.id, data.email, data.classInfo)
                    }
                    employees.push(employee);
                    if (response.another === "Yes") {
                        newEmployee()
                    } else {
                        endHTML()
                    }
                })
        })
}

function endHTML() {
    let html = startHTML;
    employees.forEach((employee) => {
        if (employee.getRole() === "Manager") {
            html += managerHTML(employee);
        }
        if (employee.getRole() === "Engineer") {
            html += engineerHTML(employee);
        }
        if (employee.getRole() === "Intern") {
            html += internHTML(employee);
        }
    })
    html += finishHTML
    fs.writeFile("./dist/profiles.html", html, function (err) {
        if (err) {
            return reject(err);
        };

    });
}

function managerHTML(employee) {
    return `<article>
 <h3>${employee.name}</h3>
 <p class="manager">Manager</p>
 <p>ID: ${employee.id}</p>
 <p>Email: ${employee.email} </p>
 <p>Office Number: ${employee.office} </p>
 </article>`
}

function engineerHTML(employee) {
    return `<article>
     <h3>${employee.name}</h3>
     <p class="engineer">Engineer</p>
     <p>ID: ${employee.id}</p>
     <p>Email: ${employee.email} </p>
     <p>GitHub: ${employee.github} </p>
     </article>`
}

function internHTML(employee) {
    return  `<article>
     <h3>${employee.name}</h3>
     <p class="intern">Intern</p>
     <p>ID: ${employee.id}</p>
     <p>Email: ${employee.email} </p>
     <p>School: ${employee.school} </p>
     </article>`
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



const finishHTML = `    </div>
</body>

</html>`



newEmployee()