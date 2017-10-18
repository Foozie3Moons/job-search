import React, {Component} from 'react';
import BSForm from './BSForm'
import SideBar from './SideBar'
import Display from './Display'

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

      <Grid>
        <Col md={8}>
          <ul>
            <Display />
          </ul>
          <BSForm />
        </Col>
        <Col md={4}>
          <SideBar />
        </Col>
      </Grid>
    )
  }
}

export default Main
