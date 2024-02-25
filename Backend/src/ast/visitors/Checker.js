import BaseVisitor from "./BaseVisitor.js";
import * as ast from "../index.js";

export default class Checker extends BaseVisitor {
  check(p) {
    let c = {}; // context to keep track of rooms and objects
    p.accept(this, c);
    return c;
  }
  visitProgram(p, c) {
    p.statements.forEach((statement) => statement.accept(this, c));
  }
  visitMakeRoom(v, c) {
    const roomName = v.name;
    if (roomName === "FLOOR") 
      throw new Error("Make Room: Room name cannot be FLOOR.");
    else if (c[roomName]) {
      throw new Error(`Make Room: Room with name ${roomName} already exists.`);
    }
    c[roomName] = { type: "room",  
                    width: v.width,
                    height: v.height,
                    placements: []};
  }

  visitMakeFurniture(v, c) {
    const furnitureName = v.name;
    if (furnitureName === "FLOOR") 
      throw new Error(`Make Furniture: Room name cannot be FLOOR.`);
    if (c[furnitureName]) {
      throw new Error(`Make Furniture: Furniture with name ${furnitureName} already exists.`);
    }
    c[furnitureName] = { type: "furniture",
                         width: v.width,
                         height: v.height,
                         placements: []};
  }
  visitAddToRoom(v, c) {

    const objectName = v.name;
    if (!c[objectName]) {
      throw new Error(`Add to Rooom: Object with name ${objectName} does not exist.`);
    }
    // Check if the object can be placed without overlapping with other placements
    var overlapping = false;
    Object.keys(c).forEach((key) => {
      if (doRectanglesOverlap(c[key], v.x, v.y, c[objectName].width, c[objectName].height, v.target)) {
        overlapping = true;
      }
    });
    if (overlapping) {
      throw new Error(`Add to Room: Object with name ${objectName} cannot be placed at (${v.x}, ${v.y}) in room ${v.target} due to overlapping.`);
    } else {
      c[objectName].placements.push({target: v.target, x: v.x, y: v.y, width: c[objectName].width, height: c[objectName].height});
    }
  }
  visitAddToFloor(v, c) {
    const objectName = v.name;
    if (!c[objectName]) {
      throw new Error(`Add to Floor: Object with name ${objectName} does not exist.`);
    }

    // Check if the object can be placed without overlapping with other placements
    var overlapping = false;
    Object.keys(c).forEach((key) => {
      if (doRectanglesOverlap(c[key], v.x, v.y, c[objectName].width, c[objectName].height, 'FLOOR')) {
        overlapping = true;
      }
    });

    if (overlapping) {
      throw new Error(`Add to Floor: Object with name ${objectName} cannot be placed at (${v.x}, ${v.y}) due to overlapping.`);
    } else {
      c[objectName].placements.push({target: 'FLOOR', x: v.x, y: v.y, width: c[objectName].width, height: c[objectName].height});
    }
  }
  visitResizeStatement(v, c) {
    const objectName = v.name;
    if (!c[objectName]) {
      throw new Error(`Resize: Object with name ${objectName} does not exist.`);
    }
  }

  visitRepeatStatement(v, c) {
    if(v.repeatableStatement instanceof ast.AddToFloor && v.times < 1) {
      throw new Error(`Repeat: Times should be greater than 0 for FLOOR.`);
    }
    if (!c[v.repeatableStatement.name]) {
      throw new Error(`Repeat: Object with name ${v.repeatableStatement.name} does not exist.`);
    }
    if (!v.repeatableStatement instanceof ast.AddToFloor && !c[v.repeatableStatement.target]) {
      throw new Error(`Repeat: Room with name ${v.repeatableStatement.target} does not exist.`);
    }

    let times = v.times;
    var child_width = c[v.repeatableStatement.name].width;
    var child_height = c[v.repeatableStatement.name].height;
    var room_width = 0;
    var room_height = 0;
    if(c[v.repeatableStatement.target]) {
      room_width = c[v.repeatableStatement.target].width;
      room_height = c[v.repeatableStatement.target].height;
    }
     switch (v.direction) {
       case ast.DIRECTION.UP:
         if (v.repeatableStatement.target && (times == 0 || Math.floor(v.repeatableStatement.y / child_height) < times)) {
           times = Math.floor(v.repeatableStatement.y / child_height);
         }
 
         for (let i = 0; i < times; i++) {
           v.repeatableStatement.y -= child_height;
           v.repeatableStatement.accept(this, c);
         }
         break;
       case ast.DIRECTION.LEFT:
         if (v.repeatableStatement.target && (times == 0 || Math.floor(v.repeatableStatement.x / child_width) < times)) {
           times = Math.floor(v.repeatableStatement.x / child_width);
         }
 
         for (let i = 0; i < times; i++) {
           v.repeatableStatement.x -= child_width;
           v.repeatableStatement.accept(this, c);
         }
         break;
       case ast.DIRECTION.RIGHT:
         if (v.repeatableStatement.target && (times == 0 || Math.floor((room_width - v.repeatableStatement.x) / child_width) < times)) 
         {
           times = Math.floor((room_width - v.repeatableStatement.x) / child_width);
         } 
 
         for (let i = 0; i < times; i++) {
           v.repeatableStatement.x += child_width;
           v.repeatableStatement.accept(this, c);
         }
         break;
       case ast.DIRECTION.DOWN:
         if (v.repeatableStatement.target && (times == 0 || Math.floor((room_height - v.repeatableStatement.y) / child_height) < times)) {
           times = Math.floor((room_height - v.repeatableStatement.y) / child_height);
         }
 
         for (let i = 0; i < times; i++) {
           v.repeatableStatement.y += child_height;
           v.repeatableStatement.accept(this, c);
         }
         break;
       default:
         console.log('Repeat: Incorrect sentence: ' + v.repeatableStatement + '.');
     }
  }

  visitRemoveFromFloor(v, c) {
    const objectName = v.target;
    if (!c[objectName]) {
      throw new Error(`Remove from Floor: Object with name ${objectName} does not exist.`);
    }
    if (c[objectName].placements.length === 0) {
      throw new Error(`Remove from Floor: Object with name ${objectName} does not exist in the floor.`);
    }
    var flg = 0;
    for( var i = 0; i < c[objectName].placements.length; i++){ 
      if ( c[objectName].placements[i].target === 'FLOOR' && c[objectName].placements[i].x === v.x && c[objectName].placements[i].y === v.y) {
        c[objectName].placements.splice(i, 1); 
        flg = 1;
      }
    }
    if (flg === 0) {
      throw new Error(`Remove from Floor: Object with name ${objectName} does not exist in the floor at the given position.`);
    }
  }
  visitRemoveFromRoom(v, c) {
    const objectName = v.target;
    if (!c[objectName]) {
      throw new Error(`Remove from Room: Object with name ${objectName} does not exist.`);
    }
    var flg = 0;
    for( var i = 0; i < c[objectName].placements.length; i++){ 
      if ( c[objectName].placements[i].target === v.base && c[objectName].placements[i].x === v.x && c[objectName].placements[i].y === v.y) {
        c[objectName].placements.splice(i, 1); 
        flg = 1;
      }
    }
    if (flg === 0) {
      throw new Error(`Remove from Floor: Object with name ${objectName} does not exist in the room ${v.base} at the given position.`);
    }
  }

  visitResizeStatement(v, c) {
    const objectName = v.name;
    if (!c[objectName]) {
      throw new Error(`Resize: Object with name ${objectName} does not exist.`);
    }


    c[objectName].width = v.width;
    c[objectName].height = v.height;
  }

}

function doRectanglesOverlap(obj, x, y, width, height, target) {
  if (!obj.placements) return false;
  return obj.placements.some((placement) => {
    // Check for overlap in the x dimension
    const xOverlap = x < placement.x + placement.width && x + width > placement.x;
    // Check for overlap in the y dimension
    const yOverlap = y < placement.y + placement.height && y + height > placement.y;
    // Return true if there is overlap in both dimensions
    return placement.target === target && xOverlap && yOverlap;
  });
}