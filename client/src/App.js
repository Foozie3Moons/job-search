import React, { Component } from 'react';
import SideBar from './SideBar';
import './App.css';
import Main from './Main';
import NavBar from './NavBar';
import Display from './Display';
import Welcome from './Welcome';

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
        <NavBar />
      </div>
    );
  }
}

export default App;
