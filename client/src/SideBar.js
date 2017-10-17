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
      linkArray: ['www.monster.com'],
      editMode: false,
      editId: ''
    };
    this.addNewLink = this.addNewLink.bind(this);
    this.editLink = this.editLink.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }
  addNewLink(linkName) {
    var temp = this.state.linkArray;
    temp.push(linkName);
    // These this.setState calls require those bind() lines above
    this.setState({linkArray: temp});
  }

  // Method called by TaskList when the Edit link is clicked
  // Passed in via props
  toggleEditMode(linkId) {
    console.log("App::toggleEditMode");
    this.setState({
      editMode: true,
      editId: linkId
    });
  }

  // Method called by TaskList when the Save Changes link is clicked
  // Passed in via props
  editLink(linkId, value) {
    // console.log("in the editTask");
    var tempArr = this.state.linkArray;
    tempArr[linkId] = value;
    this.setState({
      linkArray: tempArr,
      editMode: false,
      editId: ''
    });
  }

  render() {
    return (
      <div className="sideBar">
        <div className="LastApplied">

        </div>
        <Count />
        <div className="PersonalNote">
          personal note
        </div>
        <div className="JobLink">
          <JobLink editMode={this.state.editMode}
                  editId={this.state.editId}
                  toggleEditMode={this.toggleEditMode}
                  editTask={this.editTask}
                  links={this.state.taskArray} />
        </div>
      </div>
    )
  }
}

export default SideBar;
