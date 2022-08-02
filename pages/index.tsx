import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import axios from 'axios';

import { MenuItem } from '../interfaces/menu.interface';
import { Htag, Button, P, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home: NextPage<HomeProps> = ({ menu, firstCategory }): JSX.Element => {
  const [rating, setRating] = React.useState<number>(3);

  return (
    <>
      <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow="right">
        Узнать подробнее
      </Button>
      <Button appearance="ghost" arrow="down">
        Читать отзывы
      </Button>
      <P size={14}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quas rerum laborum, nostrum
        recusandae tenetur!
      </P>
      <Tag size="small" appearance="ghost">
        Photoshop
      </Tag>
      <Tag size="small" appearance="green">
        -10 000 ₽
      </Tag>
      <Tag size="small" appearance="accent">
        Подготовка макетов
      </Tag>
      <Tag size="big" appearance="red">
        hh.ru
      </Tag>
      <Rating rating={rating} />
      <Input placeholder="Имя" />
      <Textarea placeholder="Имя" />
    </>
  );
};

export default withLayout(Home);

// Вызывается только на сервере! На клиенте в бандл этот код не попадёт!
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
