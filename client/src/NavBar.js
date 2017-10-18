import React, { Component } from 'react';
import JobTracker from './JobTracker';
import Main from './Main';
import Welcome from './Welcome';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class NavBar extends Component {
    render () {
        return (
            <Router>
                <div className="App-header">
                    <h2 className="App-title header col-xs-12 col-sm-8">Job Buddy</h2>
                    <nav className="header ">
                        <Link className='links' to='/'>Home</Link>{' '}
                        <Link className='links' to='/jobtracker'>My Jobs</Link>{' '}
                        <Link className='links' to='/main'>New Job</Link>{' '}
                    </nav>
                    <Route exact path='/' component={Welcome} />
                    <Route  path='/main' component={Main} />
                    <Route  path='/jobtracker' component={JobTracker} />
                </div>
            </Router>
        )
    }
}

export default NavBar;