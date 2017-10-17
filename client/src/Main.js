import React from 'react';
import Form from './Form'

import { Grid } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function Main() {

  return (
    <Grid>
      <Col md={8}>
        <Form />
      </Col>
      <Col md={4}>
        <div id='Section Goes Here'>
        </div>
      </Col>
    </Grid>
  )
}

export default Main;
