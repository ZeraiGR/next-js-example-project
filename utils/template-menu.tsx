import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopCategory } from '../interfaces/page.interface';

import CoursesIcon from './icons/icon-graduate.svg';
import ServicesIcon from './icons/icon-services.svg';
import BooksIcon from './icons/icon-books.svg';
import ProductsIcon from './icons/icon-products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { id: TopCategory.Courses, route: 'courses', name: 'Курсы', icon: <CoursesIcon /> },
  { id: TopCategory.Services, route: 'services', name: 'Сервисы', icon: <ServicesIcon /> },
  { id: TopCategory.Books, route: 'books', name: 'Книги', icon: <BooksIcon /> },
  { id: TopCategory.Products, route: 'products', name: 'Товары', icon: <ProductsIcon /> },
];
