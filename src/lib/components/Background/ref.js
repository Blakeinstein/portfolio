/* global audioStreamSource */

// There's really no good way to tell which browsers fail.
// Right now Safari doesn't expose AudioContext (it's still webkitAudioContext)
// so my hope is whenever they get around to actually supporting the 3+ year old
// standard that things will actually work.
const shittyBrowser = window.AudioContext === undefined && /iPhone|iPad|iPod/.test(navigator.userAgent);
const context = new (window.AudioContext || window.webkitAudioContext)();
const analyser = context.createAnalyser();

twgl.setDefaults({attribPrefix: "a_"});
const gl = document.querySelector("#c").getContext("webgl");



const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

// If it's a shitty browser (like Safari) then we can't stream so we load
// a very lo-fi version of the song that has no frequencies above 11.5k
const numPoints = analyser.frequencyBinCount * (shittyBrowser ? 0.25 : 1) | 0;
const spreadArray = new Float32Array(numPoints);
const heightArray = new Uint8Array(numPoints);
for (let ii = 0; ii < numPoints; ++ii) {
  spreadArray[ii] = ii / numPoints * 2 - 1;  // make clip space positions
}
const arrays = {
  spread: { data: spreadArray, numComponents: 1 },
  height: { data: heightArray, numComponents: 1, drawType: gl.DYNAMIC_DRAW },
};
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render() {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.lineWidth(2);

  gl.useProgram(programInfo.program);

  analyser.getByteFrequencyData(heightArray);
  twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.a_height, heightArray);

  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.drawBufferInfo(gl, bufferInfo, gl.LINE_STRIP);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

const clickElem = document.querySelector("#click");
const loadElem = document.querySelector("#load");

const streamSource = audioStreamSource.create({
  context: context,
  loop: true,
});

function startMusic() {
  clickElem.style.display = "none";
  streamSource.play();
  context.resume().then(() => {
    streamSource.play();
    streamSource.getSource().connect(analyser);
    analyser.connect(context.destination);
  });
}

streamSource.on('error', function(e) {
  console.error("audio error:", e);  // eslint-disable-line
});

streamSource.on('newSource', function(/* source */) {
  loadElem.style.display = "none";
  clickElem.addEventListener('click', startMusic);
});

streamSource.setSource(
  'sounds/DOCTOR VOX - Level Up.mp3',
  'sounds/DOCTOR VOX - Level Up - for shitty browsers.mp3'  // for shitty browsers like Safari on iOS
);