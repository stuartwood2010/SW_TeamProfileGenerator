// required dependencies for writing to file(fs), and getting user input(inquirer)
const inquirer = require('inquirer');
const fs = require('fs');
// importing constructor functions for all employee types
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// import layout template file
const generateTemplate = require('./src/htmlTemplate');
// importing generate function
const generateHTML = require('./generateHTML');
// create an array to hold our team members
const teamMembers = [];
// Prompt questions for user input
const promptM = [
    {
        type: 'input',
        message: 'What is the name of the team manager?',
        name: 'manager_name',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the team managers employee id?',
        name: 'manager_id',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the email address of the team manager?',
        name: 'manager_email',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'manager_office',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },
];
const addToTeam = [
    {
        type: 'list',
        message: 'Would you like to add a new team member?',
        name: 'teamBuildMenu',
        choices: [
            'Add a new Engineer',
            'Add a new Intern',
            'My team is complete',
        ]
    }
];
const promptE = [
    {
        type: 'input',
        message: 'What is the name of the Engineer?',
        name: 'engineer_name',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the engineers employee id?',
        name: 'engineer_id',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the email address of the engineer?',
        name: 'engineer_email',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the engineers github username?',
        name: 'engineer_github',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },
];
const promptI = [
    {
        type: 'input',
        message: 'What is the name of the Intern?',
        name: 'intern_name',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the interns employee id?',
        name: 'intern_id',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What is the email address of the intern?',
        name: 'intern_email',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },{
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'intern_school',
        validate: (value) => { if (value) {return true} else {return 'Cannot leave blank'}},
    },
];
function addTeamMember() {
    inquirer.prompt(addToTeam)
        .then ((data) => { 
            if (data.teamBuildMenu === 'Add a new Engineer') {
                console.log('Add a new Engineer');
                addEngineer();
            }
            else if (data.teamBuildMenu === 'Add a new Intern') {
                console.log('Add a new Intern');
                addIntern();
            }
            else {
                console.log('Team Members:', teamMembers);
                let formatHTML = generateTemplate(teamMembers);
                generateHTML(formatHTML);
            }
    });
};
function addEngineer() {
    inquirer.prompt(promptE)
        .then ((data) => {
            const newEngineer = new Engineer (data.engineer_name, data.engineer_id, data.engineer_email, data.engineer_github);
            teamMembers.push(newEngineer);
            console.log('Engineer Info:', data);
            addTeamMember();
        });
};
function addIntern() {
    inquirer.prompt(promptI)
        .then ((data) => {
            const newIntern = new Intern (data.intern_name, data.intern_id, data.intern_email, data.intern_school);
            teamMembers.push(newIntern);
            console.log('Intern Info:', data);
            addTeamMember();
        });
};
function init() {
    inquirer.prompt(promptM)
        .then ((data) => {
            const newManager = new Manager (data.manager_name, data.manager_id, data.manager_email, data.manager_office);
            teamMembers.push(newManager);
            console.log(teamMembers);
            addTeamMember()       
        });
};
init();