import React, { Component } from 'react';
import $ from 'jquery';

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
        return(
            <div className='jobsList'>
                <h1>My Job Tracker</h1>
                <h4>Here is a tracker for jobs you've applied to:</h4>
                <table>                   
                <div>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Date Applied</th>
                            <th>Link</th>
                            <th>Notes/Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.jobs.map((item, index) => 
                        <tr key={index} className="tableBody">
                            <td>{item.title}</td>
                            <td>{item.company}</td>
                            <td>{item.location}</td>
                            <td>{item.date}</td>
                            <td><a href={item.website}>{item.website}</a></td>
                            <td>{item.meta.comments}</td>
                            <td><a href="/">Updates?</a></td>
                        </tr>)}
                    </tbody>
                </div>
                </table>
            </div>
        )
    }
}

export default Display;
