import React, { Component } from "react";
import Feeds from "../components/feeds";
import Navbar from "../components/navbar";
import Posts from "../components/posts";

class IndexControl extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Posts />
        <Feeds />
      </React.Fragment>
    );
  }
}

export default IndexControl;
