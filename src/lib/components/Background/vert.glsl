#define PI 3.1415926538
uniform float uTime;

varying vec2 vUv;
varying vec4 vPosition;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
  // gl_Position.y = mod(position.y, 0.02);
  vPosition = gl_Position;
}