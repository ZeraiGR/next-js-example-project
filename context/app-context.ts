import { MenuItem } from './../interfaces/menu.interface';
import { createContext } from 'react';

interface Icontext {
  menu: MenuItem[];
  firstCategory: number;
}

export const AppContext = createContext({ menu: [], firstCategory: 0 });
