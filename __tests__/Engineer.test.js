//Create suite of test scripts for Engineer class

const Engineer = require('../lib/Engineer');

describe("Tests for Engineer class", function() {
    const eng = new Engineer("John Doe", 120934, "john.doe@gmail.com", "http://github.com/myrepo");
    
    test("Can get name through getName function", function() {
       
        expect(eng.getName()).toBe("John Doe");
    });

    test("Can get id through getName function", function() {
       
        expect(eng.getId()).toBe(120934);
    });

    test("Can get email through getName function", function() {
     
        expect(eng.getEmail()).toBe("john.doe@gmail.com");
    });

    test("Can get role through getName function", function() {
       
        expect(eng.getGithub()).toBe("http://github.com/myrepo");
    });

    test("Can get role through getName function", function() {
       
        expect(eng.getRole()).toBe("Engineer");
    });

});