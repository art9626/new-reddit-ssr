import React from 'react';
import classes from './content.css';

export const Content: React.FC = ({ children }) => {
  return (
    <main className={classes.content}>
      {children}
    </main>
  );
};