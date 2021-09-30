import React from 'react';
import { activeLink } from '../utils/utils';
import logo from '../assets/images/self/logo.png';


const Navigation = ({ scrollToElement, api }) => {
  const { menu } = api;

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav__menu">
          {menu.map((item, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                className="nav__item"
                onClick={() => {
                  scrollToElement(item);
                  activeLink(index)
                }}
                key={item}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;