
function Person(name, age, gender, address) {
    this.name = name ;
    this.age = age ;
    this.gender = gender;
    this.address = address;
  }
  

  function Student(name, age, gender, address, rollNo, cgpa) {
    Person.call(this, name, age, gender, address);
    this.rollNo = rollNo ;
    this.cgpa = cgpa ;
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  function Employee(name, age, gender, address, empId, department, designation, salary) {
    Person.call(this, name, age, gender, address);
    this.empId = empId ;
    this.department = department ;
    this.designation = designation ;
    this.salary = salary;
  }
  
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;

  function Teacher(name, age, gender, address, empId, department, designation, salary, subject) {
    Employee.call(this, name, age, gender, address, empId, department, designation, salary);
    this.subject = subject ;
  }
  
  Teacher.prototype = Object.create(Employee.prototype);
  Teacher.prototype.constructor = Teacher;

  function Staff(name, age, gender, address, empId, department, designation, salary, duties) {
    Employee.call(this, name, age, gender, address, empId, department, designation, salary);
    this.duties = duties;
  }
  
  Staff.prototype = Object.create(Employee.prototype);
  Staff.prototype.constructor = Staff;
  

  function Courses(name, teacher, students) {
    this.name = name ;
    this.teacher = teacher ;
    this.students = students;
  }

  var student1 = new Student("Bilal", 22, "Male", "Islamabad;", "SP20-BSE-055", "3.02");
  var student2 = new Student("Ahmad", 22, "Male", "Karachi", "SP19-BSE-001", "3.00");
  
  var teacher1 = new Teacher("Muhammad Muslim", 28, "Male", "Rawalpindi", "1", "CS", "LEcturer", 90000, "MAD");
  var teacher2 = new Teacher("Muhammad Qasim", 28, "Male", "Rawalpindi", "2", "CS", "LEcturer", 90000, "AI");
  
  var staff1 = new Staff("Jabbar", 29, "Male", "Rawalpidni", "1", "CS", "Clerk", 30000, "Clerical duties");
  var staff2 = new Staff("Naeem", 27, "Male", "Lahore", "2", "Administration", "Accountant", 45000, "Accounting duties");
  
  console.log(student1);
  console.log(student2);
  
  console.log(teacher1);
  console.log(teacher2);
  
  console.log(staff1);
  console.log(staff2);
  