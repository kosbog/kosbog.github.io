import React from 'react';

const PortfolioItem = ({ }) => {
  return (
    <div className="portfolio__item">
      
      <div
        className="portfolio__full"></div>
    </div>
  )
}

const Portfolio = () => {

  return (
    <div className="portfolio">
      <div className="wrapper portfolio__wrapper">
        <h2 className="section-header">portfolio</h2>
        <div className="portfolio__container">
          <PortfolioItem />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;