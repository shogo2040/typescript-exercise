export function typeScriptExcercise() {
  function parameterTypeAnnotations(name: string) {
    let message: string = `
Parameter Type Annotations
==========================
Hello ${name}, you used Parameter Type Annotations and Variable Type Annotations.\n`;
    console.log(message);
  }

  function returnTypeAnnotations(name: string): string {
    return `
Return Type Annotations
=======================
Hello ${name} this is returned and you used Return Type Annotations.\n`;
  }

  function objectTypes(coordinate: { x: number; y: number }) {
    console.log(`
Object Types
============
Object has x ${coordinate.x} and y ${coordinate.y}
    `);
  }

  function unionTypes(id: number | string) {
    console.log(`
Union Types
===========
You passed in '${id}' that is of type '${typeof id}'.
    `);
  }

  type Point = {
    x: number;
    y: number;
  };

  type ID = number | string;

  function typeAliases(coordinate: Point, userId1: ID, userId2: ID) {
    console.log(`
 Type Aliases
 ============
 Alias your object types or unions. 

 Coordinate has an object type alias of Point with type ${typeof coordinate}.
 userId1 and userid2 both have union type aliases of ID with types:
 userId1 ${typeof userId1}
 userId2 ${typeof userId2}
    `);
  }

  function optionalProperties(first: string, last?: string) {
    console.log(`Optional Properties`);
    console.log(`===================`);
    console.log(`Name: ${first} ${last ? last : ""} \n`);
  }

  type Alignment = "left" | "center" | "right";
  type AlignResult = 9 | -9;

  function literalType(pageAlignment: Alignment): AlignResult {
    console.log("Literal Type");
    console.log("============");
    console.log(`alignment is ${pageAlignment}`);

    return pageAlignment === "center" ? 9 : -9;
  }

  type GreetFunction = (message: string) => string;

  function functionTypeExpressions(fn: GreetFunction) {
    console.log("Function Type Expressions");
    console.log("=========================");
    console.log(fn("Hibiki"));
  }

  function restParameters(...n: number[]) {
    console.log("Rest Parameters");
    console.log("===============");
    console.log(n);
  }

  type ABC = { a: number; b: string; c: number };

  function parameterDestructuring({ a, b, c }: ABC) {
    console.log("\nParameter Destructuring");
    console.log("=======================");
    console.log(`${a} ${b} ${c}`);
  }

  function generics_typeVariable<Type>(test: Type): Type {
    console.log("\nGenerics - Type Variable");
    console.log("========================");
    console.log(`${typeof test}`);
    return test;
  }

  function generics_arrayOfTypeVariables<Type>(test: Array<Type>): Array<Type> {
    console.log("\nGenerics - Array of Type Variables");
    console.log("==================================");
    console.log(`each element of array has typeof ${typeof test[0]}`);
    return test;
  }

  //
  parameterTypeAnnotations("Tester");

  //
  console.log(returnTypeAnnotations("Tester"));

  //
  objectTypes({ x: 2, y: 2 });

  //
  unionTypes(5);
  unionTypes("five");

  //
  typeAliases({ x: 5, y: 5 }, "mystringid", 5);

  //
  optionalProperties("Shogo", "Yahagi");
  optionalProperties("Shogo");

  //
  console.log(literalType("left") + "\n");
  functionTypeExpressions((name) => `Hi ${name}\n`);

  //
  restParameters(1, 2, 3, 4, 5);

  //
  parameterDestructuring({ a: 5, b: "test", c: 6 });

  //
  console.log(generics_typeVariable<string>("test"));
  console.log(generics_typeVariable<number>(5));

  //
  console.log(generics_arrayOfTypeVariables<string>(["a1", "a2", "a3"]));
  console.log(generics_arrayOfTypeVariables<number>([1, 2, 3]));
}

typeScriptExcercise();
