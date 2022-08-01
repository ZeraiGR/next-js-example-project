import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import axios from 'axios';

import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';
import { Htag } from '../../components';
import { firstLevelMenu } from '../../utils/template-menu';

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Type: NextPage<TypeProps> = ({ menu, firstCategory }): JSX.Element => {
  return (
    <div>
      <Htag tag="h1">Type! {firstCategory}</Htag>
    </div>
  );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) {
    return { notFound: true };
  }

  const categoryType = firstLevelMenu.find((item) => item.route === params.type);

  if (!categoryType) {
    return { notFound: true };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: categoryType.id,
      },
    );

    if (!menu.length) {
      return { notFound: true };
    }

    return {
      props: {
        menu,
        firstCategory: categoryType.id,
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};
