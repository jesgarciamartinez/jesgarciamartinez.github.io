---
title: "Using AI for programming"
description: "Notes and links on using LLMs to code"
draft: true
---

I've been trying out many new AI products, like [Cursor](https://www.cursor.com/) and [Perplexity](https://www.perplexity.ai/).

This is my loose collection of notes and links about AI tools, specifically for software development.

## Multiple partially-applied prompts

LLMs are a powerful, open-ended tool, but also a bit of a black box.
I sometimes don't realize I can have AI do a particular task, and I have to consciously remind myself to try.
> going back to my old ways
 

I also have shortcuts for enabling / disabling autocompletion (there really should be a `toggle` command for this).


I think a lot of AI products boil down to

In my mind, I call this the "Ramesh button", after the scene in *Margin Call* where, during a meeting, the boss just says "Ramesh" – the name of the legal head of the company – for him to give his input on the situation.

You should be able to select a text and click a button to get an AI expert opinion.
And once you have that button, you can program it:
- run it continuously, in the background
- run it as a "pre-commit" hook
 
- take a page from NASA, etc
    - ways to map design to specific lines of code
    - also relates to inversion of control


## tools

### editor assistants

- [Cursor](https://www.cursor.com/)
- [aider: AI pair programming in your terminal](https://github.com/paul-gauthier/aider)
- [claude-engineer](https://github.com/Doriandarko/claude-engineer)
- [open-source AI code assistant](https://github.com/continuedev/continue)
- [Codeium](https://codeium.com/)
- [Qodo (formerly Codium)](https://www.qodo.ai/)
- [Cody | AI coding assistant](https://sourcegraph.com/cody)
- [TabbyML/tabby: Self-hosted AI coding assistant](https://github.com/TabbyML/tabby)
- [Supermaven: Free AI Code Completion](https://supermaven.com/)

### other

- [Meticulous](https://www.meticulous.ai/how-it-works)

## Use cases and prompts

- [Artificial intelligence is losing hype | Hacker News](https://news.ycombinator.com/item?id=41295923&p=2)
    - >  Here are the things i've used LLMs for, with success in all areas as a solo technical founder. Business Advice including marketing, reaching out to investors, understanding SAFE notes (follow up questions after watching the Y Combinator videos), customer interview design. All of which, as an engineer, I had never done before. Create SQL queries for all kinds of business metrics including Monthly/Daily Active users, breakdown of users by country, abusive user detection and more. Automated unit test creation. Not just the happy path either. Automated data repository creation, based on a one shot example and MySQL text output describing the tables involved. From this, I have super fast data repositories that use raw SQL to get/write data. Helping with challenging code problems that would otherwise need hours of searching google or reading the docs. Database and query optimization. Code Review. This has caught edge case bugs that normal testing did not detect. I'm going to try out aider + claude sonnet 3.5 on my codebases. I have heard good things about it and some rave reviews on X/twitter. I watched a video where an engineer had a bug, described it to some tool (which wasn't specified, but I suspect aider), then Claude created a test to reproduce the bug and then fixed the code. The test passed, they then did a manual test and the bug was gone.
    - > The sweet spot of the current LLMs (not whatever the next gen might or might not improve on) for me is similar to suddenly having an army of idiots at my fingertips. There are a lot of smallish tasks/problems people/systems needs to deal with, some of them even waste notable real engineering capacity, and a highschooler could do manually quite easily by hand. Example: find out if a text contains an email address, including all kinds of shenanigans people do to mask it (may not be allowd, ... whatever). From a purely coding standpoint, this is a cats-and-mouse game of improving regex solutions in many cases to also find the more sophisticated patterns, but there will always be uncatched/new ways or simply errors that produce false positives. But a highschooler can be given a text and instantly spot the email address (or confirm none is in there). In order to "solve" these types of small problems, LLMs are pretty much fantastic. It needs to only be reliable enough to produce a structured answer within a few attempts and cheap enough to not be a concern for finance/operations. Thats why for me it makes absolutely sense that the #1 priority for OpenAI since GPT4 has been building smaller/faster/cheaper models. Automators need exactly that, not genius-level AGI.

- [How I code 159% Faster using AI (Cursor + Sonnet 3.5) - YouTube](https://www.youtube.com/watch?v=yk9lXobJ95E)
    - [prompts/LearnToCode.md at main · VoloBuilds/prompts](https://github.com/VoloBuilds/prompts/blob/main/LearnToCode.md)
- [anthropics/anthropic-cookbook: A collection of notebooks/recipes showcasing some fun and effective ways of using Claude.](https://github.com/anthropics/anthropic-cookbook/tree/main)

- given a piece of code
    - translate to another lang
    - minor modifications (casing)
    - questions
        - what errors are here?
        - how can this be improved?
    - can you do this with less code?

- given a design, code it
    - fn with input output types
    - pseudocode

- help come up with the design
    - ask followup questions

programmers often jump to implementation, figure out design as they go

- types of responses you can get
    - text
        - explanation
        - yes / no
    - code
    - data
        - sql
        - categorization


---

Thoughts on codegen ai products
    - AI is good at 
        - tailwind, react
        - things together for context (eg tailwind)
            - but also, stuff like alpine is good for humans (see everything at once),
              for AIs we can statically analyze which css/js corresponds to which html and send
              them that
        - it seem code should be either raw html or react (most popular framework)
            - 
    - How to ensure correctness - AI generates lots of code, need to be able to read quickly
        - types
        - assertions - can ask AI to come up with invariants
        - have layers in the codebase the AI doesn't touch
        - tests: generate tests, manually checking if the test code is correct should be easier
            than the impl (like a hashing fn)
        - self-measures (things LLMs themselves can do)
            - is this correct? review
            - write in less lines
    - AI pros
        - can work with html itself, not some components
    - Possible products
        - para luego modificar live, mejor react o html?
        - websites
            - landing
        - internal tools
        - testing

- To improve productivity we must generate more code
    - counter: deleting stuff is good - but that just means the arch was wrong
    - counter: sometimes a feature does not require lots of code, can reuse
- LLMS promote less abstraction / reusability, encourage staying at a lower
    abstraction level, you can just generate the needed code
    - e.g. golang style
    - is this easier to verify? not necessarily
    - counter: more leads to more bugs when one-shotting
    - working with non-turing complete - e.g. with HTMX, can't fail
      - the more raw JS, the more things can fail
- LLMs make the ecosystem argument when choosing tech more important
- can put the functionality of radix into regular libraries, non react - ie tooltipize instead of radix tooltip

- see Terence Tao talk

#### Cursor

@ in chat

- [Coding with Cursor: Session 1 - YouTube](https://www.youtube.com/watch?v=1CC88QGQiEA&t=7175s)
    - no product should just wrap one prompt
        - but 100s of prompts?
    - every product needs to be a compound product
    - no staging env - if prod is broken, fix it
    - autocommit
    - see 2:53

    - brand is design

- [Coding with Cursor: Session 4](https://www.youtube.com/watch?v=42zmF9ARSWM)
    - composer to brainstorm - not saved, chat to iterate
    - 7: reapply, reset
    - 36 metacoding: convert this files to tailwind -> now do this for this whole folder
    - cursor rules
    
    - whats next
        - a notepad/space where you can write your ideas with AI
        - intellectual macros: do this
        - e.g. a note like 'adding autoscroll' or 'convert to tailwind': spin up a composer from that note, cursor applies it

        - wants to build a workflow, not just features
    - why fork instead of extension
        - some things are not possible in extensions

- [Jason Zhou on X: "How to 10x your @cursor\_ai workflow? Many people struggle to get Cursor produce error free projects Here is my workflow to rebuild a $1 million micros Sass with ease: 1. O1 to prep doc with file tree & dependencies 2. Use @cursor\_ai for functionality & @v0 for UI touch up 3. https://t.co/8VRZbgPtZD" / X](https://x.com/jasonzhou1993/status/1841462021344378955)


- [OpenAI is good at unminifying code | Hacker News](https://news.ycombinator.com/item?id=41389185&utm_term=comment)
    - LLMs are excellent at text transformation. It's their core strength and I don't see it being used enough.
    - Author of HumanifyJS here! I've created specifically a LLM based tool for this, which uses LLMs on AST level to guarantee that the code keeps working after the unminification step:
    https://github.com/jehna/humanify


### prompts

- I will ask you specific programming questions. Please provide the code snippets as artifacts. Please don't be chatty in your output, as I will probably just skim (or even skip) the entirety of chatty responses.
Be short and direct. No chattiness. If I'm asking leading questions, don't jump to conclusion or provide full answers. Just go along with me step by step as we build up the solution.

### links

- [I am tired of AI | On Test Automation](https://www.ontestautomation.com/i-am-tired-of-ai/?utm_source=hackernewsletter&utm_medium=email&utm_term=fav)
    > These tools will produce results faster. Sometimes, that’s exactly what you’re looking for. Often, what we would really benefit from, though, is better results, not merely faster results.