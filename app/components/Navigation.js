import React from 'react';

const Navigation = ({ scrollToElement, api }) => {
    const { menu } = api;
    let menuItems = [
        <a className="nav__item" onClick={() => scrollToElement('home')} key='home'><p>home</p></a>
    ];
    
    menu.forEach(item => {
        if (item !== 'home' && api[item].length) {
            menuItems.push(<a className="nav__item" onClick={() => scrollToElement(item)} key={item}><p>{item}</p></a>)
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