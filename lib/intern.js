const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    };

    getSchool(intern) {
        return (`${intern.name} is attending classes at ${intern.school}`);
    };

    getRole(employee) {
        return (`${employee.name} is an Intern`);
    };
};
module.exports = Intern;