import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class RemoteStoreCellEdit extends React.Component {
    constructor(props){
        super(props)
        // this.products = getProducts();
        this.state = {
            data: this.products
        };
    };
    onCellEdit = (row, fieldName, value) => {
        const {data} =this.state;
        let rowIdx;
        const targetRow = data.find((prod, i) => {
            if (prod.id === row.id) {
                rowIdx = i;
                return true;
            }
            return false;
        });
        if (targetRow) {
        targetRow[fieldName] = value;
        data[rowIdx] = targetRow;
        this.setState({ data });
        }
    }
    render() {
        return (
            <Display onCellEdit={this.onCellEdit}{ ...this.state } />
        );
    }
}


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
        .then(console.log(this.state.jobs))
    }

    render(){
        var jobslist = this.state.jobs;
        const cellEditProp = {
            mode: 'click'
        };      
        return(
            <div className='jobsList' id="works">
                <h1>My Job Tracker</h1>
                <h4>Here is a tracker for jobs you've applied to:</h4>
                <BootstrapTable data={jobslist}
                    remote={ true }
                    cellEdit={cellEditProp}
                    options={{onCellEdit: this.props.onCellEdit}}
                    search>
                    <TableHeaderColumn dataField='title' isKey>Job Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='company'>Company Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='location'>Job Location</TableHeaderColumn>
                    <TableHeaderColumn dataField='website' columnClassName='long'>Job Link</TableHeaderColumn>
                    <TableHeaderColumn dataField='date'>Date Applied</TableHeaderColumn>
                    <TableHeaderColumn dataField='comments'>Notes</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Display;