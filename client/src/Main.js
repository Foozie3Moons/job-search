import React, {Component} from 'react';
import BsForm from './BsForm'

import { Grid } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Grid id="tester">
        <Col md={6}>
          <BsForm />
        </Col>
        <Col md={6}>
          <div id='Section Goes Here'>
          </div>
        </Col>
      </Grid>
    )
  }
}

export default Main
