import React, { Component } from 'react';
import { Main } from './Main'
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class BsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      location: '',
      website: '',
    }
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Job Title</ControlLabel>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Title"
          />
          <FormControl.Feedback />
          <HelpBlock>Required</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Company</ControlLabel>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Company name"
          />
          <FormControl.Feedback />
          <HelpBlock>Required</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Location</ControlLabel>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="City, State"
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Job Posting</ControlLabel>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Link to job posting"
          />
          <FormControl.Feedback />
          <HelpBlock>Where you found the job posting</HelpBlock>
        </FormGroup>
        <Button bsStyle="success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default BsForm;
