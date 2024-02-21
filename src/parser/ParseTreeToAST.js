import FloorBuilderParserVisitor from "../gen/parser/FloorBuilderParserVisitor.js";
import * as ast from "../ast/index.js";

export default class ParseTreeToAST extends FloorBuilderParserVisitor {
  // Visit a parse tree produced by FloorBuilderParser#program.
  visitProgram(ctx) {
    var statements = [];
    // console.log(ctx.statement());
    ctx.statement().forEach((s) => statements.push(s.accept(this)));
    // for( let s in ctx.statement()) {
    //   statements.add(s.accept(this));
    // }
    return new ast.Program(statements);
  }

  // Visit a parse tree produced by FloorBuilderParser#statement.
  visitStatement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#make_statement.
  visitMake_statement(ctx) {
    if (ctx.object_type().getText() === ast.OBJECT_TYPE.ROOM) {
      return new ast.MakeRoom(
        ctx.name().getText,
        Number(ctx.width().getText()),
        Number(ctx.height().getText())
      );
    } else {
      return new ast.MakeFurniture(
        ctx.object_type().getText(),
        ctx.name().getText(),
        Number(ctx.width().getText()),
        Number(ctx.height().getText())
      );
    }
  }

  // Visit a parse tree produced by FloorBuilderParser#object_type.
  visitObject_type(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#width.
  visitWidth(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#height.
  visitHeight(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#name.
  visitName(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#add_statement.
  visitAdd_statement(ctx) {
    // console.log(ctx.target().getText);
    if (ctx.target().getText() === ast.OBJECT_TYPE.FLOOR) {
      return new ast.AddToFloor(
        ctx.name().getText(),
        Number(ctx.x().getText()),
        Number(ctx.y().getText()),
        ctx.direction().getText()
      );
    } else {
      return new ast.AddToRoom(
        ctx.name().getText(),
        ctx.target().getText(),
        Number(ctx.x().getText()),
        Number(ctx.y().getText()),
        ctx.direction().getText()
      );
    }
  }

  // Visit a parse tree produced by FloorBuilderParser#direction.
  visitDirection(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#target.
  visitTarget(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#x.
  visitX(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#y.
  visitY(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by FloorBuilderParser#resize_statement.
  visitResize_statement(ctx) {
    return new ast.ResizeStatement(
      ctx.name().getText,
      ctx.width().getText(),
      ctx.height().getText()
    );
  }

  // Visit a parse tree produced by FloorBuilderParser#repeat_statement.
  visitRepeat_statement(ctx) {
    return new ast.RepeatStatement(
      ctx.direction().getText(),
      ctx.repeatable_statement().accept(this),
      ctx.times() ? Number(ctx.times().getText()) : 0
    );
  }

	// Visit a parse tree produced by FloorBuilderParser#repeatable_statement.
	visitRepeatable_statement(ctx) {
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by FloorBuilderParser#times.
	visitTimes(ctx) {
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by FloorBuilderParser#remove_statement.
	visitRemove_statement(ctx) {
    if (ctx.base_object().getText() === ast.OBJECT_TYPE.FLOOR) {
      return new ast.RemoveFromFloor(
        ctx.target_object().getText(),
        Number(ctx.x().getText()),
        Number(ctx.y().getText()),
      );
    } else {
      return new ast.RemoveFromRoom(
        ctx.target_object().getText(),
        ctx.base_object().getText(),
        Number(ctx.x().getText()),
        Number(ctx.y().getText()),
      );
    }
	}

	// Visit a parse tree produced by FloorBuilderParser#target_object.
	visitTarget_object(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by FloorBuilderParser#base_object.
	visitBase_object(ctx) {
	  return this.visitChildren(ctx);
	}
}
