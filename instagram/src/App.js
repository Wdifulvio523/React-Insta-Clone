import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import Authenticate from "./Authentication/Authenticate";
import styled from 'styled-components';
import PostPage from "./components/PostContainer/PostsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      authenticate: Authenticate
    };
  }

  // componentDidMount() {
  //   this.setState({ dummyData: dummyData });
  // }

  render() {
    
    return (
      <PostPage
        dummyData={this.state.dummyData}
        authenticate={this.state.authenticate}
      />
    );
  }
}

export default Authenticate(App);
