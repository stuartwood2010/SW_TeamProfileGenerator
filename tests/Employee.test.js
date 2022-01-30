const Employee = require('../lib/employee');
const stuart = new Employee('Stuart', 1, 'stuart@test.com');

describe("Employee", () => {
    describe("getName", () => {
        it("should return the name of the employee", () => {
            result = stuart.getName();
            expect(result).toEqual('Stuart');
        });
    });
    describe("getId", () => {
        it("should return the id of the employee", () => {
            result = stuart.getId();
            expect(result).toEqual(1);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            result = stuart.getEmail();
            expect(result).toEqual('stuart@test.com');
        });
    });
    describe("getRole", () => {
        it("should return the role of the employee", () => {
            result = stuart.getRole();
            expect(result).toEqual('Employee');
        });
    });
})