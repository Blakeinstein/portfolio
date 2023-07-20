import { Curtains } from 'curtainsjs';

let curtains: Curtains | null = null;

const getCurtainsObject = () => {
  if (!curtains) {
    curtains = new Curtains({
      container: "canvas"
    });
  }
  return curtains;
};

export default getCurtainsObject;
