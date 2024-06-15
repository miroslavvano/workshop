/* eslint-disable @typescript-eslint/no-unused-vars */

//never returns a value
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Do something indefinitely
  }
}

function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

//can never happen
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      //return shape
      return assertNever(shape);
  }
}

type Fruit = "apple" | "banana" | "orange";

function handleFruit(fruit: Fruit): string {
  switch (fruit) {
    case "apple":
      return "You chose an apple.";
    case "banana":
      return "You chose a banana.";
    case "orange":
      return "You chose an orange.";
    default: {
      return fruit;
    }
  }
}

//overloading
function processInput(input: number): string;
function processInput(input: string): number;
function processInput(input: number | string): number | string {
  if (typeof input === "number") {
    return input.toString();
  } else if (typeof input === "string") {
    return input.length;
  } else {
    return assertNever(input);
  }
}

console.log(processInput(123)); // "123"
console.log(processInput("hello")); // 5
