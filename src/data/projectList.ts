export interface Project {
  id: number;
  title: string;
  description?: string;
  imageSource?: string;
  liveAppLinkHref?: string;
  ghLinkHref?: string;
}

export const projectList: Project[] = [
  {
    "id": 1,
    "title": "Conway's Game of Life",
    "description": "A repository containing solutions to various LeetCode problems, implemented in Python. Each solution is organized by problem number and includes explanations and time/space complexity analysis.",
    "imageSource": "/sample.gif",
    "liveAppLinkHref": "https://brko-cgof.netlify.app/",
    "ghLinkHref": "https://github.com/brko8088/webapp-game-of-life"
  },
  {
    "id": 2,
    "title": "Python Blog Website",
    "description": "Blogging site that allows users to sign up, make posts and like posts from other users, as well as comment on them, create accounts and put their social links.",
    "imageSource": "",
    "liveAppLinkHref": "",
    "ghLinkHref": "https://github.com/brko8088/research-djangoBlogWebsite"
  },
  {
    "id": 3,
    "title": "List of LeetCode Solutions",
    "description": "A repository containing solutions to various LeetCode problems, implemented in Python. Each solution is organized by problem number and includes explanations and time/space complexity analysis.",
    "imageSource": "",
    "liveAppLinkHref": "",
    "ghLinkHref": "https://github.com/brko8088/research-algorithms"
  },
  {
    "id": 4,
    "title": "Video Game in Godot Engine",
    "description": "Simple game that I'm currently working on",
    "imageSource": "",
    "liveAppLinkHref": "",
    "ghLinkHref": "https://github.com/brko8088/game-learning"
  }
]