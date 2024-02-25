import Statement from "./Statement.js";

export default class ResizeStatement extends Statement {
    name;
    width;
    height;
    constructor(name, width, height) {
        super();
        this.name = name;
        this.width = width;
        this.height = height;
    }

    get name() {
        return this.name;
    }
    get width() {
        return this.width;
    }
    get height() {
        return this.height;
    }
    accept(v, t) {
        return v.visitResizeStatement(this, t);
    }
}