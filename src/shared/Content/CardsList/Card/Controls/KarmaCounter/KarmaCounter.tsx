import React from 'react';
import classes from './karma-counter.css';

export const KarmaCounter = () => {
  return (
    <div className={classes.karmaCounter}>
      <button className={classes.up}>
        <svg className={classes.up} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
      <span className={classes.karmaValue}>234</span>
      <button className={classes.down}>
        <svg className={classes.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
    </div>
  );
};