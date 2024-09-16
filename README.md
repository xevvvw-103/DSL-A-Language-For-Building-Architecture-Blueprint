# DSL: A Language For Building Architecture Blueprint

## Prerequisites
[Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## How To Run
1. Navigate to `.\Frontend\arch`
2. Run `npm install` for required packages
3.  - For Window, run `npm run dev` to start localhost port
    - For Mac, run `yarn dev` to start localhost port
4. Navigate to `.\Backend\src`
5. Run `npm install` for required packages
6. Write sentences (refer to `Syntax of DSL`) in `input.txt`
7. Run `npm start` and you will see rendered images at `http://localhost:5173/`

## Syntax of DSL

- `OBJECT_TYPE`:
    - room
    - chari
    - bed
    - couch
    - table

- `DIRECTION`:
    - LEFT
    - RIGHT
    - UP 
    - DOWN

- `NUMMBER`: Natural Number

- `MAKE` Statement
    - `MAKE` `OBJECT_TYPE` `NAMED` name `SIZE` width,height
- `ADD` Statement
    - `ADD` child_name `TO` parent_name/FLOOR `AT` relative_x,relative_y `FACING` `DIRECTION`  
- `RESIZE` Statement
    - `RESIZE` name width,height
- `REPEAT` Statement
    - `REPEAT`  `DIRECTION` `ADD` Statement
    - `REPEAT` `NUMBER TIMES`  `DIRECTION` `ADD` Statement
- `REMOVE` Statement
    - `REMOVE` child_name `FROM` parent_name/FLOOR `AT` relative_x,relative_y

## Samples

```
MAKE room NAMED br1 SIZE 200*500 AT (x,y)

MAKE chair NAMED c1 SIZE 50*50
MAKE bed NAMED b1 SIZE 100*150
MAKE table NAMED t1 SIZE 50*50
MAKE table NAMED t2 SIZE 80*80

ADD b1 TO br1 AT (x,y) FACING DOWN
ADD t1 TO br1 AT (x+100, y) FACING DOWN
ADD t2 TO br1 AT (x, y+420) FACING DOWN
ADD c1 TO br1 AT (x+15, y+370) FACING DOWN
```
![sample output](./check-ins/check-in%203%20related/bedroom1.png)