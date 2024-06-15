/* eslint-disable @typescript-eslint/no-unused-vars */

const isDone: boolean = false;
const decimal: number = 6;
const color: string = "blue";
const list: number[] = [1, 2, 3];
const listGeneric: Array<number> = [1, 2, 3];
const person: { [key: string]: string } = { name: "Alice", age: 25 };
const person2: Record<string, string> = { name: "Alice", age: 25 };
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;

const x: [string, number] = ["hello", 10];

let anything: any = 4;
anything = "maybe a string instead";
anything = false;

const notSure: unknown = 4;
const isInteger = typeof notSure === "number";

let united: string | number = 1;
united = "1";

interface Key {
  letter: string;
}

interface Board {
  width: number;
}

type Keyboard = Key & Board;
const keyboard: Keyboard = { letter: "A", width: 10 };

type Feedback = "success" | "warning" | "error";

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
