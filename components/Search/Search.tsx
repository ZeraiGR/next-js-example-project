import React from 'react';
import cn from 'classnames';

import SearchIcon from './icon-search.svg';
import { SearchProps } from './Search.props';
import styles from './Search.module.scss';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  return (
    <div className={cn(styles.search, className)} {...props}>
      <label className="sr-only" htmlFor="search">
        Поиск...
      </label>
      <input id="search" className={styles.input} type="search" placeholder="Поиск..." />
      <button className={styles.btnIcon} type="submit">
        <SearchIcon />
      </button>
    </div>
  );
};
