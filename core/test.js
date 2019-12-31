class Employee {
    constructor() {

    }

    getUser() {
        console.log('1234566');
    }
}

// var newObj = new Employee();
// newObj.getUser();

class sdt extends Employee {
    constructor() {
        super()
    }

    getUserInfo() {
        super.getUser();
    }

    static getUserAge() {
        console.log('user age is -----');
    }
}

//var newObj = new sdt();
//newObj.getUserInfo();
sdt.getUserAge();