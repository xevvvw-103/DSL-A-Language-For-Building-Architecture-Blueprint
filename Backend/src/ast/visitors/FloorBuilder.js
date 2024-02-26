import BaseVisitor from "./BaseVisitor.js";
import * as ast from "../index.js";
import * as fs from 'fs';
import * as path from 'path';


export default class FloorBuilder extends BaseVisitor {
  // Objects declared by Make_Statement
  // declared_objects = [object]
  // object = {name: , width: , height: , type: }
  static declared_objects = [];

  // Items added to FLOOR
  // floor_list = [item]
  // item: {name: , width: , height: , x: , y: , type: , direction: , childs: [item]}
  static floor_list = [];

  // output all inforamtion in JSON to .txt file
  buildFloor(p) {
    const filePath = '../../Frontend/arch/src/lib/output.json';

    p.accept(this, null);

    let rawdata = [];
    for (let i = 0; i < FloorBuilder.floor_list.length; i++) {
      let non_child_entry = {
        type: FloorBuilder.floor_list[i].type,
        position: {
          x: FloorBuilder.floor_list[i].x,
          y: FloorBuilder.floor_list[i].y
        },
        size: {
          width: FloorBuilder.floor_list[i].width,
          height: FloorBuilder.floor_list[i].height
        },
        direction: FloorBuilder.floor_list[i].direction
      };
      rawdata.push(non_child_entry);

      for (let j = 0; j < FloorBuilder.floor_list[i].childs.length; j++) {
        let child_entry = {
          type: FloorBuilder.floor_list[i].childs[j].type,
          position: {
            x: FloorBuilder.floor_list[i].x + FloorBuilder.floor_list[i].childs[j].x,
            y: FloorBuilder.floor_list[i].y + FloorBuilder.floor_list[i].childs[j].y
          },
          size: {
            width: FloorBuilder.floor_list[i].childs[j].width,
            height: FloorBuilder.floor_list[i].childs[j].height
          },
          direction: FloorBuilder.floor_list[i].childs[j].direction
        }
        rawdata.push(child_entry);
      }
    }
    
    let outputData = JSON.stringify(rawdata);
    // Checking if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // If the file doesn't exist, create the directory
        const directory = path.dirname(filePath);
        fs.mkdir(directory, { recursive: true }, (mkdirErr) => {
          if (mkdirErr) {
            console.error('Error creating directory:', mkdirErr);
          } else {
            console.log('Directory created successfully.');

            // Write to the file after creating the directory
            fs.writeFile(filePath, outputData, (writeErr) => {
              if (writeErr) {
                console.error('Error writing to the file:', writeErr);
              } else {
                console.log('File has been written successfully.');
              }
            });
          }
        });
      } else {
        // File exists, directly write to it
        fs.writeFile(filePath, outputData, (writeErr) => {
          if (writeErr) {
            console.error('Error writing to the file:', writeErr);
          } else {
            console.log('File has been written successfully.');
          }
        });
      }
    });
  }

  visitProgram(p, t) {
    p.statements.forEach((statement) => statement.accept(this, t));
  }

  visitMakeRoom(v, t) {
    FloorBuilder.declared_objects.push({ name: v.name, width: v.width, height: v.height, type: ast.OBJECT_TYPE.ROOM });
    console.log('ROOM ' + v.name + " is created.");
  }

  visitMakeFurniture(v, t) {
    FloorBuilder.declared_objects.push({ name: v.name, width: v.width, height: v.height, type: v.furintureType });
    console.log(v.furintureType.toUpperCase() + ' ' + v.name + " is created.");
  }

  visitAddToRoom(v, t) {
    let addable = false;

    for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
      if (FloorBuilder.declared_objects[i].name == v.name) {
        var child_width = FloorBuilder.declared_objects[i].width;
        var child_height = FloorBuilder.declared_objects[i].height;
        var child_type = FloorBuilder.declared_objects[i].type;
        break;
      }
    }
    // floor_list = [item]
    // item: {name: , width: , height: , x: , y: , type: , direction: , childs: [item]}
    for (let i = 0; i < FloorBuilder.floor_list.length; i++) {
      if (FloorBuilder.floor_list[i].name == v.target &&
        // room_width >= child_x + child_width
        FloorBuilder.floor_list[i].width >= v.x + child_width &&
        // room_height >= child_y + child_height
        FloorBuilder.floor_list[i].height >= v.y + child_height) {
        var child_list = FloorBuilder.floor_list[i].childs;
        child_list.push({ name: v.name, width: child_width, height: child_height, x: v.x, y: v.y, type: child_type, direction: v.direction, childs: [] });
        addable = true;
        console.log(child_type.toUpperCase() + ' ' + v.name + ' is added to ROOM ' + v.target + '.');
        break;
      }
    }

    if (!addable) {
      console.log('ADD ERROR: ' + child_type.toUpperCase() + ' ' + v.name + " can't be added to ROOM " + v.target + '.');
    }
  }

  visitAddToFloor(v, t) {
    let addable = false;

    for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
      if (FloorBuilder.declared_objects[i].name == v.name) {
        // floor_list = [item]
        // item: {name: , width: , height: , x: , y: , type: , direction: , childs: [item]}
        var type = FloorBuilder.declared_objects[i].type;
        FloorBuilder.floor_list.push({
          name: v.name,
          width: FloorBuilder.declared_objects[i].width,
          height: FloorBuilder.declared_objects[i].height,
          x: v.x,
          y: v.y,
          type: type,
          direction: v.direction,
          childs: []
        });
        console.log(type.toUpperCase() + ' ' + v.name + " is addded to FLOOR.");
        addable = true;
        break;
      }
    }

    if (!addable) {
      console.log('ADD ERROR: ' + v.name + ' does not exist.');
    }
  }

  visitResizeStatement(v, t) {
    let resizable = false;

    for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
      if (FloorBuilder.declared_objects[i].name == v.name) {
        FloorBuilder.declared_objects[i].width = v.width;
        FloorBuilder.declared_objects[i].height = v.height;
        console.log(FloorBuilder.declared_objects[i].type.toUpperCase() + ' ' + v.name + ' is resized.');
        //console.log('declared objects ' + FloorBuilder.declared_objects);
        resizable = true;
        break;
      }
    }

    if (!resizable) {
      console.log('RESIZE ERROR: ' + v.name + ' does not exist.');
    }
  }

  visitRepeatStatement(v, t) {
    // REPEAT ADD 
    let times = v.times;

    for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
      if (FloorBuilder.declared_objects[i].name == v.repeatableStatement.name) {
        var child_width = FloorBuilder.declared_objects[i].width;
        var child_height = FloorBuilder.declared_objects[i].height;
      }
      if (FloorBuilder.declared_objects[i].name == v.repeatableStatement.target) {
        var room_width = FloorBuilder.declared_objects[i].width;
        var room_height = FloorBuilder.declared_objects[i].height;
      }
    }
    // floor_list = [item]
    // item: {name: , width: , height: , x: , y: , type: , direction: , childs: [item]}
    switch (v.direction) {
      case ast.DIRECTION.UP:
        if (v.repeatableStatement.target && (times == 0 || Math.floor(v.repeatableStatement.y / child_height) < times)) {
          times = Math.floor(v.repeatableStatement.y / child_height);
        }
        for (let i = 0; i < times; i++) {
          v.repeatableStatement.accept(this, null);
          v.repeatableStatement.y -= child_height;
        }
        break;
      case ast.DIRECTION.LEFT:
        if (v.repeatableStatement.target && (times == 0 || Math.floor(v.repeatableStatement.x / child_width) < times)) {
          times = Math.floor(v.repeatableStatement.x / child_width);
        }
        for (let i = 0; i < times; i++) {
          v.repeatableStatement.accept(this, null);
          v.repeatableStatement.x -= child_width;
        }
        break;
      case ast.DIRECTION.RIGHT:
        if (v.repeatableStatement.target && (times == 0 || Math.floor((room_width - v.repeatableStatement.x) / child_width) < times)) 
        {
          times = Math.floor((room_width - v.repeatableStatement.x) / child_width);
        } 
        for (let i = 0; i < times; i++) {
          v.repeatableStatement.accept(this, null);
          v.repeatableStatement.x += child_width;
        }
        break;
      case ast.DIRECTION.DOWN:
        if (v.repeatableStatement.target && (times == 0 || Math.floor((room_height - v.repeatableStatement.y) / child_height) < times)) {
          times = Math.floor((room_height - v.repeatableStatement.y) / child_height);
        }
        for (let i = 0; i < times; i++) {
          v.repeatableStatement.accept(this, null);
          v.repeatableStatement.y += child_height;
        }
        break;
      default:
        console.log('REPEAT ERROR: Incorrect sentence: ' + v.repeatableStatement + '.');
    }
  }

  visitRemoveFromFloor(v, t) {
    let removable = false;
    // floor_list = [item]
    // item: {name: , width: , height: , x: , y: , type: , direction: , childs: [item]}
    for (let i = 0; i < FloorBuilder.floor_list.length; i++) {
      if (FloorBuilder.floor_list[i].name == v.target && FloorBuilder.floor_list[i].x == v.x && FloorBuilder.floor_list[i].y == v.y) {
        var type = FloorBuilder.floor_list[i].type;
        FloorBuilder.floor_list.splice(i, 1);
        removable = true;
        console.log(type.toUpperCase() + ' ' + v.target + ' is removed from FLOOR.')
        break;
      }
    }

    if (!removable) {
      console.log('REMOVE ERROR: ' + v.name + ' does not exist.')
    }
  }

  visitRemoveFromRoom(v, t) {
    let removable = false;

    // floor_list = [item]
    // item: {name: , width: , height: , x: , y: , type: , direction: , childs: [item]}
    for (let i = 0; i < FloorBuilder.floor_list.length; i++) {
      if (FloorBuilder.floor_list[i].name == v.base) {
        for (let j = 0; j < FloorBuilder.floor_list[i].childs.length; j++) {
          if (FloorBuilder.floor_list[i].childs[j].name == v.target && FloorBuilder.floor_list[i].childs[j].x == v.x && FloorBuilder.floor_list[i].childs[j].y == v.y) {
            var type = FloorBuilder.floor_list[i].childs[j].type;
            FloorBuilder.floor_list[i].childs.splice(j, 1);
            removable = true;
            console.log(type.toUpperCase() + ' ' + v.target + ' is removed from ROOM ' + v.base);
            break;
          }
        }
      }
    }

    if (!removable) {
      console.log('REMOVE ERROR: ' + v.target + ' does not exist in ROOM ' + v.base + '.');
    }
  }
}
