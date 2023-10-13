export type ProjectLink = {
  icon: string;
  href: string;
  type: string;
};

export type ProjectTech = {
  name: string;
  icon: string;
  color: string;
}

export const TechConstants: Record<string, ProjectTech> = {
  'svelte': {
    name: 'Svelte',
    icon: 'simple-icons:svelte',
    color: '#ff3e00'
  },
  'sveltekit': {
    name: 'SvelteKit',
    icon: 'simple-icons:svelte',
    color: '#ff3e00'
  },
  'typescript': {
    name: 'TypeScript',
    icon: 'simple-icons:typescript',
    color: '#007acc'
  },
  'python': {
    name: 'Python',
    icon: 'simple-icons:python',
    color: '#3776ab'
  },
  'rust': {
    name: 'Rust',
    icon: 'simple-icons:rust',
    color: '#000000'
  },
  'nextjs': {
    name: 'NextJS',
    icon: 'simple-icons:next-dot-js',
    color: '#000000'
  },
  'daisyui': {
    name: 'DaisyUI',
    icon: 'simple-icons:tailwindcss',
    color: '#06b6d4'
  },
  'tauri': {
    name: 'Tauri',
    icon: 'simple-icons:tauri',
    color: '#000000'
  },
  'pyqt5': {
    name: 'PyQt5',
    icon: 'simple-icons:qt',
    color: '#41cd52'
  },
  'scrapy': {
    name: 'Scrapy',
    icon: 'simple-icons:scrapy',
    color: '#000000'
  },
  'lit-element': {
    name: 'LitElement',
    icon: 'simple-icons:lit',
    color: '#000000'
  },
  'vanilla': {
    name: 'VanillaJS',
    icon: 'simple-icons:javascript',
    color: '#f7df1e'
  },
  'html': {
    name: 'HTML',
    icon: 'simple-icons:html5',
    color: '#e34f26'
  },
  'css': {
    name: 'CSS',
    icon: 'simple-icons:css3',
    color: '#1572b6'
  },
  'tailwindcss': {
    name: 'TailwindCSS',
    icon: 'simple-icons:tailwindcss',
    color: '#06b6d4'
  },
  'antlr4': {
    name: 'ANTLR4',
    icon: 'file-icons:antlr',
    color: '#e44a32'
  },
}

export type ProjectMetaData = {
  name: string;
  year: number;
  description: string;
  thumbnail: string;
  techs: string[];
  col?: number;
  row?: number;
  links: ProjectLink[];
  slug: string;
};

export const getProjects = async () => {
  const projects: ProjectMetaData[] = [];
  const paths = import.meta.glob('$lib/data/projects/*.svx', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.svx', '');
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<ProjectMetaData, 'slug'>
			const post = { ...metadata, slug } satisfies ProjectMetaData
			projects.push(post)
		}
  }

	return projects;
}