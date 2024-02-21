parser grammar FloorBuilderParser;
options {
	tokenVocab = FloorBuilderLexer;
}

program: statement+ EOF;

statement:
	make_statement
	| add_statement
	| resize_statement
	| repeat_statement
	| remove_statement;

//make
make_statement:
	MAKE_STATEMENT_START object_type NAME_DECLARE name SIZE_DECLARE width COMMA height;
object_type: ROOM | FURNITURE;
width: NUM;
height: NUM;
name: STR;

//add
add_statement:
	ADD_STATEMENT_START name TO target AT x COMMA y FACING direction;
direction: DIRECTION;
target: FLOOR | name;
x: NUM;
y: NUM;

//resize
resize_statement: RESIZE_STATEMENT_START name width COMMA height;

//repeat
repeat_statement: REPEAT_STATEMENT_START direction (times TIMES)? repeatable_statement;
repeatable_statement: add_statement | remove_statement;
times: NUM;

remove_statement: REMOVE_STATEMENT_START target_object FROM base_object AT x COMMA y; 
target_object: STR;
base_object: FLOOR | STR;