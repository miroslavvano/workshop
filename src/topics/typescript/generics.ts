/* eslint-disable @typescript-eslint/no-unused-vars */

//BASIC EXAMPLE
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("Hello TypeScript");
const output2 = identity("Hello TypeScript");
const output3 = identity<number>(42);

//CONSTRANING TYPE PARAMETERS
interface ObjectWithLength {
  length: number;
  value?: string;
}

function logLength<T extends ObjectWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength({ length: 10, value: "Hello" });
logLength({ id: "123" });
logLength({});
logLength(3);

//MULTIPLE GENERICS
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
function createArray<T, U>(obj1: T, obj2: U): [T, U] {
  return [obj1, obj2];
}
function spread<Type, AnotherType, AndOneMore>(
  arr1: Type[],
  arr2: AnotherType[],
  arr3: AndOneMore[]
): (Type | AnotherType | AndOneMore)[] {
  return [...arr1, ...arr2, ...arr3];
}

const mergedObject = merge({ name: "Alice" }, { age: 30 });
const arrayedObject = createArray({ name: "Alice" }, { age: 30 });
const spreadedArray = spread([1, 2, 3], ["a", "b", "c"], [true, false]);

console.log(mergedObject.name);
console.log(mergedObject.age);

//type aj interface
type KeyValuePairType<Key, Value> = { key: Key; value: Value };
interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const kvp: KeyValuePair<string, number> = { key: "age", value: 30 };

//DEFAULT VALUES
function fillArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}
