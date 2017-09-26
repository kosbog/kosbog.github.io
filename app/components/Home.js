import React, { Component } from 'react';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Welcome />
                <About />
                <Skills />
            </div>
        );
    }
}

export default Home;