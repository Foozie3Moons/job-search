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
      editId: '',
      noteArray: ['You can do this'],
      noteEditMode: false,
      noteEditId: ''
    };
    this.addNewLink = this.addNewLink.bind(this);
    this.editLink = this.editLink.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.addNewNote = this.addNewNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.noteToggleEditMode = this.noteToggleEditMode.bind(this);
  }
  addNewLink(linkName) {
    var temp = this.state.linkArray;
    temp.push(linkName);
    // These this.setState calls require those bind() lines above
    this.setState({linkArray: temp});
  }
  addNewNote(noteName) {
    var temp = this.state.noteArray;
    temp.push(noteName);
    this.setState({noteArray: temp});
  }
  // Method called by TaskList when the Edit link is clicked
  // Passed in via props
  toggleEditMode(linkId) {
    this.setState({
      editMode: true,
      editId: linkId
    });
  }
  noteToggleEditMode(noteId) {
    this.setState({
      noteEditMode: true,
      noteEditId: noteId
    });
  }

  // Method called by TaskList when the Save Changes link is clicked
  // Passed in via props
  editLink(linkId, value) {
    var tempArr = this.state.linkArray;
    tempArr[linkId] = value;
    this.setState({
      linkArray: tempArr,
      editMode: false,
      editId: ''
    });
  }

  editNote(noteId, value) {
    var noteTempArr = this.state.noteArray;
    noteTempArr[noteId] = value;
    this.setState({
      noteArray: noteTempArr,
      noteEditMode: false,
      noteEditId: ''
    });
  }

  render() {
    return (
      <div className="sideBar">
        <div className="LastApplied">

        </div>
        <Count />
        <div className="PersonalNote">
          <PersonalNote noteEditMode={this.state.noteEditMode}
                  noteEditId={this.state.noteEditId}
                  noteToggleEditMode={this.noteToggleEditMode}
                  editNote={this.editNote}
                  notes={this.state.noteArray} />
        </div>
        <div className="JobLink">
          <JobLink editMode={this.state.editMode}
                  editId={this.state.editId}
                  toggleEditMode={this.toggleEditMode}
                  editLink={this.editLink}
                  links={this.state.linkArray} />
        </div>
      </div>
    )
  }
}

export default SideBar;
