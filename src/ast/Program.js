import Node from './Node.js';

export const OBJECT_TYPE = {
    FLOOR : 'FLOOR',
    ROOM : 'room',
    CHAIR : 'chair',
    TABLE : 'table',
    BED : 'bed',
    COUCH : 'couch'
}

export const DIRECTION = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT',
    UP : 'UP',
    DOWN : 'DOWN'
}

export default class Program extends Node {
    statements;
    constructor(statements) {
        super();
        this.statements = statements;
    }
    get statements() {
        return this.statements;
    }
    accept(v, t) {
        return v.visitProgram(this, t);
    }
    
}