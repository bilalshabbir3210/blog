import React, { Component } from 'react';
import Axios from 'axios';
import Feeds from '../components/feeds';
import Navbar from '../components/navbar';
import Post from '../components/post';

class SinglePostControl extends Component {
    constructor() {
        super();
        this.state = { 
            post :[],
         }
    }
    async componentDidMount() {
    
        let postId = this.props.match.params.name;
       
        try {
          let response = await Axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
          );
    
          if (response.status === 200) {
            this.setState({ post: response.data });
          }
        } catch (error) {
          alert(error);
        }
      }

    render() { 
        const {post} = this.state;
        return ( 
            <React.Fragment>
                <Navbar />
                <Post post={post}/>
                <Feeds />
            </React.Fragment>
         );
    }
}
 
export default SinglePostControl;