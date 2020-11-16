class EmployeePayrollData {
    // property
    gender;

    // constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and setter method
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    
    get name() {
        return this._name;
    }
    set name(name) {
        console.log("Setting: "+ name);
        this._name = name;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    // method 
    toString() {
        return "id= " + this.id + ", name= " + this.name + ", salary= "+ this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Neha", 5000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
employeePayrollData.name = "Jeffy";
console.log(employeePayrollData.toString());