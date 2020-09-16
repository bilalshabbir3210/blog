import React, { Component } from "react";
import { Link } from "react-router-dom";
const CategoriesBar = () => {
  let categories = [
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "React Js",
    "React Native",
  ];
  return (
    <div className="categories mt-5">
      <h5 className="bg-light p-3 mb-0">Categories</h5>
      <ul className="list-group list-group-flush ">
        {categories.map((item) => (
          <li key={item} className="list-group-item list-group-item-action">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesBar;
