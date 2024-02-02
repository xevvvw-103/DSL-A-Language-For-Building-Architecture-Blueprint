# Check-in 3

---

## Explain a mockup of your concrete language design (as used for your first user study), including descriptions of both the syntax and what is meant to happen.
### Include the example snippets you used in your user study, and their outputs.
```
// Domain definition

DIRECTION == (LEFT || RIGHT || UP || DOWN)

OBJECT_TYPES == (room || bed || chair || table || sofa)

// Syntax of DSL

MAKE OBJECT_TYPES NAMED (object_name) SIZE width*height

ADD (object_name) TO (room_name || FLOOR) AT (x_pos,y_pos) FACING DIRECTION

RESIZE (object_name) (new_width,new_height)

REPEAT DIRECTION ADD-Statement
```
In the current state of our DSL, object types are pre-defined.
<details>
<summary>bed</summary>

![bed](./check-in%203%20related/bed.png)
</details>

<details>
<summary>chair</summary>

![chair](./check-in%203%20related/chair.png)
</details>

<details>
<summary>sofa</summary>

![sofa](./check-in%203%20related/sofa.png)
</details>

<details>
<summary>table</summary>

![table](./check-in%203%20related/table.png)
</details>

### Examples for user study
<details>
<summary>Bedroom 1</summary>

![table](./check-in%203%20related/bedroom1.png)
<details>
  <summary>Show Code</summary>

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
</details>
</details>

<details>
<summary>Bedroom 2</summary>

![bedroom_2](./check-in%203%20related/bedroom2.png)
<details>
  <summary>Show Code</summary>

```
MAKE room NAMED br2 SIZE 200*500 AT (x,y)

MAKE chair NAMED c1 SIZE 50*50 
MAKE bed NAMED b1 SIZE 150*100
MAKE table NAMED t1 SIZE 50*50
MAKE table NAMED t2 SIZE 50*50
MAKE table NAMED t3 SIZE 80*80

ADD b1 TO br2 AT (x+50,y+50) FACING LEFT
ADD t1 TO br2 AT (x+150, y) FACING DOWN
ADD t2 TO br2 AT (x+150, y+150) FACING DOWN

ADD t3 TO br2 AT (x, y+420) FACING DOWN
ADD c1 TO br2 AT (x+80,y+435) FACING LEFT
```
</details>
</details>



<details>
<summary>Living Room 1</summary>

![lv_1](./check-in%203%20related/lr1.png)
<details>
    <summary>Show Code</summary>

```
MAKE room NAMED lr1 SIZE 500*250 AT (x,y)

MAKE chair NAMED c1 SIZE 70*70 
MAKE chair NAMED c2 SIZE 70*70 
MAKE chair NAMED c3 SIZE 100*100 
MAKE chair NAMED c4 SIZE 100*100
MAKE table NAMED t1 SIZE 150*150

MAKE table NAMED t2 SIZE 120*120
MAKE sofa NAMED s1 SIZE 200*100 

ADD t1 TO lr1 AT (x+100,y+70) FACING DOWN
ADD c1 TO lr1 AT (x+140,y) FACING DOWN
ADD c2 TO lr1 AT (x+140,y+220) FACING UP
ADD c3 TO lr1 AT (x, y+95) FACING RIGHT
ADD c3 TO lr1 AT (x+250, y+95) FACING LEFT

ADD s1 TO lr1 AT (x+300,y) FACING DOWN
ADD t2 TO lr1 AT (x+380,y+100) FACING DOWN
```
</details>
</details>



<details>
<summary>Living Room 2</summary>

![table](./check-in%203%20related/lr2.png)
<details>
    <summary>Show Code</summary>

```
MAKE room NAMED lr1 SIZE 200*500 AT (x,y)

MAKE chair NAMED c1 SIZE 50*50 
MAKE chair NAMED c2 SIZE 50*50 
MAKE table NAMED t1 SIZE 100*100

MAKE sofa NAMED s1 SIZE 50*240 
MAKE table NAMED t2 SIZE 80*240


ADD t1 TO lr1 AT (x,y) FACING DOWN
ADD c1 TO lr1 AT (x+100,y+25) FACING LEFT
ADD c2 TO lr1 AT (x+25,y+100) FACING UP

ADD s1 TO lr1 AT (x,y+260) FACING RIGHT
ADD t2 TO lr1 AT (x+50,y+260) FACING DOWN
```
</details>
</details>


<details>
<summary>Conference Room</summary>

![table](./check-in%203%20related/conference.png)
<details>
    <summary>Show Code</summary>

```
MAKE room NAMED cr1 SIZE 450*200
MAKE chair NAMED c1 SIZE 50*50

MAKE table NAMED t1 SIZE 450*100
ADD t1 TO r1 AT (x,y+50) FACING DOWN

REPEAT RIGHT ADD c1 TO r1 AT (x,y) FACING DOWN
REPEAT RIGHT ADD c2 TO r1 AT (x,y+200) FACING UP
```
</details>
</details>


---

## Notes about your first user study.
###    What did they find easy/difficult?

- The syntax of DSL is easy to understand.
- For some keyword like REPEAT, users are confused about its functionality, and when does it terminate.
- It would be better to have a feature for rotating objects.
- REPEAT can only repeatedly add one object a time. Some users want REPEAT to support other actions like RESIZE, and MAKE.
###    What did you learn from your user(s)?

The DSL is designed for people who want to develop architecture blueprints for buildings/rooms. Currently, our DSL has fulfilled the
minimum requirements for target users. If possible, we should add more features to DSL.
###    Is there anything you would have done differently? Can this be done for your final user study?
We will set stretch goals to add features like rotate, and make REPEAT more flexible. Depends on the time, these could be shown in our
final user study.

---

## What changes to your language design have you made so far, or are considering?
###     How does this affect the example snippets you include here?

We reformed the syntax of DSL. In the original design, the language is more like macro. After rework, the DSL is easier for people without 
coding experience to use. This change makes our sample codes compact and easy to read.

---

## Any changes to your project timeline/plan that you need to make?

N/A

---

## Are there new tests you can write now, based on your current project status?
###    How can your snippets be made into unit tests, and for which component(s)?

The examples above can be used to parser and rendering parts.  
###    What about planned error handling in your components? Tests for these?
```
// Construct a room of size 200*500 
MAKE room NAMED r1 SIZE 200*500 AT (x,y)

// Resize
RESIZE r1 100*400

// Error, object not exists
RESIZE r2 200*300

// Construct a bed and a chair
MAKE chair NAMED c1 SIZE 50*50 
MAKE bed NAMED b1 SIZE 100*50

// Place chair
ADD c1 to r1 AT (x,y)

// Error, object oversize
// Add bed upon chair
ADD b1 to c1 AT (x,y)

// Error, syntax error
REPEAT left REPEAT ADD c1 to b1 AT (x,y) FACING DOWN
```