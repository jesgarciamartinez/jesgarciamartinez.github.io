---
title: "Getting started"
description: "Hit the ground running."
date: "Mar 22 2024"
draft: true
---

The basic configuration of Nano is pretty simple.

<iframe width="400" height="525" src="https://www.loom.com/embed/c841b42b200a4b44880ff538197fcdd7?sid=ee84d9fc-7b6d-4cf8-90d9-0514c31dc524&autoplay=false&hide_share=true&hideEmbedTopBar=true&hide_title=true 
&hide_owner=true&hide_speed=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


Edit `src/consts.ts`

Customize the base site

```ts 
// src/consts.ts

export const SITE: Site = {
  NAME: "Astro Nano",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in header and footer. Used in SEO and RSS. |
| EMAIL | Yes | Displayed in contact section. |
| NUM_POSTS | Yes | Limit num of posts on home page. |
| NUM_WORKS | Yes | Limit num of works on home page. |
| NUM_PROJECTS | Yes | Limit num of projects on home page. |

Customize your page metadata

```ts 
// src/consts.ts

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| TITLE | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS. |

Customize your social media

```ts 
// src/consts.ts

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in contact section as a link. |
| HREF | Yes | External url to social media profile. |