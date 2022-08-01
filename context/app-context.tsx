import { MenuItem } from '../interfaces/menu.interface';
import { createContext, PropsWithChildren, useState } from 'react';

export interface Icontext {
  menu: MenuItem[];
  firstCategory: number;
  setMenu?: (menu: MenuItem[]) => void;
}

export const AppContext = createContext<Icontext>({ menu: [], firstCategory: 0 });

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<Icontext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (menu: MenuItem[]) => {
    setMenuState(menu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
