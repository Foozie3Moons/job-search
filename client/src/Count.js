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
    .then(response => console.log(response));

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
