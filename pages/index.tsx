import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import axios from 'axios';

import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';
import { API } from '../api/api';
interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home: NextPage<HomeProps> = ({ menu, firstCategory }): JSX.Element => {
  return <></>;
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
