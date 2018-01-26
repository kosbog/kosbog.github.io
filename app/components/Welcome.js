import React from 'react';
import photo from '../assets/images/self/self.png';

const Greeting = () => {
    return (
        <div className="greeting">
            <h1>Bogdan Kosytskyi</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisicing.</p>
            <div className="btn">
                <button type="button">more</button>
            </div>
        </div>
    )
}

const Logo = () => {
    return (
        <div className="header__logo">

        </div>
    )
}

const Photo = () => {
    return (
        <div className="photo">
            <img src={photo} alt=""/>
        </div>
    )
}

const Nav = () => {
    return (
        <nav className="header__nav">
            <span className="nav__item"><p>Home</p></span>
            <span className="nav__item"><p>About</p></span>
            <span className="nav__item"><p>Portfolio</p></span>
            <span className="nav__item"><p>Experience</p></span>
            <span className="nav__item"><p>Contacts</p></span>
        </nav>
    )
}

const Welcome = () => {
    return (
        <div className="header">
            <div className="wrapper header__wrapper">
                <header>
                    <Logo />
                    <Nav />
                </header>
                <Greeting />
                <Photo />
            </div>
        </div>
    )
}

export default Welcome;