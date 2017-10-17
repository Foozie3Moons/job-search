import React, { Component } from 'react';
import './App.css';

class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    fetch('/jobs')
    .then(response => console.log(response.json()));
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
