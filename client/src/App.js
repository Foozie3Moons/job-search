import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

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
      <Form />
    );
  }
}

export default App;
