import React, { Component } from 'react';
import './App.css';

class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    fetch('/jobs')
    .then(response => response.json())
    .then(response => this.setState({count: response.length}))
  }

  render() {
    return (
      <div>
        You've applied for {this.state.count} jobs!
      </div>
    )
  }
}

export default Count;
