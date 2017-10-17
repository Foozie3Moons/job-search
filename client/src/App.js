import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <ul className="App">
        {this.state.job}
      </ul>
    );
  }
}

export default App;
