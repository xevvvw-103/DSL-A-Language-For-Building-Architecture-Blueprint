# *Check-in 2*

---

## **Planned division of main responsibilities between team members, considering how to enable working in parallel as much as possible. Consider the following points:**
### *Modular design for the software system: what is the input, output of each component? Who is responsible for each component? Do you want to be jointly responsible for some components?*
- Rules/documentation (helping with svelte too) (team effort)
- Parser (1 person)
- Conversion from AST to language (svelte, react?) (1 person)
- Render variables/image generator/back end (3 people)
    - Integrating the 2 (1 person)
    - Input (1 person)
    - Image renderer (1 person)
### *What is the data at each interface point? Are there invariants over the data other than the class structure?*
- First point is a text file/string
- Parse to AST
- AST to JSON which will be used in Sveltekit/React
- Sveltekit/React will use the JSON file to make a canvas
### *How will you be able to build component X independently? Can you write tests for component X independently of its dependent components?*
Yes - they just take general purpose data inputs – JSON
### *Who will be responsible for writing which tests, and when (will the same people write the tests as the code)?*
- JSON examples - manual front end tests - i.e. we expect a certain image, is that what’s given?
- Spike & ryan can write tests for input to AST
- Front end people write tests for conversion
### *Are there design or other project tasks (possibly including team management), other than these components, that need to be assigned/completed?*
- Finalize syntax, finalize features (**especially dynamic features**), decide on how to render things
- Initialize repo

---

## **Roadmap/timeline(s) for what should be done when, and how you will synchronise/check-in with each other to make sure progress is on-track.Talk clearly with your team members about your expectations for communication and progress, and what you will do as a team if someone falls behind.**
- Parser work takes 1 week, and should be done within week 4
- Conversion work takes 1 week, and should be done within week 5
- Render part takes 2 weeks, and should be done within Midterm Break (i.e., week 7)


---

## **Summary of progress so far.**
- Determined the topic for DSL
- Designed features of DSL
- Divided DSL into different components, and assigned team member for each part