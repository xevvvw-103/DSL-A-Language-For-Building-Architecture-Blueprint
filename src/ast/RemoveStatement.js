import Statement from "./Statement.js";

export default class RemoveStatement extends Statement {
    target;
    x;
    y;
    constructor(target, x, y) {
        super();
        this.target = target;
        this.x = x;
        this. y = y;
    }
    get target() {
        return this.target;
    }
    get x() {
        return this.x;
    }
    get y() {
        return this.y;
    }
}