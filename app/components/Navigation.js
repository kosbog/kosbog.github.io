import React, { Component } from 'react';

const Navigation = ({ scrollToElement, api }) => {
    const { menu } = api;
    const menuItems = menu.map((item, index) => {
        return (
            <span className="nav__item" onClick={() => scrollToElement(item)} key={index}><p>{item}</p></span>
        )
    })
    return (
        <nav className="nav">
            <div className="nav__container">
                {menuItems}
            </div>
        </nav>
    );
}

export default Navigation;