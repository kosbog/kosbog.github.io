import React from 'react';
import { activeLink } from '../utils/utils';

const Navigation = ({ scrollToElement, api }) => {
  const { menu, images } = api;
  const logo = images.find(item => {
    if (item.section === 'logo') {
      return item;
    }
  });

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={logo.url} alt="" />
        </div>
        <div className="nav__menu">
          {menu.map((item, index) => {
            return (
              <a className="nav__item" onClick={() => { scrollToElement(item); activeLink(index) }} key={item}>
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