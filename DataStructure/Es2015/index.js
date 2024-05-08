// class Student {
//     constructor(firstName, lastName, year = 4){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.year = year;
//         this.tardies = 0;
//         this.scores = [];
        
//     }
//     fullName(){
//         return  `Your full Name is ${this.firstName} ${this.lastName}`
//     }
//     markLate(){
//         this.tardies +=1;
//         return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
//     }
//     addScore(score){
//         this.scores.push(score);
//         return this.scores
//     }
//     calculateAverage(){
//         // console.log(this.scores.reduce((acc,ele)=> acc+ele,0))
//         return this.scores.reduce((acc,ele)=> acc +ele,0) /this.scores.length 
//     }
//     static EnrollStudent(){
//         return `ENROLLING STUDENT`
//     }

// }

// const firstStudent = new Student("colt", "Steele");
// const lastStudent = new Student("Blue", "Steele", 5);

// console.log(firstStudent.fullName());
// firstStudent.markLate();
// firstStudent.markLate();
// firstStudent.markLate();
// firstStudent.markLate();
// firstStudent.markLate();


// console.log(firstStudent.markLate());

// console.log(firstStudent.addScore(56))
// console.log(firstStudent.addScore(46))
// console.log(firstStudent.addScore(36))
// console.log(firstStudent.calculateAverage())

// firstStudent.addScore(100);
// console.log(firstStudent.calculateAverage())


// console.log(Student.EnrollStudent())

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}


const p1 = new Point(5,5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1,p2))