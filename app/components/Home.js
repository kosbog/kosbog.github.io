import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import Bio from './Bio';
import header from '../assets/images/header.jpg';

const Header = () => {
    return (
        <header></header>
    )
}

const Experience = () => {
    return (
        <div className="experience">

        </div>
    )
}

const Education = () => {
    return (
        <div className="education">

        </div>
    )
}

const Info = () => {
    return (
        <div className="education">

        </div>
    )
}



class Home extends Component {
    render() {
        return (
            <div className="content">
                <Video />
                <Header />
                <Bio />
                <Experience />
                <Education />
                <Info />
            </div>
        );
    }
}

export default Home;