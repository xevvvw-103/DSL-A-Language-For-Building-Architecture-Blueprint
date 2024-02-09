# Check-in 4

---

## Status of implementation.
### Component-wise progress
We have finished lexer and parser part, and moved onto AST conversion implementation.
### Which tests are passing, and which not?

Parser can correctly generate tokens.

### Which extra tests still need to be written/made?
Because we will extend REPEAT function, there should be new tests like
```
// Assume: floor( width(r1) / width(c1) ) > 5
// Repeat 5 times add instructions
REPEAT left ADD c1 to r1 AT (x,y) 5

// Error
REPEAT left ADD c1 to r1 AT (x,y) -4

// Assume: floor(width(r1) / width(c1)) < 50
// It will not signal an error, but it does the same as REPEAT left ADD c1 to r1 AT (x,y)
REPEAT left ADD c1 to r1 AT (x,y) 50

```

---

## Plans for final user study.
### Are there any major differences from the previous one? If so, what are the reasons?
Based on feedbacks from TA and first user study, we decide to modify the REPEAT function.
```
// n is optional. Number of times to repeat.
// If not declear n, REPEAT will behave as fault.
REPEAT DIRECTION ADD-Statement (Number n)
```
Now, users can repeatedly add items with flexibility. 
### Make sure to find suitable users (different from the first study!)

---

## Planned timeline for the remaining days.
### Plans for integration/end-to-end testing
Next two weeks, we will focus on AST conversion and rendering part. We will perform integration testing and bug-fixing 
in week 7.
### Be sure to test for smooth error-handling (as well as expected results working)
### Make sure to schedule some time for bug-fixing!