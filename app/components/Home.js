import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import header from '../assets/images/header.jpg';

class Home extends Component {
    render() {
        return (
            <div className="content">
                <Video />
                    <header></header>
                    <div className="experience">
                    
                    </div>
                    <div className="education"></div>
                    <div className="info"></div>
            </div>
        );
    }
}

export default Home;