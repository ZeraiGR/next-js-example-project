import type { NextPage } from 'next';
import React from 'react';

import { Htag, Button, P, Tag, Rating } from '../components';

const Home: NextPage = (): JSX.Element => {
  const [rating, setRating] = React.useState(3);

  return (
    <>
      <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow="right">
        Узнать подробнее
      </Button>
      <Button appearance="ghost" arrow="down">
        Читать отзывы
      </Button>
      <P>
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
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
};

export default Home;
