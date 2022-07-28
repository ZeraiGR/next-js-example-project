import type { NextPage } from 'next';

import { Htag, Button } from '../components';

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
    </>
  );
};

export default Home;
