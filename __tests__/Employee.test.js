//Create suite of test scripts for Employee class

const Employee = require('../lib/Employee');

describe("Tests for Employee class", function() {
    const emp = new Employee("John Doe", 120934, "john.doe@gmail.com");
    
    test("Can get name through getName function", function() {
       
        expect(emp.getName()).toBe("John Doe");
    });

    test("Can get id through getName function", function() {
       
        expect(emp.getId()).toBe(120934);
    });

    test("Can get email through getName function", function() {
     
        expect(emp.getEmail()).toBe("john.doe@gmail.com");
    });

    test("Can get role through getName function", function() {
       
        expect(emp.getRole()).toBe("Employee");
    });

});