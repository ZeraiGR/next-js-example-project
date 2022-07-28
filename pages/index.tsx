import type { NextPage } from 'next';

import { Htag, Button, P, Tag } from '../components';

const Home: NextPage = (): JSX.Element => {
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
    </>
  );
};

export default Home;
