//Create suite of test scripts for Manager class

const Manager = require('../lib/Manager');

describe("Tests for Manager class", function() {
    const mgr = new Manager("John Doe", 120934, "john.doe@gmail.com", "718-345-0987");
    
    test("Can get name through getName function", function() {
       
        expect(mgr.getName()).toBe("John Doe");
    });

    test("Can get id through getName function", function() {
       
        expect(mgr.getId()).toBe(120934);
    });

    test("Can get email through getName function", function() {
     
        expect(mgr.getEmail()).toBe("john.doe@gmail.com");
    });

    test("Can get role through getName function", function() {
       
        expect(mgr.getOfficeNumber()).toBe("718-345-0987");
    });

    test("Can get role through getName function", function() {
       
        expect(mgr.getRole()).toBe("Manager");
    });

});