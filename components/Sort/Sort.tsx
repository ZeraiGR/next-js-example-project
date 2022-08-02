import React from 'react';
import cn from 'classnames';

import SortIcon from './icon-sort.svg';
import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.scss';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <ul className={styles.sort} {...props}>
      <li>
        <button
          className={cn(styles.btn, { [styles.active]: sort === SortEnum.Rating })}
          type="button"
          onClick={() => setSort(SortEnum.Rating)}>
          <SortIcon />
          <span>По рейтингу</span>
        </button>
      </li>
      <li>
        <button
          className={cn(styles.btn, { [styles.active]: sort === SortEnum.Price })}
          type="button"
          onClick={() => setSort(SortEnum.Price)}>
          <SortIcon />
          По цене
        </button>
      </li>
    </ul>
  );
};
