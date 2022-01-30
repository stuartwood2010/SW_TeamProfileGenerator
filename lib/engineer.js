const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    };

    getGithub(engineer) {
        return this.github;
    };

    getRole(employee) {
        return ('Engineer');
    };
};
module.exports = Engineer;