//Create suite of test scripts for Intern class

const Intern = require('../lib/intern');

describe("Tests for Intern class", function() {
    const intern = new Intern("John Doe", 120934, "john.doe@gmail.com", "Columbia University");
    
    test("Can get name through getName function", function() {
       
        expect(intern.getName()).toBe("John Doe");
    });

    test("Can get id through getName function", function() {
       
        expect(intern.getId()).toBe(120934);
    });

    test("Can get email through getName function", function() {
     
        expect(intern.getEmail()).toBe("john.doe@gmail.com");
    });

    test("Can get role through getName function", function() {
       
        expect(intern.getSchool()).toBe("Columbia University");
    });

    test("Can get role through getName function", function() {
       
        expect(intern.getRole()).toBe("Intern");
    });

});