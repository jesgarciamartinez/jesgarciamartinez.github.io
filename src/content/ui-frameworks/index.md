---
title: "What JS frameworks get you"
description: "Similarities and differences between UI frameworks"
draft: false
---

There's a lot of web frameworks.
Let's explore what problems they solve, and how they solve them.
This is meant to be an overview of the UI design space on the web.

# The fundamentals:

## Reactivity

UIs have state: in-memory data that changes as the user interacts with the app.
We want the UI to always reflect the current state. This is a problem of _incremental computation_: rebuilding the entire UI for each change would not perform well, so we
need a way to know what changed and what must update as a result.
This is what reactivity is about: propagating changes to data so the UI is kept in sync with them.

We might distinguish different kinds of reactivity: 
- compile-time or run-time
- fine-grained or coarse-grained

### Implementations

- Immutable data and virtual DOM
- Signals

## State management

While closely related to reactivity, state management is about keeping state under control
Since we have so much state, we need techniques
These frequently include: 
- some sort of state-machine or sum-typey construct
- read / write separation

## Declarative templating

One of the biggest productivity boosters: writing HTML interspersed with conditionals and loops for the dynamic parts of UI.
This is much more productive than creating DOM elements and imperatively adding and removing them.
It abstracts imperative DOM logic, but has "escape hatches" (like refs) for when you need to interact with DOM nodes.

Implementations: JSX, templates

## Components

Components implement all the previous things
- reactivity – they re-render when the data they depend on changes
- state management – they can create state themselves, not just receive it from outside
- declarative templating: they have declarative templates
and more:
- composition: components can use other components in their template, configuring them through props
- effects, cleanup (lifecycle)

Importantly, components are not necessarily tied to the DOM.

Components bundle UI and behavior – in practice, these means mixing HTML, CSS and JS.
There's a classic slide from early React days that illustrates how this is preferable to the traditional best practice of "separation of concerns":

Coupling code really _is_ a better developer experience, but it often comes at a performance cost.

---

Components frequently encapsulate state and behavior. Sometimes we wish to encapsulate state and behavior without tying them to a particular UI representation.
Frameworks have tools for that: hooks in React.

### Aside: web components

Despite their name, web components don't provide any of the above features, which is probably why they aren't usually used on their own, but through frameworks that add these features, like [Lit](https://lit.dev).
Web components are *not declarative*, and tied to the DOM.

# Other features

Async and Server stuff
- ssr
- hydration: why we are 'substractive', clawing back the distinction we lost by having everything be a component
- resumability
- Next actions, etc
- suspense


## Links

- [Component Party](https://component-party.dev/)