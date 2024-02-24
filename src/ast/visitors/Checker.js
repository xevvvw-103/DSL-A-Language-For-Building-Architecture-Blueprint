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
      console.log(`Room name cannot be FLOOR.`);
    else if (c[roomName]) {
      console.log(`Room with name ${roomName} already exists.`);
    }
    c[roomName] = { type: "room",  
                    width: v.width,
                    height: v.height,
                    placements: []};
  }

  visitMakeFurniture(v, c) {
    const furnitureName = v.name;
    if (furnitureName === "FLOOR") 
      console.log(`Room name cannot be FLOOR.`);
    if (c[furnitureName]) {
      console.log(`Furniture with name ${furnitureName} already exists.`);
    }
    c[furnitureName] = { type: "furniture",
                         width: v.width,
                         height: v.height,
                         placements: []};
  }
  visitAddToRoom(v, c) {
    const objectName = v.name;
    if (!c[objectName]) {
      console.log(`Add to Rooom: Object with name ${objectName} does not exist.`);
    }
    // Check if the object can be placed without overlapping with other placements
    var overlapping = false;
    Object.keys(c).forEach((key) => {
      if (doRectanglesOverlap(c[key], v.x, v.y, c[objectName].width, c[objectName].height, v.target)) {
        overlapping = true;
      }
    });
    if (overlapping) {
      console.log(`Add to Room: Object with name ${objectName} cannot be placed at (${v.x}, ${v.y}) in room ${v.target} due to overlapping.`);
    } else {
      c[objectName].placements.push({target: v.target, x: v.x, y: v.y});
    }
  }
  visitAddToFloor(v, c) {
    const objectName = v.name;
    if (!c[objectName]) {
      console.log(`Add to Floor: Object with name ${objectName} does not exist.`);
    }

    // Check if the object can be placed without overlapping with other placements
    var overlapping = false;
    Object.keys(c).forEach((key) => {
      if (doRectanglesOverlap(c[key], v.x, v.y, c[objectName].width, c[objectName].height, 'FLOOR')) {
        overlapping = true;
      }
    });

    if (overlapping) {
      console.log(`Add to Floor: Object with name ${objectName} cannot be placed at (${v.x}, ${v.y}) due to overlapping.`);
    } else {
      c[objectName].placements.push({target: 'FLOOR', x: v.x, y: v.y});
    }
  }
  visitResizeStatement(v, c) {
    const objectName = v.name;
    if (!c[objectName]) {
      console.log(`Resize: Object with name ${objectName} does not exist.`);
    }
  }

  visitRepeatStatement(v, c) {
    // TODO 
  }

  visitRemoveFromFloor(v, c) {
    const objectName = v.target;
    if (!c[objectName]) {
      console.log(`Remove from Floor: Object with name ${objectName} does not exist.`);
    }
    if (c[objectName].placements.length === 0) {
      console.log(`Remove from Floor: Object with name ${objectName} does not exist in the floor.`);
    }
    var flg = 0;
    for( var i = 0; i < c[objectName].placements.length; i++){ 
      if ( c[objectName].placements[i].target === 'FLOOR' && c[objectName].placements[i].x === v.x && c[objectName].placements[i].y === v.y) {
        c[objectName].placements.splice(i, 1); 
        flg = 1;
      }
    }
    if (flg === 0) {
      console.log(`Remove from Floor: Object with name ${objectName} does not exist in the floor at the given position.`);
    }
  }
  visitRemoveFromRoom(v, c) {
    const objectName = v.target;
    if (!c[objectName]) {
      console.log(`Remove from Room: Object with name ${objectName} does not exist.`);
    }
    var flg = 0;
    for( var i = 0; i < c[objectName].placements.length; i++){ 
      if ( c[objectName].placements[i].target === v.base && c[objectName].placements[i].x === v.x && c[objectName].placements[i].y === v.y) {
        c[objectName].placements.splice(i, 1); 
        flg = 1;
      }
    }
    if (flg === 0) {
      console.log(`Remove from Floor: Object with name ${objectName} does not exist in the room ${v.base} at the given position.`);
    }
  }

  visitResizeStatement(v, c) {
    const objectName = v.name;
    if (!c[objectName]) {
      console.log(`Resize: Object with name ${objectName} does not exist.`);
    }


    c[objectName].width = v.width;
    c[objectName].height = v.height;
  }

}

function doRectanglesOverlap(obj, x, y, width, height, target) {
  if (!obj.placements) return false;
  return obj.placements.some((placement) => {
    // Check for overlap in the x dimension
    const xOverlap = x < placement.x + obj.width && x + width > placement.x;
    // Check for overlap in the y dimension
    const yOverlap = y < placement.y + obj.height && y + height > placement.y;
    // Return true if there is overlap in both dimensions
    return placement.target === target && xOverlap && yOverlap;
  });
}