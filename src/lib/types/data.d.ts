export interface ImageResource {
	url: string;
	alt: string;
	width?: number;
	height?: number;
	caption?: string;
}

export type Optional<T> = T | null;
