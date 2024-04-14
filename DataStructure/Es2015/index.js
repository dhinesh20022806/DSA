class Student {
    constructor(firstName, lastName, year = 4){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
    }
    fullName(){
        return  `Your full Name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies +=1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

}

const firstStudent = new Student("colt", "Steele");
const lastStudent = new Student("Blue", "Steele", 5);

console.log(firstStudent.fullName());
firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();

console.log(firstStudent.markLate());

