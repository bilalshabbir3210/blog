import React, { Component } from "react";
import {Link} from 'react-router-dom';
import AvatarPost from "./avatarPost";

const PostContent = (props) => {
  return (
    <div className="single-post mb-5" key={props.content.id}>

    <AvatarPost />
      <h4>{props.content.title.substring(0, 15)}</h4>
      <p>
        {props.content.body.substring(0, 40)}..
        <Link to={`/post/${props.content.id}`} className="btn btn-outline-light text-dark">
          Read More
        </Link>
      </p>
    </div>
  );
};

export default PostContent;
