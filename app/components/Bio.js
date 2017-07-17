import React, { Component } from 'react';
import selfPhoto from '../assets/images/self.jpg';

const FullName = () => {
    return (
        <div className="fullname">
            {/*<p>
                Bogdan Kosytskyy
            </p>
            <span>
                Front-end Developer
            </span>*/}
        </div>
    )
}

class Bio extends Component {
    render() {
        return (
            <div className="bio">
                <div className="bio-about">
                    <span className="title">
                        about me
                </span>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus illo aperiam,
                            debitis pariatur neque magnam culpa voluptatibus.
                        </p>
                        <br/>
                        <p>
                            nemo aliquid deleniti adipisci,
                            temporibus eum dicta sit odit dolorum consequatur sequi? Veritatis.
                        </p>
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
                <div className="bio-image">
                    <img src={selfPhoto} alt="" />
                </div>
                <div className="bio-contacts">
                    <ul>
                        <li>
                            <i className="icon icon-cell small"></i>
                            <span>+38(063)644-54-55</span>
                        </li>
                        <li>
                            <i className="icon icon-mail small"></i>
                            <span>badykos@gmail.com</span>
                        </li>
                        <li>
                            <i className="icon icon-website small"></i>
                            <span>http://github.com</span>
                        </li>
                        <li>
                            <i className="icon icon-location small"></i>
                            <span>Ukraine, Kiev</span>
                        </li>
                    </ul>
                </div>
                <FullName />
            </div>
        );
    }
}

export default Bio;