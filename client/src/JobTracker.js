import React, { Component } from 'react';
import Display from './Display';
import SideBar from './SideBar'

import { Grid } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

class JobTracker extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (

      <Grid>
        <Col sm={10} xs={12}>
          <Row className='component'>
            <Display />
          </Row>
        </Col>
        <Col sm={2} xs={12}>
          <SideBar />
        </Col>
      </Grid>
    )
  }
}

export default JobTracker;