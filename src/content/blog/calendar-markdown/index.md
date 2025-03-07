I've been trying a new way to organize my tasks and work time. Since I spend most of my time in my editor, I created a yearly calendar as a markdown list,with a list entry (a single line) for every week, and a nested list within each week for every day. It looks like this:

```md
- 31  1  2  3  4  5  6 – w14 – April
    - Mo 31/03/2025
        - [] some task
        - [] 🍅 8:00–8:30
            - pomodoro timer
    - Tu 01/04/2025
    - We 02/04/2025
    - Th 03/04/2025
    - Fr 04/04/2025
    - Sa 05/04/2025
    - Su 06/04/2025
-  7  8  9 10 11 12 13 – w15
    - Mo 07/04/2025
    - Tu 08/04/2025
    - We 09/04/2025
    - Th 10/04/2025
    - Fr 11/04/2025
    - Sa 12/04/2025
    - Su 13/04/2025
```

I asked Claude to make as script for this and it oneshot it, then made some small improvements to it. You can see it here: [Markdown-Based Calendar Generator for 2025 - Claude](https://claude.ai/share/55e11885-c5fe-48a6-bfaf-05a12f3b2160)

Nested inside every day I just write down what I'm working on that day.
I keep a tasks list in the same markdown file, and I have a pomodoro shortcut that inserts `🍅 <current_time> - <current_time + 30min> <task>`.

Markdown lists are convenient because text editors let you fold them, and I like to be able to see the whole year and drill down to specific weeks and days by opening and closing folding ranges. I also like that it's just one file, as opposed to daily notes in an app like [Obsidian](https://obsidian.md/) or [NotePlan](https://noteplan.co/).

Still, plaintext, while great for storage, is a bit limiting as an interface to the calendar, so maybe I'll try to turn this into a little app.

---

Here's some other similar plaintext tasks / calendar articles:
- [calendar-txt](https://terokarvinen.com/2021/calendar-txt/)
- [My productivity app is a never-ending .txt file](https://jeffhuang.com/productivity_text_file/)