import React, { Component } from 'react';
import './App.css';
import Count from './Count';
import JobLink from './JobLink';
import LastApplied from './LastApplied';
import PersonalNote from './PersonalNote';

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="sideBar">
        <h2>Stats</h2>
        <div className="LastApplied">

        </div>
        <Count />
        <div className="PersonalNote">
          personal note
        </div>
        <div className="JobLink">
          job link
        </div>
      </div>
    )
  }
}

export default SideBar;
