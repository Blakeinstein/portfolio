#define PI 3.1415926538

uniform float uTime;
uniform vec3 uColor;

varying float vVisibility;
varying vec3 vViewNormal;
varying vec2 vUv;
varying vec4 vPosition;

void main() {

  // csm_DiffuseColor = vec4(vViewNormal, (vVisibility + 0.01) * alpha);
  gl_FragColor.rgb = uColor;
  // gl_FragColor.rgb = vec3(vUv, 1);
  gl_FragColor.a = step(
    0.045,
    mod(
      vPosition.y + sin(
        (vPosition.x * mod(uTime / 2., 12.)) * PI * 12.
        // 1.
      ) / 72. + uTime / 54., 0.05
    )
  );
  // gl_FragColor.a = 1. ;
}