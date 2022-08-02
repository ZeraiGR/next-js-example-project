import { MenuItem } from '../interfaces/menu.interface';
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { TopCategory } from '../interfaces/page.interface';

export interface Icontext {
  menu: MenuItem[];
  firstCategory: TopCategory;
  setMenu?: (menu: MenuItem[]) => void;
}

export const AppContext = createContext<Icontext>({ menu: [], firstCategory: TopCategory.Courses });

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<Icontext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (menu: MenuItem[]) => {
    setMenuState(menu);
  };

  useEffect(() => {
    setMenuState(menu);
  }, [menu]);

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
