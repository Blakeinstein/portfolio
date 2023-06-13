import {
	BufferGeometry,
	Float32BufferAttribute,
	Mesh,
	type Material,
	type Renderer,
	OrthographicCamera
} from 'three';

const _camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

const _geometry = new BufferGeometry();
_geometry.setAttribute('position', new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
_geometry.setAttribute('uv', new Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));

export default class FullScreenQuad {
	private _mesh: Mesh;

	constructor(material: Material) {
		this._mesh = new Mesh(_geometry, material);
	}

	dispose() {
		this._mesh.geometry.dispose();
	}

	render(renderer: Renderer) {
		renderer.render(this._mesh, _camera);
	}

	get material(): Mesh['material'] {
		return this._mesh.material;
	}

	set material(value: Material) {
		this._mesh.material = value;
	}
}
