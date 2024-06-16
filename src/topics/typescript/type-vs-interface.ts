/* eslint-disable @typescript-eslint/no-unused-vars */

type Hello = string;
interface World {
  world: string;
}

const isDone = false;
const decimal = 6;
const color = "blue";
const list = [1, 2, 3]; // with [] syntax
const listGeneric = ["1", "2", "3"]; //with <> syntax
const person = { name: "Alice", age: 25 }; // object
const person2 = { name: "Alice", age: 25 }; // record

//literal type
let feedback = "success";
feedback = "warning";
feedback = "error";

//type union
let united = 1;
united = "1";

//Red, Green, Blue enum
enum ColorEnum {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

const x = ["hello", 10]; // type tuple

//as const - so that letter is not string
const letters = ["a", "b", "c"];
letters.forEach((letter) => {
  console.log(letter);
});

let anything: any = 4;
anything = "maybe a string instead";
anything = false;

const notSure: unknown = 4;
const isNotSureInteger = typeof notSure === "number";

//type intersection
interface Key {
  letter: string;
}
interface Board {
  width: number;
}
type Keyboard = Key & Board;
const keyboard: Keyboard = { letter: "A", width: 10 };

function warnUser(): void {
  console.log("This is a warning message");
}
function error(message: string): never {
  throw new Error(message);
}

type UserObject = {
  id: number;
  name: string;
};

interface IUser {
  id: number;
  name: string;
}

//EXTENDING
type Person = {
  name: string;
};
interface IEmployee extends Person {
  employeeId: number;
}
type Employee = Person & {
  employeeId: number;
};

//MERGING
interface IUserService {
  getUser(id: number): IUser;
  getUsers(): IUser[];
}
interface IUserService {
  classId: string;
  className: string;
}

//CLASS IMPLEMENTATION
class UserService implements UserObject, IUserService {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
