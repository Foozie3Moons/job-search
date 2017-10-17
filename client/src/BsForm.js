import React, { Component } from 'react';
import { Main } from './Main'
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import $ from 'jquery';

class BSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      location: '',
      website: '',
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    e.preventDefault()
    this.setState({
      [name]: value
    });
    console.log(this.state)
  }

  handleClick = (e) => {
    e.preventDefault();
    $.ajax({
      url: '/jobs',
      dataType: 'json',
      type: 'POST',
      data: this.state,
      success: function(data) {
        console.log('hi');
        this.setState({
          title: '',
          company: '',
          location: '',
          website: '',
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/jobs', status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup
          controlId="title"
        >
          <InputGroup>
            <InputGroup.Addon>Job Title</InputGroup.Addon>
            <FormControl
              type="text"
              name='title'
              onChange={this.handleInputChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup
          controlId="company"
        >
          <InputGroup>
            <InputGroup.Addon>Company</InputGroup.Addon>
            <FormControl
              type="text"
              name='company'
              onChange={this.handleInputChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup
          controlId="location"
        >
          <InputGroup>
            <InputGroup.Addon>Location</InputGroup.Addon>
            <FormControl
              type="text"
              name='location'
              onChange={this.handleInputChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup
          controlId="website"
        >
          <InputGroup>
            <InputGroup.Addon>Application Link</InputGroup.Addon>
            <FormControl
              type="text"
              name='website'
              onChange={this.handleInputChange}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup
          controlId="comments"
        >
          <InputGroup>
            <InputGroup.Addon>Comments</InputGroup.Addon>
            <FormControl
              type="textarea"
              name='comments'
              onChange={this.handleInputChange}
            />
          </InputGroup>
        </FormGroup>
        <Button bsStyle="success" type="submit" onClick={this.handleClick}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default BSForm;
