class EmployeePayrollData {
    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.pinCode = params[5];
        this.email = params[6];
    }

    // getter and setter method
    get id() {
        return this._id;
    }
    set id(id) {
        if(id > 0)
            this._id = id;
        else throw "Id is not valid";
    }
    
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect";
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        if(salary > 0)
            this._salary = salary;
        else throw "Salary is not valid";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if(gender === undefined || gender == "M" || gender == "F")
            this._gender = gender;
        else throw "Gender is not valid";
    }

    get pinCode() {
        return this._pinCode;
    }
    set pinCode(pinCode) {
        let pinRegex = RegExp('^([\s]?[0-9]){6}$');
        if(pinRegex.test(pinCode) || pinCode === undefined)
            this._pinCode = pinCode;
        else throw "Invalid Pincode";
    }
    get email(){
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp("^[A-Za-z0-9]+([_+-.]?[A-Za-z0-9]+)*@[A-Za-z0-9]+.[A-Za-z]{2,4}(.[A-Za-z]{2})?$");
        if(emailRegex.test(email) || email === undefined)
            this._email = email;
        else throw "Email is not valid";
    }

    // method 
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "date not defined" : this.startDate.toLocaleDateString("en-US", options);
        return "id= " + this.id + ", name= " + this.name + ", salary= "+ this.salary + ", gender= "+ this.gender + ", startDate= "+ empDate + ", pinCode= "+ this.pinCode + ", email= "+ this.email;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Neha", 5000);
console.log(employeePayrollData.toString());
// for invalid id
try {
    employeePayrollData.id = 0;
    console.log(employeePayrollData.toString()); 
}
catch(e) {
    console.error(e);
}
// for invalid name
try {
    employeePayrollData.name = "jeffy";
    console.log(employeePayrollData.toString()); 
}
catch(e) {
    console.error(e);
}

let employeePayrollData2 = new EmployeePayrollData(2, "Tressa" , 3000, "F", new Date());
console.log(employeePayrollData2.toString());

// for invalid gender
try {
    employeePayrollData2.gender = "Male";
    console.log(employeePayrollData2.toString()); 
}
catch(e) {
    console.error(e);
}

let employeePayrollData3 = new EmployeePayrollData(3, "Mark" , 2000, "M", new Date(), '400088');
console.log(employeePayrollData3.toString());

// for invalid pincode
try {
    employeePayrollData3.pinCode = 'A400088' ;
    console.log(employeePayrollData3.toString()); 
}
catch(e) {
    console.error(e);
}

let employeePayrollData4 = new EmployeePayrollData(4, "John" , 6000, "M", new Date(), '400088', "abc.100@yahoo.com");
console.log(employeePayrollData4.toString());

// for invalid email
try {
    employeePayrollData4.email = "abc..2002@gmail.com" ;
    console.log(employeePayrollData4.toString()); 
}
catch(e) {
    console.error(e);
}
