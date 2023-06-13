// https://github.com/codrops/RainEffect/blob/master/src/shaders/simple.vert

precision mediump float;

attribute vec2 a_position;

void main() {
   gl_Position = vec4(a_position,0.0,1.0);
}