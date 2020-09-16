import React, { Component } from 'react';
import CategoriesBar from './categoriesBar';
import LatestPosts from './latestPosts';
import SearchBar from './searchBar';
class Feeds extends Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        return (
            <div className="w-25 mt-5 float-right"> 
              <SearchBar /> 
              <CategoriesBar /> 
              <LatestPosts /> 
            </div>
          );
    }
}
 
export default Feeds;