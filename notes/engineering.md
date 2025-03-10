Folders:
    - always create export files that appropriately name exports

Files:
    - maximum 3 import statements
    - maximum 3 levels of indentation (class > method > loop > if), 
        excluding line-wrapping
    - maximum 80 chars per line, minimal wrapping
    - maximum 150 lines per file, no minimal length

Classes:
    - explicitly declare "access modifiers" and "const/readonly" 

Functions:
    Parameters:
        - newlines between parameters (declaring and calling)
        - name parameters (calling), 
            possible exception is end-user-oriented functions
    Return:
        - only return "Result" objects
        - don't throw exceptions

Types:
    - never use built-in types, always use business logic types
    - never use type aliases if possible
    - never cast unless its during creation of the var
    - prioritize classes over custom types

Logic:
    - prioritize maps/filters/etc > for-each > while > for

General:
    - names are 1-2 English words or well-known abbreviations
    - zero tolerance policy for repeating yourself 








Development Principles
General Principles
Minimize debugging and refactoring
Readability is #1, especially with AI dev
Minimize state tracking/syncing between two hosts. State drift can cause a lot of silent pain
I am not a fan of C/C++ having a .h and .cc files being separate. So annoying to try to navigate around code. 
Personal Experiences or Problems
If creating/running/investigating tests are hard, it inadvertently lowers software quality. 
Initiative is the only realistic defense against software debt
People underestimate the impact optimal tooling has on joy
Development Framework
Retrospectively, I wish I designed a robust type system and OOP declarations before even thinking about architecture/testing/implementation, in other words a week or two of no results and just OOP declarations to start
Testing
When should you do it?
What should be tested and how rigorously? Private/public methods, utility functions, interfaces
100% coverage is often infeasible at scale. When do we know it’s enough?
Testing methodologies: fuzz testing, utilizing random values in testing, integration testing
For the total amount of budget/human resources allocated for a product, how much should be on testing and how much should be on feature work? 
Requirements - feasibility claims -> testing of achieving feasibility or other kinds of testing (whether design or implementation) should be at the end development -> because header files can change due to change of requirements or refactoring design -> too difficult to decouple tests from what the declarations that they test, always coupled
Testing outermost interfaces gets you max coverage for time invested, but doesnt get all branches of logic
Hard to convert run time into compile time errors when using live third party services
silent  - compile time - run time, testing only gets run time and silent, most run time (imo) can be converted to compile time, but what about silent?
Naming
examples of conventions: leading underscore for private members, snake, camel
Things you can name: classes, variables, enums, constants, methods, functions, files, folders
File Organization
What justifies the length of a file, or what gets included and excluded?
How short of a file is acceptable
Line-length
One-liners
Indentation (maximum 3 tab indentation per file), indent for logic or lists, nothing else
Whitespace
It seems to be the way to go to just have massive amounts of files, all of them quite short, with many folders, and hopes that you never have to go back and forth, and you just work on one folder at a time
Folder Organization
Is a “util” folder/file good? 
Refactoring
How to avoid refactoring?
How to design in a way that makes refactoring as easy as possible?

Abstraction & Dependencies
At what point is it “too abstracted”?
Do “dependency injection” and always have dependencies clearly stated, this could mean many classes that are just a single function ie turning a function into a class (think API method).
How crazy should you go with the idea of clean interfaces? Should everything you design be highly abstracted and portable, acting like millions of ppl will build on it?
Debugging
My experience - the best way is to debug as you write, ideally, the program is constantly running, and it shows error or correct results/prints, and you code like this with two panels up
Typing
Never use built-in types, always use business logic types
Never use type aliases if possible
Never cast unless its during creation of the var
Programming Paradigm
OOP vs functional
Maps, filters, and other in-place operations are highly readable
Functions, variables, constants, etc not wrapped in classes get highly confusing
Git Usage
When to branch, commit, etc
Errors
Turn run-time errors into compile-time errors
Monitoring/Operations
The relationship between monitoring, alarming, and operational burden.
Profiling

Third Parties
What justifies using a third party framework/library/code vs building it in-house?
Documentation
I don’t believe you should document at all

Software Management Principles
Code Review
What are reasonable responsibilities/expectations/obligations for the reviewer and author for a CR? 
How often to code review
Task Prioritization



Defining Requirements






Lifecycle of Software

Software Design

Testing/Validation
The types of tests one runs should cover edge cases under two categories
Feature-level edge-cases
Implementation-level edge-cases
Any design document for software should include corresponding tests and defined expectations for scenarios in both categories

Tooling

Deployment

Documentation






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