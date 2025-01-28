class Employee{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log("Employee")
    }
    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
class Manager extends Employee{
    display(){
        console.log("display")
        super.display()
    }
}
let emp1=new Manager("John",30);
emp1.display()