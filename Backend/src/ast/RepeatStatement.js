import Statement from "./Statement.js";

export default class RepeatStatement extends Statement {
    direction;
    repeatableStatement;
    times;
    constructor(direction, repeatableStatement, times) {
        super();
        this.direction = direction;
        this.repeatableStatement = repeatableStatement;
        this.times = times;
    }
    get direction() {
        return this.direction;
    }
    get repeatableStatement() {
        return this.repeatableStatement;
    }
    get times() {
        return this.times;
    }
    accept(v, t) {
        return v.visitRepeatStatement(this, t);
    }
}