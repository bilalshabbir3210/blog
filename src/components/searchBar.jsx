import React, { Component } from "react";

const SearchBar = () => {
  return (
    <form action="">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <button className="btn btn-outline-warning" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
