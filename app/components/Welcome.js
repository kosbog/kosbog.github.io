import React from 'react';
import photo from '../assets/images/self/self.png';

const Greeting = ({ scrollToElement }) => {
    return (
        <div className="greeting">
            <h1>Bogdan Kosytskyi</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisicing.</p>
            <div className="btn">
                <button type="button" onClick={() => scrollToElement('about')}>more</button>
            </div>
        </div>
    )
}

const Photo = () => {
    return (
        <div className="photo">
            <img src={photo} alt="" />
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