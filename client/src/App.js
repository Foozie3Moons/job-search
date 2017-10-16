import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }
  componentDidMount() {
    fetch("/jobs")
      .then(response => response.json())
      .then(response => this.setState({jobs: response}))
  }
  render() {
    return (
      <ul className="App">
        {this.state.jobs.map((item, index) => (<li key={index}>{item.title}</li>))}
      </ul>
    );
  }
}

export default App;
