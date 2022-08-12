import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { MenuItem } from '../interfaces/menu.interface';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';
import { API } from '../api/api';

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Search: NextPage<SearchProps> = ({ menu, firstCategory }): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Htag tag="h1">Поиск по запросу: {router.query.q}</Htag>
    </>
  );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
