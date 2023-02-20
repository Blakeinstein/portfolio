attribute float a_spread;
attribute float a_height;

varying vec4 v_color;

vec3 hsv2rgb(vec3 c) {
  c = vec3(c.x, clamp(c.yz, 0.0, 1.0));
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  gl_Position = vec4(a_spread, a_height * 2.0 - 1.0, 0, 1);
  v_color = vec4(hsv2rgb(vec3(a_spread * 0.5 + 0.5, a_height, 1)), 1);
}