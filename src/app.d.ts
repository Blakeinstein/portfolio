// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare module "curtainsjs" {
	interface CurtainsParams {
		container: string;
	}

	class Curtains {
		constructor(options: CurtainsParams): Curtains;
		onRender(callback: () => void): Curtains;
		onScroll(callback: () => void): Curtains;
		onError(callback: () => void): Curtains;
		onContextLost(callback: () => void): Curtains;
		getScrollDeltas(): { x: number, y: number };
		lerp(a: number, b: number, t: number): number;
		restoreContext(): void;
	}
	
	interface PlaneParams {
		vertexShader?: string;
		fragmentShader?: string;
		widthSegments?: number;
		heightSegments?: number;
		uniforms?: Record<string, { name: string, type: string, value: unknown }>;
		drawCheckMargins?: {
			top?: number;
			right?: number;
			bottom?: number;
			left?: number;
		};
	}
	class Plane {
		constructor(curtains: Curtains, domElement: Element, params?: PlaneParams): Plane;
	}
};