import type Lenis from '@studio-freight/lenis';
import type Blobity from 'blobity';
import { writable } from 'svelte/store';

export const scrollVelocity = writable(0);

export const lenisInstance = writable<Lenis | null>(null);

export const blobityInstance = writable<Blobity | null>(null);