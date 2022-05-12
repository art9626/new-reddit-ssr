import React from 'react';
import classes from './user.css';

export const User = () => {
  return (
    <div className={classes.userLink}>
    <img
      className={classes.avatar}
      src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"
      alt="avatar"
    />
    <a
      href="#user-url"
      className={classes.username}
    >
      Дмитрий Гришин
    </a>
  </div>
  );
};