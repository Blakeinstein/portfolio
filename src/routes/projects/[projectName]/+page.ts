import { error } from '@sveltejs/kit';
import { ProjectData } from '$lib/data/ProjectData';

export function load({ params }) {
  if (!ProjectData[params.projectName]) {
    throw error(404, 'Project not found');
  }

  return {
    projectKey: params.projectName,
    projectData: ProjectData[params.projectName],
  }
}