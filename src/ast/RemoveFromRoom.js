import RemoveStatement from "./RemoveStatement.js";

export default class RemoveFromRoom extends RemoveStatement {
  base;
  constructor(target, base, x, y) {
    super(target, x, y);
    this.base = base;
  }
  get base() {
    return this.base;
  }
  accept(v, t) {
    return v.visitRemoveFromRoom(this, t);
  }
}
