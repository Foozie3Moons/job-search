import React, {Component} from 'react';
import BsForm from './BsForm'
import SideBar from './SideBar'

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
        <Col md={6}>
          <BsForm />
        </Col>
        <Col md={6}>
          <SideBar />
        </Col>
      </Grid>
    )
  }
}

export default Main
