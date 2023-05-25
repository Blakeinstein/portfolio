import { writable } from 'svelte/store';

export const offsetSize = writable(0);

export const mousePos = writable({
  x: 3,
  y: 50,
});