import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';


class Home extends Component {
    render() {
        return (
            <div>
                <Video />
                <h1>
                    Hello home component
                </h1>
            </div>
        );
    }
}

export default Home;