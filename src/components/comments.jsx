import React, { Component } from "react";
import Axios from 'axios';
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isCommentBoxActive : false ,
    };
  }

  async componentDidMount() {
    let postId = this.props.postId;
    let response = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
        
    if (response.status === 200) {
      this.setState({ comments: response.data });
    }
  }

  handleToggleComments=(isCommentBoxActive)=>{
    console.log('click');
    let changed = ! isCommentBoxActive;
    this.setState({isCommentBoxActive : changed});

  }

  render() {
    let { comments , isCommentBoxActive } = this.state;

    return( 
    
    <div className="">
        {isCommentBoxActive === true ? (
            <button onClick={()=>this.handleToggleComments(isCommentBoxActive)}>Hide Comments</button> 
        ) :(
            <button onClick={()=>this.handleToggleComments(isCommentBoxActive)}>Show Comments</button> 
        )}
        
        { comments.length !==0 && isCommentBoxActive === true  ? (
             
            <div className="comment-wrapper">
              
                {comments.map(comment => (
                    <div className="single-comment">
                        <h6>{comment.name.substring(0,15) } <small> {comment.email}</small></h6>
                         <p>{comment.body}</p>
                    </div>
                ) )}
            </div>
        ):(<p>...</p> )}
        
        </div>
);

}
}

export default Comments;
