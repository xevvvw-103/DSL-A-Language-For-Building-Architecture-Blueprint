import MakeStatement from "./MakeStatement.js";

export default class MakeFurniture extends MakeStatement {
    furintureType;
    constructor(furnitureType, name, width, height) {
        super(name, width, height);
        this.furintureType = furnitureType;
    }
    get furintureType() {
        return this.furintureType;
    }
    accept(v, t) {
        return v.visitMakeFurniture(this, t);
    }
}