import type { WebGLRenderTarget } from "three";

export default class RainRenderer {
  target: WebGLRenderTarget;
  constructor(target: WebGLRenderTarget) {
    this.target = target;
  }
}