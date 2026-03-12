import React from "react";
import Categories from "./Categories";
import Colors from "./Colors";
import Sizes from "./Sizes";
import Brands from "./Brands";
import Price from "./Price";
import "./ShopVariable.css";

const CategoriesSide = () => {
  return (
    <div className="category-side-container">
      <Categories />
      <Colors />
      <Sizes />
      <Brands />
      <Price />
    </div>
  );
};

export default CategoriesSide;
