I need to develop software that has X functionality.
Initial questions include:
- Which development environment? 
- Which software architecture?
    - What software to isolate from others? Why isolate? Multiple people use it or it needs to scale independntly.
- Which software frameworks and languages?
    - developer comfort. what leads to good coding practices? Strong typing + OOP.
- How to deploy?
- business constraints? (budget, time, resource)

10x software development speed
- Management wants software faster. Engineers say the timeline is infeasible. 
- Management should not try to get better estimates. They should make their engineers faster, not work more.
- Engineers aren't usually incentivized to code fast. 
- They should be.

- imagine a finished product. 


Productivity of Software Development:
1. No wasted code.
    - Don't test first. Intended functionality evolves. Tests must then change.
2. Change one thing; update one thing.
    - Don't document within a file. Code evolves. Documentation must then change.
3. Code once; success immediately.
    - Run code with logs constantly.
    - Strongly typed code.
    - Use an IDE with error checking.
4. No interpreting code. Only reading code.
    - Code must read like english.
    - Type everything with business logic types.
5. Code fast.
    - Use AI with great prompts.
    - Use an IDE with autocomplete.

typical problems when trying to implement these rules:
- bad AI prompts
- incorrect use of typing (not strong enough)
- no efficient logging set up (devOps)
- functionality evolves -> refactor
- managing when to abstract / decouple
- to what extent technical debt is acceptable?
- premature optimization
- lack of error handling


Engineering management:
- who is responsible for QA/devOps? separate teams?
- how to hire the right people?
- how to estimate time?
- when to build from scratch vs. using existing libraries (dependndcy management, codebase size/bloat, security vulnerabilities, unique solutions)?
- how to keep people motivated?
- should code reviews exist?
- to what extent should designs be approved before implementation?
- how to prioritize work?
- how to keep track of work?
- how to keep track of bugs?
- how to keep track of features?
- contract it out? in-house?
- meetings vs async comms
- how to judge quality without reading entire codebase?


product development
- agile dev for MVPs but then not needing to rebuild actual product
- what should be specified in the spec?
- what makes a good product?