const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    };

    getSchool(intern) {
        return this.school;
    };

    getRole(employee) {
        return ('Intern');
    };
};
module.exports = Intern;