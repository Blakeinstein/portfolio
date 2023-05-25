import { Group, Material, type Object3D, Mesh } from "three";
import { CITYSCAPE_CONFIG } from "../../config/scene";
import type { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const lerp = (
  a:number,
  b:number,
  n: number
) => (1 - n) * a + n * b;

export const lineEq = (
  y1:number,
  y2:number,
  x1:number,
  x2:number,
  currentVal: number
) => (y1 - y2) / (x1 - x2) * (currentVal - x2) + y2;

export const makeCityScape = (material: Material, models: Object3D[]): Group => {
  const group = new Group();
  for (let i = 0; i < CITYSCAPE_CONFIG.dimensions[0]; i++) {
    for (let j = 0; j < CITYSCAPE_CONFIG.dimensions[1]; j++) {
      const building = models[Math.floor(Math.random() * models.length)].clone();
      (<Mesh> building).material = material;
      building.scale.set(
        CITYSCAPE_CONFIG.scale,
        Math.min(
          Math.max(
            Math.random() * CITYSCAPE_CONFIG.scale,
            CITYSCAPE_CONFIG.min
          ),
          CITYSCAPE_CONFIG.max
        ),
        CITYSCAPE_CONFIG.scale
      );
      building.position.set(i * CITYSCAPE_CONFIG.boxSize, 1, j * CITYSCAPE_CONFIG.boxSize);
      building.receiveShadow = true;
      building.castShadow = true;
      group.add(building);
    }
  }
  return group;
}