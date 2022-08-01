import React from 'react';
import { AppContext } from '../../context/app-context';

import styles from './Menu.module.scss';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = React.useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
