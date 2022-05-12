import React from 'react';
import classes from './menu.css';

export const Menu = () => {
  return (
    <div className={classes.menu}>
      <button className={classes.menuButton}>
        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
        </svg>
      </button>
    </div>
  );
};