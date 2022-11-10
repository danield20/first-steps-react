let myName = 'Max';

console.log(myName);

myName = "Two";
console.log(myName);

const add = (x, y) => {
    return x + y;
};

console.log(add(1,2));

class Person {
    constructor() {
        this.name = "Max";
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();

const number = [1, 2, 3];

const newNumbers = [...number, 4];

console.log(number);
console.log(newNumbers);

console.log(...number);