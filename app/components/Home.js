import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import header from '../assets/images/header.jpg';

const Header = () => {
    return (
        <header></header>
    )
}

const Bio = () => {
    return (
        <div className="bio">
            <div className="bio-about">
                <span className="title">
                    about me
                </span>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus illo aperiam,
                        debitis pariatur neque magnam culpa voluptatibus, nemo aliquid deleniti adipisci,
                        temporibus eum dicta sit odit dolorum consequatur sequi? Veritatis.
                </div>
                <div className="icons">
                    <ul>
                        <li>
                            <i className="icon icon-html"></i>
                            <span>HTML</span>
                        </li>
                        <li>
                            <i className="icon icon-css"></i>
                            <span>CSS</span>

                        </li>
                        <li>
                            <i className="icon icon-js"></i>
                            <span>JavaScript</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bio-image">qq</div>
            <div className="bio-contacts">qq</div>
        </div>
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

const FullName = () => {
    return (
        <div className="fullname">

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