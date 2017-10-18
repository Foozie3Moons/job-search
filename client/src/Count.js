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
    .then(response => response.json())
    .then(response => this.setState({count: response.length}));
  }

  render() {
    return (
      <div className="countDiv">
        Total jobs applied to: {this.state.count}
      </div>
    )
  }
}

export default Count;
