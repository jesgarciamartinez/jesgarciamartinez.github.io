---
title: "The UX of a clipboard manager"
description: "UX details of a clipboard manager chrome extension"
draft: false
---

I recently created a clipboard manager chrome extension.
It works locally and saves a list of everything you copy, so you can paste it later.
You can choose to have it listen to all apps, just the browser, or include/exclude specific websites.

<!-- While the extension is not yet approved by the app store, you can play with a demo here (it does not listen to your clipboard): -->

Here are some UX details intended for a quick, frictionless experience:

- Entries are sorted by recency, with new entries appearing at the bottom, like a chat application.
This way you can copy several fragments of a text, and they will all appear one after the other in the order you copied them.
You can then quicky select several entries by dragging with the mouse, and copy them to your clipboard

<iframe width="400" height="525" src="https://www.loom.com/embed/82a0790f167e47e2b394ec6390a3acdf?sid=9e32c086-4648-4b45-9678-0452fa0b1e93&autoplay=false&hide_share=true&hideEmbedTopBar=true&hide_title=true&hide_owner=true&hide_speed=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="margin: 0 auto;"></iframe>

- Clicking on one entry will paste it in the current webpage. You can paste one or several entries, separated by newlines

- The extension is fully keyboard-driven:
    - You activate it with a shortcut (defaults to `cmd|ctrl+alt+v`)
    - When the extension is active, the last copied item is selected, so just pressing `Enter` will paste it
    - you can select, edit, copy, cut and paste multiple entries with shift + arrow keys

- You can pin entries to always show them on top

- You can edit entries, and add a text-expander shortcut like '/greet', so that when you type the shortcut the full text is pasted instead


- You can choose to place the extension UI as a popup or in the chrome sidebar
<iframe width="400" height="525" src="https://www.loom.com/embed/251cecd99c074401a553f7472fb559be?sid=a1d2e1c0-a4b6-41ea-bff3-f66dc3d9146e&autoplay=false&hide_share=true&hideEmbedTopBar=true&hide_title=true&hide_owner=true&hide_speed=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="margin: 0 auto;"></iframe>


<!-- - entries where the text is a HEX color value show a little color square -->

I'm currently working on:
- organizing entries into folders
- being able to add "holes" to the text, to be filled-in as mini-form when pasted 

    