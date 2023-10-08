import { error } from '@sveltejs/kit';
import { getProjects } from '$lib/data/ProjectData.js';

export async function load() {
  try {
    const allProjects = await getProjects();

		return {
      allProjects,
		}
	} catch (e) {
		throw error(404, 'Project not found');
	}
}