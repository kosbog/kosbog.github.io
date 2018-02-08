import React from 'react';
import photo from '../assets/images/self/self.png';

const Greeting = ({ scrollToElement }) => {
    return (
        <div className="greeting">
            <h1>Bogdan Kosytskyi</h1>
            <p><q>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time</q></p>
            <span>Thomas A. Edison</span>
            <div className="btn">
                <button type="button" onClick={() => scrollToElement('about')}>more</button>
            </div>
        </div>
    )
}

const Photo = () => {
    return (
        <div className="photo">
            <img src={photo} alt="I am" className="photo__image" />
        </div>
    )
}

const Welcome = ({ scrollToElement }) => {
    return (
        <div className="home">
            <div className="wrapper home__wrapper">
                <Greeting scrollToElement={scrollToElement} />
                <Photo />
            </div>
        </div>
    )
}

export default Welcome;