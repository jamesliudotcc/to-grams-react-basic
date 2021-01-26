import { fromJS } from "immutable";

export const GRAMS_IN_OZ = 29.5735;
export const UNITS = fromJS({
  cup: { name: "Cup", inOz: 8 },
  fl_oz: {
    name: "Ounce (Fluid)",
    inOz: 1,
    volume: true,
  },
  tbsp: {
    name: "Tablespoon",
    inOz: 0.5,
    volume: true,
  },
  tsp: {
    name: "Teaspoon",
    inOz: 1 / 6,
    volume: true,
  },
});
export const INGREDIENTS = fromJS({
  water: { name: "Water", density: 1 },
  oil: { name: "Oil", density: 0.917 },
  butter: { name: "Butter", density: 0.911 },
  flour: { name: "Flour", density: 0.531 },
  sugar: { name: "Sugar", density: 0.845 },
  brown_sugar: { name: "Brown Sugar", density: 0.93 },
  bPowder: { name: "Baking Powder", density: 0.972 },
  bSoda: { name: "Baking Soda", density: 0.974 },
  cchips: { name: "Chocolate Chips", density: 0.634 },
  yeast: { name: "Yeast", density: 0.658 },
});
