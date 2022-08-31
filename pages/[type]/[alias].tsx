import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import axios from 'axios';

import { firstLevelMenu } from '../../utils/template-menu';
import { PageModel, TopCategory } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/course.interface';
import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';
import { TopPageComponent } from '../../page-components';
import { API } from '../../api/api';
import Head from 'next/head';
import { Error404 } from '../404';

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopCategory;
  page: PageModel;
  products: ProductModel[];
}

const TopPage: NextPage<TopPageProps> = ({ firstCategory, page, products }): JSX.Element => {
  if (!page || !products) return <Error404 />;

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="article" />
      </Head>
      <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
    </>
  );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async ({ params }: GetStaticPropsContext) => {
  let paths: string[] = [];

  for (const menuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: menuItem.id,
    });
    paths = paths.concat(
      menu.flatMap((item) => item.pages.map((page) => `/${menuItem.route}/${page.alias}`)),
    );
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
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
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: categoryType.id,
    });

    if (!menu.length) {
      return { notFound: true };
    }

    const { data: page } = await axios.get<PageModel>(API.topPage.byAlias + params.alias);

    const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
      category: page.category,
      limit: 10,
    });

    return {
      props: {
        menu,
        firstCategory: categoryType.id,
        page,
        products,
      },
    };
  } catch {
    return { notFound: true };
  }
};
