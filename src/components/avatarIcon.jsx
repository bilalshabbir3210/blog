import React, { Component } from 'react';

class AvatarIcon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            photo :'',
         }
    }

    async componentDidMount() {
    
        let userId = this.props.userId;

        debugger;
        try {
          let response = await Axios.get(
            `https://jsonplaceholder.typicode.com/posts/${userId}`
          );
    
          if (response.status === 200) {
            this.setState({ post: response.data });
          }
        } catch (error) {
          alert(error);
        }
      }

    render() { 
        return ( 

         );
    }
}
 
export default AvatarIcon;