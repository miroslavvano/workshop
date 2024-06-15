//TYPEOF OPERATOR
function exampleTypeof(value: unknown) {
  if (typeof value === "string") {
    console.log(`It's a string: ${value.toUpperCase()}`);
  } else if (typeof value === "number") {
    console.log(`It's a number: ${value.toFixed(2)}`);
  } else {
    console.log("Unknown type");
  }
}

exampleTypeof("hello"); // HELLO
exampleTypeof(42); // 42.00
exampleTypeof(true); // Unknown type

//TYPE GUARD FUNCTIONS
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function exampleGuard(value: unknown) {
  if (isString(value)) {
    console.log(`It's a string: ${value.toUpperCase()}`);
  } else if (isNumber(value)) {
    console.log(`It's a number: ${value.toFixed(2)}`);
  } else {
    console.log("Unknown type");
  }
}

exampleGuard("hello"); // HELLO
exampleGuard(42); // 42.00
exampleGuard(true); // Unknown type

//IN OPERATOR
type User = {
  name: string;
  age: number;
};

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value
  );
}

function exampleInOperator(value: unknown) {
  if (isUser(value)) {
    console.log(`User's name is ${value.name} and age is ${value.age}`);
  } else {
    console.log("Unknown type");
  }
}

exampleInOperator({ name: "John", age: 30 });
exampleInOperator({ name: "John" }); // Unknown type

//INSTANCEOF
try {
  //something
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error");
  }
}

class UserClass {
  constructor(public name: string, public age: number) {}
}

function exampleInstanceof(value: unknown) {
  if (value instanceof UserClass) {
    console.log(`User's name is ${value.name} and age is ${value.age}`);
  } else {
    console.log("Unknown type");
  }
}

exampleInstanceof(new UserClass("John", 30));
exampleInstanceof({ name: "John", age: 30 }); // Unknown type

//TYPE ASSERTION
function exampleTypeAssertion(value: unknown) {
  const strValue = value as string;
  console.log(`It's a string: ${strValue.toUpperCase()}`);
}

exampleTypeAssertion("hello");
exampleTypeAssertion(42); // Runtime error if value is not a string

//COMBINATION
type MyType = string | number | User;

function isMyType(value: unknown): value is MyType {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    (typeof value === "object" &&
      value !== null &&
      "name" in value &&
      "age" in value)
  );
}

function exampleComprehensiveGuard(value: unknown) {
  if (isMyType(value)) {
    if (typeof value === "string") {
      console.log(`It's a string: ${value.toUpperCase()}`);
    } else if (typeof value === "number") {
      console.log(`It's a number: ${value.toFixed(2)}`);
    } else {
      console.log(`User's name is ${value.name} and age is ${value.age}`);
    }
  } else {
    console.log("Unknown type");
  }
}

exampleComprehensiveGuard("hello"); // It's a string: HELLO
exampleComprehensiveGuard(42); // It's a number: 42.00
exampleComprehensiveGuard(new UserClass("John", 30)); // User's name is John and age is 30
exampleComprehensiveGuard(true); // Unknown type
