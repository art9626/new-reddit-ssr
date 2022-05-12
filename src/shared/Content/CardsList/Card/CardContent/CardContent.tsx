import React from 'react';
import { User } from './User/User';
import classes from './card-content.css'

export const CardContent = () => {
  return (
    <div className={classes.textContent}>
      <div className={classes.metaData}>
        <User />
        <span className={classes.createdAt}>
          <span className={classes.publishedLabel}>опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className={classes.title}>
        <a href="#post-url" className={classes.postLink}>
          Следует отметить, что новая модель организационной деятельности...
        </a>
      </h2>
    </div>
  );
};