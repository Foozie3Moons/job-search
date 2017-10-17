import React, { Component } from 'react';
import SideBar from './SideBar';
import './App.css';

import Main from './Main'
import Display from './Display'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      job: []
    }
  }
  componentDidMount() {
    // fetch("/foo")
    //   .then(response => response.json())
    //   .then(response => this.setState({foo: response}))
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
