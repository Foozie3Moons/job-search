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
        <div className="LastApplied">

        </div>
        <div className="Count">

        </div>
        <div className="PersonalNote">

        </div>
        <div className="JobLink">

        </div>
      </div>
    )
  }
}

export default SideBar;
