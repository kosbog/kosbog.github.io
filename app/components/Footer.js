import React from 'react';
import { getYear } from '../utils/utils';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper footer__wrapper">
        <div className="footer__info">
          <span className="current-year"></span> Bogdan Kosytskyi
        </div>
      </div>
    </footer>
  )
}

export default Footer;