import React, { Component } from 'react';

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
                {this.state.jobs.map((item, index) => 
                <li key={index}>
                    <p><span className="objectTitle">Position: </span>{item.title}</p>
                    <p><span className="objectTitle">Company: </span>{item.company}</p>
                    <p><span className="objectTitle">Location: </span>{item.location}</p>
                    <p><span className="objectTitle">Date Applied: </span>{item.date}</p>
                    <p><span className="objectTitle">Link:</span> {item.website}</p>
                    <p><span className="objectTitle">Notes/Comments: </span>{item.comments}</p>
                    </li>)}
            </div>
        )
    }
}

export default Display;