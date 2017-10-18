import React, {Component} from 'react';
import BSForm from './BSForm'
import SideBar from './SideBar'
import Display from './Display'

import { Grid } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

class Main extends Component {

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
          <Row className='component'>
            <BSForm />
          </Row>
        </Col>
        <Col sm={2} xs={12}>
          <SideBar />
        </Col>
      </Grid>
    )
  }
}

export default Main
