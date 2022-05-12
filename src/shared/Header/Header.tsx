import React from 'react';
import { hot } from 'react-hot-loader/root';
import classes from './header.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SortBlock } from './SortBlock/SortBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';


const HeaderComponent = () => {
  return (
    <header className={classes.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
};

export default hot(HeaderComponent);

