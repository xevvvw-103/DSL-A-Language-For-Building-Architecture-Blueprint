import MakeStatement from "./MakeStatement.js";

export default class MakeRoom extends MakeStatement {
    constructor(name, width, height) {
        super(name, width, height);
    }
    accept(v, t) {
        v.visitMakeRoom(this, t);
    }
}