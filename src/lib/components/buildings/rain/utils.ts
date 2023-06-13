export function createCanvas(width: number, height: number) {
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
}

export function getContext(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');
	if (ctx == null) {
		throw new Error('CTX FAILURE');
	}
	return ctx;
}

export function random(from?: number, to?: number, interpolation = (n: number) => n) {
	if (!from) {
		from = 0;
		to = 1;
	} else if (!to) {
		to = from;
		from = 0;
	}
	const delta = to - from;

	return from + interpolation(Math.random()) * delta;
}
export function chance(c: number) {
	return random() <= c;
}

export function times(n: number, f: (i: number) => void) {
	for (let i = 0; i < n; i++) {
		f(i);
	}
}

export function loadImage(src: string): Promise<HTMLImageElement> {
	return new Promise((resolve) => {
		const img = new Image();
		img.addEventListener('load', () => {
			resolve(img);
		});
		img.src = src;
	});
}
