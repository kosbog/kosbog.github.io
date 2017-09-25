import React from 'react';

const Greeting = () =>{
    return(
        <div className="greeting">
            <h1>BK</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisicing.</p>
            <button type="button">more</button>    
        </div>
    )
}

const Logo = () => {
    return (
        <div className="header__logo">

        </div>
    )
}

const Nav = () => {
    return (
        <nav className="nav">
            <span className="nav__item">Home</span>
            <span className="nav__item">About</span>
            <span className="nav__item">Portfolio</span>
            <span className="nav__item">Experience</span>
            <span className="nav__item">Contacts</span>
        </nav>
    )
}

const Welcome = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <header>
                    <Logo />
                    <Nav />
                </header>
                <Greeting />
            </div>
        </div>
    )
}

export default Welcome;