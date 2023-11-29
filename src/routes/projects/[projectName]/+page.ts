import { error } from '@sveltejs/kit';
import { getProjects, type ProjectMetaData } from '$lib/data/ProjectData.js';

export async function load({ params }) {
  try {
    const post = await import(`../../../lib/data/projects/${params.projectName}.svx`);

    const allProjects = await getProjects();

		return {
			content: post.default,
			projectData: {...post.metadata, slug: params.projectName} satisfies ProjectMetaData,
      allProjects,
		}
	} catch (e) {
		throw error(404, 'Project not found');
	}
}

export const prerender = true;