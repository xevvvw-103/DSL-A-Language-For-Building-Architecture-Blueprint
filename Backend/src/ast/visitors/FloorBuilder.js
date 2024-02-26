import BaseVisitor from "./BaseVisitor.js";
import * as ast from "../index.js";
import * as fs from 'fs';
import * as path from 'path';

export default class FloorBuilder extends BaseVisitor {
  // Objects declared by Make_Statement
  // declared_objects = [object]
  // object: {name: , width: , height: , type: , childs: [child]}
  // child: {name: , width: , height: , x: , y: , type: , direction: , childs: [child]}
  static declared_objects = [];

  // Items added to FLOOR
  // floor_list = [item]
  // item: {name: , width: , height: , x: , y: , type: , direction: , dirty: , childs: [item]}
  static floor_list = [];

  // output all inforamtion in JSON to .txt file
  buildFloor(p) {
    const filePath = '../../Frontend/arch/src/lib/output.json';

    p.accept(this, null);

    let rawdata = [];
    this.parseToJson(FloorBuilder.floor_list, 0, 0, rawdata);

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
    FloorBuilder.declared_objects.push({ name: v.name, width: v.width, height: v.height, type: ast.OBJECT_TYPE.ROOM, childs: [] });
    console.log('ROOM ' + v.name + " is created.");
  }

  visitMakeFurniture(v, t) {
    FloorBuilder.declared_objects.push({ name: v.name, width: v.width, height: v.height, type: v.furintureType, childs: [] });
    console.log(v.furintureType.toUpperCase() + ' ' + v.name + " is created.");
  }

  visitAddToRoom(v, t) {
    let addable = false;
      // declared_objects = [object]
  // object: {name: , width: , height: , type: , childs: [child]}
  // child: {name: , width: , height: , x: , y: , type: , direction: , childs: [child]}

      // floor_list = [item]
  // item: {name: , width: , height: , x: , y: , type: , direction: , dirty: , childs: [item]}
    for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
      if (FloorBuilder.declared_objects[i].name == v.name) {
        var child_width = FloorBuilder.declared_objects[i].width;
        var child_height = FloorBuilder.declared_objects[i].height;
        var child_type = FloorBuilder.declared_objects[i].type;
        var child_childs = FloorBuilder.declared_objects[i].childs;
        break;
      } 
    }

    if (child_type == ast.OBJECT_TYPE.ROOM) {
      // add room to room

      // update declared_objects childs info
      for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
        if (FloorBuilder.declared_objects[i].name == v.target) {
          FloorBuilder.declared_objects[i].childs.push({
            name: v.name, 
            width: child_width, 
            height: child_height, 
            x: v.x, 
            y: v.y, 
            type: child_type, 
            direction: v.direction, 
            childs: child_childs
          });
          break;
        } 
      }
    } else {
      // add furniture to room

      // update declared_objects childs info
      for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
        if (FloorBuilder.declared_objects[i].name == v.target) {
          FloorBuilder.declared_objects[i].childs.push({
            name: v.name, 
            width: child_width, 
            height: child_height, 
            x: v.x, 
            y: v.y, 
            type: child_type, 
            direction: v.direction, 
            childs: []
          });
          break;
        } 
      }

      // update floor_list childs info
      for (let i = 0; i < FloorBuilder.floor_list.length; i++) {
        if (FloorBuilder.floor_list[i].name == v.target &&
          FloorBuilder.floor_list[i].dirty == false &&
          // room_width >= child_x + child_width
          FloorBuilder.floor_list[i].width >= v.x + child_width &&
          // room_height >= child_y + child_height
          FloorBuilder.floor_list[i].height >= v.y + child_height) {
          FloorBuilder.floor_list[i].childs.push({ 
            name: v.name, 
            width: child_width, 
            height: child_height, 
            x: v.x, 
            y: v.y, 
            type: child_type, 
            direction: v.direction, 
            dirty: false,
            childs: [] 
          });

          addable = true;
          console.log(child_type.toUpperCase() + ' ' + v.name + ' is added to ROOM ' + v.target + '.');
          break;
        }
      }
    }

    if (!addable) {
      console.log('ADD ERROR: ' + child_type.toUpperCase() + ' ' + v.name + " can't be added to ROOM " + v.target + '.');
    }
  }

  visitAddToFloor(v, t) {
    let addable = false;

    for (let i = 0; i < FloorBuilder.declared_objects.length; i++) {
      let type = FloorBuilder.declared_objects[i].type;
      if (FloorBuilder.declared_objects[i].name == v.name) {
        FloorBuilder.floor_list.push({
          name: v.name,
          width: FloorBuilder.declared_objects[i].width,
          height: FloorBuilder.declared_objects[i].height,
          x: v.x,
          y: v.y,
          type: type,
          direction: v.direction,
          dirty: false,
          childs: this.objectChildsToFloorChilds(FloorBuilder.declared_objects[i].childs)
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
      if (FloorBuilder.declared_objects[i].name == v.name && FloorBuilder.declared_objects[i].type == ast.OBJECT_TYPE.ROOM) {
        // resize room and all items inside
        let old_width = FloorBuilder.declared_objects[i].width;
        let old_height = FloorBuilder.declared_objects[i].height;

        let x_ratio = v.width / old_width;
        let y_ratio = v.height / old_height;

        let new_childs = this.resizeChilds(FloorBuilder.declared_objects[i].childs, x_ratio, y_ratio);

        let entry = {
          name: v.name,
          width: v.width,
          height: v.height,
          type: FloorBuilder.declared_objects[i].type,
          childs: new_childs
        };

        FloorBuilder.declared_objects.splice(i, 1);
        FloorBuilder.declared_objects.push(entry);

        // Change dirty bit to true
        for (let j = 0; j < FloorBuilder.floor_list.length; j++) {
          if (FloorBuilder.floor_list[j].name == v.name) {
            FloorBuilder.floor_list[j].dirty = true;
          }
        }
        console.log(FloorBuilder.declared_objects[i].type.toUpperCase() + ' ' + v.name + ' is resized.');
        resizable = true;
        break;
      } else if (FloorBuilder.declared_objects[i].name == v.name && FloorBuilder.declared_objects[i].type != ast.OBJECT_TYPE.ROOM) {
        // resize furniture only
        FloorBuilder.declared_objects[i].width = v.width;
        FloorBuilder.declared_objects[i].height = v.height;
        console.log(FloorBuilder.declared_objects[i].type.toUpperCase() + ' ' + v.name + ' is resized.');
        resizable = true;
        break;
      }
    } 

    if (!resizable) {
      console.log('RESIZE ERROR: ' + v.name + ' does not exist.');
    }
  }

  resizeChilds(list, x_ratio, y_ratio) {
    let resizedChildren = [];
  
    list.forEach((entry) => {
      let resizedChild = {
        name: entry.name,
        width: entry.width * x_ratio,
        height: entry.height * y_ratio,
        x: entry.x * x_ratio,
        y: entry.y * y_ratio,
        type: entry.type,
        direction: entry.direction,
      };
  
      if (entry.childs) {
        // Recursively resize child's child objects
        resizedChild.childs = this.resizeChilds(entry.childs, x_ratio, y_ratio);
      }
  
      resizedChildren.push(resizedChild);
    });
  
    return resizedChildren;
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
        if (v.repeatableStatement.target && (times == 0 || Math.floor((room_width - v.repeatableStatement.x) / child_width) < times)) {
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

    this.searchFurniture(FloorBuilder.floor_list, v.target, v.base, v.x, v.y);

    if (!removable) {
      console.log('REMOVE ERROR: ' + v.target + ' does not exist in ROOM ' + v.base + '.');
    }
  }

  searchFurniture(list, child_name, parent_name, x, y) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name == parent_name) {
        for (let j = 0; j < list[i].childs.length; j++) {
          if (list[i].childs[j].name == child_name && list[i].childs[j].x == x && list[i].childs[j].y == y) {
            var type = list[i].childs[j].type;
            list[i].childs.splice(j, 1);
            removable = true;
            console.log(type.toUpperCase() + ' ' + v.target + ' is removed from ROOM ' + v.base);
            break;
          }
        }
      } else {
        this.searchFurniture(list.childs, child_name, parent_name, x, y);
      }
    }
  }

  objectChildsToFloorChilds(childs) {
    let new_childs = [];
    childs.forEach((child) => {
      new_childs.push({
        name: child.name,
        width: child.width,
        height: child.height,
        x: child.x,
        y: child.y,
        type: child.type,
        direction: child.direction,
        dirty: false,
        childs: this.objectChildsToFloorChilds(child.childs)
      });
    });
    return new_childs;
  }

  parseToJson(list, acc_x, acc_y, output) {
    list.forEach((item) => {
      let entry = {
        type: item.type,
        position: {
          x: item.x + acc_x,
          y: item.y + acc_y,
        },
        size: {
          width: item.width,
          height: item.height
        },
        direction: item.direction
      };
      output.push(entry);

      let new_acc_x = item.x + acc_x;
      let new_acc_y = item.y + acc_y;

      this.parseToJson(item.childs, new_acc_x, new_acc_y, output);
    })
  }
}
