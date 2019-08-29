import React, { Component } from 'react';

import Page from './components/Page'
import {Registration} from "./components/Registration";

class App extends Component {
  state = {
    user: {},
    token: null
  }

  setToken(newToken) {
    this.setState({
      ...this.state,
      token: newToken
    })
  }

  render(){
    const { token } = this.state;
    if(token){
      return (
          <Page />
      );
    }
    return (
      <Registration tokenSetter={(token) => this.setToken(token)} />
    )
  }
}

export default App;
