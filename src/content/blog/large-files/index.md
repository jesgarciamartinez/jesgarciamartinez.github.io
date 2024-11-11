---
title: "Structuring code in large files"
description: "Short tip on code organization"
draft: false
---

Folded VSCode `#region`s. That's it!

This is just a short riff on [Should you split that file?](https://www.pathsensitive.com/2023/12/should-you-split-that-file.html), and a snapshot of my current preferences when I work on my own projects, and not something I would insist on enforcing in a team.

```ts
/*------------------------------------------*/
//#region H2 – top level sections of a file

//#region H3 – nested sections if necessary 
//#endregion 

//#endregion
/*------------------------------------------*/
```

More nesting levels are usually not needed, since code functions / classes themselves are folded

I do this a lot (see the [code](https://github.com/jesgarciamartinez/sylvan/blob/main/sylvan.ts) for this JS framework I'm working on) and I have keyboard shortcuts to fold and unfold 
- the whole file
- a single fold–level
- recursively from a fold–level.

An issue with large files can be conflicting variable names. In TypeScript, you might solve this with namespaces, but there's an easier way: opening a new lexical scope, with brackets.
```ts
let exported_function: () => void
{
    // New scope in here
    let local_var = true
    // assign to outside scope
    exported_function = () => { return local_var }
}
```

This is an infrequent issue, so I barely ever do that. It's also a sign to, at that point, split the code into another file.

Another advantage of having code in the same file is that you also get some guarantees over dependencies: if code A comes before code B in the file, you know code A does not depend on B.