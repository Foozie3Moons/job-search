import React, { Component } from 'react';
import SideBar from './SideBar';
import './App.css';
import Main from './Main';
import Display from './Display';
import NavBar from './NavBar';

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
        <ul className="App">
          <Display />
        </ul>
        <Main />
        <SideBar />
      </div>
      
    );
  }
}

export default App;
