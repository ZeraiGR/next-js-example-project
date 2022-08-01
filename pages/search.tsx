import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import axios from 'axios';

import { MenuItem } from '../interfaces/menu.interface';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Search: NextPage<SearchProps> = ({ menu, firstCategory }): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Поиск по сайту</Htag>
    </>
  );
};

export default withLayout(Search);

// Вызывается только на сервере! На клиенте в бандл этот код не попадёт!
export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    },
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
