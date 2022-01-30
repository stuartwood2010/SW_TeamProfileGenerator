const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    };

    getGithub(engineer) {
        return (`The engineers github username is ${engineer.github}`);
    };

    getRole(employee) {
        return (`${employee.name} is a Engineer`);
    };
};
module.exports = Engineer;