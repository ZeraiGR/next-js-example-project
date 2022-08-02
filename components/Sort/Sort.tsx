import React from 'react';
import cn from 'classnames';

import SortIcon from './icon-sort.svg';
import { SortProps } from './Sort.props';
import styles from './Sort.module.scss';

export const Sort = ({ className, ...props }: SortProps): JSX.Element => {
  return (
    <ul className={styles.sort} {...props}>
      <li>
        <button className={styles.btn} type="button">
          <SortIcon />
          <span>По рейтингу</span>
        </button>
      </li>
      <li>
        <button type="button">По цене</button>
      </li>
    </ul>
  );
};
