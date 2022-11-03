import type {
  Point,
  CellContent,
  Table,
  ID,
  Alignment,
  ABC,
  GreetFunction,
} from "./kitchen-sink-table-types";

export default function kitchenSink() {
  let table: Table = [];

  function parameterTypeAnnotations(name: string): CellContent {
    let message: string = `Hello ${name}, you used Parameter Type Annotations and Variable Type Annotations.`;

    return {
      title: "Parameter Type Annotationss",
      content: message,
    };
  }

  function returnTypeAnnotations(name: string): CellContent {
    return {
      title: "Return Type Annotations",
      content: `Hello ${name} this is returned and youu test used Return Type Annotations.`,
    };
  }

  function objectTypes(coordinate: { x: number; y: number }): CellContent {
    return {
      title: "Object Types",
      content: `Object has x ${coordinate.x} and y ${coordinate.y}`,
    };
  }

  function unionTypes(id: number | string): CellContent {
    return {
      title: "Union Types",
      content: `You passed in '${id}' that is of type '${typeof id}'.`,
    };
  }

  function typeAliases(
    coordinate: Point,
    userId1: ID,
    userId2: ID
  ): CellContent {
    return {
      title: "Type Aliases",
      content: `type alias of Point with type ${typeof coordinate}. aliases userId1 ${typeof userId1} userId2 ${typeof userId2}`,
    };
  }

  function optionalProperties(first: string, last?: string): CellContent {
    return {
      title: "Optional Properties",
      content: `Name: ${first} ${last ? last : ""}`,
    };
  }

  function literalType(pageAlignment: Alignment): CellContent {
    return {
      title: "Literal Type",
      content: `alignment is ${pageAlignment === "center" ? 9 : -9}`,
    };
  }

  function functionTypeExpressions(fn: GreetFunction): CellContent {
    return {
      title: "Function Type Expressions",
      content: fn("Hibiki"),
    };
  }

  function restParameters(...n: Array<number>): CellContent {
    return {
      title: "Rest Parameters",
      content: `${n}`,
    };
  }

  function parameterDestructuring({ a, b, c }: ABC): CellContent {
    return {
      title: "Parameter Destructuring",
      content: `${a} ${b} ${c}`,
    };
  }

  function generics_typeVariable<Type>(test: Type): CellContent {
    return {
      title: "Generics - Type Variable",
      content: `${typeof test}`,
    };
  }

  function generics_arrayOfTypeVariables<Type>(test: Array<Type>): CellContent {
    return {
      title: "Generics - Array of Type Variables",
      content: `each element of array has typeof ${typeof test[0]}`,
    };
  }

  table = [
    parameterTypeAnnotations("Tester"),
    returnTypeAnnotations("Tester"),
    objectTypes({ x: 2, y: 2 }),
    parameterTypeAnnotations("Tester"),
    unionTypes(5),
    unionTypes("five"),
    typeAliases({ x: 5, y: 5 }, "mystringid", 5),
    optionalProperties("Shogo", "Yahagi"),
    optionalProperties("Shogo"),
    literalType("left"),
    functionTypeExpressions((name) => `Hi ${name}`),
    restParameters(1, 2, 3, 4, 5),
    parameterDestructuring({ a: 5, b: "test", c: 6 }),
    generics_typeVariable<string>("test"),
    generics_typeVariable<number>(5),
    generics_arrayOfTypeVariables<string>(["a1", "a2", "a3"]),
    generics_arrayOfTypeVariables<number>([1, 2, 3]),
  ];

  console.table(table);
}
