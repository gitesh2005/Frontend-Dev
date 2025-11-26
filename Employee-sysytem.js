class Employee {


    constructor(id, name, dept, salary) {

        this.id = id;

        this.name = name;

        this.dept = dept;
        
        this.salary = salary;
    }

    annual() {
        return this.salary * 12;
    }

    bonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

const e1 = new Employee(1, "Ram", "HR", 20000);
const e2 = new Employee(2, "Siya", "IT", 35000);
const e3 = new Employee(3, "Jay", "IT", 30000);
const e4 = new Employee(4, "Riya", "Sales", 22000);
const e5 = new Employee(5, "Veer", "Ops", 28000);

const employees = [e1, e2, e3, e4, e5];

const total = employees.reduce((sum, emp) => sum + emp.annual(), 0);

console.log(total);