import React from 'react';
import cn from 'classnames';

import SortIcon from './icon-sort.svg';
import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.scss';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <>
      <span id="sort" className="sr-only">
        Сортировка:
      </span>
      <ul className={styles.sort} {...props}>
        <li>
          <button
            id="rating"
            className={cn(styles.btn, { [styles.active]: sort === SortEnum.Rating })}
            type="button"
            onClick={() => setSort(SortEnum.Rating)}
            aria-selected={sort === SortEnum.Rating}
            aria-labelledby="sort rating">
            <SortIcon />
            <span>По рейтингу</span>
          </button>
        </li>
        <li>
          <button
            id="price"
            className={cn(styles.btn, { [styles.active]: sort === SortEnum.Price })}
            type="button"
            onClick={() => setSort(SortEnum.Price)}
            aria-selected={sort === SortEnum.Price}
            aria-labelledby="sort price">
            <SortIcon />
            По цене
          </button>
        </li>
      </ul>
    </>
  );
};
