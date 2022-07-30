import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import axios from 'axios';

import { PageModel } from '../../interfaces/page.interface';
import { CourseModel } from '../../interfaces/course.interface';
import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: PageModel;
  courses: CourseModel[];
}

const firstCategory = 0;

const Course: NextPage<CourseProps> = ({ menu, firstCategory, page, courses }): JSX.Element => {
  return <div>{courses && courses.length}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    },
  );

  return {
    paths: menu.flatMap((item) =>
      item.pages.map((page) => {
        return {
          params: {
            alias: page.alias,
          },
        };
      }),
    ),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) {
    return { notFound: true };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    },
  );

  const { data: page } = await axios.get<PageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
  );

  const { data: courses } = await axios.post<CourseModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
    { category: page.category, limit: 10 },
  );

  return {
    props: {
      menu,
      firstCategory,
      page,
      courses,
    },
  };
};
