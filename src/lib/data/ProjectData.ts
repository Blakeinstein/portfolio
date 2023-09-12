export type ProjectData = {
  description: string;
  thumbnail: string;
  col?: number;
  row?: number;
};

export const ProjectData: Record<string, ProjectData> = {
  "new-website": {
    description: "This website! Built with SvelteKit, TailwindCSS, and TypeScript.",
    thumbnail: "https://http.dog/204.avif",
    col: 1,
    row: 1,
  },
  "svelte-portfolio": {
    description: "My old portfolio website. Built with SvelteKit, TailwindCSS, and TypeScript.",
    thumbnail: "https://http.dog/204.avif",
    col: 3,
    row: 2,
  },
  "svelte-portfolio2": {
    description: "My old portfolio website. Built with SvelteKit, TailwindCSS, and TypeScript.",
    thumbnail: "https://http.dog/204.avif",
    col: 4,
    row: 1,
  },
  "svelte-portfolio3": {
    description: "My old portfolio website. Built with SvelteKit, TailwindCSS, and TypeScript.",
    thumbnail: "https://http.dog/204.avif",
    col: 2,
    row: 3,
  },
};