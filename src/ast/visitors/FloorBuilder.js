import BaseVisitor from "./BaseVisitor.js";
import * as ast from "../index.js";

export default class FloorBuilder extends BaseVisitor {
  buildFloor(p) {
    let c = {}; // context to keep track of rooms and furnitures
    p.accept(this, c);
    return c;
  }
  visitProgram(p, c) {
    p.statements.forEach((statement) => statement.accept(this, c));
  }
  visitMakeRoom(v, t) {}
  visitMakeFurniture(v, t) {}
  visitAddToRoom(v, t) {}
  visitAddToFloor(v, t) {}
  visitResizeStatement(v, t) {}
  visitRepeatStatement(v, t) {}
  visitRemoveFromFloor(v, t){}
  visitRemoveFromRoom(v, t){}
}
