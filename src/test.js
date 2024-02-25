
import FloorBuilderLexer from "./gen/parser/FloorBuilderLexer.js";
import FloorBuilderParser from "./gen/parser/FloorBuilderParser.js";
import antlr4 from "antlr4";
import console from "console";
import fs from 'fs';
import ParseTreeToAST from "./parser/ParseTreeToAST.js";
import Printer from "./ast/visitors/Printer.js";
import Checker from "./ast/visitors/Checker.js";
import FloorBuilder from "./ast/visitors/FloorBuilder.js";

// read from input
const inputFilePath = './input.txt';
let content = fs.readFileSync(inputFilePath, {encoding: 'utf-8'});
console.log("read from input " + inputFilePath);

// create token from lexer
const inputStream = new antlr4.InputStream(content);
const lexer = new FloorBuilderLexer(inputStream);
const tokens = new antlr4.CommonTokenStream(lexer);
console.log("created tokens");


// create parser from the tokens
const parser = new FloorBuilderParser(tokens);
let t = parser.program();
console.log("created parser");
// console.log(t.toStringTree(parser.ruleNames));

const v = new ParseTreeToAST();

const program = v.visitProgram(t);

let checker = new Checker(); 
checker.check(program);


let new_visitor = new FloorBuilder(); 
new_visitor.buildFloor(program);
