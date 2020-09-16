import React, { Component } from "react";

const LatestPosts = () => {
  let latestPosts = ["post 1", "post 1", "post 1", "post 1", "post 1"];
  return (
      
      <div className="latest-posts mt-5">
      <h4 className="bg-light p-3 mb-0">Latest Posts</h4>
    <ul className="list-group list-group-flush">
      {latestPosts.map((post) => (
        <li className="list-group-item">{post}</li>
      ))}
    </ul>
    </div>
  );
};

export default LatestPosts;
