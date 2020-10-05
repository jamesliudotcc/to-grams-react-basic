import React, { useState } from "react";
import { fromJS, Map } from "immutable";
import "./App.css";

const GRAMS_IN_OZ = 29.5735;

const UNITS = fromJS({
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

const INGREDIENTS = fromJS({
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

function App() {
  const [unit, setUnit] = useState("cup");
  const [ingredient, setIngredient] = useState("water");
  const [toConvert, setToConvert] = useState("0");

  const handleUnitChange = (e: any) => {
    setUnit(e.target.value);
  };

  const handleIngredientChange = (e: any) => {
    setIngredient(e.target.value);
  };

  const handleToConvertChange = (e: any) => {
    setToConvert(e.target.value);
  };

  const inGrams = (unit: string, ingredient: string, toConvert: string) =>
    String(
      Math.round(
        Number(toConvert) *
          GRAMS_IN_OZ *
          UNITS.getIn([unit, "inOz"]) *
          INGREDIENTS.getIn([ingredient, "density"])
      ) || ""
    );

  return (
    <div className="App">
      <input
        value={toConvert}
        onChange={handleToConvertChange}
        type="number"
      ></input>
      <select value={unit} onChange={handleUnitChange}>
        {UNITS.map((v: any, k: any) => (
          <option value={k}>{v.get("name")}</option>
        ))}
      </select>
      <select value={ingredient} onChange={handleIngredientChange}>
        {INGREDIENTS.map((v: any, k: any) => (
          <option value={k}>{v.get("name")}</option>
        ))}
      </select>
      {inGrams(unit, ingredient, toConvert)}
    </div>
  );
}

export default App;
