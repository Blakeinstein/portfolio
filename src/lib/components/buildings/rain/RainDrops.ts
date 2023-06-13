import type { WebGLRenderTarget } from "three";
import { createCanvas } from "./utils";

type Drop {
  x: number,
  y: number,
  r: number,
  spreadX: number,
  spreadY: number,
  momentum: number,
  momentumX: number,
  lastSpawn: number,
  nextSpawn: number,
  parent: Drop | null,
  isNew: boolean,
  killed: boolean,
  shrink: number,
};

const DEFAULT_DROP: Drop = {
  x:0,
  y:0,
  r:0,
  spreadX:0,
  spreadY:0,
  momentum:0,
  momentumX:0,
  lastSpawn:0,
  nextSpawn:0,
  parent:null,
  isNew:true,
  killed:false,
  shrink:0,
};

const DROP_SIZE = 64;

export default class RainRenderer {
  dropColor: number
  dropAlpha: number
  canvas: number

  width: number
  height: number
  scale: number
  dropletsPixelDensity = 1 
  dropletCanvas: HTMLCanvasElement ;
  dropletsCtx: CanvasRenderingContext2D;
  dropletsCounter = 0 
  drops: Drop[] = []; 
  dropsGfx: Object[] = []; 
  clearDropletsGfx: HTMLCanvasElement;
  textureCleaningIterations = 0 
  lastRender = -1;
  options = {
    minR: 10,
    maxR: 40,
    maxDrops: 900,
    rainChance: 0.3,
    rainLimit: 3,
    dropletsRate: 50,
    dropletsSize: [2,4],
    dropletsCleaningRadiusMultiplier: 0.43,
    raining: true,
    globalTimeScale: 1,
    trailRate: 1,
    autoShrink: true,
    spawnArea: [-0.1,0.95],
    trailScaleRange: [0.2,0.5],
    collisionRadius: 0.65,
    collisionRadiusIncrease: 0.01,
    dropFallMultiplier: 1,
    collisionBoostMultiplier: 0.05,
    collisionBoost: 1,
  }

  target: WebGLRenderTarget;

  constructor(props: {
    width: number,
    height: number,
    scale: number,
    dropAlpha: number,
    dropColor: number,
    target: WebGLRenderTarget
  }) {
    this.target = props.target;
    this.width = props.width;
    this.height = props.height;
    this.scale = props.scale;

    this.dropletCanvas = createCanvas(
      props.width * this.dropletsPixelDensity,
      props.height * this.dropletsPixelDensity
    );
    this.dropletsCtx = this.dropletCanvas.getContext('2d')!;
    
    // create circle that will be used as a brush to remove droplets
    this.clearDropletsGfx=createCanvas(128,128);
  }


  get deltaR() {
    return this.options.maxR-this.options.minR;
  }

  get area() {
    return (this.width*this.height)/this.scale;
  }

  get areaMultiplier(){
    return Math.sqrt(this.area/(1024*768));
  }

  renderDropsGfx() {
    let dropBuffer=createCanvas(DROP_SIZE, DROP_SIZE);
    let dropBufferCtx=dropBuffer.getContext('2d')!;
    this.dropsGfx=Array.apply(null,Array(255))
      .map((cur,i)=>{
        let drop=createCanvas(DROP_SIZE, DROP_SIZE);
        let dropCtx=drop.getContext('2d')!;

        dropBufferCtx.clearRect(0, 0, DROP_SIZE, DROP_SIZE);

        // color
        dropBufferCtx.globalCompositeOperation="source-over";
        dropBufferCtx.drawImage(this.dropColor, 0, 0, DROP_SIZE, DROP_SIZE);

        // blue overlay, for depth
        dropBufferCtx.globalCompositeOperation="screen";
        dropBufferCtx.fillStyle="rgba(0,0,"+i+",1)";
        dropBufferCtx.fillRect(0, 0, DROP_SIZE, DROP_SIZE);

        // alpha
        dropCtx.globalCompositeOperation="source-over";
        dropCtx.drawImage(this.dropAlpha, 0, 0, DROP_SIZE, DROP_SIZE);

        dropCtx.globalCompositeOperation="source-in";
        dropCtx.drawImage(dropBuffer, 0, 0, DROP_SIZE, DROP_SIZE);
        return drop;
    });

    let clearDropletsCtx=this.clearDropletsGfx.getContext("2d")!;
    clearDropletsCtx.fillStyle="#000";
    clearDropletsCtx.beginPath();
    clearDropletsCtx.arc(64,64,64,0,Math.PI*2);
    clearDropletsCtx.fill();
  }

  update(){
    this.clearCanvas();

    let now=Date.now();
    if ( this.lastRender == null ) {
      this.lastRender=now;
    }
    let deltaT = now - this.lastRender;
    let timeScale = deltaT / ((1/60)*1000);
    if ( timeScale > 1.1 ) {
      timeScale=1.1;
    }
    timeScale *= this.options.globalTimeScale;
    this.lastRender = now;

    this.updateDrops(timeScale);

    requestAnimationFrame(this.update.bind(this));
  }
}