varying vec2 v_texCoord;
void main() {
   v_texCoord = uv;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy,0.0,1.0);
}