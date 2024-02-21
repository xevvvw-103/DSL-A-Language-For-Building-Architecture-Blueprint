import AddStatement from "./AddStatement.js";

export default class AddToRoom extends AddStatement {
  target;
  constructor(name, target, x, y, direction) {
    super(name, x, y, direction);
    this.target = target;
  }
  get target() {
    return this.target;
  }
  accept(v, t) {
    return v.visitAddToRoom(this, t);
  }
}
