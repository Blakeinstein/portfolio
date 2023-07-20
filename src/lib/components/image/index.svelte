<script lang="ts">
  import { type PlaneParams, Plane, Vec3 } from "curtainsjs";
	import { onMount } from "svelte";
	import { scrollVelocity } from "$lib/context";
	import getCurtainsObject from "./curtains";

  let el: HTMLImageElement;
  export let src: string;
  export let alt: string;

  let classes = "";

  export { classes as class };

  let plane: Plane;

  const vs = `
      precision mediump float;

      // default mandatory variables
      attribute vec3 aVertexPosition;
      attribute vec2 aTextureCoord;

      uniform mat4 uMVMatrix;
      uniform mat4 uPMatrix;

      uniform mat4 planeTextureMatrix;

      // custom variables
      varying vec3 vVertexPosition;
      varying vec2 vTextureCoord;

      uniform float uScrollEffect;

      void main() {
          vec3 vertexPosition = aVertexPosition;

          // cool effect on scroll
          vertexPosition.x += sin((vertexPosition.y / 1.5 + 1.0) * 3.141592) * (sin(uScrollEffect / 2000.0));

          gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

          // varyings
          vVertexPosition = vertexPosition;
          vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
      }
  `;

  const fs = `
      precision mediump float;

      varying vec3 vVertexPosition;
      varying vec2 vTextureCoord;

      uniform sampler2D planeTexture;

      void main( void ) {
          // just display our texture
          gl_FragColor = texture2D(planeTexture, vTextureCoord);
      }
  `;

  const PLANE_PARAMS: PlaneParams = {
        vertexShader: vs,
        fragmentShader: fs,
        widthSegments: 10,
        heightSegments: 10,
        uniforms: {
            scrollEffect: {
                name: "uScrollEffect",
                type: "1f",
                value: 0,
            },
        },
    };

  onMount(() => {
    const curtains = getCurtainsObject();
    plane = new Plane(curtains, el, PLANE_PARAMS);  

    scrollVelocity.subscribe((v) => {
      plane.setRelativeTranslation(new Vec3(0, v * 0.1, 0));
    })
  })
</script>

<img bind:this={el} src={src} alt={alt} class={` ${classes}`} />