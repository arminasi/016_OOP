class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    };

    get firstName() {
        return this._firstName;
    };

    set firstName(value) {
        if(typeof value !== "string") {
            throw new Error("first name should be string");
        }
    };

    get lastName() {
        return this._lastName;
    };

    set lastName(value) {
        if(typeof value !== "string") {
            throw new Error("last name should be string");
        }
    };

    get gender() {
        return this._gender;
    };

    set gender(value) {
        if(typeof value !== "string") {
            throw new Error("gender should be string");
        }
    };

    get age() {
        return this._age;
    };

    set age(value) {
        if(typeof value !== "number") {
            throw new Error("age should be number");
        }
    };

    toString() {
        return `${this.firstName} ${this.lastName}, ${this._age} years old`;
    };
};

class Student extends Person {
    constructor(firstName, lastName, gender, age, year, fee, program) {
        super(firstName, lastName, gender, age );
        this._year = year;
        this._fee = fee;
        this._program = program;
    };

    get year() {
        return this._year;
    };

    set year(value) {
        if(typeof value !== "number") {
            throw new Error("year should be number");
        }
    };

    get fee() {
        return this._fee;
    };

    set fee(value) {
        if(typeof value !== "string") {
            throw new Error("fee should be string");
        }
    };

    get program() {
        return this._program;
    };

    set program(value) {
        if(typeof value !== "array") {
            throw new Error("program should be array");
        }
    };

    isAllPassed() {
        this.program.forEach(el => {
            if(el.grade === "undefined") {
                return `${this.lastName} didn't passed all exams`;
            }
        });
    };

    passExam(programName, grade) {
        this._program.forEach((item) => {
            if (item.programName === programName) {
                item.grade = grade;
            }
        });
    }
}

const person = new Person("Chris", "Red", "male", 22);

console.log(person.toString());
const programs = [
  { programName: "Math", grade: 45 },
  { programName: "Chemistry", grade: undefined },
];

const newStudent = new Student("Harry", "Potter", "male", 22, 0, "S", programs);

console.log(person);
newStudent.passExam("Math", 50);

console.log(newStudent.program);
newStudent.passExam("Chemistry", 60);
newStudent.isAllPassed();