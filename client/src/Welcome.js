import React, { Component } from 'react';
import SideBar from './SideBar';

import { Grid } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

class Welcome extends Component {
    render(){
        return (
            <div className='welcomeBody'>
                <Grid>
                    <Col sm={10} xs={12}>
                        <Row className='component'>
                            <h2>Welcome to My Job Buddy</h2>
                            <h3>Here you can track all of the data for jobs you have applied to. <br/> Once you've applied for a job, move to the New Job page and enter all the importand details. <br/> Then Keep track of jobs you've applied for on the My Jobs page.</h3>
                            <p>Links to Help you Get Started:</p>
                            <ul>
                                <li><a href="https://www.indeed.com/jobs?q=web+developer&l=Seattle%2C+WA">Monster</a></li>
                                <li><a href="https://www.indeed.com/jobs?q=web+developer&l=Seattle%2C+WA">Indeed</a></li>
                                <li><a href="https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=true&clickSource=searchBtn&typedKeyword=web+dev&sc.keyword=web+developer&locT=C&locId=1150505&jobType=">Glassdoor</a></li>
                            </ul>
                        </Row>
                    </Col>
                    <Col sm={2} xs={12}>
                        <SideBar />
                    </Col>
                </Grid>
</div>
        )
    }
}

export default Welcome;
