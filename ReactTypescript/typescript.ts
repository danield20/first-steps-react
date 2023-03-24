export {};

function addnumbers(a: number, b: number) {
  return a + b;
}

const resultTest = addnumbers(2, 5);

console.log(resultTest);

let hobbies: string[] = ["test", "test2"];
console.log(hobbies);

let course: string | number = "Test";

course = 123;

type Person = { name: string; age: number };

let person: Person;
