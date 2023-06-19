#define GLSLIFY 1
precision mediump float;

void main() {
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy,0.0,1.0);
}