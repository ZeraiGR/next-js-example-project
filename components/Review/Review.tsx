import React from 'react';

import { ReviewProps } from './Review.props';
import styles from './Review.module.scss';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import UserIcon from './icon-user.svg';
import { Rating } from '../Rating/Rating';

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const { name, title, description, rating, createdAt } = review;

  return (
    <li className={styles.review} {...props}>
      <UserIcon className={styles.usericon} />
      <div className={styles.author}>
        <strong>{name}:</strong>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <Rating className={styles.rating} rating={rating} />
      <p className={styles.description}>{description}</p>
    </li>
  );
};
