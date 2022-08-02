import { ProductModel } from '../../interfaces/course.interface';
import { PageModel, TopCategory } from '../../interfaces/page.interface';

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopCategory;
  page: PageModel;
  products: ProductModel[];
}
