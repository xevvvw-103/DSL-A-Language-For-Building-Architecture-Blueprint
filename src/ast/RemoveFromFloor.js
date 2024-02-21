import RemoveStatement from "./RemoveStatement.js";

export default class RemoveFromFloor extends RemoveStatement {
    constructor(target, x, y) {
        super(target, x, y);
    }
    accept(v, t) {
        return v.visitRemoveFromFloor(this, t);
    }
}