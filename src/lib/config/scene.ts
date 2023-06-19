import { Vector3, type MeshPhysicalMaterialParameters } from 'three';

export const LIGHT_CONFIG = {
	ambient: {
		color: '#fff',
		intensity: 0.2
	},
	spotlight: {
		color: '#4d2e6b',
		position: new Vector3(100, 150, 100)
	},
	pointLights: [
		
		{
			color: '#61629e',
			intensity: 2.4,
			position: new Vector3(-15, 29, 43)
		},
		// {
		// 	color: '#a728d7',
		// 	intensity: 6.4,
		// 	position: new Vector3(-15, 29, 43)
		// },
		// {
		// 	color: '#601635',
		// 	intensity: 2,
		// 	position: new Vector3(-7, 100, -100)
		// },
		// {
		// 	color: '#0f2438',
		// 	intensity: 4.8,
		// 	position: new Vector3(-30, -20, -51)
		// },
		// {
		// 	color: '#391e75',
		// 	intensity: 2,
		// 	position: new Vector3(5, 53, -13)
		// }
	]
};

type MeshParams = {
	geometryArgs: [
		width?: number | undefined,
		height?: number | undefined,
		widthSegments?: number | undefined,
		heightSegments?: number | undefined
	];
	material: MeshPhysicalMaterialParameters;
};

export const FLOOR_CONFIG: MeshParams = {
	geometryArgs: [200, 200],
	material: {
		color: '#000',
		metalness: 0,
		emissive: '#000',
		roughness: 0
	}
};

export const CITYSCAPE_CONFIG = {
	dimensions: [30, 40],
	boxSize: 3,
	material: {
		color: '#191d1e',
		metalness: 0.6,
		emissive: '#000',
		roughness: 0.8
	},
	max: 0.009,
	min: 0.001,
	scale: 0.025
};
