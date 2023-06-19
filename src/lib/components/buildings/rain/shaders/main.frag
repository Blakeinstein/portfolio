// https://github.com/codrops/RainEffect/blob/master/src/shaders/water.frag

precision mediump float;

// textures
uniform sampler2D waterMap;
uniform sampler2D textureShine;
uniform sampler2D screenTexture;

// the texCoords passed in from the vertex shader.
uniform vec2 texCoord;
uniform vec2 resolution;
uniform vec2 parallax;
uniform float parallaxFg;
uniform float parallaxBg;
uniform float textureRatio;
uniform bool renderShine;
uniform bool renderShadow;
uniform float minRefraction;
uniform float refractionDelta;
uniform float brightness;
uniform float alphaMultiply;
uniform float alphaSubtract;

// alpha-blends two colors
vec4 blend(vec4 bg,vec4 fg){
  vec3 bgm=bg.rgb*bg.a;
  vec3 fgm=fg.rgb*fg.a;
  float ia=1.0-fg.a;
  float a=(fg.a + bg.a * ia);
  vec3 rgb;
  if(a!=0.0){
    rgb=(fgm + bgm * ia) / a;
  }else{
    rgb=vec3(0.0,0.0,0.0);
  }
  return vec4(rgb,a);
}

vec2 pixel(){
  return vec2(1.0,1.0)/resolution;
}

vec2 parallax_val(float v){
  return parallax*pixel()*v;
}

vec2 texCoord_fn(){
  return vec2(gl_FragCoord.x, gl_FragCoord.y)/resolution;
}

// scales the bg up and proportionally to fill the container
vec2 scaledTexCoord(){
  float ratio=resolution.x/resolution.y;
  vec2 scale=vec2(1.0,1.0);
  vec2 offset=vec2(0.0,0.0);
  float ratioDelta=ratio-textureRatio;
  if(ratioDelta>=0.0){
    scale.y=(1.0+ratioDelta);
    offset.y=ratioDelta/2.0;
  }else{
    scale.x=(1.0-ratioDelta);
    offset.x=-ratioDelta/2.0;
  }
  return (texCoord_fn()+offset)/scale;
}

// get color from fg
vec4 fgColor(float x, float y){
  float p2=parallaxFg*2.0;
  vec2 scale=vec2(
    (resolution.x+p2)/resolution.x,
    (resolution.y+p2)/resolution.y
  );

  vec2 scaledTexCoord=texCoord_fn()/scale;
  vec2 offset=vec2(
    (1.0-(1.0/scale.x))/2.0,
    (1.0-(1.0/scale.y))/2.0
  );

  return texture2D(waterMap,
    (scaledTexCoord+offset)+(pixel()*vec2(x,y))+parallax_val(parallaxFg)
  );
}

void main() {
  vec4 bg=texture2D(screenTexture,scaledTexCoord()+parallax_val(parallaxBg));

  vec4 cur = fgColor(0.0,0.0);

  float d=cur.b; // "thickness"
  float x=cur.g;
  float y=cur.r;

  float a=clamp(cur.a*alphaMultiply-alphaSubtract, 0.0,1.0);

  vec2 refraction = (vec2(x,y)-0.5)*2.0;
  vec2 refractionParallax=parallax_val(parallaxBg-parallaxFg);
  vec2 refractionPos = scaledTexCoord()
    + (pixel()*refraction*(minRefraction+(d*refractionDelta)))
    + refractionParallax;

  vec4 tex=texture2D(screenTexture,refractionPos);

  if(renderShine){
    float maxShine=490.0;
    float minShine=maxShine*0.18;
    vec2 shinePos=vec2(0.5,0.5) + ((1.0/512.0)*refraction)* -(minShine+((maxShine-minShine)*d));
    vec4 shine=texture2D(textureShine,shinePos);
    tex=blend(tex,shine);
  }

  vec4 fg=vec4(tex.rgb*brightness,a);

  if(renderShadow){
    float borderAlpha = fgColor(0.,0.-(d*6.0)).a;
    borderAlpha=borderAlpha*alphaMultiply-(alphaSubtract+0.5);
    borderAlpha=clamp(borderAlpha,0.,1.);
    borderAlpha*=0.2;
    vec4 border=vec4(0.,0.,0.,borderAlpha);
    fg=blend(border,fg);
  }

  gl_FragColor = blend(bg, fg);
}