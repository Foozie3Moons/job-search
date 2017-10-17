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
    isExpandableRow(row) {
        if (row.id < 2) return true;
        else return false;
    }
    expandComponent(row) {
        return (
            <BootstrapTable data={row.expand} />
        )
    }
    render(){
        var jobslist = this.state.jobs;
        const options = {
            expandRowBgColor: 'rgb(242,255,162)'
        };
                
        return(
            <div className='jobsList'>
                <h1>My Job Tracker</h1>
                <h4>Here is a tracker for jobs you've applied to:</h4>
                <BootstrapTable data={jobslist}
                    options={options}
                    expandableRow={ this.isExpandableRow }
                    expandComponent={ this.expandComponent }>
                    <TableHeaderColumn dataField='title' isKey>Job Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='company'>Company Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='location'>Job Location</TableHeaderColumn>
                    <TableHeaderColumn dataField='website'>Job Link</TableHeaderColumn>
                    <TableHeaderColumn dataField='date'>Date Applied</TableHeaderColumn>
                    <TableHeaderColumn dataField='comments'>Notes</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Display;