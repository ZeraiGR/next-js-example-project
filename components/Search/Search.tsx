import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import SearchIcon from './icon-search.svg';
import { SearchProps } from './Search.props';
import styles from './Search.module.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = React.useState('');
  const router = useRouter();

  const goToSearch = () => {
    if (!search.length) {
      return;
    }

    setSearch('');

    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const goToSearchWithKeyBoard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event);

    if (event.code === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <label className="sr-only" htmlFor="search">
        Поиск...
      </label>
      <Input
        id="search"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={goToSearchWithKeyBoard}
        type="search"
      />
      <button></button>
      <Button className={styles.btnIcon} appearance="primary" type="button" onClick={goToSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};
