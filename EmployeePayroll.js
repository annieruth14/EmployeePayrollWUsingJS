class EmployeePayrollData {
    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
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

    // method 
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "date not defined" : this.startDate.toLocaleDateString("en-US", options);
        return "id= " + this.id + ", name= " + this.name + ", salary= "+ this.salary + ", gender= "+ this.gender + ", startDate= "+ empDate;
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
    let employeePayrollData3 = new EmployeePayrollData(3, "John" , 7000, "Male", new Date());
    console.log(employeePayrollData3.toString()); 
}
catch(e) {
    console.error(e);
}
