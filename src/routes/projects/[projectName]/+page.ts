import { error } from '@sveltejs/kit';
import { getProjects, type ProjectMetaData } from '$lib/data/ProjectData.js';

export async function load({ params }) {
  try {
		const post = await import(`../../../lib/data/projects/${params.projectName}.svx`);
    if (post.metadata && typeof post.metadata === 'object' && 'hidden' in post.metadata && (post.metadata as { hidden?: boolean }).hidden) {
			error(404, 'Project not found');
		}

    const allProjects = await getProjects();

		return {
			content: post.default,
			projectData: {...post.metadata, slug: params.projectName} satisfies ProjectMetaData,
      allProjects,
		}
	} catch (e) {
		error(404, 'Project not found');
	}
}

export const prerender = true;