import React, { Component } from 'react';
import './App.css';
import Main from './Main'

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
      <Main />
    );
  }
}

export default App;
