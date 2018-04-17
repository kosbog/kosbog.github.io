import React from 'react';

const Navigation = ({ scrollToElement, api }) => {
    const { menu, images } = api;
    const logo = images.find(item => {
        if (item.section === 'logo') {
            return item;
        }
    });
    let menuItems = [];    

    menu.forEach(item => {
        if (item !== 'home' && api[item].length) {
            menuItems.push(<a className="nav__item" onClick={() => scrollToElement(item)} key={item}><p>{item}</p></a>)
        }
    });

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo">
                    <img src={logo.url} alt=""/>
                </div>
                <div className="nav__menu">
                    {menuItems}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;