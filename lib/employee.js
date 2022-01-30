class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName(employee) {
        return (`Name: ${employee.name}`);
    };

    getId(employee) {
        return (`Id: ${employee.id}`);
    };

    getEmail(employee) {
        return (`Email: ${employee.email}`);
    };

    getRole(employee) {
        return (`${employee.name} is an employee.`);
    };
};
module.exports = Employee;