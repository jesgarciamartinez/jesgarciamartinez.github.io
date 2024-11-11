import type { Site, Metadata, Socials } from '@types'

export const SITE: Site = {
  NAME: 'JGM',
  EMAIL: 'jesgarciamartinez@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 30,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 30,
}

export const HOME: Metadata = {
  TITLE: '',
  DESCRIPTION: 'Astro Nano is a minimal and lightweight blog and portfolio.',
}

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
}

export const WORK: Metadata = {
  TITLE: 'Work',
  DESCRIPTION: 'Where I have worked and what I have done.',
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION: 'A collection of my projects, with links to repositories and demos.',
}

export const SOCIALS: Socials = [
  // {
  //   NAME: 'twitter-x',
  //   HREF: 'https://twitter.com/jesgma',
  // },
  {
    NAME: 'GitHub',
    HREF: 'https://github.com/jesgarciamartinez',
  },
  {
    NAME: 'LinkedIn',
    HREF: 'https://www.linkedin.com/in/jesgarciamartinez',
  },
]
