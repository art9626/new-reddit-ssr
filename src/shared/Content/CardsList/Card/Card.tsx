import React from 'react';
import classes from './card.css';
import { CardContent } from './CardContent/CardContent';
import { Controls } from './Controls/Controls';
import { Menu } from './Menu/Menu';

export const Card = () => {
  return (
    <li className={classes.card}>
      <CardContent />
      <div className={classes.preview}>
        <img
          className={classes.previewImg}
          src="https://cdn.dribbble.com/users/1037219/screenshots/18137746/media/b0dcf037bfbb169ce2929d24312765dc.png?compress=1&resize=320x240&vertical=top"
          alt="Preview"
        />
      </div>
      <Menu />
      <Controls />
    </li>
  );
};