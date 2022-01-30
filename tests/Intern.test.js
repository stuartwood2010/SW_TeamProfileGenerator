const Intern = require('../lib/intern');
const stuart = new Intern('Stuart', 1, 'stuart@test.com', 'DU');

describe("Intern", () => {
    describe("getName", () => {
        it("should return the name of the intern", () => {
            result = stuart.getName();
            expect(result).toEqual('Stuart');
        });
    });
    describe("getId", () => {
        it("should return the id of the intern", () => {
            result = stuart.getId();
            expect(result).toEqual(1);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the intern", () => {
            result = stuart.getEmail();
            expect(result).toEqual('stuart@test.com');
        });
    });
    describe("getSchool", () => {
        it("should return the school of the intern", () => {
            result = stuart.getSchool();
            expect(result).toEqual('DU');
        });
    });
    describe("getRole", () => {
        it("should return the role of the intern", () => {
            result = stuart.getRole();
            expect(result).toEqual('Intern');
        });
    });
})