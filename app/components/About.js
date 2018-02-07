import React from 'react';
import self from '../assets/images/self/self2.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="wrapper about__wrapper">
                <div className="about__description">
                    <h2 className="section-header">About</h2>
                    {/* <p className="ml-90">
                        I have been working as a front-end developer since 2015.
                        During this time I got experience working with such frameworks as Backbone.js, AngularJS 1.x/2, React and React Native.
                    </p> */}
                </div>
                <div className="about__description about--self">
                    <div className="about__image">
                        <img src={self} alt="" />
                    </div>
                    <div className="about__bio">
                        <h3>
                            Hello everyone, I'm <span>Bogdan Kosytskyi</span>
                            <br />
                            front-end developer
                        </h3>
                        <p>
                            From childhood I didn't dream about that i will sit at the computer and write a code - I wanted to become a professional football player.
                            I even played for the school football team, yeah!.. But, my "football career" ended when I started studying at the university.
                            I have a fancy for web development in the second year of study. Thereat in simple textpad I created my first HTML page and
                            connected my first CSS file to it. It was an unforgettable feeling!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;