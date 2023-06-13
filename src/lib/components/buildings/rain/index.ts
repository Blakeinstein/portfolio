import { Pass } from 'postprocessing';
import { ShaderMaterial, WebGLRenderTarget, WebGLRenderer, UniformsUtils, type IUniform, Vector2, Texture, MeshBasicMaterial, Mesh } from 'three';
import FullScreenQuad from './FSQuad';
import RainRenderer from './RainRenderer';
import vertexShader from './shaders/main.vert';
import fragmentShader from './shaders/main.frag';


export default class RainPass extends Pass {
	
	contentTexture: WebGLRenderTarget;
	rainTexture: WebGLRenderTarget;
	uniforms: Record<string, IUniform>;
	fsMaterial: ShaderMaterial;
	rainQuad: FullScreenQuad;
	// mainMaterial: MeshBasicMaterial;
	// mainQuad: FullScreenQuad;
	clear = false;
	rainRenderer: RainRenderer;

	constructor({
		height,
		width
	}: {
		height: number,
		width: number
	}) {
		super();
		this.contentTexture = new WebGLRenderTarget(height, width);
		this.rainTexture = new WebGLRenderTarget(height, width);

		this.uniforms = UniformsUtils.clone({
			"resolution": {
				value: new Vector2(width, height)
			},
			"textureRatio": {
				value: width / height
			},
			"renderShine": {
				value: false
			},
			"renderShadow": {
				value: true
			},
			"minRefraction": {
				value: 256.0
			},
			"refractionDelta": {
				value: 256.0
			},
			"brightness": {
				value: 1.0
			},
			"alphaMultiply": {
				value: 20.0
			},
			"alphaSubtract": {
				value: 5.0
			},
			"parallaxBg": {
				value: 5.0
			},
			"parallaxFg": {
				value: 20.0
			},
			"waterMap": {
				value: new Texture(),
			},
			"textureShine": {
				value: new Texture()
			},
			"textureFg": {
				value: new Texture(),
			},
			"textureBg": {
				value: new Texture(),
			}
		});

		this.fsMaterial = new ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader
		});
		this.rainQuad = new FullScreenQuad(this.fsMaterial);
		// this.mainMaterial = new MeshBasicMaterial();
		// this.mainQuad = new FullScreenQuad(this.mainMaterial);


		this.rainRenderer = new RainRenderer(this.rainTexture);
	}

	render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, _readBuffer: WebGLRenderTarget ) {
		
		this.uniforms['textureFg'].value = _readBuffer.texture;
		this.uniforms['textureBg'].value = _readBuffer.texture;
		renderer.setRenderTarget( this.rainTexture );
		// this.rainQuad.render(renderer);
		this.uniforms['waterMap'].value = this.rainTexture.texture;
		

		if ( this.renderToScreen ) {
			renderer.setRenderTarget( null );
			this.rainQuad.render( renderer );
		} else {
			renderer.setRenderTarget( writeBuffer );
			if ( this.clear ) renderer.clear();
			this.rainQuad.render( renderer );
		}
	}

	setSize( width: number, height: number ) {
		this.rainTexture.setSize( width, height );
		this.contentTexture.setSize( width, height );
		this.uniforms['resolution'].value = new Vector2(width, height);
		this.uniforms['textureRatio'].value = width / height;
	}

	dispose() {
		this.rainTexture.dispose();
		this.contentTexture.dispose();
	}
}