const Manager = require('../lib/manager');
const stuart = new Manager('Stuart', 1, 'stuart@test.com', 303);

describe("Manager", () => {
    describe("getName", () => {
        it("should return the name of the manager", () => {
            result = stuart.getName();
            expect(result).toEqual('Stuart');
        });
    });
    describe("getId", () => {
        it("should return the id of the manager", () => {
            result = stuart.getId();
            expect(result).toEqual(1);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the manager", () => {
            result = stuart.getEmail();
            expect(result).toEqual('stuart@test.com');
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the Office number of the manager", () => {
            result = stuart.getOfficeNumber();
            expect(result).toEqual(303);
        });
    });
    describe("getRole", () => {
        it("should return the role of the manager", () => {
            result = stuart.getRole();
            expect(result).toEqual('Manager');
        });
    });
})