class Employee{
    constructor(name = "", dept="general"){
        this.name = name ;  
        this.dept = dept ;   
    }
}

class Manager extends Employee{
    constructor(name = '', dept = 'general', reports = []){
        super(name,dept);
        this.reports = reports;

    }
} 

class WorkerBee extends Employee{
    constructor(name = '', dept = 'general', projects = []){
        super(name,dept);
        this.projects = projects;
    }
}

class SalesPerson extends WorkerBee{
    constructor(name = '', dept = 'sales', projects = [], quota = 100){
        super(name,dept,projects);
        this.quota = quota;

    }
}

 class Engineer extends WorkerBee{
    constructor(name = '', dept = 'engineering', projects = [], machine = ''){
        super(name,dept,projects);
        this.machine = machine;

    }
 }
 const e1 = new Employee("Bilal");
 console.log(e1);
 const m1 = new Manager( "Naeem","CS",e1)
 console.log(m1);
 const w1 = new WorkerBee("Jabbar", 'engineering', ['P1', 'P2']);
 console.log(w1);
 const s1 = new SalesPerson("Ahmad", 'sales', ['P3', 'P4'], 200);
 console.log(s1);
 const engg1 = new Engineer("Noman", 'Enginnering', ['P5', 'P6'], 'Machine 1');
 console.log(engg1);