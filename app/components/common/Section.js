import React from 'react';

export const Section = ({ children, className }) => {
  return (
    <section className={className}>
      <div className={`wrapper ${className}__wrapper`}>
        {children}
      </div>
    </section>
  );
}