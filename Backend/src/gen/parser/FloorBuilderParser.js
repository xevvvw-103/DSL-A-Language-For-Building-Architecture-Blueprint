// Generated from ./parser/FloorBuilderParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FloorBuilderParserListener from './FloorBuilderParserListener.js';
import FloorBuilderParserVisitor from './FloorBuilderParserVisitor.js';

const serializedATN = [4,1,20,125,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,4,0,40,8,
0,11,0,12,0,41,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,3,9,85,8,9,1,10,1,10,1,11,1,11,1,12,
1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,3,13,102,8,13,1,13,1,13,
1,14,1,14,3,14,108,8,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,17,1,17,1,18,1,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,0,2,1,0,2,3,1,0,19,20,113,0,39,1,0,0,0,2,50,1,0,0,0,4,52,
1,0,0,0,6,61,1,0,0,0,8,63,1,0,0,0,10,65,1,0,0,0,12,67,1,0,0,0,14,69,1,0,
0,0,16,80,1,0,0,0,18,84,1,0,0,0,20,86,1,0,0,0,22,88,1,0,0,0,24,90,1,0,0,
0,26,96,1,0,0,0,28,107,1,0,0,0,30,109,1,0,0,0,32,111,1,0,0,0,34,120,1,0,
0,0,36,122,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,
0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,0,0,1,44,1,1,0,0,0,45,51,3,4,2,0,46,
51,3,14,7,0,47,51,3,24,12,0,48,51,3,26,13,0,49,51,3,32,16,0,50,45,1,0,0,
0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,3,1,0,0,0,52,
53,5,1,0,0,53,54,3,6,3,0,54,55,5,4,0,0,55,56,3,12,6,0,56,57,5,5,0,0,57,58,
3,8,4,0,58,59,5,6,0,0,59,60,3,10,5,0,60,5,1,0,0,0,61,62,7,0,0,0,62,7,1,0,
0,0,63,64,5,18,0,0,64,9,1,0,0,0,65,66,5,18,0,0,66,11,1,0,0,0,67,68,5,20,
0,0,68,13,1,0,0,0,69,70,5,7,0,0,70,71,3,12,6,0,71,72,5,8,0,0,72,73,3,18,
9,0,73,74,5,9,0,0,74,75,3,20,10,0,75,76,5,6,0,0,76,77,3,22,11,0,77,78,5,
10,0,0,78,79,3,16,8,0,79,15,1,0,0,0,80,81,5,11,0,0,81,17,1,0,0,0,82,85,5,
19,0,0,83,85,3,12,6,0,84,82,1,0,0,0,84,83,1,0,0,0,85,19,1,0,0,0,86,87,5,
18,0,0,87,21,1,0,0,0,88,89,5,18,0,0,89,23,1,0,0,0,90,91,5,12,0,0,91,92,3,
12,6,0,92,93,3,8,4,0,93,94,5,6,0,0,94,95,3,10,5,0,95,25,1,0,0,0,96,97,5,
13,0,0,97,101,3,16,8,0,98,99,3,30,15,0,99,100,5,14,0,0,100,102,1,0,0,0,101,
98,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,104,3,28,14,0,104,27,1,0,
0,0,105,108,3,14,7,0,106,108,3,32,16,0,107,105,1,0,0,0,107,106,1,0,0,0,108,
29,1,0,0,0,109,110,5,18,0,0,110,31,1,0,0,0,111,112,5,15,0,0,112,113,3,34,
17,0,113,114,5,16,0,0,114,115,3,36,18,0,115,116,5,9,0,0,116,117,3,20,10,
0,117,118,5,6,0,0,118,119,3,22,11,0,119,33,1,0,0,0,120,121,5,20,0,0,121,
35,1,0,0,0,122,123,7,1,0,0,123,37,1,0,0,0,5,41,50,84,101,107];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FloorBuilderParser extends antlr4.Parser {

    static grammarFileName = "FloorBuilderParser.g4";
    static literalNames = [ null, "'MAKE'", "'room'", null, "'NAMED'", "'SIZE'", 
                            "','", "'ADD'", "'TO'", "'AT'", "'FACING'", 
                            null, "'RESIZE'", "'REPEAT'", "'TIMES'", "'REMOVE'", 
                            "'FROM'", null, null, "'FLOOR'" ];
    static symbolicNames = [ null, "MAKE_STATEMENT_START", "ROOM", "FURNITURE", 
                             "NAME_DECLARE", "SIZE_DECLARE", "COMMA", "ADD_STATEMENT_START", 
                             "TO", "AT", "FACING", "DIRECTION", "RESIZE_STATEMENT_START", 
                             "REPEAT_STATEMENT_START", "TIMES", "REMOVE_STATEMENT_START", 
                             "FROM", "WS", "NUM", "FLOOR", "STR" ];
    static ruleNames = [ "program", "statement", "make_statement", "object_type", 
                         "width", "height", "name", "add_statement", "direction", 
                         "target", "x", "y", "resize_statement", "repeat_statement", 
                         "repeatable_statement", "times", "remove_statement", 
                         "target_object", "base_object" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FloorBuilderParser.ruleNames;
        this.literalNames = FloorBuilderParser.literalNames;
        this.symbolicNames = FloorBuilderParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FloorBuilderParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 38;
	            this.statement();
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 45186) !== 0));
	        this.state = 43;
	        this.match(FloorBuilderParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FloorBuilderParser.RULE_statement);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.make_statement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.add_statement();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.resize_statement();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.repeat_statement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.remove_statement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	make_statement() {
	    let localctx = new Make_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FloorBuilderParser.RULE_make_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(FloorBuilderParser.MAKE_STATEMENT_START);
	        this.state = 53;
	        this.object_type();
	        this.state = 54;
	        this.match(FloorBuilderParser.NAME_DECLARE);
	        this.state = 55;
	        this.name();
	        this.state = 56;
	        this.match(FloorBuilderParser.SIZE_DECLARE);
	        this.state = 57;
	        this.width();
	        this.state = 58;
	        this.match(FloorBuilderParser.COMMA);
	        this.state = 59;
	        this.height();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object_type() {
	    let localctx = new Object_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FloorBuilderParser.RULE_object_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	width() {
	    let localctx = new WidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FloorBuilderParser.RULE_width);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(FloorBuilderParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	height() {
	    let localctx = new HeightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FloorBuilderParser.RULE_height);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(FloorBuilderParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FloorBuilderParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(FloorBuilderParser.STR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	add_statement() {
	    let localctx = new Add_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FloorBuilderParser.RULE_add_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(FloorBuilderParser.ADD_STATEMENT_START);
	        this.state = 70;
	        this.name();
	        this.state = 71;
	        this.match(FloorBuilderParser.TO);
	        this.state = 72;
	        this.target();
	        this.state = 73;
	        this.match(FloorBuilderParser.AT);
	        this.state = 74;
	        this.x();
	        this.state = 75;
	        this.match(FloorBuilderParser.COMMA);
	        this.state = 76;
	        this.y();
	        this.state = 77;
	        this.match(FloorBuilderParser.FACING);
	        this.state = 78;
	        this.direction();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	direction() {
	    let localctx = new DirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FloorBuilderParser.RULE_direction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(FloorBuilderParser.DIRECTION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	target() {
	    let localctx = new TargetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FloorBuilderParser.RULE_target);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.match(FloorBuilderParser.FLOOR);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.name();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	x() {
	    let localctx = new XContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FloorBuilderParser.RULE_x);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(FloorBuilderParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	y() {
	    let localctx = new YContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FloorBuilderParser.RULE_y);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(FloorBuilderParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resize_statement() {
	    let localctx = new Resize_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FloorBuilderParser.RULE_resize_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(FloorBuilderParser.RESIZE_STATEMENT_START);
	        this.state = 91;
	        this.name();
	        this.state = 92;
	        this.width();
	        this.state = 93;
	        this.match(FloorBuilderParser.COMMA);
	        this.state = 94;
	        this.height();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeat_statement() {
	    let localctx = new Repeat_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FloorBuilderParser.RULE_repeat_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(FloorBuilderParser.REPEAT_STATEMENT_START);
	        this.state = 97;
	        this.direction();
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 98;
	            this.times();
	            this.state = 99;
	            this.match(FloorBuilderParser.TIMES);
	        }

	        this.state = 103;
	        this.repeatable_statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeatable_statement() {
	    let localctx = new Repeatable_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FloorBuilderParser.RULE_repeatable_statement);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.add_statement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.remove_statement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	times() {
	    let localctx = new TimesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FloorBuilderParser.RULE_times);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(FloorBuilderParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	remove_statement() {
	    let localctx = new Remove_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FloorBuilderParser.RULE_remove_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(FloorBuilderParser.REMOVE_STATEMENT_START);
	        this.state = 112;
	        this.target_object();
	        this.state = 113;
	        this.match(FloorBuilderParser.FROM);
	        this.state = 114;
	        this.base_object();
	        this.state = 115;
	        this.match(FloorBuilderParser.AT);
	        this.state = 116;
	        this.x();
	        this.state = 117;
	        this.match(FloorBuilderParser.COMMA);
	        this.state = 118;
	        this.y();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	target_object() {
	    let localctx = new Target_objectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FloorBuilderParser.RULE_target_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(FloorBuilderParser.STR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base_object() {
	    let localctx = new Base_objectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FloorBuilderParser.RULE_base_object);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FloorBuilderParser.EOF = antlr4.Token.EOF;
FloorBuilderParser.MAKE_STATEMENT_START = 1;
FloorBuilderParser.ROOM = 2;
FloorBuilderParser.FURNITURE = 3;
FloorBuilderParser.NAME_DECLARE = 4;
FloorBuilderParser.SIZE_DECLARE = 5;
FloorBuilderParser.COMMA = 6;
FloorBuilderParser.ADD_STATEMENT_START = 7;
FloorBuilderParser.TO = 8;
FloorBuilderParser.AT = 9;
FloorBuilderParser.FACING = 10;
FloorBuilderParser.DIRECTION = 11;
FloorBuilderParser.RESIZE_STATEMENT_START = 12;
FloorBuilderParser.REPEAT_STATEMENT_START = 13;
FloorBuilderParser.TIMES = 14;
FloorBuilderParser.REMOVE_STATEMENT_START = 15;
FloorBuilderParser.FROM = 16;
FloorBuilderParser.WS = 17;
FloorBuilderParser.NUM = 18;
FloorBuilderParser.FLOOR = 19;
FloorBuilderParser.STR = 20;

FloorBuilderParser.RULE_program = 0;
FloorBuilderParser.RULE_statement = 1;
FloorBuilderParser.RULE_make_statement = 2;
FloorBuilderParser.RULE_object_type = 3;
FloorBuilderParser.RULE_width = 4;
FloorBuilderParser.RULE_height = 5;
FloorBuilderParser.RULE_name = 6;
FloorBuilderParser.RULE_add_statement = 7;
FloorBuilderParser.RULE_direction = 8;
FloorBuilderParser.RULE_target = 9;
FloorBuilderParser.RULE_x = 10;
FloorBuilderParser.RULE_y = 11;
FloorBuilderParser.RULE_resize_statement = 12;
FloorBuilderParser.RULE_repeat_statement = 13;
FloorBuilderParser.RULE_repeatable_statement = 14;
FloorBuilderParser.RULE_times = 15;
FloorBuilderParser.RULE_remove_statement = 16;
FloorBuilderParser.RULE_target_object = 17;
FloorBuilderParser.RULE_base_object = 18;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_program;
    }

	EOF() {
	    return this.getToken(FloorBuilderParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_statement;
    }

	make_statement() {
	    return this.getTypedRuleContext(Make_statementContext,0);
	};

	add_statement() {
	    return this.getTypedRuleContext(Add_statementContext,0);
	};

	resize_statement() {
	    return this.getTypedRuleContext(Resize_statementContext,0);
	};

	repeat_statement() {
	    return this.getTypedRuleContext(Repeat_statementContext,0);
	};

	remove_statement() {
	    return this.getTypedRuleContext(Remove_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Make_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_make_statement;
    }

	MAKE_STATEMENT_START() {
	    return this.getToken(FloorBuilderParser.MAKE_STATEMENT_START, 0);
	};

	object_type() {
	    return this.getTypedRuleContext(Object_typeContext,0);
	};

	NAME_DECLARE() {
	    return this.getToken(FloorBuilderParser.NAME_DECLARE, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	SIZE_DECLARE() {
	    return this.getToken(FloorBuilderParser.SIZE_DECLARE, 0);
	};

	width() {
	    return this.getTypedRuleContext(WidthContext,0);
	};

	COMMA() {
	    return this.getToken(FloorBuilderParser.COMMA, 0);
	};

	height() {
	    return this.getTypedRuleContext(HeightContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterMake_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitMake_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitMake_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_object_type;
    }

	ROOM() {
	    return this.getToken(FloorBuilderParser.ROOM, 0);
	};

	FURNITURE() {
	    return this.getToken(FloorBuilderParser.FURNITURE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterObject_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitObject_type(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitObject_type(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_width;
    }

	NUM() {
	    return this.getToken(FloorBuilderParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitWidth(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitWidth(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HeightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_height;
    }

	NUM() {
	    return this.getToken(FloorBuilderParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterHeight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitHeight(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitHeight(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_name;
    }

	STR() {
	    return this.getToken(FloorBuilderParser.STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Add_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_add_statement;
    }

	ADD_STATEMENT_START() {
	    return this.getToken(FloorBuilderParser.ADD_STATEMENT_START, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	TO() {
	    return this.getToken(FloorBuilderParser.TO, 0);
	};

	target() {
	    return this.getTypedRuleContext(TargetContext,0);
	};

	AT() {
	    return this.getToken(FloorBuilderParser.AT, 0);
	};

	x() {
	    return this.getTypedRuleContext(XContext,0);
	};

	COMMA() {
	    return this.getToken(FloorBuilderParser.COMMA, 0);
	};

	y() {
	    return this.getTypedRuleContext(YContext,0);
	};

	FACING() {
	    return this.getToken(FloorBuilderParser.FACING, 0);
	};

	direction() {
	    return this.getTypedRuleContext(DirectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterAdd_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitAdd_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitAdd_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_direction;
    }

	DIRECTION() {
	    return this.getToken(FloorBuilderParser.DIRECTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterDirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitDirection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitDirection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TargetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_target;
    }

	FLOOR() {
	    return this.getToken(FloorBuilderParser.FLOOR, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterTarget(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitTarget(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitTarget(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class XContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_x;
    }

	NUM() {
	    return this.getToken(FloorBuilderParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitX(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitX(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class YContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_y;
    }

	NUM() {
	    return this.getToken(FloorBuilderParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterY(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitY(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitY(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Resize_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_resize_statement;
    }

	RESIZE_STATEMENT_START() {
	    return this.getToken(FloorBuilderParser.RESIZE_STATEMENT_START, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	width() {
	    return this.getTypedRuleContext(WidthContext,0);
	};

	COMMA() {
	    return this.getToken(FloorBuilderParser.COMMA, 0);
	};

	height() {
	    return this.getTypedRuleContext(HeightContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterResize_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitResize_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitResize_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Repeat_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_repeat_statement;
    }

	REPEAT_STATEMENT_START() {
	    return this.getToken(FloorBuilderParser.REPEAT_STATEMENT_START, 0);
	};

	direction() {
	    return this.getTypedRuleContext(DirectionContext,0);
	};

	repeatable_statement() {
	    return this.getTypedRuleContext(Repeatable_statementContext,0);
	};

	times() {
	    return this.getTypedRuleContext(TimesContext,0);
	};

	TIMES() {
	    return this.getToken(FloorBuilderParser.TIMES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterRepeat_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitRepeat_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitRepeat_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Repeatable_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_repeatable_statement;
    }

	add_statement() {
	    return this.getTypedRuleContext(Add_statementContext,0);
	};

	remove_statement() {
	    return this.getTypedRuleContext(Remove_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterRepeatable_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitRepeatable_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitRepeatable_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TimesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_times;
    }

	NUM() {
	    return this.getToken(FloorBuilderParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterTimes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitTimes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitTimes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Remove_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_remove_statement;
    }

	REMOVE_STATEMENT_START() {
	    return this.getToken(FloorBuilderParser.REMOVE_STATEMENT_START, 0);
	};

	target_object() {
	    return this.getTypedRuleContext(Target_objectContext,0);
	};

	FROM() {
	    return this.getToken(FloorBuilderParser.FROM, 0);
	};

	base_object() {
	    return this.getTypedRuleContext(Base_objectContext,0);
	};

	AT() {
	    return this.getToken(FloorBuilderParser.AT, 0);
	};

	x() {
	    return this.getTypedRuleContext(XContext,0);
	};

	COMMA() {
	    return this.getToken(FloorBuilderParser.COMMA, 0);
	};

	y() {
	    return this.getTypedRuleContext(YContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterRemove_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitRemove_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitRemove_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Target_objectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_target_object;
    }

	STR() {
	    return this.getToken(FloorBuilderParser.STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterTarget_object(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitTarget_object(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitTarget_object(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Base_objectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FloorBuilderParser.RULE_base_object;
    }

	FLOOR() {
	    return this.getToken(FloorBuilderParser.FLOOR, 0);
	};

	STR() {
	    return this.getToken(FloorBuilderParser.STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.enterBase_object(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FloorBuilderParserListener ) {
	        listener.exitBase_object(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FloorBuilderParserVisitor ) {
	        return visitor.visitBase_object(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FloorBuilderParser.ProgramContext = ProgramContext; 
FloorBuilderParser.StatementContext = StatementContext; 
FloorBuilderParser.Make_statementContext = Make_statementContext; 
FloorBuilderParser.Object_typeContext = Object_typeContext; 
FloorBuilderParser.WidthContext = WidthContext; 
FloorBuilderParser.HeightContext = HeightContext; 
FloorBuilderParser.NameContext = NameContext; 
FloorBuilderParser.Add_statementContext = Add_statementContext; 
FloorBuilderParser.DirectionContext = DirectionContext; 
FloorBuilderParser.TargetContext = TargetContext; 
FloorBuilderParser.XContext = XContext; 
FloorBuilderParser.YContext = YContext; 
FloorBuilderParser.Resize_statementContext = Resize_statementContext; 
FloorBuilderParser.Repeat_statementContext = Repeat_statementContext; 
FloorBuilderParser.Repeatable_statementContext = Repeatable_statementContext; 
FloorBuilderParser.TimesContext = TimesContext; 
FloorBuilderParser.Remove_statementContext = Remove_statementContext; 
FloorBuilderParser.Target_objectContext = Target_objectContext; 
FloorBuilderParser.Base_objectContext = Base_objectContext; 
