import BaseVisitor from "./BaseVisitor.js";
import * as ast from "../index.js";
export default class Printer extends BaseVisitor {
  print(p) {
    let c = {}; // context to keep track of rooms and furnitures
    p.accept(this, c);
    return c;
  }
  visitAddToRoom(v, t) {
    console.log(v);
  }
  visitAddToFloor(v, t) {
    console.log(v);
  }
  visitMakeFurniture(v, t) {
    console.log(v);
  }
  visitMakeRoom(v, t) {
    console.log(v);

  }
  visitProgram(v, t) {
    console.log(v.statements);
    v.statements.forEach((statement) => statement.accept(this, t));
  }
  visitRepeatStatement(v, t) {
    console.log(v);
    v.repeatableStatement.accept(this, t);
  }
  visitResizeStatement(v, t) {
    console.log(v);
  }
  visitRemoveFromFloor(v, t) {
    console.log(v);
  }
  visitRemoveFromRoom(v, t) {
    console.log(v);
  }
}
