import React, { useState } from "react";
import "./App.css";
import { GRAMS_IN_OZ, UNITS, INGREDIENTS } from "./constants";

function Ingredient() {
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
    <div className="Ingredient">
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

export default Ingredient;
