const Engineer = require('../lib/engineer');
const stuart = new Engineer('Stuart', 1, 'stuart@test.com', 'Stuartwood2010');

describe("Engineer", () => {
    describe("getName", () => {
        it("should return the name of the engineer", () => {
            result = stuart.getName();
            expect(result).toEqual('Stuart');
        });
    });
    describe("getId", () => {
        it("should return the id of the engineer", () => {
            result = stuart.getId();
            expect(result).toEqual(1);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the engineer", () => {
            result = stuart.getEmail();
            expect(result).toEqual('stuart@test.com');
        });
    });
    describe("getGithub", () => {
        it("should return the github username of the engineer", () => {
            result = stuart.getGithub();
            expect(result).toEqual('Stuartwood2010');
        });
    });
    describe("getRole", () => {
        it("should return the role of the engineer", () => {
            result = stuart.getRole();
            expect(result).toEqual('Engineer');
        });
    });
})