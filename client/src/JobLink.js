import React, { Component } from 'react';
import './App.css';

class JobLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newLink: ""
    }
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  handleEditClick(e) {
    e.preventDefault();
    var key = e.target.getAttribute('data-key');
    this.props.toggleEditMode(key);
  }
  // This is the local function that handles the SAVE CHANGES click event
  // It calls the method passed in from the parent, then updates local state
  handleEditSubmit(e) {
    e.preventDefault();
    var key = e.target.getAttribute('data-key');
    var value = this.state.newLink;
    this.props.editLink(key, value);
    this.setState({newLink: ''});
  }
  // This is the local function that handles the text box change event
  // It is required for the text input to render correctly
  handleChange(e) {
    e.preventDefault();
    this.setState({newLink: e.target.value});
  }
  render() {
    return (
      <div>
        { // Here we start mapping tasks to little boxes
          this.props.links.map((item, index) => {
            // We branch on editMode and only make a textbox for the one clicked
            if (this.props.editMode && index == this.props.editId) {
              return (
                <div className="LinkList" key={index}>
                  <input type="text" value={this.state.newLink} placeholder={item} onChange={this.handleChange} />
                  <a onClick={this.handleEditSubmit} data-key={index} > [Save Changes] </a>
                </div>
              )
            } else {
              // Here we are not in edit mode, so only show the items
              return (
                <div className="LinkList" key={index}>
                  {item}
                  <a onClick={this.handleEditClick} data-key={index} > [Edit] </a>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default JobLink;
