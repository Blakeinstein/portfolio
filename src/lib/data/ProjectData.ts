export type ProjectLink = {
  icon: string;
  href: string;
  type: string;
};

export type ProjectData = {
  name: string;
  description: string;
  thumbnail: string;
  col?: number;
  row?: number;
  links: ProjectLink[]
};

export const ProjectData: Record<string, ProjectData> = {
  "old-portfolio": {
    name: "Old portfolio",
    description: "Originally built in Vanilla + LitElement, this was my first portfolio website. It was later rebuilt with Astro",
    thumbnail: "https://http.dog/204.avif",
    col: 1,
    row: 1,
    links: [
      {
        icon: '',
        href: 'https://http.dog/404.avif',
        type: 'Github' 
      },
      {
        icon: '',
        href: 'https://http.dog/404.avif',
        type: 'Webpage' 
      }
    ]
  },
  "new-portfolio": {
    name: "New portfolio",
    description: "You are here! Built with SvelteKit, TailwindCSS, and TypeScript.",
    thumbnail: "https://http.dog/204.avif",
    col: 1,
    row: 2,
    links: [
      {
        icon: '',
        href: 'https://http.dog/404.avif',
        type: 'Github' 
      },
      {
        icon: '',
        href: 'https://http.dog/404.avif',
        type: 'Webpage' 
      }
    ]
  },
  "bloop": {
    name: "Bloop",
    description: "A simple hackable scratchpad built originally using my own embedded WebView (windows only) but later rebuilt with Tauri (Cross Platform).",
    thumbnail: "https://http.dog/204.avif",
    col: 2,
    row: 3,
    links: [{
      icon: '',
      href: 'https://http.dog/404.avif',
      type: 'Github' 
    }]
  },
  "chemical-pfd": {
    name: "Chemical-PFD",
    description: "Part of my fellowship at Indian Institute of Technology, Bombay. A simple chemical process flow diagram builder built with PyQt5.",
    thumbnail: "https://http.dog/204.avif",
    col: 3,
    row: 1,
    links: [{
      icon: '',
      href: 'https://http.dog/404.avif',
      type: 'Github' 
    }]
  },
  "remit-tracker": {
    name: "Remit-Tracker",
    description: "A simple remittance tracker built with the frontend built with NextJS and DaisyUI and the data spider built with Python and Scrapy.",
    thumbnail: "https://http.dog/204.avif",
    col: 3,
    row: 2,
    links: [
      {
        icon: '',
        href: 'https://http.dog/404.avif',
        type: 'Github' 
      },
      {
        icon: '',
        href: 'https://http.dog/404.avif',
        type: 'Webpage' 
      }
    ]
  },
  "fuse-rust": {
    name: "Fuse-Rust",
    description: "A fuzzy search library for the rust ecosystem, ideal for building friendly search bars.",
    thumbnail: "https://http.dog/204.avif",
    col: 4,
    row: 1,
    links: [{
      icon: '',
      href: 'https://http.dog/404.avif',
      type: 'Github' 
    }]
  },
  "bro-lang": {
    name: "BroLang",
    description: "A toy programming language built as a part of a submission for SER 502 (Programming Paradigms) at ASU.",
    thumbnail: "https://http.dog/204.avif",
    col: 4,
    row: 3,
    links: [{
      icon: '',
      href: 'https://http.dog/404.avif',
      type: 'Github' 
    }]
  },
};