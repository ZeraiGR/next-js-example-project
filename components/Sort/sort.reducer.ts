import { ProductModel } from '../../interfaces/course.interface';
import { SortEnum } from './Sort.props';

type SortAction = { type: SortEnum.Rating } | { type: SortEnum.Price };

interface SortState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (state: SortState, action: SortAction): SortState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      };

    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };

    default:
      throw new Error('Некорректный тип сортировки');
  }
};
