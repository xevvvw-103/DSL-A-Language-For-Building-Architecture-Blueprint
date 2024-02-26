import Statement from "./Statement.js";

export default class AddStatement extends Statement {
    name;
    x;
    y;
    direction;
    constructor(name, x, y, direction) {
        super();
        this.name = name;
        this.x = x;
        this. y = y;
        this.direction = direction;
    }
    get name() {
        return this.name;
    }
    get x() {
        return this.x;
    }
    get y() {
        return this.y;
    }
    get direction() {
        return this.direction;
    }
}