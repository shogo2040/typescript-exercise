export interface Point {
  x: number;
  y: number;
}

export interface CellContent {
  title: string;
  content: string;
}

export interface ABC {
  a: number;
  b: string;
  c: number;
}

export type Table = Array<CellContent>;
export type ID = number | string; // union types
export type Alignment = "left" | "center" | "right"; // literal types
export type GreetFunction = (message: string) => string; // function type expression
