import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        fetch('/jobs')
        .then(response => response.json())
        .then(response => this.setState({jobs: response}))
    }

    render(){
        var jobslist = this.state.jobs;
    
      

        return(
            <div className='jobsList' id="works">
                <h1>My Job Tracker</h1>
                <h4>Here is a tracker for jobs you've applied to:</h4>
                <BootstrapTable data={jobslist}
                    search>
                    <TableHeaderColumn dataField='title' isKey>Job Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='company'>Company Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='location'>Job Location</TableHeaderColumn>
                    <TableHeaderColumn dataField='website' columnClassName='long'>Job Link</TableHeaderColumn>
                    <TableHeaderColumn dataField='date'>Date Applied</TableHeaderColumn>
                    <TableHeaderColumn dataField='meta.comments'>Notes</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Display;
