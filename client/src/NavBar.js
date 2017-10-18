import React, { Component } from 'react';

class NavBar extends Component {
    render () {
        return (
            <div className="App-header">
                <h2 className="header"><br/> Job Tracker</h2>
                <p className="">Tryna Track them jobs</p>
                <ul>
                    <li><a href='#works'>My Jobs</a></li>
                    <li><a href='#tester'>New Job</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;