import AddStatement from "./AddStatement.js";

export default class AddToFloor extends AddStatement {
    constructor(name, x, y, direction) {
        super(name, x, y, direction);
    }
    accept(v, t) {
        return v.visitAddToFloor(this, t);
    }
}