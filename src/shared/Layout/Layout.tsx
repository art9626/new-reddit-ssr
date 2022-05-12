import React from 'react';
import classes from './layout.css';


export const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.layout}>
      {children}
    </div>
  );
};