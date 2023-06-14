import { Pass } from 'postprocessing';
import {
	ShaderMaterial,
	WebGLRenderTarget,
	WebGLRenderer,
	UniformsUtils,
	type IUniform,
	Vector2,
	Texture,
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
	rainTexture: Texture;

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
				value: null
			},
			textureShine: {
				value: null
			},
			textureFg: {
				value: null
			},
			textureBg: {
				value: null
			},
			parallax: {
				value: new Vector2(0, 0)
			}
		});

		this.fsMaterial = new ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader
		});
		this.rainQuad = new FullScreenQuad(this.fsMaterial);
		this.rainRenderer = new RainRenderer({
			height: height,
			width: width,
			scale: 1
		});

		this.rainTexture = new Texture(this.rainRenderer.texture);
	}

	render(renderer: WebGLRenderer, readBuffer: WebGLRenderTarget, writeBuffer: WebGLRenderTarget) {
		this.rainRenderer.update();
		this.rainTexture.needsUpdate = true;
		this.uniforms['textureFg'].value = readBuffer.texture;
		this.uniforms['textureBg'].value = readBuffer.texture;
		this.uniforms['waterMap'].value = this.rainTexture;

		if (this.renderToScreen) {
			renderer.setRenderTarget(null);
			this.rainQuad.render(renderer);
		} else {
			renderer.setRenderTarget(writeBuffer);
			if (this.clear) renderer.clear();
			this.rainQuad.render(renderer);
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
