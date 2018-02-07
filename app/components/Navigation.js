import React, { Component } from 'react';

const Navigation = ({ scrollToElement, api }) => {
    const { menu } = api;
    let menuItems = [
        <span className="nav__item" onClick={() => scrollToElement('home')} key='home'><p>home</p></span>
    ];
    
    menu.forEach(item => {
        if (item !== 'home' && api[item].length) {
            menuItems.push(<span className="nav__item" onClick={() => scrollToElement(item)} key={item}><p>{item}</p></span>)
        }
    });

    return (
        <nav className="nav">
            <div className="nav__container">
                {menuItems}
            </div>
        </nav>
    );
}

export default Navigation;