import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import AvatarPost from './avatarPost';
import Comments from "./comments";

const Post = (props) => {
    return (    
       <div className="w-75 float-left"> 
        <div className="post-wrapper p-5">
            <div className="single-post mb-5" key={props.post.id}>
        <AvatarPost />
      <h4>{props.post.title}</h4>
      <p>
        {props.post.body}
        {props.post.body}
        
      </p>
      <Comments postId={props.post.id} key={props.post.id}/>
    </div>
     </div>
     </div>
      );
}
 
export default Post;
