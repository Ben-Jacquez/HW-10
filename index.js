// Declared Const Section
const inquirer = require("inquirer");
const fs = require("fs");
// Consts For Company Roles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Const For Generating HTML.js
const generateHTML = require("./dist/html")
// Array New Team Members Are Pushed Too
const team = [];

// Functions
// Function Adds New Employee & Starts Next Function Based Off Answer
function addNewEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which Class Of Employee Is Joining The Team?",
                choices: ["Manager", "Engineer", "Intern", "Finish"], 
                name: "newEmployee",
            }
        ])
        .then((data) => {
            if (data.newEmployee === "Manager") {
                addManager();
            }
            else if (data.newEmployee === "Engineer") {
                addEngineer();
            }
            else if (data.newEmployee === "Intern") {
                addIntern();
            }
            else {
                return writeHTML();
            }
        });
}

//
function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "",
                name: "name",
            },
            {
                type: "input",
                message: "input",
                name: "id",
            },
            {
                type: "input",
                message: "",
                name: "email",
            },
            {
                type: "input",
                message: "",
                name: "officeNumber",
            },
        ])
        .then((data) => {
            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNumber
            );
            team.push(manager);
            addNewEmployee();
        });
}

//
function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "",
                name: "name",
            },
            {
                type: "input",
                message: "input",
                name: "id",
            },
            {
                type: "input",
                message: "",
                name: "email",
            },
            {
                type: "input",
                message: "",
                name: "github",
            },
        ])
        .then((data) => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.github
            );
        team.push(engineer);
        addNewEmployee();
        })
}

// 
function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "",
                name: "name",
            },
            {
                type: "input",
                message: "input",
                name: "id",
            },
            {
                type: "input",
                message: "",
                name: "email",
            },
            {
                type: "input",
                message: "",
                name: "school",
            },
        ])
        .then((data) => {
            const intern = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
            );
            team.push(intern)
            addNewEmployee();
        })
}

// Function To Post Employee Info To HTML
function writeHTML() {
    fs.writeFile("index.html", generateHTML(team), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("HTML Generated!")
    })
}

addNewEmployee();