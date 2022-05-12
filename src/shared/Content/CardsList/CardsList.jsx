import React from 'react';
import { Card } from './Card/Card';
import classes from './cardsList.css';

export const CardsList = () => {
  return (
    <ul className={classes.cardsList}>
      <Card />
    </ul>
  );
};