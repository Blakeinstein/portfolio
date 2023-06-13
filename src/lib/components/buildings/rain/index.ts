import { Pass } from 'postprocessing';
import {
	ShaderMaterial,
	WebGLRenderTarget,
	WebGLRenderer,
	UniformsUtils,
	type IUniform,
	Vector2,
	Texture,
	MeshBasicMaterial
} from 'three';
import FullScreenQuad from './FSQuad';
import RainRenderer from './RainDrops';
import vertexShader from './shaders/main.vert';
import fragmentShader from './shaders/main.frag';

export default class RainPass extends Pass {
	uniforms: Record<string, IUniform>;
	fsMaterial: ShaderMaterial;
	rainQuad: FullScreenQuad;
	clear = false;
	rainRenderer: RainRenderer;
	comp: WebGLRenderTarget;
	mainTexture: MeshBasicMaterial;
	mainQuad: FullScreenQuad;

	constructor({ height, width }: { height: number; width: number }) {
		super();

		this.uniforms = UniformsUtils.clone({
			resolution: {
				value: new Vector2(width, height)
			},
			textureRatio: {
				value: width / height
			},
			renderShine: {
				value: false
			},
			renderShadow: {
				value: true
			},
			minRefraction: {
				value: 256.0
			},
			refractionDelta: {
				value: 256.0
			},
			brightness: {
				value: 1.0
			},
			alphaMultiply: {
				value: 20.0
			},
			alphaSubtract: {
				value: 5.0
			},
			parallaxBg: {
				value: 5.0
			},
			parallaxFg: {
				value: 20.0
			},
			waterMap: {
				value: new Texture()
			},
			textureShine: {
				value: new Texture()
			},
			textureFg: {
				value: new Texture()
			},
			textureBg: {
				value: new Texture()
			}
		});

		this.fsMaterial = new ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader
		});
		this.rainQuad = new FullScreenQuad(this.fsMaterial);
		this.comp = new WebGLRenderTarget(window.innerWidth, window.innerHeight);
		this.mainTexture = new MeshBasicMaterial();
		this.mainQuad = new FullScreenQuad(this.mainTexture);
		this.rainRenderer = new RainRenderer({
			height: height * 2,
			width: width * 2,
			scale: 2
		});
	}

	render(renderer: WebGLRenderer, readBuffer: WebGLRenderTarget, writeBuffer: WebGLRenderTarget) {
		this.uniforms['textureFg'].value = readBuffer.texture;
		this.uniforms['textureBg'].value = readBuffer.texture;
		this.uniforms['waterMap'].value = new Texture(this.rainRenderer.texture);

		renderer.setRenderTarget(this.comp);
		this.rainQuad.render(renderer);

		this.mainQuad.material.map = this.comp.texture;
		if (this.renderToScreen) {
			renderer.setRenderTarget(null);
			this.mainQuad.render(renderer);
		} else {
			renderer.setRenderTarget(writeBuffer);
			if (this.clear) renderer.clear();
			this.mainQuad.render(renderer);
		}
	}

	setSize(width: number, height: number) {
		this.uniforms['resolution'].value = new Vector2(width, height);
		this.uniforms['textureRatio'].value = width / height;
	}

	dispose() {
		this.rainRenderer.dispose();
	}
}
