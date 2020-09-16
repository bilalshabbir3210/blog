import React, { Component } from 'react';

import Axios from 'axios';
import PostContent from './postContent';

class Posts extends Component {
    constructor() {
        super();
        this.state = { 
            posts :[],
         }
    }

    async componentDidMount (){

    try {
        let response = await Axios.get('https://jsonplaceholder.typicode.com/posts');

        if(response.status ===200){
            this.setState({posts :response.data});
        }
        
    } catch (error) {
        alert(error);
    }
  } 

    render() { 
        const {posts} = this.state;
        return ( 
            <div className="w-75 float-left" >
              {posts.length === 0 ?(
                  <div className="spinner-wrapper text-center">
                      <span className="spinner-border text-light"></span>
                  </div>
              ) :(

                  <div className="post-wrapper p-5">
                     { posts.map(post =>(
                         <PostContent key={post.id} content={post}/>
                     ))}
                     
                  </div>
              ) }  
            </div>    

         );
    }
}
 
export default Posts;