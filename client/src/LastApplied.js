import React, { Component } from 'react';
import './App.css';

class LastApplied extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    fetch('/jobs')
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default LastApplied;
